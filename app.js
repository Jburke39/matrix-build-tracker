/* Matrix Founder Build Command — application layer (CODE-OWNED).
   Renders every tab from the window.MX.* namespaces (Fable-owned content in
   /data/*.js), owns mx2_* persistence, the one-time mxbuild→mx2_status migration,
   the two separate completion metrics, JSON export/import, and the flag-gated
   Ava launcher. No canonical strategy/content is authored here. */
(function(){
'use strict';

var MX = window.MX || {};
var BUILD = MX.build || {};
var SHARED = MX.shared || {};

/* ============================ persistence (mx2_*) ============================
   Versioned keys, all prefixed mx2_. Existing mxava_* keys are never touched
   here. Real prospect/client/health data is never written by this app. */
var SCHEMA_VERSION = 'mx2.1';
var K = {
  status:      'mx2_status',      // build lane status overrides {id:status}
  outcomes:    'mx2_outcomes',    // hand-entered outcome numbers
  pipeline:    'mx2_pipeline',    // local-only real pipeline (never exported to repo)
  board:       'mx2_board',       // marketing content board state
  deliverables:'mx2_deliverables',// D4 deliverable field selections
  migrated:    'mx2_migrated'     // idempotency flag for the legacy migration
};
/* Keys that are safe to export (NO mxava_* private data, no secrets). */
var EXPORT_KEYS = [K.status, K.outcomes, K.pipeline, K.board, K.deliverables];

function readJSON(k){ try{ var v=localStorage.getItem(k); return v==null?null:JSON.parse(v); }catch(e){ return null; } }
function writeJSON(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); return true; }catch(e){ return false; } }

/* One-time, idempotent, NON-destructive migration.
   Scans legacy keys mxbuild2/3/4 (mxbuild4 wins on conflict) into mx2_status.
   Runs only until mx2_status exists; legacy keys and mxava_* are left in place. */
function migrateStatus(){
  var cur = readJSON(K.status);
  if(cur && typeof cur==='object') return cur;          // already migrated → idempotent
  var merged = {};
  ['mxbuild2','mxbuild3','mxbuild4'].forEach(function(lk){ // low→high priority
    var v = readJSON(lk);
    if(v && typeof v==='object') Object.keys(v).forEach(function(id){ merged[id]=v[id]; });
  });
  writeJSON(K.status, merged);
  writeJSON(K.migrated, { at:Date.now(), from:['mxbuild4','mxbuild3','mxbuild2'], version:SCHEMA_VERSION });
  return merged;
}

/* ============================ small helpers ============================ */
function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
function el(id){ return document.getElementById(id); }
function decisionById(id){ return (SHARED.decisionQueue||[]).find(function(d){return d.id===id;}); }
function audienceById(id){ return (SHARED.audiences||[]).find(function(a){return a.id===id;}); }
function offerById(id){ return (SHARED.offers||[]).find(function(o){return o.id===id;}); }
function outcomeById(id){ return (SHARED.conversionOutcomes||[]).find(function(o){return o.id===id;}); }

/* Status vocab for the build lanes (from Fable content, with safe fallbacks). */
var CYCLE  = BUILD.cycleOrder   || ['backlog','next','progress','blocked','done'];
var WEIGHT = BUILD.statusWeights|| {done:1,progress:.5,blocked:.25,next:0,backlog:0};
var SLBLB  = BUILD.statusLabels || {done:'Done',progress:'In Progress',blocked:'Blocked',next:'Next',backlog:'Backlog'};
var PILLCLS= {done:'p-done',progress:'p-progress',blocked:'p-blocked',next:'p-next',backlog:'p-backlog'};

/* live lane state = content default overlaid with mx2_status overrides */
var statusOverrides = migrateStatus();
function laneStatus(item){ return statusOverrides[item.id] || item.s; }

/* ============================ shared drawer + a11y ============================ */
var MAP_LBL = {built:"Built / Merged",progress:"In Progress",spec:"Spec'd, not built",planned:"Planned / Not started"};
var lastFocus = null;
function openDrawerHTML(html){
  el('drawerbody').innerHTML = html;
  lastFocus = document.activeElement;
  el('drawer').classList.add('open');
  el('scrim').classList.add('open');
  el('drawer').focus();
}
window.closeDrawer = function(){
  el('drawer').classList.remove('open');
  el('scrim').classList.remove('open');
  if(lastFocus && lastFocus.focus) lastFocus.focus();
};
/* map-node drawer (infra/org share the {t,s,what,gov,deps,note} shape) */
function openNodeDrawer(o){
  openDrawerHTML(
    '<div class="dtitle" id="drawertitle">'+esc(o.t)+'</div>'+
    '<div class="drow"><div class="dlabel">Status</div><div class="dval"><span class="badge bg-'+esc(o.s)+'">'+esc(MAP_LBL[o.s]||o.s)+'</span></div></div>'+
    '<div class="drow"><div class="dlabel">What it is</div><div class="dval dim">'+esc(o.what||'—')+'</div></div>'+
    (o.gov?'<div class="drow"><div class="dlabel">Governed by / evidence</div><div class="dval dim">'+esc(o.gov)+'</div></div>':'')+
    (o.deps?'<div class="drow"><div class="dlabel">Depends on</div><div class="dval dim">'+esc(o.deps)+'</div></div>':'')+
    ((o.limitation)?'<div class="drow"><div class="dlabel">Limitation</div><div class="dval dim">'+esc(o.limitation)+'</div></div>':'')+
    ((o.milestone)?'<div class="drow"><div class="dlabel">Next milestone</div><div class="dval dim">'+esc(o.milestone)+'</div></div>':'')+
    (o.note?'<div class="drow"><div class="dlabel">Note</div><div class="dval dim">'+esc(o.note)+'</div></div>':'')
  );
}
function nodeEl(o){
  var d=document.createElement('button');
  d.type='button';
  d.className='node b-'+o.s;
  d.setAttribute('aria-label', (MAP_LBL[o.s]||o.s)+': '+o.t);
  d.innerHTML='<span class="st d-'+o.s+'"></span><div class="nt">'+esc(o.t)+'</div>'+(o.nd?'<div class="nd">'+esc(o.nd)+'</div>':'');
  d.onclick=function(){ openNodeDrawer(o); };
  return d;
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ window.closeDrawer(); closeChat(); } });

