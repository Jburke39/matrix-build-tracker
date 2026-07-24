/* window.MX.v2 — V2 Migration Command tab. CONTENT OWNER: Fable. */
window.MX = window.MX || {};
window.MX.v2 = {

  standalone:'v2.html',
  headline:'The Reveal is merged. 95% to Stage-0 go-live.',
  meta:'Compiled by Fable · July 22, 2026 · Main @ de2ccef — the client experience layer landed: PR #62 (lifecycle engine + Existing Client Upgrade Reveal) merged Codex-certified zero-open. ONE PR open: #65 AVA-1 (platform Ava on Claude, governed) at ec075c6 awaiting Codex re-cert. Both environments live: STAGING app-production-5419.up.railway.app · PROD app-production-6f517.up.railway.app (invite-gated, client-free). Credential rotation IN PROGRESS — dev key rotated + verified; prod keys, prod DB password, SESSION_SECRET and invite code still pending. Remaining to go-live ≈ 3–5 machine-hours + ~45 founder-minutes.',

  arch:{
    title:'Ratified architecture & product law (do not reopen)',
    body:'Supabase founder org (matrix-dev + matrix-prod) behind the Matrix API; Drizzle; Railway (staging + prod services, both git-connected to main, auto-migrate on deploy). Boundary: Matrix calculates user-entered values, never selects them; INV-7 §5.2 permits explaining an already-clinician-approved protocol with provenance, plus narrow non-prescription commerce — all prior prohibitions preserved. AVA CANON: Ava runs on CLAUDE (not OpenAI), governed by the founder\'s 11-doc suite; she educates freely on anything including self-directed protocols, but never states a ruling — diagnosis, dose change, and contraindication calls are deterministically repaired to the educate-then-route voice on OUTPUT. B3 light theme everywhere. Stages: 0 private beta (imminent) → 1 consumer launch → 2 clinical gate. Legacy Replit product untouched; legacy client migration rides the Stage 1→2 boundary, NOT go-live. Merges execute through Fable only, on founder words.'
  },

  needsJack:[
    { t:'FINISH ROTATION (ROT-1) — in progress, ~10 min left',
      d:'Dev secret key rotated, verified by a clean incognito login, old key revoked. STILL PENDING: matrix-prod keys, prod DB password, SESSION_SECRET, staging invite code. Prod credentials matter most — real client data lands there. Follow ROT-1 one step at a time.' },
    { t:'Codex re-cert on AVA-1 (#65) → then merge word',
      d:'At ec075c6: Tier-D now force-repaired on OUTPUT (dose/contraindication/diagnosis), educate-then-route voice preserved via defer/hedge exemption, INV-7 provenance rendered (approved vs self-directed labeling). 1377 tests green. Awaiting Codex verdict.' },
    { t:'PROD acceptance walkthrough (~20 min) — the taste gate',
      d:'Sign up on the PRODUCTION url with the invite code as a real user; walk Today · Protocol · Fitness · Ava · Health, then /command-v2 as operator. Anything that bothers you becomes the final punch list. You have never done this on prod.' },
    { t:'Decide the invite mechanism + add Railway billing',
      d:'How does a friend actually receive the link + code — text, or an email? For 5 people manual is fine, just decide it. Railway trial ~$4.69 left; add a card this week or prod sleeps.' }
  ],

  governance:[
    { t:'PR #62 — lifecycle engine + Upgrade Reveal', pill:{ s:'done', label:'MERGED @ de2ccef · Codex zero-open' },
      d:'Lifecycle states + event ledger (transactional, audited, idempotent) · Reveal platform (9 tables, server-side eligibility, publication/withdrawal FSM, versioning, replay, cross-client isolation) · the 7-step Upgrade Reveal with verbatim opening copy and own-words provenance · DASHBOARD-ACCESS GUARANTEE: RevealRouteGuard above the lazy import redirects ANY failure incl. chunk-load to /v2, proven by a forced-chunk-fail E2E. Operator module in /command-v2. Dark behind three flags; migrations 0050/0051 not yet applied to dev/prod.' },
    { t:'PR #65 — AVA-1: platform Ava on Claude', pill:{ s:'wait', label:'ec075c6 · awaiting Codex' },
      d:'Provider swapped OpenAI→Anthropic behind the AiProvider abstraction; both governed brains verbatim; real client context via buildAvaContext; deterministic 5-band safety layer OUTSIDE the model (Band 0/1 fire even if Claude is down); knowledge tiers as content; structured per-client memory (migration 0052). Live red-team 7/7 on claude-sonnet-5. Two Codex rounds closed 3 findings; third re-cert pending.' },
    { t:'Credential rotation (ROT-1)', pill:{ s:'run', label:'Dev done · prod pending' },
      d:'Runbook-driven, one credential at a time, consumer-update before old-key revoke. Dev secret key live and verified; old key revoked. Prod keys, prod DB password, SESSION_SECRET, invite code remain. HARD GATE before any real user.' },
    { t:'Codex certification program', pill:{ s:'done', label:'#61 · #64 · #62 certified' },
      d:'#61 admin identity APPROVE zero-open · #62 Reveal APPROVE zero-open (after 2 fix cycles: dashboard-boundary HIGH, INV-7, E2E false-positive MEDIUM) · #64 readiness merged with Codex owed. Codex caught what internal review missed on both flagships — the second-reviewer loop is working.' }
  ],

  lanes:[
    { t:'AVA-1 remediation → re-cert', pill:{ s:'run', label:'Codex reviewing ec075c6' },
      d:'Rebased onto main de2ccef, migration renumbered 0052 (main took 0050/0051). Tier-D force-repair now inspects Ava\'s OWN OUTPUT across the full forbidden-decision surface; founder\'s canonical hedged lines pass through untouched via the defer/hedge exemption.' },
    { t:'Nutrition / supplements / partner commerce (Codex-built)', pill:{ s:'wait', label:'Parked · needs review + rebase' },
      d:'Affiliate-only (AFFILIATE_REDIRECT), vendor-agnostic partner architecture, 1st Phorm + Nutricost placeholders, meal plans/grocery/substitutions, supplement protocols + reorder, admin partner+product management, analytics, private-label readiness. INV-7 amendment (merged) gives it constitutional ground. Requires independent review + rebase before any merge.' },
    { t:'Punch list from prod walkthrough', pill:{ s:'hold', label:'Sized after your walkthrough' },
      d:'Your reactions become one fix lane — historically 2–6 hrs.' },
    { t:'MIE Intelligence Loop + Reveal WP3 (post-beta)', pill:{ s:'hold', label:'After go-live' },
      d:'Bloodwork ingest → insight engine (the Matrix Report as an experience) → communications orchestrator → Ava proactive follow-ups → client timeline in the cockpit. Plus the NEW-client Health & Protocol Reveal on the same engine. Builds against real beta behavior.' }
  ],

  gates:[
    { g:'L1 · Product code complete',          state:'done',    d:'DONE — site, portal, protocols+calculator, education, fitness, labs, bio-age, cockpit, Airtable interface, lifecycle + Reveal.' },
    { g:'L2 · Own backend live',               state:'done',    d:'DONE — Supabase dev + prod verified end-to-end.' },
    { g:'L3 · Hosting + both environments',    state:'done',    d:'DONE — Railway staging + prod, git-connected to main, auto-migrate on deploy.' },
    { g:'L4 · Independent certification',      state:'done',    d:'DONE for #61/#62/#64. AVA-1 (#65) in its final re-cert.' },
    { g:'L5 · Production environment',         state:'done',    d:'DONE — invite-gated, client-free, seeded, cockpit live.' },
    { g:'L6 · E2E proof + hardening',          state:'done',    d:'DONE — 23-test E2E suite vs staging; storage P1 closed; uploads wired; migrations self-healing.' },
    { g:'L7 · Credential rotation',            state:'blocker', d:'IN PROGRESS — dev done + verified; prod keys, prod DB password, SESSION_SECRET, invite code pending. ~10 founder-minutes.' },
    { g:'L8 · Ava live (AVA-1 merged + keys)', state:'blocker', d:'Codex re-cert at ec075c6 → merge → set ANTHROPIC_API_KEY on staging/prod → flag on. Key already purchased and funded.' },
    { g:'L9 · Founder acceptance walkthrough', state:'blocker', d:'~20 min on the PROD url. Produces the final punch list (2–6 hrs machine to clear).' },
    { g:'L10 · GO-LIVE: first invites',        state:'open',    d:'Send prod URL + invite code to friends & family. Upgrade matrix-prod to Supabase Pro the same day. THIS IS STAGE-0 LAUNCH.' },
    { g:'L11 · Stage-1 track (post-beta)',     state:'open',    d:'Beta cycles (2–4 wks) · Swift app Phase A + TestFlight · counsel review + Tommy IP assignment · pricing final · App Store submission. Legacy migration + Replit retirement ride this window.' }
  ],

  migrationNote:'legacy clients stay on the Replit product until the Stage 1→2 cutover — NOT a go-live blocker',
  migration:[
    { tier:'mig', t:'Legacy client import (25 clients, ~2k rows) · ~3–4 hrs when called',
      d:'Tooling merged + shelved. Requires identity re-bind — a coordinated, communicated event, deliberately after the beta proves the product.' },
    { tier:'mig', t:'Airtable V2 base · bootstrap + sync when called',
      d:'A1 interface merged: new EMPTY base bootstraps from config, projection sync fills it from Postgres, 7-field governed write-back. The current Airtable keeps running the current website untouched.' },
    { tier:'seed', t:'CX migrations 0050/0051/0052 · pending on dev+prod',
      d:'Lifecycle + Reveal (0050/0051, merged) and Ava memory (0052, in #65) are additive and idempotent but NOT yet applied to shared environments — they apply automatically on the next deploy carrying them, per RD-1\'s auto-migrate step.' },
    { tier:'arc', t:'Replit retirement · after validated cutover only', d:'Legacy product stays live and untouched until clients migrate and DNS moves as a watched, founder-released step.' }
  ],

  sessionsNote:'live state · verified against GitHub 2026-07-22',
  sessions:[
    { id:'#52–#61', lane:'Certification, Phase A, education, W14, CC2, E2, overnight hardening', branch:'—', pr:'#52–#61', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pulls?q=is%3Apr', status:'merged', detail:'all founder-released' },
    { id:'#64', lane:'RD-1 production readiness (storage, auto-migrate, prod cockpit, object-route P1)', branch:'feature/rd1-production-readiness', pr:'#64', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/64', status:'merged', detail:'@ bad23aa · Codex owed' },
    { id:'#62', lane:'WP1+WP2 lifecycle engine + Upgrade Reveal', branch:'feature/cx-wp1-wp2-lifecycle-upgrade-reveal', pr:'#62', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/62', status:'merged', detail:'@ de2ccef · Codex APPROVE zero-open' },
    { id:'#65', lane:'AVA-1 platform Ava on Claude, governed', branch:'feature/ava-1-governed-claude', pr:'#65', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/65', status:'PR up', detail:'ec075c6 · Codex re-cert in flight' },
    { id:'ROT-1', lane:'Credential rotation', branch:'—', pr:'—', prUrl:'', status:'running', detail:'dev done; prod + secrets pending' },
    { id:'NC-1', lane:'Nutrition/supplements/partner commerce (Codex)', branch:'external', pr:'—', prUrl:'', status:'PR up', detail:'parked — needs review + rebase' },
    { id:'—', lane:'Replit legacy DB password rotation (support ticket)', branch:'—', pr:'—', prUrl:'', status:'running', detail:'sent Jul 18 — chase if unanswered' }
  ],

  settledNote:'do not reopen without Jack',
  settled:[
    { b:'Product', d:'Peptide, GLP-1, medication, fitness, nutrition & progress tracking + education. Calculates user-entered values, never selects them.' },
    { b:'Ava', d:'Runs on Claude, governed by the 11-doc suite. Educates on anything (including self-directed protocols); never states a diagnosis, dose change, or contraindication ruling — those repair to educate-then-route. Emergency layer is confirm-first and fires even if the model is down.' },
    { b:'Theme', d:'B3 light everywhere — site, portal, cockpit, tracker.' },
    { b:'Stack', d:'Supabase (dev + prod, free → Pro at first real user) · Railway (2 services, auto-migrate on deploy) · Drizzle · Matrix API boundary.' },
    { b:'Command center', d:'Standalone /command-v2; legacy operator OS untouched until cutover; Price Book preserved; Rythm dropped as a queue, kept as a Stage-2 lab-vendor option.' },
    { b:'Disclaimers', d:'One consolidated acknowledgment + the calculator provenance line; attorney reviews pre-launch.' },
    { b:'Pricing (planning)', d:'$6.99/mo · $49.99/yr · 7-day trial · free tier. Final at Stage-1 submission.' },
    { b:'Release channel', d:'Merges execute through Fable only, on founder words — sessions never merge, even if instructed in-chat.' }
  ],

  evidence:'Evidence — main @ de2ccef and PR states verified against GitHub by Fable Jul 22 · #62 merged at Codex-certified SHA 2504840 · #65 open at ec075c6 · rotation state per ROT-1 session · completion % = Fable estimate across L1–L10 (six gates done; remainder = rotation minutes, one cert, one walkthrough, one punch list). Fable\'s regeneration is the source of truth for this tab.'
};
