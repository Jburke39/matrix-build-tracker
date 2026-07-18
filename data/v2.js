/* window.MX.v2 — V2 Migration Command tab (7th tab, wired additively per the
   shell rule ratified at e540f85: the 6-tab shell is never replaced, V2 content
   lives additively). CONTENT OWNER: Fable. This file mirrors the standalone
   v2.html page, which remains in the repo as the fallback surface. */
window.MX = window.MX || {};
window.MX.v2 = {

  standalone:'v2.html',
  headline:'Foundation merged. Postgres is law.',
  meta:'State compiled by Fable · July 18, 2026 · 06:05 UTC · PR #26 MERGED to main @ 953d793f (founder-released; Codex APPROVE + Fable verified; LC-5/8/10/11 all VERIFIED). All V2 surfaces remain flag-gated OFF — the code shipped, the exposure did not. No deploy performed; Replit untouched.',

  arch:{
    title:'Ratified architecture — INV-14 (do not reopen)',
    body:'Postgres = single authoritative store for all client, health, audit, Ava, catalog, and application state. Airtable = controlled operational interface — reads projected from Postgres; write-back limited to the founder-approved set (task status · owner · follow-up date · fulfillment stage · refill stage · ops notes · non-clinical workflow status) via Matrix API only: validate → Postgres-first → audit → re-sync. Prohibited Airtable-write domains: clinical, labs, meds/doses, protocol approvals, doctor attribution, safety states, consent, identity, billing, Ava memory, audit history. Founder-owned auth tenant · direct GCS/S3 · direct Resend · external-tick scheduler retained. DB vendor pending Supabase eval; hosting deferred.'
  },

  needsJack:[
    { t:'P0 production-access session (~1 hr) — NOW THE HARD BLOCKER',
      d:'Replit dashboard walk: secret values, live Postgres topology, storage buckets, scheduled tick, DNS records, Clerk tenant ownership, connector auth. Everything migration-shaped waits on this.' },
    { t:'Release Phase 2 build',
      d:'SOT Inversion Core (V2-002 spec + protocols domain + client-core schema). Command ready — vendor-independent, dark, additive.' },
    { t:'Supabase eval verdict',
      d:'still out → unlocks D4 vendor picks (DB / auth / storage, one decision).' }
  ],

  /* pill status vocab: done | run | wait | hold (renderer maps to chip classes) */
  governance:[
    { t:'V2-000 Product Constitution', pill:{ s:'done', label:'v0.3.4 · on main' },
      d:'All invariants INV-1–14 in force. LC-1 through LC-11 built; LC-5/8/10/11 VERIFIED (Codex + Fable, 7c07af2). Launch-critical set complete in code, dark.' },
    { t:'V2-001 Architecture Disposition', pill:{ s:'done', label:'v1.0.0 · on main' },
      d:'C-sharpened adopted (9.5). 16-row disposition (D1–D16). SOT inversion: client profile + protocols move Airtable → Postgres.' },
    { t:'PR #26', pill:{ s:'done', label:'MERGED @ 953d793f' },
      d:'Phases A–D + Phase 1 (WB-1..6): 55+ files, 9k+ lines, migrations 0023–0025, double-reviewed, founder-released 06:05 UTC. Merge ≠ deploy — nothing live changed.' },
    { t:'V2-002 Engineering Architecture', pill:{ s:'wait', label:'Phase 2 · next' },
      d:'Postgres-first schema for the 7 workflows + Airtable interface contract + auth-provider-agnostic identity layer. Grounded in V2-000/V2-001.' }
  ],

  lanes:[
    { t:'Phase 2 — SOT Inversion Core', pill:{ s:'wait', label:'Awaiting release' },
      d:'WB-7 V2-002 spec (schema for 7 workflows, INV-14 interface contract, identity abstraction) · WB-8 protocols domain Postgres-authoritative (catalog + assignments, wired to protocol_approvals) · WB-9 client-core schema + Airtable import mapping spec. Dark, additive, vendor-independent.' },
    { t:'Claude Code — Supabase eval', pill:{ s:'run', label:'Running' },
      d:'Adversarial read-only eval. Verdict feeds D4 (DB/auth/storage in one decision).' },
    { t:'Row-count query (55 tables)', pill:{ s:'hold', label:'Queued — rides G5' },
      d:'Read-only; sets final migrate/archive/manual lines by real volume.' },
    { t:'Airtable rebuild + write-back worker', pill:{ s:'hold', label:'Gated on V2-002 + D4' },
      d:'Interface contract already law (V2-001 §4).' }
  ],

  /* state vocab: done | blocker | open */
  gates:[
    { g:'G1 · Identity',        state:'open',
      d:'Founder-owned auth tenant → per-client re-bind + one-time re-activation login. Gates all scripted loads. Vendor pick pending G4.' },
    { g:'G2 · Constitution',    state:'done',
      d:'V2-000 v0.3.4 + V2-001 on main.' },
    { g:'G3 · Row counts',      state:'open',
      d:'55-table read-only query — rides the G5 session.' },
    { g:'G4 · Vendor picks',    state:'open',
      d:'Supabase eval verdict → D4.' },
    { g:'G5 · P0 prod access',  state:'blocker',
      d:'9-item Replit-dashboard inventory. Founder hour required.' },
    { g:'G6 · Release blockers',state:'done',
      d:'LC-5/8/10/11 built + VERIFIED + merged.' },
    { g:'G7 · Cutover',         state:'open',
      d:'Shadow parity → cohort → all → watched DNS move, founder-released. Replit retired only after.' }
  ],

  migrationNote:'one-time load into authoritative V2 Postgres',
  /* tier vocab: mig (scripted migrate) | seed (re-seed) | arc (archive/manual) */
  migration:[
    { tier:'mig',  t:'MIGRATE — ~18 tables (scripted)',
      d:'clients, prospects, setup-submissions, lab-*, goals, weight-logs, ava-summaries/memory/escalations, payments, vault-documents, progress-photos, nutrition, protocol-adherence, welcome-calls, mie-safety, audit-log, email-suppression = compliance-migrate, never archive. Gated on G1.' },
    { tier:'mig',  t:'AIRTABLE EXPORT — one-time authoritative load',
      d:'Client core profiles, protocols, compounds → transform → V2 Postgres (SOT inversion, V2-001 D1/D2). Live base contents UNPROVEN until G5.' },
    { tier:'seed', t:'RE-SEED — ~15 tables',
      d:'Catalogs, pricing from Jack\'s price book, biomarker defs, education.' },
    { tier:'arc',  t:'ARCHIVE — ~20 tables + files manual',
      d:'Events/telemetry/MIE plumbing pending G3. Files: manual re-upload (few, confirmed).' }
  ],

  settledNote:'do not reopen without Jack',
  settled:[
    { b:'INV-14 architecture', d:'Postgres single SOT; Airtable controlled interface with governed write-back (ratified 2026-07-18).' },
    { b:'D2/D-3/D-4/D-5 resolved', d:'Ava material-conversation definition; fitness & nutrition launch-critical (LC-11); $199 CTA hide approved (execution rides G5 finding); V2 launch = onboarding-only go-live.' },
    { b:'Greenfield V2', d:'legacy schema + live Airtable = import sources, not design inputs.' },
    { b:'§3.4 founder protocol approval', d:'Doctor Prescribed / Founder Reviewed, full audit; never represented as licensure.' },
    { b:'Hybrid migration', d:'scripted / re-seed / Ava selective / manual files.' },
    { b:'Stack', d:'shadcn/ui + Tremor + TanStack Table; Drizzle stays; Supabase evaluate-only until verdict.' },
    { b:'Hosting deferred', d:'Replit live + untouched until validated cutover; no DNS moves before then.' },
    { b:'Payments', d:'Venmo manual, entity/OBA-gated; not pushed.' },
    { b:'Tracker rule', d:'V2 content lives additively; the 6-tab shell is never replaced.' }
  ],

  evidence:'Evidence basis — main tip 953d793f verified by Fable Jul 18 06:05+ · Codex APPROVE + Fable verification @ 7c07af2 · V2-000 v0.3.4 / V2-001 v1.0.0 on main · live SOT UNPROVEN pending G5. Fable\'s regeneration is the source of truth for this page.'
};