/* ============================ tabs ============================ */
var currentTab = 'build';
var tabIds = ['build','infra','org','ava','sales','marketing','v2'];
function activateTab(name){
  currentTab = name;
  document.querySelectorAll('.tab').forEach(function(t){
    var on = t.dataset.tab===name;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on?'true':'false');
    t.tabIndex = on?0:-1;
  });
  document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
  var view = el('view-'+name); view.classList.add('active');
  var isMap = (name==='infra'||name==='org');
  el('maplegend').style.display = isMap ? 'flex' : 'none';
  el('maplegend').setAttribute('aria-hidden', isMap?'false':'true');
  if(launcherOn) updateChatContext();
}
function initTabs(){
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  tabs.forEach(function(t){
    t.addEventListener('click', function(){ activateTab(t.dataset.tab); });
    t.addEventListener('keydown', function(e){
      var i = tabIds.indexOf(t.dataset.tab);
      if(e.key==='ArrowRight'||e.key==='ArrowDown'){ e.preventDefault(); var n=tabs[(i+1)%tabs.length]; n.focus(); activateTab(n.dataset.tab); }
      else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){ e.preventDefault(); var p=tabs[(i-1+tabs.length)%tabs.length]; p.focus(); activateTab(p.dataset.tab); }
      else if(e.key==='Home'){ e.preventDefault(); tabs[0].focus(); activateTab(tabs[0].dataset.tab); }
      else if(e.key==='End'){ e.preventDefault(); tabs[tabs.length-1].focus(); activateTab(tabs[tabs.length-1].dataset.tab); }
    });
  });
}

/* ============================ METRIC A — Active Build Completion ============================
   Authorized build lanes only. Weighted: done 1 / progress .5 / blocked .25 / next 0 / backlog 0. */
function computeBuild(){
  var lanes = (BUILD.lanes||[]).filter(function(l){ return (BUILD.authorizedLanes||[]).indexOf(l.laneId)!==-1; });
  var total=0, score=0, doneCt=0, laneStats=[];
  lanes.forEach(function(l){
    var t=0,s=0;
    (l.items||[]).forEach(function(it){ var st=laneStatus(it); t++; s+=(WEIGHT[st]||0); if(st==='done') doneCt++; });
    total+=t; score+=s;
    laneStats.push({ name:l.lane.split(' — ')[0], pct: t? Math.round(100*s/t):0 });
  });
  return { pct: total? Math.round(100*score/total):0, total:total, done:doneCt, lanes:laneStats };
}
/* ============================ METRIC B — Matrix Company Readiness ============================
   10 domains × 4 named pass/fail gates. domain% = passed/4. Company = weighted mean. */
function computeReadiness(){
  var R = MX.readiness || {}; var domains = R.domains||[];
  var wsum=0, acc=0, rows=[];
  domains.forEach(function(d){
    var passed=(d.gates||[]).filter(function(g){return g.pass===true;}).length;
    var pct = Math.round(100*passed/4);
    var w = (typeof d.weight==='number')?d.weight:1;
    wsum+=w; acc+=w*pct;
    rows.push({ id:d.id, name:d.name, passed:passed, pct:pct, gates:d.gates||[], weight:w });
  });
  return { pct: wsum? Math.round(acc/wsum):0, rows:rows, weighting:R.weightingModel||'equal', reviewed:R.reviewedPlaceholder||'' };
}

function renderMetrics(){
  var b = computeBuild(), r = computeReadiness();
  el('metrics').innerHTML =
    '<div class="metric">'+
      '<div class="mlabel"><span>Active Build Completion</span>'+
        '<button class="disclose" type="button" onclick="discloseBuild()" aria-label="How Active Build Completion is calculated">How is this calculated?</button></div>'+
      '<div class="mpct">'+b.pct+'%<small>'+b.done+' of '+b.total+' done · authorized lanes</small></div>'+
      '<div class="msub">Weighted across the authorized build lanes only. Not a company-readiness figure.</div>'+
      '<div class="bar"><i style="width:'+b.pct+'%"></i></div>'+
    '</div>'+
    '<div class="metric">'+
      '<div class="mlabel"><span>Matrix Company Readiness</span>'+
        '<button class="disclose" type="button" onclick="discloseReadiness()" aria-label="How Company Readiness is calculated">How is this calculated?</button></div>'+
      '<div class="mpct">'+r.pct+'%<small>10 domains · '+esc(r.weighting)+' weighting</small></div>'+
      '<div class="msub">Pass/fail gates across the whole company. This number is expected to read low — that is correct.</div>'+
      '<div class="bar"><i style="width:'+r.pct+'%"></i></div>'+
    '</div>';
}
window.discloseBuild = function(){
  var b = computeBuild();
  openDrawerHTML(
    '<div class="dtitle" id="drawertitle">Active Build Completion — how it works</div>'+
    '<div class="formula">completion = Σ weight(status) ÷ item count, across authorized build lanes only.<br>Weights: done 1 · in&nbsp;progress 0.5 · blocked 0.25 · next 0 · backlog 0.</div>'+
    '<div class="drow"><div class="dlabel">Scope</div><div class="dval dim">Authorized lanes: '+esc((BUILD.authorizedLanes||[]).join(', '))+'</div></div>'+
    '<div class="drow"><div class="dlabel">Now</div><div class="dval">'+b.pct+'% · '+b.done+' of '+b.total+' workstreams done</div></div>'+
    b.lanes.map(function(x){ return '<div class="dom-row"><div class="dn">'+esc(x.name)+'</div><div class="db"><i style="width:'+x.pct+'%"></i></div><div class="dp">'+x.pct+'%</div></div>'; }).join('')+
    '<div class="drow"><div class="dlabel">Note</div><div class="dval dim">This measures build progress in the war-room lanes. It is deliberately separate from Company Readiness.</div></div>'
  );
};
window.discloseReadiness = function(){
  var r = computeReadiness();
  var body = '<div class="dtitle" id="drawertitle">Matrix Company Readiness — how it works</div>'+
    '<div class="formula">domain readiness = gates passed ÷ 4 (no partial credit).<br>company readiness = '+esc(r.weighting)+' weighted mean of the 10 domains.</div>'+
    '<div class="drow"><div class="dlabel">Now</div><div class="dval">'+r.pct+'% company readiness · gates last reviewed '+esc(r.reviewed)+'</div></div>';
  r.rows.forEach(function(row){
    body += '<div class="dom-row"><div class="dn">'+esc(row.name)+' <span style="color:var(--faint)">'+row.passed+'/4</span></div><div class="db"><i style="width:'+row.pct+'%"></i></div><div class="dp">'+row.pct+'%</div></div>';
    row.gates.forEach(function(g){
      body += '<div class="gate '+(g.pass?'pass':'fail')+'"><span class="gi">'+(g.pass?'✓':'✗')+'</span><div class="gtext">'+esc(g.name)+'<div class="ge">'+esc(g.evidence)+(g.notes?' — '+esc(g.notes):'')+'</div></div></div>';
    });
  });
  openDrawerHTML(body);
};

