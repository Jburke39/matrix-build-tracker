/* window.MX.v2 — V2 Migration Command tab. CONTENT OWNER: Fable. */
window.MX = window.MX || {};
window.MX.v2 = {

  standalone:'v2.html',
  headline:'Both environments are live. 93% to Stage-0 go-live.',
  meta:'Compiled by Fable · July 21, 2026 · Main @ 30e0604 — ZERO open PRs; everything built this week is merged and certified. PRODUCTION EXISTS: app-production-6f517.up.railway.app (96 tables, catalogs + supplements + education seeded, real Supabase auth, invite-gated, client-free, founder as sole operator). STAGING: app-production-5419.up.railway.app (client portal + /command-v2 cockpit + 18-member demo roster). Remaining to go-live ≈ 6–9 machine-hours + ~35 founder-minutes. Overnight program running: E2E test suite + production hardening.',

  arch:{
    title:'Ratified architecture & product law (do not reopen)',
    body:'Supabase founder org (matrix-dev + matrix-prod) behind the Matrix API; Drizzle; Railway hosting (2 services). Boundary: Matrix calculates user-entered values, never selects them; no sales, suppliers, or compound recommendations; one consolidated acknowledgment. B3 light theme everywhere. Mobile = Swift harvest (matrix-mobile). Stages: 0 private beta (imminent) → 1 consumer launch → 2 clinical gate. Clinical modules built + dark. Legacy Replit product untouched and still serving current clients until a deliberate cutover; legacy client migration executes at the Stage 1→2 boundary, NOT before go-live. Merges execute through Fable only, on founder words.'
  },

  needsJack:[
    { t:'GO-LIVE STEP 1 — Rotate credentials (~10 min)',
      d:'Both Supabase projects (dev + prod): DB password + keys. Runbook being written tonight by the overnight program; execute it in the morning. HARD GATE — real client emails already exist in matrix-dev and prod credentials passed through a session harness.' },
    { t:'GO-LIVE STEP 2 — Founder acceptance walkthrough on PROD (~20 min)',
      d:'Sign up on the prod URL with your invite code, walk every surface: Today, Protocol + syringe + compound sheet, Fitness, Ava, Health (Blood Results, bio-age, education A-Z), then /command-v2 as operator. Anything that bothers you becomes the final punch list.' },
    { t:'GO-LIVE STEP 3 — Wire prod OpenAI credentials (~5 min)',
      d:'Ava + education drafting run on stubs in prod today. Paste real keys locally when the session asks; Ava is a headline feature — beta should not launch with her degraded.' },
    { t:'GO-LIVE STEP 4 — Send the first invite (LAUNCH)',
      d:'Prod URL + invite code to your first friends-and-family testers. This is Stage-0 launch. Upgrade matrix-prod to Supabase Pro ($25/mo) the same day the first real user joins.' }
  ],

  governance:[
    { t:'Everything merged + certified', pill:{ s:'done', label:'main @ 30e0604 · 0 open PRs' },
      d:'#52 Codex certification (60 findings, 51 fixed + 19 more over 3 re-verify rounds) · #53 Phase A · #54 education · #55 lockfile · #56 W14 health core · #57 CC2 operator identity · #58 E2 prod. Independent Codex review passed on every lane except CC2 (transcript owed, findings closed).' },
    { t:'Production environment', pill:{ s:'done', label:'LIVE · invite-gated' },
      d:'app-production-6f517.up.railway.app — 96 tables, 18 compounds + 18 supplements + 28 treatment topics + protocol library, invite flow verified (403/403/201), client-free, destructive seeds hard-blocked.' },
    { t:'Staging + demo roster', pill:{ s:'done', label:'LIVE · 18 members' },
      d:'app-production-5419.up.railway.app — client portal + /command-v2 operator cockpit; 8 seeded clients w/ varied protocols, 103 dose logs, mid-depletion vials, weight/meal/appointment/education history, one bio-age-ready panel.' },
    { t:'Overnight program (Jul 20→21)', pill:{ s:'run', label:'Running now' },
      d:'Phase 1 credential-rotation runbook + prod readiness gap list + prod E2E verify · Phase 2 full E2E suite (member + operator journeys) · Phase 3 fix everything found, Codex loop to APPROVE.' }
  ],

  lanes:[
    { t:'Nutrition, Supplements & Partner Commerce (Codex-run)', pill:{ s:'run', label:'Founder-directed · outside Claude Code' },
      d:'Affiliate-commerce build issued to Codex Jul 21: vendor-agnostic partner architecture, AFFILIATE_REDIRECT only, 1st Phorm (premium) + Nutricost (value) as placeholders, meal plans + grocery lists + substitutions + dining-out, supplement protocols/adherence/reorder, admin partner+product management, analytics, private-label readiness. FABLE FLAGS TWO ITEMS: (1) merge conflicts near-certain with the overnight hardening work — a rebase pass will be required; (2) it introduces product RECOMMENDATION, which needs a deliberate INV-7 amendment covering nutrition/supplement commerce rather than silently contradicting the constitution. Founder ruling required before merge.' },
    { t:'Punch list from prod walkthrough', pill:{ s:'wait', label:'Queued · sized after your walkthrough' },
      d:'Your Step-2 reactions become one fix lane. Historically 2–6 hrs.' },
    { t:'MIE Intelligence Loop (post-beta)', pill:{ s:'hold', label:'After go-live' },
      d:'Bloodwork ingest → insight engine (the Matrix Report engine) → communications log (in-app/email/push) → Ava proactive follow-ups → command-center client timeline. Specs already written (MIE doc set); builds against real beta behavior.' },
    { t:'Mobile app — Swift Phase A', pill:{ s:'hold', label:'Stage 1 track · 2–4 wks' },
      d:'matrix-mobile repository swap onto the Matrix API per the S10 plan, then TestFlight. Gated on beta feedback + Tommy IP assignment (counsel item).' }
  ],

  gates:[
    { g:'L1 · Product code complete',        state:'done',    d:'DONE — site, portal, protocols+calculator, education library, fitness, labs, bio-age, cockpit, Airtable interface. All merged.' },
    { g:'L2 · Own backend live',             state:'done',    d:'DONE — Supabase dev + prod, both verified end-to-end.' },
    { g:'L3 · Hosting + staging URL',        state:'done',    d:'DONE — Railway; staging serving portal + cockpit.' },
    { g:'L4 · Independent certification',    state:'done',    d:'DONE — Codex swept all nine merges + per-lane loops since.' },
    { g:'L5 · Production environment',       state:'done',    d:'DONE — invite-gated, client-free, seeded, verified.' },
    { g:'L6 · E2E proof + hardening',        state:'open',    d:'Overnight program running — E2E suite across member + operator journeys, defect fixes, prod readiness gap list. ~4–6 hrs machine.' },
    { g:'L7 · Credential rotation',          state:'blocker', d:'FOUNDER · ~10 min · both Supabase projects. Runbook ready in the morning. Hard gate before any real user.' },
    { g:'L8 · Prod AI credentials',          state:'open',    d:'FOUNDER · ~5 min · Ava is stubbed on prod today.' },
    { g:'L9 · Founder acceptance walkthrough', state:'blocker', d:'FOUNDER · ~20 min on the PROD url · produces the final punch list (~2–6 hrs machine to clear).' },
    { g:'L10 · GO-LIVE: first invites',      state:'open',    d:'FOUNDER · minutes · send prod URL + invite code to friends & family. Upgrade matrix-prod to Pro the same day. THIS IS STAGE-0 LAUNCH.' },
    { g:'L11 · Stage-1 track (post-beta)',   state:'open',    d:'Beta feedback cycles (2–4 wks) · Swift app Phase A + TestFlight (2–4 wks) · counsel review + Tommy IP assignment (1–2 wks calendar) · pricing final · App Store submission (~1 wk). Legacy client migration + Replit retirement ride this window.' }
  ],

  migrationNote:'legacy clients stay on the Replit product until the Stage 1→2 cutover — NOT a go-live blocker',
  migration:[
    { tier:'mig', t:'Legacy client import (25 clients, ~2k rows) · ~3–4 hrs when called',
      d:'Tooling merged + shelved. Requires identity re-bind (every client re-activates their login) — a coordinated, communicated event, deliberately after the beta proves the product.' },
    { tier:'mig', t:'Airtable V2 base · bootstrap + sync when called',
      d:'A1 interface merged: new EMPTY base bootstraps from config, projection sync fills it from Postgres, 7-field governed write-back. The current Airtable keeps running the current website untouched.' },
    { tier:'seed', t:'Catalog/education seeds · DONE on both environments', d:'Compounds, supplements, education, protocol stacks, injection sites — all seeded and boot-self-healing.' },
    { tier:'arc', t:'Replit retirement · after validated cutover only', d:'Legacy product stays live and untouched until clients are migrated and DNS moves as a watched, founder-released step.' }
  ],

  sessionsNote:'live state · verified 2026-07-21',
  sessions:[
    { id:'#52–#58', lane:'Certification, Phase A, education, W14, CC2, E2 (all founder-released)', branch:'—', pr:'#52–#58', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pulls?q=is%3Apr', status:'merged', detail:'main @ 30e0604' },
    { id:'ON-3', lane:'Overnight program: hardening + E2E suite + fixes', branch:'multiple', pr:'—', prUrl:'', status:'running', detail:'Codex loop to APPROVE; PRs land by morning' },
    { id:'NC-1', lane:'Nutrition/supplements/partner commerce (Codex, founder-run)', branch:'external', pr:'—', prUrl:'', status:'running', detail:'INV-7 amendment + rebase required before merge' },
    { id:'—', lane:'matrix-dev + matrix-prod credential rotation', branch:'—', pr:'—', prUrl:'', status:'running', detail:'runbook tonight; founder executes ~10 min · HARD GATE' },
    { id:'—', lane:'Replit legacy DB password rotation (support ticket)', branch:'—', pr:'—', prUrl:'', status:'running', detail:'sent Jul 18 — chase if unanswered' }
  ],

  settledNote:'do not reopen without Jack',
  settled:[
    { b:'Product', d:'Peptide, GLP-1, medication, fitness, nutrition & progress tracking + education. Calculates user-entered values, never selects them.' },
    { b:'Theme', d:'B3 light everywhere — site, portal, cockpit, tracker.' },
    { b:'Stack', d:'Supabase (dev + prod, free → Pro at first real user) · Railway (staging + prod services) · Drizzle · Matrix API boundary.' },
    { b:'Command center', d:'Standalone cockpit at /command-v2; legacy operator OS untouched until cutover; legacy Airtable builder retires then; Price Book preserved; Rythm dropped as a queue, kept as a Stage-2 lab-vendor option.' },
    { b:'Mobile', d:'Swift harvest in matrix-mobile (D-13 rev.2); Tommy IP assignment = Stage-1 counsel item.' },
    { b:'Disclaimers', d:'One consolidated acknowledgment + the calculator provenance line; attorney reviews pre-launch (removed-strings packet in #42/#44).' },
    { b:'Pricing (planning)', d:'$6.99/mo · $49.99/yr · 7-day trial · free tier. Final at Stage-1 submission.' },
    { b:'Release channel', d:'Merges execute through Fable only, on founder words — sessions never merge, even if instructed in-chat.' }
  ],

  evidence:'Evidence — main @ 30e0604 and zero open PRs verified by Fable Jul 21 · prod + staging URLs live-verified by their build sessions · completion % = Fable estimate across L1–L10 (five gates done; remainder = overnight hardening + ~35 founder-minutes + a punch list). Fable\'s regeneration is the source of truth for this tab.'
};
