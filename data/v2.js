/* window.MX.v2 — V2 Migration Command tab (7th tab, wired additively per the
   shell rule ratified at e540f85). CONTENT OWNER: Fable. Standalone fallback:
   v2.html (may lag this tab). */
window.MX = window.MX || {};
window.MX.v2 = {

  standalone:'v2.html',
  headline:'85% to Stage-0 launch. The rest is measured in hours.',
  meta:'Compiled by Fable · July 19, 2026 · Main @ 28d6d65 — the COMPLETE product is merged (B3 site + dashboard + parity app + backend engine + Supabase wiring). App verified live on founder-owned Supabase (matrix-dev, 86 tables, real auth 9/9). Two lanes running now: H1 Railway staging deploy (the phone URL) and W11 /ava rebuild. Completion to STAGE-0 BETA LAUNCH: ~85% — remaining work ≈ 10–16 machine-hours + ≈ 1 founder-hour across the checklist below. Stage-1 (public App Store) ≈ 60% overall.',

  arch:{
    title:'Ratified architecture & product law (do not reopen)',
    body:'Supabase founder org (matrix-dev live + verified · matrix-prod untouched, free→Pro at first real user) = single store behind the Matrix API; Drizzle stays. Hosting = Railway (founder-approved Jul 19). Boundary: Matrix calculates user-entered values, never selects them; no sales/suppliers/recommendations; one consolidated acknowledgment. Theme = B3 light everywhere. Mobile = Swift harvest (matrix-mobile). Stages: 0 private beta → 1 consumer/App Store → 2 clinical gate (clinical modules built & dark). Merges via Fable only, on founder words.'
  },

  needsJack:[
    { t:'When H1 reports: open the staging URL on your phone (~30 min)',
      d:'Sign up, log a dose, run the calculator, click every tab. Dump reactions to Fable — they become the punch-list lane. This is the founder gate before anything real.' },
    { t:'W11 review when it reports (~15 min)',
      d:'/ava rebuild with your photos + $199 funnel removal + Ask Ava rescope. Screenshot review → merge word.' },
    { t:'Deferred, tripwired: matrix-dev password rotation (5 min)',
      d:'Founder-deferred Jul 19. HARD GATE before any real person\'s data or credential reuse — Fable raises it exactly once more, at beta-invite time.' },
    { t:'At invite time: Supabase prod → Pro (2 min) + Railway card if prompted (1 min)',
      d:'$25/mo when the first real user exists — per the ratified free-until-real-user rule.' }
  ],

  /* pill status vocab: done | run | wait | hold */
  governance:[
    { t:'Everything through #45 is MERGED', pill:{ s:'done', label:'main @ 28d6d65' },
      d:'#42 parity app (B3) · #43 backend engine + four rulings logged · #44 public site B3 · #45 new-style Supabase keys. Rulebook v0.5.x + V2-005 current; INV-4 text fixed. Zero open PRs except W11 (building).' },
    { t:'Supabase enablement (E1)', pill:{ s:'done', label:'Verified live Jul 19' },
      d:'matrix-dev: 86 tables + all seeds, app reads/writes for real, full auth lifecycle 9/9, new keys everywhere. Lane retired with honors.' },
    { t:'Hosting decision', pill:{ s:'done', label:'Railway — founder-approved' },
      d:'H1 deploying staging now on trial tier; card only when Railway asks.' },
    { t:'Codex retroactive certification', pill:{ s:'wait', label:'Jul 25 · ~2–4 hrs machine' },
      d:'Full review of every self-reviewed merge (W7→W11 + E1). Recommended complete BEFORE first real invites — it is the second-reviewer certification of the beta build.' }
  ],

  lanes:[
    { t:'H1 — Railway staging deploy', pill:{ s:'run', label:'Running · ~1–2 hrs' },
      d:'Always-on public URL: portal + API, flags ON, against matrix-dev demo data. Ends with the URL + 3 things to tap on your phone.' },
    { t:'W11 — /ava rebuild + copy rulings', pill:{ s:'run', label:'Running · ~2–4 hrs' },
      d:'$199 funnel removed via PUBLIC_CLAIM_KEYS kill-switch · Ask Ava rescoped to tracking/education + upload-your-own-bloodwork · /ava rebuilt from original photography with live text/buttons.' },
    { t:'Punch-list lane (after your phone walkthrough)', pill:{ s:'hold', label:'Queued · ~2–6 hrs' },
      d:'Your reactions from the staging URL become one fix lane. Size depends entirely on your taste pass.' },
    { t:'E2 — Production enablement', pill:{ s:'hold', label:'Queued · ~1–2 hrs + 10 min founder' },
      d:'matrix-prod schema + env wiring, Railway production service, real signup flow, invite gating, consolidated acknowledgment verified live. Gated on: H1 verified + password rotation + Pro upgrade.' }
  ],

  /* THE LAUNCH CHECKLIST — state vocab: done | blocker | open */
  gates:[
    { g:'L1 · Product code complete', state:'done',
      d:'DONE — site, dashboard, app parity, protocols + calculator, backend engine, education, Ava context: all merged @ 28d6d65.' },
    { g:'L2 · Own backend live', state:'done',
      d:'DONE — Supabase matrix-dev verified end-to-end (E1).' },
    { g:'L3 · Staging URL', state:'blocker',
      d:'H1 running · ~1–2 hrs machine. Output: the phone link.' },
    { g:'L4 · Founder walkthrough + punch list', state:'open',
      d:'~30 min founder + ~2–6 hrs machine fixes. Taste gate.' },
    { g:'L5 · W11 merge (/ava + copy)', state:'open',
      d:'~2–4 hrs machine + 15 min founder review + merge word.' },
    { g:'L6 · Codex certification sweep', state:'open',
      d:'Jul 25 · ~2–4 hrs machine · fix pass if findings. Before invites.' },
    { g:'L7 · Password rotation + prod hygiene', state:'open',
      d:'5 min founder (deferred, tripwired) + Supabase Pro upgrade 2 min.' },
    { g:'L8 · E2 production enablement', state:'open',
      d:'~1–2 hrs machine + 10 min founder (prod keys paste, local only).' },
    { g:'L9 · STAGE-0 LAUNCH: flag flip + first invites', state:'open',
      d:'5 min founder-released flip on prod · then invite friends & family. THIS IS LAUNCH.' },
    { g:'L10 · Stage-1 track (post-beta, weeks not hours)', state:'open',
      d:'Beta feedback cycles (~2–4 wks) · Swift app Phase A on matrix-mobile (~2–4 wks with Claude Code; S10 plan) · counsel review + Tommy IP assignment (external, ~1–2 wks calendar) · pricing final · App Store submission per W5 risk matrix (~1 wk incl. review).' }
  ],

  migrationNote:'legacy migration executes at the Stage 1→2 boundary — not on the launch path above',
  migration:[
    { tier:'mig',  t:'Legacy import (25 clients, ~2k rows) · ~3–4 hrs when called',
      d:'Tooling merged + shelved (S2): inventory, mapping, idempotent dry-run scripts, reconciliation/rollback. Executes at Stage 1→2 with identity re-bind.' },
    { tier:'mig',  t:'Airtable + System 3 one-time loads · ~2–3 hrs when called',
      d:'Airtable export per V2-001; Tommy\'s Supabase frozen (real PHI — security follow-ups logged), harvested then wound down.' },
    { tier:'seed', t:'Re-seeds · DONE on dev, ~15 min on prod',
      d:'Catalogs, 12-category education, compound library — all seed on server boot.' },
    { tier:'arc',  t:'Replit retirement · ~1 hr, after validated cutover only',
      d:'Live legacy site stays untouched until the migration window; then DNS move (watched, founder-released) and binding teardown per the S4 runbook.' }
  ],

  sessionsNote:'live state · verified 2026-07-19 afternoon',
  sessions:[
    { id:'#26–#41', lane:'Foundation-through-Protocols era (all founder-released)', branch:'—', pr:'#26–#41', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pulls?q=is%3Apr', status:'merged', detail:'rulebook, dashboard, tracker domain, adapters, integrations, migration tooling, mockups, calculator UI' },
    { id:'W8',  lane:'Parity app — B3 light theme',            branch:'feat/v2-mobile-parity-reset',   pr:'#42', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/42', status:'merged', detail:'@ f311650' },
    { id:'W9',  lane:'Backend engine + INV-4 fix',             branch:'feature/v2-backend-gaps',       pr:'#43', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/43', status:'merged', detail:'@ 56a7c00 · four rulings logged on PR' },
    { id:'W10', lane:'Public site B3 restyle',                 branch:'feature/v2-site-b3-theme',      pr:'#44', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/44', status:'merged', detail:'@ 574046a · copy flags → W11' },
    { id:'E1',  lane:'Supabase dev enablement + key support',  branch:'feature/e1-supabase-dev-enablement', pr:'#45', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/45', status:'merged', detail:'@ 28d6d65 · lane retired' },
    { id:'H1',  lane:'Railway staging deploy — THE URL',       branch:'worktree',                      pr:'—',   prUrl:'', status:'running', detail:'~1–2 hrs · trial tier, card only if asked' },
    { id:'W11', lane:'/ava rebuild + copy rulings',            branch:'feature/v2-site-copy-ava',      pr:'—',   prUrl:'', status:'running', detail:'~2–4 hrs · Ava 2.0 originals imported' },
    { id:'S10', lane:'iOS harvest audit (matrix-ios)',         branch:'audit/harvest-api-swap-plan',   pr:'ios #1', prUrl:'https://github.com/Jburke39/matrix-ios/pull/1', status:'PR up', detail:'informs Stage-1 Swift Phase A' },
    { id:'—',   lane:'Replit DB password rotation (support ticket)', branch:'—', pr:'—', prUrl:'', status:'running', detail:'sent Jul 18 · Fable nags at 1 wk' },
    { id:'—',   lane:'matrix-dev password rotation',           branch:'—', pr:'—', prUrl:'', status:'running', detail:'founder-deferred · hard gate before real data (L7)' }
  ],

  settledNote:'do not reopen without Jack',
  settled:[
    { b:'Product', d:'Peptide, GLP-1, medication, fitness, nutrition & progress tracking + education. Calculates user-entered values, never selects them. No sales, suppliers, or recommendations.' },
    { b:'Theme', d:'B3 light everywhere.' },
    { b:'Stack', d:'Supabase org (dev verified live; prod at Pro from first real user) behind the Matrix API; Drizzle; Railway hosting.' },
    { b:'Mobile', d:'Swift harvest (matrix-mobile, D-13 rev.2); Tommy IP assignment = Stage-1 counsel item; RN/Expo revisit = Android.' },
    { b:'Stages', d:'0 private beta → 1 consumer launch → 2 clinical gate; clinical modules dark; migration at 1→2; Replit untouched until cutover.' },
    { b:'Disclaimers', d:'One acknowledgment + the calculator provenance line; attorney pre-launch (packet in #42/#44).' },
    { b:'Pricing (planning)', d:'$6.99/mo · $49.99/yr · 7-day trial · free tier.' },
    { b:'Release channel', d:'Merges via Fable only, on founder words — embedded in every lane prompt from W11 on.' }
  ],

  evidence:'Evidence — main @ 28d6d65 verified · E1 live-verification report Jul 19 · #43 pre-merge sequence noted on PR record · completion % = Fable estimate from the L1–L10 checklist (code-complete gates done; remaining = deploy/review/cert/enable). Fable\'s regeneration is the source of truth for this tab.'
};