/* ============================ BUILD COMMAND lanes + Needs-Jack ============================ */
function renderBuild(){
  renderMetrics();
  var needs=[];
  (BUILD.lanes||[]).forEach(function(l){ (l.items||[]).forEach(function(it){ if(it.jack) needs.push({jack:it.jack,t:it.t,s:laneStatus(it)}); }); });
  el('needslist').innerHTML = needs.map(function(it){
    return '<li class="'+(it.s==='done'?'done-item':'')+'"><span class="tag">'+(it.s==='done'?'CLEARED':'ACTION')+'</span><span>'+esc(it.jack)+' <span style="color:var(--faint)">· '+esc(it.t)+'</span></span></li>';
  }).join('');
  el('lanes').innerHTML = (BUILD.lanes||[]).map(function(l){
    return '<div class="lane"><div class="lane-head"><h2>'+esc(l.lane)+'</h2><div class="own">'+esc(l.owner)+'</div></div>'+
      '<div class="items">'+(l.items||[]).map(function(it){
        var st=laneStatus(it);
        return '<div class="item st-'+st+'">'+
          '<div class="row"><div class="t">'+esc(it.t)+'</div>'+
          '<button type="button" class="pill '+PILLCLS[st]+'" onclick="cycleStatus(\''+it.id+'\')" aria-label="Status '+esc(SLBLB[st])+', click to cycle">'+esc(SLBLB[st])+'</button></div>'+
          '<div class="n">'+esc(it.n)+'</div>'+
          (it.jack?'<div class="jack">◆ NEEDS JACK — '+esc(it.jack)+'</div>':'')+
        '</div>';
      }).join('')+'</div></div>';
  }).join('');
}
window.cycleStatus = function(id){
  var cur=null;
  (BUILD.lanes||[]).forEach(function(l){ (l.items||[]).forEach(function(it){ if(it.id===id) cur=laneStatus(it); }); });
  if(cur==null) return;
  var next = CYCLE[(CYCLE.indexOf(cur)+1)%CYCLE.length];
  statusOverrides[id]=next; writeJSON(K.status, statusOverrides);
  renderBuild();
  if(launcherOn) updateChatContext();
};
window.resetStatuses = function(){
  if(confirm("Reset Build Command statuses to Fable's compiled state? (Clears local overrides only.)")){
    statusOverrides={}; writeJSON(K.status, statusOverrides); renderBuild();
  }
};

/* ============================ INFRASTRUCTURE MAP ============================ */
function renderInfra(){
  var m=el('inframount'); m.innerHTML='';
  (MX.infra&&MX.infra.sections||[]).forEach(function(sec){
    var s=document.createElement('div'); s.className='section';
    s.innerHTML='<h2>'+esc(sec.h)+'<span class="cap">'+esc(sec.cap||'')+'</span></h2>';
    var g=document.createElement('div'); g.className='grid '+(sec.cols||'g3');
    (sec.items||[]).forEach(function(o){ g.appendChild(nodeEl(o)); });
    s.appendChild(g); m.appendChild(s);
  });
}

/* ============================ AGENT ORG CHART (dual view) ============================ */
var orgView='all';
function nodeInSequence(o){ return o.activeSequence===true || (o.s && o.s!=='planned'); }
function orgNode(o, isLead){
  if(orgView==='active' && !nodeInSequence(o)) return null;
  var n=nodeEl(o); if(isLead) n.classList.add('lead'); return n;
}
function renderOrg(){
  var ORG=MX.org||{}; var m=el('orgmount'); m.innerHTML='';
  var top=document.createElement('div'); top.className='org-top';
  var g=document.createElement('div'); g.className='grid'; g.style.maxWidth='420px'; g.style.margin='0 auto'; g.style.width='100%';
  (ORG.top||[]).forEach(function(o){ var n=orgNode(o,true); if(n) g.appendChild(n); });
  top.appendChild(g); m.appendChild(top);
  m.insertAdjacentHTML('beforeend','<div class="flowarrow">&#8595; domain agents report to Ava-CEO</div>');
  var cols=document.createElement('div'); cols.className='org-cols';
  (ORG.cols||[]).forEach(function(col){
    var c=document.createElement('div'); c.className='org-col';
    c.innerHTML='<h3>'+esc(col.h)+'</h3>';
    var any=false;
    (col.items||[]).forEach(function(o,i){ var n=orgNode(o,i===0); if(n){ c.appendChild(n); any=true; } });
    if(any) cols.appendChild(c);
  });
  m.appendChild(cols);
  var X=ORG.xdomain;
  if(X){
    var sx=document.createElement('div'); sx.className='section'; sx.style.marginTop='22px';
    sx.innerHTML='<h2>'+esc(X.h)+'<span class="cap">horizontal</span></h2>';
    var gx=document.createElement('div'); gx.className='grid g3'; var anyX=false;
    (X.items||[]).forEach(function(o){ var n=orgNode(o,false); if(n){ gx.appendChild(n); anyX=true; } });
    sx.appendChild(gx); if(anyX) m.appendChild(sx);
  }
}
window.setOrgView=function(v){
  orgView=v;
  document.querySelectorAll('#orgtoggle button').forEach(function(b){ b.classList.toggle('on', b.dataset.view===v); });
  renderOrg();
};

/* ============================ AVA INTELLIGENCE (evidence-gated maturity) ============================ */
/* capMaturity: a capability's displayed level may never exceed what its
   evidenceClass supports. Returns the capped maturity model entry. */
