/* Dependency-free test harness (plain Node, no packages).
   Run: node tests/run-tests.js
   Covers: legacy→mx2_status migration, the two completion metrics,
   evidence-gated maturity capping, code/content separation, and the
   archived Command Center reconciliation. */
'use strict';
var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..');

/* ---- minimal browser globals so the data files + app.js load in Node ---- */
global.window = {};
(function(){
  var store = {};
  global.localStorage = {
    getItem: function(k){ return Object.prototype.hasOwnProperty.call(store,k) ? store[k] : null; },
    setItem: function(k,v){ store[k] = String(v); },
    removeItem: function(k){ delete store[k]; },
    clear: function(){ store = {}; }
  };
})();
global.document = {
  readyState: 'loading',            // keeps app.js boot() from firing on require
  addEventListener: function(){},
  getElementById: function(){ return null; },
  querySelector: function(){ return null; },
  querySelectorAll: function(){ return []; }
};

/* load Fable content namespaces, then the code layer */
['build','shared','sales','marketing','readiness','infra','org','ava','archive-command-center']
  .forEach(function(f){ require(path.join(ROOT,'data',f+'.js')); });
var app = require(path.join(ROOT,'app.js'));
var MX = global.window.MX;

/* ---- tiny assert harness ---- */
var pass=0, fail=0, failures=[];
function ok(name, cond){ if(cond){ pass++; console.log('  ✓ '+name); } else { fail++; failures.push(name); console.log('  ✗ '+name); } }
function eq(name, a, b){ ok(name+' ('+a+' === '+b+')', a===b); }
function group(t){ console.log('\n'+t); }

/* ============================ 1. MIGRATION ============================ */
group('Migration: mxbuild4/3/2 → mx2_status (idempotent, non-destructive)');
localStorage.clear();
localStorage.setItem('mxbuild2', JSON.stringify({ c1:'done', shared:'next' }));
localStorage.setItem('mxbuild4', JSON.stringify({ c1:'blocked' }));   // mxbuild4 wins on conflict
localStorage.setItem('mxava_profile', JSON.stringify({ raw:'PRIVATE — must survive' }));
var m1 = app.migrateStatus();
eq('mxbuild4 wins conflicting key', m1.c1, 'blocked');
eq('non-conflicting legacy key carried over', m1.shared, 'next');
ok('mx2_status persisted', !!localStorage.getItem('mx2_status'));
ok('legacy mxbuild4 left in place (non-destructive)', localStorage.getItem('mxbuild4')!==null);
ok('legacy mxbuild2 left in place (non-destructive)', localStorage.getItem('mxbuild2')!==null);
ok('mxava_* private key untouched', /PRIVATE/.test(localStorage.getItem('mxava_profile')));
var before = localStorage.getItem('mx2_status');
var m2 = app.migrateStatus();                                          // second call = no-op
ok('idempotent: second run does not change mx2_status', localStorage.getItem('mx2_status')===before);
eq('idempotent: returns same override', m2.c1, 'blocked');

/* fresh migration with no legacy data yields empty object, still writes flag */
localStorage.clear();
var m3 = app.migrateStatus();
eq('no legacy data → empty overrides', Object.keys(m3).length, 0);
ok('migration flag recorded', !!localStorage.getItem('mx2_migrated'));

/* ============================ 2. METRICS ============================ */
group('Metric A: Active Build Completion (authorized lanes, weighted)');
localStorage.clear();                                                  // compute against content defaults
var b = app.computeBuild();
eq('authorized-lane item count', b.total, 46);
eq('weighted completion %', b.pct, 49);
ok('per-lane breakdown present', Array.isArray(b.lanes) && b.lanes.length===7);
ok('done count is sane', b.done>0 && b.done<=b.total);

