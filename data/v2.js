/* window.MX.v2 — V2 Migration Command tab (7th tab, wired additively per the
   shell rule ratified at e540f85: the 6-tab shell is never replaced, V2 content
   lives additively). CONTENT OWNER: Fable. This file mirrors the standalone
   v2.html page, which remains in the repo as the fallback surface. */
window.MX = window.MX || {};
window.MX.v2 = {

  standalone:'v2.html',
  headline:'The app is real. Now we turn it on.',
  meta:'State compiled by Fable · July 19, 2026 · Main tip f311650 — PR #42 merged: the B3 light-theme parity app (Today w/ protocols-first + completion ring, Health hub, Calendar w/ ICS sync, Ava tab, Education) is the official product. Product redefined under the staged model: peptide, GLP-1, medication, fitness, nutrition & progress tracking + education. Supabase org founder-owned (matrix-dev + matrix-prod, free tier). Everything dark; live site untouched.',

  arch:{
    title:'Ratified architecture & product law (do not reopen)',
    body:'Postgres (Supabase, founder org, 2 projects, free→Pro at first real user) = single authoritative store behind the Matrix API; Drizzle stays. Core boundary: Matrix calculates the mathematical result of user-entered values — it never selects the medical value. No sales, no supplier links, no recommendations; one consolidated acknowledgment, no disclaimer spam; attorney review pre-launch. Theme law: B3 light (slate #F5F7FA · white cards · navy #0B2A4A · Electric Blue accents) across app, dashboard, and website. Mobile: Swift harvest in sovereign repo matrix-mobile (D-13 rev.2); RN/Expo revisit = Android at Stage 1. Stages: 0 private beta (now) → 1 consumer launch → 2 clinical gate; clinical modules built & dark; migration executes at the 1→2 boundary. Merges execute through Fable only, on founder words.'
  },

  needsJack:[
    { t:'Say "merge 43, agree ×4" (to Fable)',
      d:'Lands the W9 backend engine (fitness editing, weight edit/delete, education content + forbidden-phrase test, Ava context aggregation, INV-4 governance fix) and logs the four agreed rulings. 10 seconds.' },
    { t:'Reply "Option 1" in the W10 chat',
      d:'Releases the public-website B3 restyle now that #42 is on main.' },
    { t:'E1 chat: paste the 3 matrix-dev values',
      d:'It names exactly which fields; keys never pass through chat. Then say "pasted" — it wires Supabase end-to-end (schema, seeds, live auth test).' },
    { t:'Hosting yes/no',
      d:'Reopened by necessity — the beta needs a public URL. Fable rec: Railway (~$5–20/mo). Say "approve Railway" or name another.' }
  ],

  /* pill status vocab: done | run | wait | hold (renderer maps to chip classes) */
  governance:[
    { t:'V2-000 Product Constitution', pill:{ s:'done', label:'v0.5.x · on main' },
      d:'Staged operating model §0 · product definition = protocol tracking + education · INV-7 rewritten (compounds are tracking/education entities; no sales/suppliers/recommendations) · Ava Conduct rules · INV-4 amended (Ava nav tab allowed, label + conduct unchanged; text fix rides PR #43).' },
    { t:'V2-005 Mobile Product Constitution', pill:{ s:'done', label:'on main' },
      d:'V1 feature set, 5-tab navigation, calculator spec law, Apple red lines, disclaimer-consolidation policy (one acknowledgment), How-to-take = self-entered instructions (founder ruling).' },
    { t:'PR #42 · W8 parity app', pill:{ s:'done', label:'MERGED @ f311650' },
      d:'B3 light theme via swappable tokens + 14 primitives · Today with protocols first + completion ring · Calendar w/ appointments + ICS subscribe/download · triple self-review, flags-off bundle byte-identical.' },
    { t:'PR #43 · W9 backend engine', pill:{ s:'wait', label:'Awaiting founder word' },
      d:'Fitness plan mutations, weight edit/delete + audit, education backend (12 categories seeded, forbidden-phrase test), Ava v2 context aggregation + persistence, meal photos, /me enrichment, INV-4 text fix. Diff reduced to W9 commits post-#42.' }
  ],

  lanes:[
    { t:'E1 — Supabase dev enablement', pill:{ s:'run', label:'Running — needs 3 pasted values' },
      d:'matrix-dev wiring: new-style key support check, Drizzle schema push, full seeds, app-on-Supabase end-to-end verification, live auth adapter test. Prod off-limits this lane.' },
    { t:'W10 — Public website B3 restyle', pill:{ s:'wait', label:'Ready — say "Option 1"' },
      d:'Marketing pages re-skinned to the app theme; copy still selling clinical services gets FLAGGED (not rewritten) into a founder decision list.' },
    { t:'Codex retroactive sweep', pill:{ s:'wait', label:'Jul 25 (quota reset)' },
      d:'Full review of all self-reviewed merges (W7 → W9 + fix passes); findings logged in each PR body.' },
    { t:'Next wave (gated)', pill:{ s:'hold', label:'On today\'s queue' },
      d:'Hosting + staging deploy → always-on preview URL → beta invites · Swift app Phase A (light-theme reassessment vs matrix-mobile harvest) · command-center B3 restyle · S10 iOS report if still wanted.' }
  ],

  /* state vocab: done | blocker | open */
  gates:[
    { g:'G-A · Backend engine merged', state:'blocker',
      d:'PR #43 — one founder word. Carries the INV-4 text fix that unblocks the eventual flag flip.' },
    { g:'G-B · Supabase wired',        state:'open',
      d:'E1 running; needs the 3 pasted matrix-dev values. Prod project untouched until enablement verified on dev.' },
    { g:'G-C · Hosting decision',      state:'blocker',
      d:'Last blocker between the build and a public URL. Founder call today.' },
    { g:'G-D · Codex retro sweep',     state:'open',
      d:'Jul 25. Merges this week were triple-self-reviewed; retro pass certifies them.' },
    { g:'G-E · Stage-0 go-live',       state:'open',
      d:'Staging deploy → founder walkthrough on a real URL → flag flip (founder-released) → first invited users → prod project to Pro tier.' },
    { g:'G-F · Stage 1 gate',          state:'open',
      d:'Counsel review (app/supply separation + Tommy IP assignment) · pricing final ($6.99/$49.99 planning) · App Store submission per W5 risk matrix.' },
    { g:'G-G · Legacy migration',      state:'open',
      d:'Executes at the Stage 1→2 boundary by design (25 clients, ~2k rows — an afternoon). Replit live + untouched until validated cutover.' }
  ],

  migrationNote:'re-staged by founder directive — executes at the Stage 1→2 boundary',
  /* tier vocab: mig (scripted migrate) | seed (re-seed) | arc (archive/manual) */
  migration:[
    { tier:'mig',  t:'MIGRATE — scripted set (tooling merged, shelved)',
      d:'S2 inventory + field mapping + idempotent dry-run-default import scripts + reconciliation/rollback plan all on main. Production truth: 25 clients / ~2k rows (G5 record in Drive) — execution is an afternoon when the stage calls for it.' },
    { tier:'mig',  t:'AIRTABLE + SYSTEM 3 (Tommy\'s Supabase) — one-time loads',
      d:'Airtable export per V2-001; System 3 frozen (don\'t delete), harvested then wound down — holds real client PHI, security follow-ups logged in the S10 audit.' },
    { tier:'seed', t:'RE-SEED — live now on dev',
      d:'Catalogs, education (12 categories, terminology-only), tracker compound library, demo data — all seeded by merged code; E1 pushes them to matrix-dev.' },
    { tier:'arc',  t:'ARCHIVE — events/telemetry/MIE plumbing',
      d:'Unchanged; rides the migration execution window.' }
  ],

  /* Sessions board — verified against live GitHub state 2026-07-19.
     Status vocab: running · PR up · review-clean · merged · failed. */
  sessionsNote:'live GitHub state · verified 2026-07-19',
  sessions:[
    { id:'OB',  lane:'Onboarding V2 Phases A–D + Constitution core',        branch:'preview/onboarding-v2-replit-exit', pr:'#26', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/26', status:'merged', detail:'@ 953d793f' },
    { id:'S1–S8 / W1–W6', lane:'Founder batch of 2026-07-18 (12 PRs + 1 closed-superseded)', branch:'—', pr:'#27–#39', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pulls?q=is%3Apr', status:'merged', detail:'rulebook, dashboard, tracker domain, Supabase adapters, integrations, migration tooling, Airtable docs, mockups; #29 closed as superseded' },
    { id:'M1',  lane:'D-13 flip — sovereign Swift repo + governance',        branch:'feature/v2-d13-swift-harvest',      pr:'#40', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/40', status:'merged', detail:'matrix-mobile created, storefront deleted, System 3 purged' },
    { id:'W7',  lane:'Protocols module + calculator web UI',                 branch:'feature/v2-protocols-ui',           pr:'#41', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/41', status:'merged', detail:'@ 5a474bd · triple self-review' },
    { id:'W8',  lane:'Mobile parity reset — B3 light theme',                 branch:'feat/v2-mobile-parity-reset',       pr:'#42', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/42', status:'merged', detail:'@ f311650 · founder-released Jul 19' },
    { id:'W9',  lane:'Backend gap-fill engine',                              branch:'feature/v2-backend-gaps',           pr:'#43', prUrl:'https://github.com/Jburke39/matrix-longevity-platform/pull/43', status:'PR up',  detail:'awaiting founder word: "merge 43, agree ×4"' },
    { id:'E1',  lane:'Supabase dev enablement',                              branch:'local worktree',                    pr:'—',   prUrl:'', status:'running', detail:'waiting on 3 founder-pasted values' },
    { id:'W10', lane:'Public website B3 restyle',                            branch:'feature/v2-site-b3-theme',          pr:'—',   prUrl:'', status:'running', detail:'correctly stopped pre-#42; say "Option 1" to release' },
    { id:'S10', lane:'iOS harvest + API-swap audit (matrix-ios)',            branch:'audit/harvest-api-swap-plan',       pr:'ios #1', prUrl:'https://github.com/Jburke39/matrix-ios/pull/1', status:'PR up', detail:'informed D-13; System 3 + storefront findings absorbed' },
    { id:'—',   lane:'Replit DB password rotation',                          branch:'—',                                 pr:'—',   prUrl:'', status:'running', detail:'support ticket sent Jul 18; Fable nags at 1 week' }
  ],

  settledNote:'do not reopen without Jack',
  settled:[
    { b:'Product', d:'Peptide, GLP-1, medication, fitness, nutrition & progress tracking + education. Calculates user-entered values, never selects them. No sales, no suppliers, no recommendations.' },
    { b:'Theme', d:'B3 light everywhere — app, dashboard, website, this tracker.' },
    { b:'Stack', d:'Supabase founder org (matrix-dev + matrix-prod, free → Pro at first real user) behind the Matrix API; Drizzle stays; new-style sb_ keys.' },
    { b:'Mobile', d:'Swift harvest, sovereign repo matrix-mobile (D-13 rev.2); Tommy IP assignment = Stage-1 counsel item; RN/Expo revisit-condition = Android.' },
    { b:'Stages', d:'0 private beta → 1 consumer launch (counsel, pricing final, App Store) → 2 clinical gate (BAAs, clinicians). Clinical modules built & dark. Migration at 1→2.' },
    { b:'Disclaimers', d:'One consolidated acknowledgment at first-run + the calculator provenance line. Nothing else. Attorney reviews pre-launch (removed-strings packet in PR #42).' },
    { b:'Pricing (planning)', d:'$6.99/mo · $49.99/yr · 7-day trial · free tier. Final at Stage-1 submission.' },
    { b:'Release channel', d:'Merges execute through Fable only, on founder words — sessions never merge, even if told to in-chat.' },
    { b:'Replit', d:'Live + untouched until validated cutover; merge ≠ deploy; flags flip only as deliberate founder steps.' }
  ],

  evidence:'Evidence basis — main @ f311650 verified by Fable Jul 19 · Supabase projects founder-confirmed Jul 19 · PR #43 diff reduced post-#42 · G5 closed (record in Drive) · Codex retro sweep due Jul 25. Fable\'s regeneration is the source of truth for this tab.'
};