function capMaturity(cap){
  var A=MX.ava||{}; var model=A.maturityModel||[]; var rankByLevel={};
  model.forEach(function(m){ rankByLevel[m.level]=m.rank; });
  var declaredRank = rankByLevel[cap.maturity] || 1;
  var evidenceRank = (A.evidenceRank&&A.evidenceRank[cap.evidenceClass]) || 1;
  var cappedRank = Math.min(declaredRank, evidenceRank);
  return model.filter(function(m){ return m.rank===cappedRank; })[0] || model[0];
}
function renderAva(){
  var A=MX.ava||{}; var m=el('avamount'); m.innerHTML='';
  /* maturity legend */
  var legend='<div class="card"><h3>Evidence-gated maturity model</h3><div class="deco-list-wrap">';
  legend+='<ul class="deco-list">'+(A.maturityModel||[]).map(function(x){
    return '<li><b>'+esc(x.level)+' · '+esc(x.name)+'</b> — '+esc(x.desc)+' <span style="color:var(--faint)">(evidence: '+esc(x.evidenceClass)+')</span></li>';
  }).join('')+'</ul></div></div>';
  m.innerHTML=legend;
  /* capabilities grouped by domain */
  (A.domains||[]).forEach(function(dom){
    var caps=(A.capabilities||[]).filter(function(c){ return c.domain===dom; });
    if(!caps.length) return;
    m.insertAdjacentHTML('beforeend','<div class="domain-head">'+esc(dom)+'</div>');
    var grid=document.createElement('div'); grid.className='cap-grid';
    caps.forEach(function(cap){
      var lvl=capMaturity(cap);
      var card=document.createElement('button'); card.type='button'; card.className='cap-card';
      card.setAttribute('aria-label', cap.name+', maturity '+lvl.level+', status '+cap.status);
      card.innerHTML='<div class="ch"><span class="cn">'+esc(cap.name)+'</span><span class="mat '+esc(lvl.level)+'">'+esc(lvl.level)+' '+esc(lvl.name)+'</span></div>'+
        '<div class="cmeta">'+esc(cap.status)+' · evidence: '+esc(cap.evidenceClass)+'</div>';
      card.onclick=function(){ openAvaDrawer(cap, lvl); };
      grid.appendChild(card);
    });
    m.appendChild(grid);
  });
  /* scenarios */
  if((A.scenarios||[]).length){
    var sc='<div class="card"><h3>Representative scenarios</h3>';
    A.scenarios.forEach(function(s){
      var cls = s.label==='Simulated'?'provisional':'internal';
      sc+='<div class="claimrow"><div class="cl-name"><b>'+esc(s.title)+'</b><div style="color:var(--faint);font-size:11.5px">'+esc(s.domain)+' — '+esc(s.note)+'</div></div><div class="cl-stat"><span class="chip '+cls+'">'+esc(s.label)+'</span></div></div>';
    });
    sc+='</div>';
    m.insertAdjacentHTML('beforeend', sc);
  }
}
function openAvaDrawer(cap, lvl){
  openDrawerHTML(
    '<div class="dtitle" id="drawertitle">'+esc(cap.name)+'</div>'+
    '<div class="drow"><div class="dlabel">Domain</div><div class="dval">'+esc(cap.domain)+'</div></div>'+
    '<div class="drow"><div class="dlabel">Maturity (capped by evidence)</div><div class="dval"><span class="mat '+esc(lvl.level)+'">'+esc(lvl.level)+' '+esc(lvl.name)+'</span> · declared '+esc(cap.maturity)+' · evidence '+esc(cap.evidenceClass)+'</div></div>'+
    '<div class="drow"><div class="dlabel">Status</div><div class="dval">'+esc(cap.status)+'</div></div>'+
    '<div class="drow"><div class="dlabel">Understands</div><div class="dval dim">'+esc(cap.understands)+'</div></div>'+
    '<div class="drow"><div class="dlabel">Actions</div><div class="dval dim">'+esc(cap.actions)+'</div></div>'+
    '<div class="drow"><div class="dlabel">Reliability</div><div class="dval dim">'+esc(cap.reliability)+'</div></div>'+
    (cap.dataSources?'<div class="drow"><div class="dlabel">Data sources</div><div class="dval dim">'+esc((cap.dataSources||[]).join(', '))+'</div></div>':'')+
    (cap.evidence?'<div class="drow"><div class="dlabel">Evidence</div><div class="dval dim">'+esc((cap.evidence||[]).join(', '))+'</div></div>':'')+
    '<div class="drow"><div class="dlabel">Limitations</div><div class="dval dim">'+esc(cap.limitations)+'</div></div>'+
    '<div class="drow"><div class="dlabel">Next milestone</div><div class="dval dim">'+esc(cap.nextMilestone)+'</div></div>'
  );
}

/* ============================ chips for decisions/claims ============================ */
function decisionChip(d){
  var cls = d.status==='Confirmed'?'confirmed' : d.status==='Provisional'?'provisional' : 'jack';
  return '<span class="chip '+cls+'">'+esc(d.chip||d.status)+'</span>';
}
function claimChip(status){
  var cls = /Do not publish/i.test(status)?'dnp' :
            /Internal only/i.test(status)?'internal' :
            /Founder approved|Counsel reviewed|Clinically substantiated/i.test(status)?'confirmed' : 'jack';
  return '<span class="chip '+cls+'">'+esc(status)+'</span>';
}