group('Metric B: Matrix Company Readiness (10 domains × 4 gates)');
var r = app.computeReadiness();
eq('domain count', r.rows.length, 10);
eq('company readiness %', r.pct, 40);
ok('equal weighting disclosed', r.weighting==='equal');
r.rows.forEach(function(row){
  ok(row.name+': exactly 4 gates', (row.gates||[]).length===4);
});
/* spot-check a known domain: Pharmacy = 0/4 = 0% */
var pharmacy = r.rows.filter(function(x){ return /Pharmacy/.test(x.name); })[0];
eq('Pharmacy domain 0/4', pharmacy.pct, 0);

group('Metrics stay separate (never merged)');
ok('build % and readiness % are distinct measures', b.pct!==r.pct);

/* ============================ 3. EVIDENCE-GATED MATURITY ============================ */
group('capMaturity(): displayed level may never exceed evidenceClass');
var capped = app.capMaturity({ maturity:'L5', evidenceClass:'spec' }); // spec only supports L1
eq('L5 claim + spec evidence → capped to L1', capped.level, 'L1');
var honest = app.capMaturity({ maturity:'L3', evidenceClass:'merged-engine-tests' });
eq('L3 claim + engine-tests evidence → stays L3', honest.level, 'L3');
/* every seeded capability must already respect its own evidence cap */
(MX.ava.capabilities||[]).forEach(function(c){
  var lvl = app.capMaturity(c);
  ok(c.id+': declared '+c.maturity+' not above evidence cap '+lvl.level, lvl.level===c.maturity);
});

/* ============================ 4. CODE / CONTENT SEPARATION ============================ */
group('Code/content separation: no seeded canonical content in code files');
var appSrc = fs.readFileSync(path.join(ROOT,'app.js'),'utf8');
var htmlSrc = fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
var contentTokens = ['Retatrutide','retatrutide','mie-registry','Bio-Age dossier','Reta case','aud-warm','Question-under-the-question'];
contentTokens.forEach(function(tok){
  ok('app.js free of content token "'+tok+'"', appSrc.indexOf(tok)===-1);
});
ok('index.html has no inline lane DATA array', htmlSrc.indexOf('const DATA')===-1 && htmlSrc.indexOf('maturityModel')===-1);
ok('index.html loads content via data/*.js scripts', /src="data\/build\.js"/.test(htmlSrc));
ok('app.js reads from window.MX namespace', /window\.MX/.test(appSrc));

/* ============================ 5. EXPORT SAFETY ============================ */
group('Export excludes private Ava data + secrets');
ok('app.js EXPORT_KEYS are mx2_* only', /EXPORT_KEYS\s*=\s*\[K\.status, K\.outcomes, K\.pipeline, K\.board, K\.deliverables\]/.test(appSrc));
ok('export never enumerates mxava_* keys', appSrc.indexOf("EXPORT_KEYS.push('mxava")===-1);
ok('export payload carries a schemaVersion', /schemaVersion:\s*SCHEMA_VERSION/.test(appSrc));
ok('import validates schemaVersion before applying', /parsed\.schemaVersion!==SCHEMA_VERSION/.test(appSrc));

/* ============================ 6. ARCHIVE RECONCILIATION ============================ */
group('Command Center archived (not deleted), content preserved verbatim');
ok('archive namespace exists', !!MX.archive);
ok('archive is clearly labeled legacy', /ARCHIVED/.test(MX.archive.label||''));
eq('all 10 Command Center views preserved', (MX.archive.views||[]).length, 10);
(MX.archive.views||[]).forEach(function(v){
  ok('archived view "'+v.t+'" keeps purpose + surfaces', !!v.purpose && Array.isArray(v.surf) && v.surf.length>0);
});
ok('Command Center removed from primary nav', htmlSrc.indexOf('data-tab="cc"')===-1);
ok('exactly six primary tabs in nav', (htmlSrc.match(/role="tab"/g)||[]).length===6);

/* ============================ summary ============================ */
console.log('\n──────────────────────────────');
console.log('PASS '+pass+'  FAIL '+fail);
if(fail){ console.log('Failures:\n - '+failures.join('\n - ')); process.exit(1); }
console.log('All tests passed.');