/* ============================ SALES ============================ */
function renderSales(){
  var S=MX.sales||{}; var m=el('salesmount'); var h='';
  /* Sellable now */
  (S.sellableNow||[]).forEach(function(sn){
    var offer=offerById(sn.offerRef)||{};
    h+='<div class="card"><h3>Sellable Now <span class="chip provisional">'+esc(offer.state||'sellableNow')+'</span></h3>';
    h+='<div style="color:var(--dim);font-size:12.5px;margin-bottom:8px">'+esc(offer.summary||'')+'</div>';
    (sn.facts||[]).forEach(function(f){
      var d=decisionById(f.valueRef)||{};
      var val = d.value || (d.fields?'(structured — see Decisions)':'') || d.status || '—';
      h+='<div class="kv"><span class="k">'+esc(f.label)+'</span><span class="v">'+esc(val)+' '+decisionChip(d)+'</span></div>';
    });
    h+='</div>';
  });
  /* Coming soon (D9) */
  var d9=decisionById(S.comingSoonRef);
  if(d9){
    h+='<div class="card"><h3>Coming Soon <span class="chip confirmed">'+esc(d9.chip||'')+'</span></h3><ul class="deco-list">'+
      (d9.items||[]).map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  }
  /* ICPs */
  h+='<div class="card"><h3>Ideal Client Profiles</h3>';
  (S.icps||[]).forEach(function(icp){
    var a=audienceById(icp.audienceRef)||{};
    h+='<div class="kv"><span class="k"><b>'+esc(a.priority||'')+'. '+esc(a.name||icp.audienceRef)+'</b><div style="color:var(--faint);font-size:11px">'+esc(a.detail||'')+'</div></span><span class="v stub">'+esc(icp.note||'')+'</span></div>';
  });
  h+='</div>';
  /* Strategy */
  if(S.strategy){
    h+='<div class="card"><h3>Sales Strategy</h3><ol class="deco-list">'+
      (S.strategy.ranked||[]).map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ol>'+
      (S.strategy.stub?'<div class="stub">'+esc(S.strategy.note)+'</div>':'')+'</div>';
  }
  /* Process */
  if(S.process){
    h+='<div class="card"><h3>Sales Process</h3><div class="proc">'+
      S.process.map(function(step,i){ return (i?'<span class="arr">→</span>':'')+'<span class="step">'+esc(step)+'</span>'; }).join('')+'</div></div>';
  }
  /* Pipeline (EXAMPLE rows only) */
  h+='<div class="card"><h3>Active Opportunities <span class="chip jack">Examples only — real pipeline stays browser-local</span></h3>';
  h+='<div class="tablewrap"><table class="pipe"><thead><tr>'+
     ['','Name','Source','ICP','Interest','Stage','Objection','Next action','Owner'].map(function(c){return '<th>'+esc(c)+'</th>';}).join('')+
     '</tr></thead><tbody>';
  (S.examples||[]).forEach(function(r){
    var a=audienceById(r.icp)||{};
    h+='<tr class="example"><td><span class="tag-example">EXAMPLE</span></td><td>'+esc(r.name)+'</td><td>'+esc(r.source)+'</td><td>'+esc(a.name||r.icp)+'</td><td>'+esc(r.interest)+'</td><td>'+esc(r.stage)+'</td><td>'+esc(r.objection)+'</td><td>'+esc(r.nextAction)+'</td><td>'+esc(r.owner)+'</td></tr>';
  });
  h+='</tbody></table></div>';
  h+='<div class="stub" style="margin-top:8px">'+esc((S.exampleRules&&('Rows labeled '+S.exampleRules.labeled+', excluded from outcomes, and removable.'))||'')+'</div></div>';
  /* Playbook */
  if(S.playbook&&S.playbook.stub){ h+='<div class="card"><h3>Conversation Playbook</h3><div class="stub">'+esc(S.playbook.note)+'</div></div>'; }
  /* Outcomes */
  h+='<div class="card"><h3>Sales Outcomes <span style="color:var(--faint);font-size:10px">definitions only — numbers stay local</span></h3><ul class="deco-list">'+
    (S.outcomesRef||[]).map(function(id){ var o=outcomeById(id)||{}; return '<li>'+esc(o.name||id)+'</li>'; }).join('')+'</ul></div>';
  /* Decisions */
  h+=renderDecisions(S.decisionsRef||[], 'Decisions Requiring Jack');
  m.innerHTML=h;
}

/* ============================ MARKETING ============================ */
function renderMarketing(){
  var MK=MX.marketing||{}; var m=el('marketingmount'); var h='';
  if(MK.positioning){ h+='<div class="card"><h3>Positioning</h3><div class="stub">'+esc(MK.positioning.note||'')+'</div></div>'; }
  /* Audience (shared) */
  h+='<div class="card"><h3>Audience</h3>';
  (SHARED.audiences||[]).forEach(function(a){
    h+='<div class="kv"><span class="k"><b>'+esc(a.priority)+'. '+esc(a.name)+'</b></span><span class="v" style="color:var(--faint);max-width:60%">'+esc(a.detail)+'</span></div>';
  });
  h+='</div>';
  /* Claims taxonomy */
  h+='<div class="card"><h3>Claims Taxonomy</h3>';
  h+='<div class="stub" style="margin-bottom:10px">Approval classes: '+esc((MK.claimStatuses||[]).join(' · '))+'. "Founder approved" never implies legal/regulatory/clinical approval.</div>';
  (MK.claims||[]).forEach(function(c){
    h+='<div class="claimrow"><div class="cl-name">'+esc(c.claim)+'</div><div class="cl-stat">'+(c.statuses||[]).map(claimChip).join('')+'</div></div>';
  });
  h+='</div>';
  /* Pillars */
  h+='<div class="card"><h3>Content Pillars</h3><ul class="deco-list">'+
    (MK.pillars||[]).map(function(p){return '<li>'+esc(p.name)+'</li>';}).join('')+
    (MK.pillarsDeferred||[]).map(function(p){return '<li style="color:var(--faint)">'+esc(p.name)+' — '+esc(p.reason)+'</li>';}).join('')+
    '</ul></div>';
  /* Campaign (shared) */
  var camp=(SHARED.campaigns||[]).find(function(c){return c.id===MK.campaignRef;});
  if(camp){ h+='<div class="card"><h3>Active Campaign <span class="chip confirmed">'+esc(camp.status)+'</span></h3><div style="color:var(--dim);font-size:12.5px"><b>'+esc(camp.name)+'</b><br>'+esc(camp.summary)+'</div></div>'; }
  /* Post this next */
  if(MK.postNext){ h+='<div class="card"><h3>Post This Next</h3><div class="stub">'+esc(MK.postNext.count||'')+' scripted posts — '+esc(MK.postNext.note)+'</div></div>'; }
  /* Board columns */
  if(MK.boardColumns){ h+='<div class="card"><h3>Content Production Board</h3><div class="proc">'+
    MK.boardColumns.map(function(c,i){ return (i?'<span class="arr">→</span>':'')+'<span class="step">'+esc(c)+'</span>'; }).join('')+
    '</div><div class="stub" style="margin-top:8px">Column state is stored browser-local (mx2_board). No entries seeded.</div></div>'; }
  /* Library */
  if(MK.library&&MK.library.stub){ h+='<div class="card"><h3>Content Library</h3><div class="stub">'+esc(MK.library.note)+'</div></div>'; }
  /* Outcomes */
  h+='<div class="card"><h3>Marketing Outcomes <span style="color:var(--faint);font-size:10px">definitions only</span></h3><ul class="deco-list">'+
    (MK.outcomesRef||[]).map(function(id){ var o=outcomeById(id)||{}; return '<li>'+esc(o.name||id)+(o.primary?'':' <span style="color:var(--faint)">(secondary)</span>')+'</li>'; }).join('')+'</ul></div>';
  /* Decisions */
  h+=renderDecisions(MK.decisionsRef||[], 'Decisions Requiring Jack');
  m.innerHTML=h;
}

/* shared decisions renderer (Sales + Marketing) */
function renderDecisions(ids, title){
  var h='<div class="card"><h3>'+esc(title)+'</h3>';
  ids.forEach(function(id){
    var d=decisionById(id); if(!d) return;
    h+='<div class="claimrow"><div class="cl-name"><b>'+esc(d.id)+' — '+esc(d.title)+'</b>'+
       '<div style="color:var(--faint);font-size:11px;margin-top:2px">'+esc(d.detail||'')+'</div>'+
       (d.value?'<div style="font-size:11.5px;margin-top:3px">'+esc(d.value)+'</div>':'')+
       (d.constraints?'<ul class="deco-list" style="margin-top:4px">'+d.constraints.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>':'')+
       (d.fields?'<ul class="deco-list" style="margin-top:4px">'+d.fields.map(function(f){return '<li>'+esc(f.label)+': '+esc(f.value)+'</li>';}).join('')+'</ul>':'')+
       '</div><div class="cl-stat">'+decisionChip(d)+'</div></div>';
  });
  return h+'</div>';
}

/* ============================ V2 MIGRATION (additive 7th tab) ============================
   Renders window.MX.v2 (Fable-owned mirror of the standalone v2.html fallback).
   Static command board — no persistence, no status cycling. */
var V2CHIP = { done:'confirmed', run:'provisional', wait:'jack', hold:'' };
var V2SESSIONCHIP = { 'merged':'confirmed', 'review-clean':'provisional', 'PR up':'internal', 'running':'jack', 'failed':'dnp' };
function v2Pill(p){ return p ? '<span class="chip '+(V2CHIP[p.s]||'')+'">'+esc(p.label)+'</span>' : ''; }
function v2Cards(items){
  return '<div class="grid g2">'+(items||[]).map(function(c){
    return '<div class="card"><h3><span>'+esc(c.t)+'</span>'+v2Pill(c.pill)+'</h3><div style="color:var(--dim);font-size:12.5px">'+esc(c.d)+'</div></div>';
  }).join('')+'</div>';
}
function renderV2(){
  var V=MX.v2||{}; var m=el('v2mount'); if(!m) return;
  var meta=el('v2meta'); if(meta) meta.innerHTML='<b>'+esc(V.headline||'')+'</b> · '+esc(V.meta||'');
  var h='';
  if(V.arch){ h+='<div class="v2arch"><h3>'+esc(V.arch.title)+'</h3><p>'+esc(V.arch.body)+'</p></div>'; }
  h+='<div class="needs"><h2>Needs Jack — queue</h2><ul>'+(V.needsJack||[]).map(function(n,i){
    return '<li><span class="tag">'+(i+1)+'</span><span><b>'+esc(n.t)+'</b> <span style="color:var(--dim)">'+esc(n.d)+'</span></span></li>';
  }).join('')+'</ul></div>';
  h+='<div class="section"><h2>Governance chain</h2>'+v2Cards(V.governance)+'</div>';
  h+='<div class="section"><h2>Build lanes</h2>'+v2Cards(V.lanes)+'</div>';
  if(V.sessions && V.sessions.length){
    h+='<div class="section"><h2>Sessions<span class="cap">'+esc(V.sessionsNote||'')+'</span></h2>'+
      '<div class="tablewrap"><table class="pipe"><thead><tr><th>ID</th><th>Lane</th><th>Branch</th><th>PR#</th><th>Status</th></tr></thead><tbody>'+
      V.sessions.map(function(s){
        var pr = s.prUrl ? '<a class="v2link" href="'+esc(s.prUrl)+'" target="_blank" rel="noopener">'+esc(s.pr)+'</a>' : esc(s.pr);
        var cls = V2SESSIONCHIP[s.status]||'';
        return '<tr><td><b>'+esc(s.id)+'</b></td>'+
          '<td style="white-space:normal">'+esc(s.lane)+(s.detail?' <span style="color:var(--faint)">· '+esc(s.detail)+'</span>':'')+'</td>'+
          '<td><code>'+esc(s.branch)+'</code></td>'+
          '<td>'+pr+'</td>'+
          '<td><span class="chip '+cls+'">'+esc(s.status)+'</span></td></tr>';
      }).join('')+'</tbody></table></div></div>';
  }
  h+='<div class="section"><h2>Gates</h2><div class="card">'+(V.gates||[]).map(function(g){
    var st = g.state==='done' ? '<span class="chip confirmed">DONE</span> '
           : g.state==='blocker' ? '<span class="chip jack">THE BLOCKER</span> ' : '';
    return '<div class="v2gate"><span class="g">'+esc(g.g)+'</span><span class="d">'+st+esc(g.d)+'</span></div>';
  }).join('')+'</div></div>';
  h+='<div class="section"><h2>Migration &amp; import<span class="cap">'+esc(V.migrationNote||'')+'</span></h2>'+
    (V.migration||[]).map(function(t){
      return '<div class="v2tier '+esc(t.tier)+'"><b>'+esc(t.t)+'</b><p>'+esc(t.d)+'</p></div>';
    }).join('')+'</div>';
  h+='<div class="section"><h2>Settled decisions<span class="cap">'+esc(V.settledNote||'')+'</span></h2><div class="card"><ul class="deco-list">'+
    (V.settled||[]).map(function(s){ return '<li><b>'+esc(s.b)+'</b> — '+esc(s.d)+'</li>'; }).join('')+'</ul></div></div>';
  if(V.evidence){ h+='<div class="stub" style="border-top:1px solid var(--line);padding-top:12px;margin-top:8px">'+esc(V.evidence)+'</div>'; }
  m.innerHTML=h;
}

/* ============================ DATA TOOLS — export / import ============================ */
function renderDataTools(){
  el('datatools').innerHTML =
    '<button type="button" onclick="exportData()">Export data (JSON)</button>'+
    '<button type="button" onclick="document.getElementById(\'importFile\').click()">Import data (JSON)</button>';
  el('importFile').addEventListener('change', handleImportFile);
}
window.exportData = function(){
  var data={};
  EXPORT_KEYS.forEach(function(k){ var v=readJSON(k); if(v!=null) data[k]=v; });
  var payload={ schemaVersion:SCHEMA_VERSION, app:'matrix-founder-build-command', exportedAt:new Date().toISOString(), data:data };
  var blob=new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a'); a.href=url; a.download='matrix-build-command-'+new Date().toISOString().slice(0,10)+'.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  dataMsg('<span class="imp-ok">Exported '+Object.keys(data).length+' key(s). Private Ava data (mxava_*) is never included.</span>');
};
function handleImportFile(e){
  var file=e.target.files&&e.target.files[0]; e.target.value=''; if(!file) return;
  var reader=new FileReader();
  reader.onload=function(){
    var parsed;
    try{ parsed=JSON.parse(reader.result); }
    catch(err){ dataMsg('<span class="imp-error">Import failed — that file is not valid JSON.</span>'); return; }
    if(!parsed || parsed.schemaVersion!==SCHEMA_VERSION || typeof parsed.data!=='object'){
      dataMsg('<span class="imp-error">Import rejected — unsupported or missing schemaVersion (expected '+SCHEMA_VERSION+'). Nothing was changed.</span>');
      return;
    }
    previewImport(parsed);
  };
  reader.readAsText(file);
}
var pendingImport=null;
function previewImport(parsed){
  pendingImport=parsed;
  var keys=Object.keys(parsed.data||{}).filter(function(k){ return EXPORT_KEYS.indexOf(k)!==-1; });
  var rows=keys.map(function(k){
    var v=parsed.data[k]; var n = (v&&typeof v==='object')?Object.keys(v).length:1;
    return '<div class="kv"><span class="k">'+esc(k)+'</span><span class="v">'+n+' entr'+(n===1?'y':'ies')+'</span></div>';
  }).join('') || '<div class="stub">No recognized mx2_* keys in this file.</div>';
  openDrawerHTML(
    '<div class="dtitle" id="drawertitle">Import preview</div>'+
    '<div class="imp-summary">Exported '+esc(parsed.exportedAt||'—')+' · schema '+esc(parsed.schemaVersion)+'<br>This will OVERWRITE the following local keys:</div>'+
    rows+
    '<div class="imp-error" style="margin-top:12px">This replaces your current local status/board/outcomes. It cannot be undone.</div>'+
    '<div class="datatools" style="margin-top:12px"><button type="button" onclick="confirmImport()">Overwrite local data</button><button type="button" class="danger" onclick="cancelImport()">Cancel</button></div>'
  );
}
window.confirmImport=function(){
  if(!pendingImport){ return; }
  var keys=Object.keys(pendingImport.data||{}).filter(function(k){ return EXPORT_KEYS.indexOf(k)!==-1; });
  keys.forEach(function(k){ writeJSON(k, pendingImport.data[k]); });
  pendingImport=null; window.closeDrawer();
  statusOverrides=readJSON(K.status)||{};
  renderAll();
  dataMsg('<span class="imp-ok">Import applied — '+keys.length+' key(s) restored.</span>');
};
window.cancelImport=function(){ pendingImport=null; window.closeDrawer(); dataMsg('<span class="stub">Import cancelled. Nothing changed.</span>'); };
function dataMsg(html){ el('datamsg').innerHTML=html; }

/* ============================ Ava launcher (FLAG-GATED) ============================
   Mounts only when window.MX.build.flags.avaLauncher === true. Reads live local
   board + active tab, keeps Business/Personal separate, states when info is
   unavailable. Personal profile stays browser-local (mxava_*), never committed. */
var launcherOn=false, chatOpen=false;
var AVA={ mode: localStorage.getItem('mxava_mode')||'business',
          keys:{ personal:'mxava_personal', biz:'mxava_biz', profile:'mxava_profile', streak:'mxava_streak', journal:'mxava_journal' } };
function avaLoad(k){ try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;} }
function avaSave(k,v){ try{localStorage.setItem(k,JSON.stringify(v));}catch(e){} }

function mountLauncher(){
  launcherOn = !!(BUILD.flags && BUILD.flags.avaLauncher);
  if(!launcherOn) return;
  el('launcher-root').innerHTML =
    '<button class="ava-fab" id="avaFab" onclick="toggleChat()" aria-label="Open Ava"><span>a</span></button>'+
    '<div class="ava-chat" id="avaChat" role="dialog" aria-label="Ava assistant">'+
      '<div class="ava-chat-head"><div class="co"></div><div class="ct"><b>Ava</b><div class="cs" id="avaChatStatus">Business · preview</div></div><button class="cx" onclick="toggleChat()" aria-label="Close Ava">&times;</button></div>'+
      '<div class="ava-chat-mode" id="avaChatMode"><button class="on" data-m="business" onclick="setAvaMode(\'business\')">Business</button><button data-m="personal" onclick="setAvaMode(\'personal\')">Personal</button></div>'+
      '<div class="ava-msgs" id="avaMsgs"></div>'+
      '<div class="ava-input"><textarea id="avaText" placeholder="Talk to Ava…" aria-label="Message Ava"></textarea><button onclick="sendAva()">Send</button></div>'+
    '</div>';
  el('avaText').addEventListener('keydown', function(e){ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sendAva(); } });
  updateChatContext();
}
function updateChatContext(){
  if(!launcherOn) return;
  var st=el('avaChatStatus'); if(st) st.textContent=(AVA.mode==='business'?'Business':'Personal')+' · preview';
  var chat=el('avaChat'); if(chat) chat.classList.toggle('biz', AVA.mode==='business');
}
window.toggleChat=function(){ if(!launcherOn) return; chatOpen=!chatOpen; el('avaChat').classList.toggle('open',chatOpen); if(chatOpen){ ensureGreeting(); renderMsgs(); el('avaText').focus(); } };
function closeChat(){ if(launcherOn&&chatOpen){ chatOpen=false; el('avaChat').classList.remove('open'); } }
window.setAvaMode=function(m){
  AVA.mode=m; localStorage.setItem('mxava_mode',m);
  document.querySelectorAll('#avaChatMode button').forEach(function(b){ b.classList.toggle('on',b.dataset.m===m); });
  updateChatContext(); ensureGreeting(); renderMsgs();
};
function ensureGreeting(){
  var msgs=avaLoad(AVA.keys[AVA.mode])||[];
  if(!msgs.length){
    var g = AVA.mode==='business'
      ? "I'm Ava-CEO — your chief of staff. I read this build board live. Ask me what needs your attention, what's blocked, or how far along we are."
      : "Hey — I'm your longevity concierge preview. This is a placeholder voice, not live AI. What's on your mind?";
    msgs.push({r:'ava',t:g}); avaSave(AVA.keys[AVA.mode],msgs);
  }
}
function renderMsgs(){
  var elm=el('avaMsgs'); if(!elm) return;
  var msgs=avaLoad(AVA.keys[AVA.mode])||[];
  elm.innerHTML=msgs.map(function(m){ return '<div class="msg '+(m.r==='ava'?'ava':'me')+' '+(AVA.mode==='business'?'biz':'')+'">'+esc(m.t)+'</div>'; }).join('');
  elm.scrollTop=elm.scrollHeight;
}
window.sendAva=function(){
  var ta=el('avaText'); var t=ta.value.trim(); if(!t) return;
  var msgs=avaLoad(AVA.keys[AVA.mode])||[];
  msgs.push({r:'me',t:t}); avaSave(AVA.keys[AVA.mode],msgs); ta.value=''; renderMsgs();
  setTimeout(function(){ var reply=avaRespond(t); var m2=avaLoad(AVA.keys[AVA.mode])||[]; m2.push({r:'ava',t:reply}); avaSave(AVA.keys[AVA.mode],m2); renderMsgs(); }, 380);
};
function avaRespond(input){ var q=input.toLowerCase(); return AVA.mode==='business'?avaBizRespond(q):avaPersonalRespond(q); }
function avaBizRespond(q){
  var lanes=BUILD.lanes||[];
  if(/attention|needs|jack|queue|todo|to do|what.*next|priorit/.test(q)){
    var needs=[]; lanes.forEach(function(l){ (l.items||[]).forEach(function(it){ if(it.jack&&laneStatus(it)!=='done') needs.push(it.jack); }); });
    return needs.length ? "Straight off the board, here's your queue:\n\n• "+needs.slice(0,6).join('\n• ') : "Nothing is waiting on you right now — your Needs-Jack queue is clear.";
  }
  if(/block|stuck|broken|problem/.test(q)){
    var bl=[]; lanes.forEach(function(l){ (l.items||[]).forEach(function(it){ if(laneStatus(it)==='blocked') bl.push(it.t); }); });
    return bl.length ? "What's blocked:\n\n• "+bl.join('\n• ') : "Nothing is hard-blocked on the board right now.";
  }
  if(/percent|progress|how far|complete|status|where.*stand/.test(q)){
    var b=computeBuild(); return "Active build completion is about "+b.pct+"% across "+b.total+" workstreams ("+b.done+" done). Company readiness is a separate, lower number — "+computeReadiness().pct+"%. Want the lane-by-lane?";
  }
  if(/tab|screen|looking at|where am i/.test(q)){
    var names={build:'Build Command',infra:'Infrastructure Map',org:'Agent Org Chart',ava:'Ava Intelligence',sales:'Sales',marketing:'Marketing',v2:'V2 Migration'};
    return "You're on the "+(names[currentTab]||currentTab)+" tab right now.";
  }
  return "I'm your chief of staff over this build and I read the board live. Try: \"what needs my attention?\", \"what's blocked?\", \"how far along are we?\", or \"what tab am I on?\". (Preview responder — the governed engine gets wired in Claude Code.)";
}
function avaPersonalRespond(q){
  var prof=avaLoad(AVA.keys.profile); var name=(prof&&prof.name)||'';
  if(/can'?t breathe|chest pain|hives|allergic|anaphyla|passing out|faint|numb|slurred|worst headache/.test(q)){
    return "Stop — that could be serious and it's not something we troubleshoot together. If you're having trouble breathing, chest pain, or a real allergic reaction, call 911 or get to emergency care now. (In the live product I'd be alerting your clinical team.)";
  }
  if(/what am i taking|my stack|my protocol/.test(q)){
    return (prof&&prof.stack&&prof.stack.length) ? "From your profile: "+prof.stack.map(function(s){return s.nm;}).join(', ')+"." : "I don't have your stack yet — this preview stores nothing until you add a profile.";
  }
  return "I hear you"+(name?', '+name:'')+". Tell me more about what's underneath that. (Heads up: I'm the placeholder preview voice — the governed Ava that reads your labs gets wired in next.)";
}
window.openProfile=function(){ var p=avaLoad(AVA.keys.profile); el('profileText').value=(p&&p.raw)||''; el('pmodal').classList.add('open'); };
window.closeProfile=function(){ el('pmodal').classList.remove('open'); };
window.saveProfile=function(){
  var raw=el('profileText').value.trim();
  avaSave(AVA.keys.profile, { raw:raw, savedAt:Date.now() });
  window.closeProfile();
};

/* ============================ boot ============================ */
function renderAll(){ renderBuild(); renderInfra(); renderOrg(); renderAva(); renderSales(); renderMarketing(); renderV2(); }
function boot(){
  initTabs();
  renderDataTools();
  renderAll();
  mountLauncher();
  activateTab('build');
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot); else boot();

/* expose a tiny surface for the test harness (Node) */
if(typeof module!=='undefined' && module.exports){ module.exports={ migrateStatus:migrateStatus, computeBuild:computeBuild, computeReadiness:computeReadiness, capMaturity:capMaturity }; }

})();
