# MATRIX FOUNDER BUILD COMMAND — CANONICAL IMPLEMENTATION SPECIFICATION
**Version 1.1 (WP0, final) — Governs WP1 / WP2 / WP3**
Owner: Fable (canonical authority) · Implementer: Claude Code · Approver: Jack
Date: July 15, 2026
Repo: Jburke39/matrix-build-tracker (Jack is making this repo PRIVATE)
Drive copy: pending Drive quota — this repository file is the immediate WP1 authority. Do not treat a Drive copy as existing until Fable confirms it.

---

## 0. GOVERNING DECISIONS (Jack-approved)

- **Model: Option D.** Fable owns spec, canonical content, data files, status definitions, and ongoing operating-data updates. Claude Code owns application implementation, structure, behavior, testing, screenshots, verification. Jack approves commercial facts, offers, pricing, positioning, final UX.
- **Sequence:** WP1 shell/restructure → WP2 Sales+Marketing → WP3 Ava Intelligence page. Branch per WP; Fable reviews and merges. No production deployment of anything by Code.
- **Stack:** vanilla HTML/CSS/JS, multi-file, no framework, no build step, GitHub Pages.
- **Privacy (hard rules, apply even after repo is private):** NEVER commit prospect names, personal contact info, client information, private pipeline notes, or sensitive operating information to Git. Opportunity entries and outcome numbers are browser-local. Repo data files may contain approved strategy, templates, non-sensitive campaign content, operating structures.
- **D1–D9 do not block WP1.** WP1 builds structure and rendering contracts; unresolved commercial facts render as `Needs Jack` chips and are never fabricated. D1–D9 must be resolved before WP2 is treated as commercially approved.

## 1. DATA-FILE ARCHITECTURE (code/content contract)

Claude Code creates these in WP1. After WP1, content ownership of `/data/*` = Fable; Code never edits data content, Fable never edits app code.

| File | Namespace | Contents |
|---|---|---|
| `/index.html` | — | App shell: nav, tab mounts, drawers, chat shell. **CODE owns** |
| `/app.css` | — | Design tokens + components, extracted from current file, visually unchanged. **CODE owns** |
| `/app.js` | — | Rendering, tab logic, persistence, edit controls, import/export. **CODE owns** |
| `/data/build.js` | `window.MX.build` | Lanes, items, statuses, needsJack, authorized-lane registry, `flags` (incl. `avaLauncher:false`) |
| `/data/readiness.js` | `window.MX.readiness` | 10 company domains × 4 pass/fail gates + evidence strings + weights |
| `/data/infra.js` | `window.MX.infra` | Infrastructure Map sections/nodes incl. new Commercial layer |
| `/data/org.js` | `window.MX.org` | Agent chart + `activeSequence` boolean per agent |
| `/data/ava.js` | `window.MX.ava` | Capability inventory (Client + Business), maturity, evidence, scenarios (WP3 fills content) |
| `/data/sales.js` | `window.MX.sales` | Offers (sellableNow/comingSoon), ICPs, strategy, process, playbook, outcome definitions (WP2 fills content; WP1 stubs schema) |
| `/data/marketing.js` | `window.MX.marketing` | Positioning, claims (taxonomy §5), pillars, campaign, postNext, board seeds, library (WP2 fills; WP1 stubs schema) |
| `/data/shared.js` | `window.MX.shared` | Audiences, offer refs, campaigns, CTAs, leadSources, decisionQueue (D1–D10 objects) |
| `/data/archive-command-center.js` | `window.MX.archive` | Legacy Command Center content preserved verbatim, labeled ARCHIVE |

Loading: plain `<script>` tags. App renders exclusively from `window.MX.*`. Acceptance grep test: zero content strings in app files.

**Browser-local (localStorage, prefix `mx2_`, schema-versioned):**
`mx2_status` (user status overrides; migrated once from `mxbuild4`), `mx2_pipeline` (sales opportunities — never committed), `mx2_outcomes` (hand-entered numbers), `mx2_board` (production-board overrides), `mx2_notes` (user-entered notes), `mx2_decisions` (decision check-offs). Existing `mxava_*` keys untouched.

**Import/Export (WP1 foundation, Jack-directed):**
- Export: one control downloading all `mx2_*` state as one JSON file with `schemaVersion`.
- Import: file picker → **schema-version validation** → **clear error state for invalid files** → **preview/confirmation showing what will change before any overwrite** → **migration support where reasonable** → **no silent destruction** (existing data replaced only on explicit confirm; offer merge where feasible, replace otherwise, stated plainly).

## 2. NAVIGATION (6 tabs)

`Build Command | Infrastructure Map | Agent Org Chart | Ava Intelligence | Sales | Marketing`
- Command Center tab REMOVED (content handling §6).
- Build Command remains homepage; visually unchanged except the two-metric header (§3).
- Personal Ava dashboard widgets (stack/journal/streak/domains) leave primary nav; their localStorage keys preserved untouched. Personal Ava lives only in the (flag-gated) launcher's Personal mode.
- WP1 ships Ava Intelligence / Sales / Marketing tabs as structured placeholders rendering their schema stubs + `Needs Jack` chips — honest empty states, not fake content.

## 3. COMPLETION METRICS (two, both with disclosed logic)

**A) Active Build Completion** — scope: authorized lanes only (current 7: Commercial/Website, MIE, Command Center Phase A, Production Stability, Infrastructure/Deploy, Governance, Ava Intelligence). Formula: `sum(itemWeight)/count(items)`; weights done 1.0 / in-progress 0.5 / blocked 0.25 / next 0 / backlog 0. Per-lane % shown. Disclosure drawer lists included lanes, item counts, weights. No unauthorized future work in the denominator.

**B) Matrix Company Readiness** — scope: 10 domains — Website & Brand; MIE; Client Platform; Ava; Clinical & Compliance; Pharmacy & Fulfillment; Payments & Finance; Sales; Marketing; Infrastructure & Production. Each domain: 4 named pass/fail GATES with an evidence string (defined in `readiness.js`; e.g. Payments: entity formed → bank account → processor live → platform revenue collected). Domain = gates passed ÷ 4. Company = weighted mean (equal weights v1; weights live in the data file and are always disclosed in the drawer). No partial credit. This number is expected to read low; that is correct and honest.

## 4. AVA INTELLIGENCE PAGE (WP3 content; WP1 structure)

Two capability domains: **Client Ava** and **Business Ava**. Personal Ava excluded entirely. Layout (native DOM; reference image = composition guide only, never a flattened page image): center = Ava + MIE core; left = connects-to; right = can-do; surrounding = intelligence domains; bottom = representative scenarios.

**Maturity model (evidence-gated; level may never exceed evidence class — enforced by a validation function in the data layer):**
- L1 DEFINED — spec exists. Evidence: spec doc ref.
- L2 CONNECTED — data source wired. Evidence: merged PR + schema.
- L3 UNDERSTANDS — interprets data. Evidence: merged engine + tests.
- L4 ACTS — bounded action. Evidence: merged action path + tests + safety gating.
- L5 PROACTIVE — initiates per MIE-AVA-001. Evidence: proactive loop live.

Status vocabulary: Live / Partial / Simulated / Specified / Planned / Blocked. Capability record: `{name, domain, maturity, status, dataSources, understands, actions, reliability, evidence[], limitations, nextMilestone, buildRef}`.
Truth anchor (initial scores from repo state): most Client Ava capabilities L1 (11-doc suite); labs L2 (#13); safety classification L3 (#10, 62 tests); launcher board-reading SIMULATED; nothing L4+ today. Scenarios from the Worked-Example Bank, labeled Simulated or Specified — never live.

## 5. SALES + MARKETING (WP2 content; WP1 schemas)

**Claims taxonomy (Jack-directed; replaces "approved/needs-review"):**
`Founder approved` · `Counsel reviewed` · `Clinically substantiated` · `Needs counsel review` · `Needs substantiation` · `Internal only` · `Do not publish`
Founder approval NEVER implies legal, regulatory, or clinical approval; the UI must not conflate these labels.

**Sales sections:** A Current Offer — SELLABLE NOW (Matrix Concierge, provisional per D1) + COMING SOON (per D9) with per-fact status chips. B Ideal Client Profiles (per D10 priority). C Strategy ranked: existing clients/referrals → warm network → clinician/trainer/gym partners → social inbound. D Process: Attention → Conversation → Qualified → Consultation → Decision → Onboarding. E Active Opportunities: editable local pipeline; fields: name, organization, source, ICP, interest, stage, estValue, probability, lastContact, objection, nextAction, dueStatus, owner, outcome, notes. F Conversation Playbook (seeded verbatim in WP2). G Outcomes (definitions in data; numbers hand-entered local).

**Example-data rules (Jack-directed):** the 3 sample pipeline rows must be unmistakably labeled `EXAMPLE`, contain no realistic personal identifiers (use `Example Prospect A/B/C`), be deletable in one action ("Remove all examples"), and be excluded from outcome calculations by default.

**Marketing sections:** A Positioning (what Matrix is / is not; promise; differentiation; narrative; claims under the §5 taxonomy — current known states: superintelligence phrasing `Founder approved` + `Needs counsel review`; cancer-screening & regenerative claims `Needs counsel review` + `Do not publish` until cleared; Bio-Age framing `Internal only` as architecture, not a client claim). B Audience (shared objects). C Pillars (5): Fragmented-Health Problem; Connected Health OS; Ava & MIE; Longevity Education; Building-Matrix Founder POV; client-stories pillar deferred until substantiated. D Active Campaign: "Establish Matrix + founding-client conversations." E Post This Next (5 fully scripted posts in WP2). F Production Board: Idea → Approved → Needs Jack → In Production → Review → Ready → Published. G Content Library (structure). H Outcomes: DMs, qualified conversations, consultations, clients, revenue attribution primary; likes non-primary.

**Shared model (`shared.js`):** audience, offer, campaign, CTA, leadSource, conversionOutcome, lesson objects referenced by id from both tabs — one definition of the target client by construction.

## 6. COMMAND CENTER CONTENT (WP1 handling)

Canonical production CC authority already exists: **MIE-CMD-001** + BUILD-001 Phase 2. WP1 procedure (Code): move the current CC tab's full content array **verbatim** into `/data/archive-command-center.js`, labeled ARCHIVE, and remove the tab. Post-WP1 (Fable data pass): diff archive against MIE-CMD-001; map future modules → `infra.js`, implementation status → `build.js`, agent responsibilities → `org.js`; create a new Drive doc ONLY where a verified gap vs MIE-CMD-001 exists (expected: none). Nothing is destroyed at any step.

## 7. AVA LAUNCHER (feature-flagged; Jack-directed)

Implement behind `MX.build.flags.avaLauncher` (default `false`). Enable ONLY after acceptance tests prove ALL of:
1. Reads the current local data model (`window.MX.*` + `mx2_status`) live — computed answers, not canned strings.
2. Knows the active tab and references it correctly.
3. Answers the approved question set: needs-Jack queue; blocked items; Active Build %; Company Readiness score; per-lane status; decision queue (D1–D10 open items); next actions.
4. Clearly identifies Business vs Personal mode (existing `mxava_*` keys; Personal remains the only home of personal data, browser-local).
5. States plainly when it lacks the information — no generic filler.
6. Zero repeated canned responses across the tested question set.
If any criterion fails: WP1 ships with the launcher hidden. The Ava Intelligence page ships regardless.

## 8. PROVISIONAL COMMERCIAL DECISIONS (D1–D10 — render states)

- **D1 Offer name:** `Matrix Concierge` — chip: `Working name — Needs Jack final approval`. Never presented as a finalized public product name.
- **D2 Price:** UNRESOLVED — chip: `Needs Jack — current pricing not frozen`. Do NOT use $899, $1,299, $99, $149, or $199 as current paid-offer pricing unless Jack explicitly confirms.
- **D3 Payment terms:** render exactly: `Manual/current-client payment process; standardized processor and automated checkout are not yet live.` No processor or schedule named without confirmation.
- **D4 Deliverables:** structured decision fields — Assessment/intake; Labs & biomarker review; Clinician involvement; Protocol development; Medication/peptide coordination; Nutrition; Training; Recovery; Check-ins; Ongoing concierge support; Ava access; Refills & logistics. Each field supports: `Included / Not included / Partial / Coming soon / Needs Jack`. All default `Needs Jack`.
- **D5 Fulfillment:** render: `Founder-led concierge coordination supported by authorized independent clinicians, pharmacy partners and current operational tools.` Exact responsibilities chip: `Needs Jack and clinical-operating confirmation`. Never imply Jack personally practices medicine or prescribes.
- **D6 Capacity:** UNRESOLVED — chip: `Needs Jack — confirm safe concurrent client capacity`. Do not infer from existing client count.
- **D7 Geography:** UNRESOLVED — chip: `Needs clinical/legal confirmation by state`. Never state nationwide availability.
- **D8 Compliance baseline (seeded as operating constraints, not counsel substitutes):** no diagnosis by marketing or Ava; no guaranteed outcomes; no independent prescribing by Ava or non-clinical staff; clinical decisions remain with authorized clinicians; educational/lifestyle estimates never represented as medical diagnostic tests; claims needing substantiation or counsel review remain unpublished; representative/simulated Ava capabilities labeled accurately.
- **D9 Post-launch-only (Coming Soon):** automated website application & onboarding; standardized checkout & payment processing; integrated client portal; production Ava experience; full MIE orchestration; automated lab ingestion & longitudinal intelligence; integrated protocol/adherence/refill tracking; wearable & Apple Health integration; production biological-age tracking; permanent founder & operational Command Center.
- **D10 Audience priority (CONFIRMED):** 1) warm network, existing relationships, current clients, referrals; 2) high performers already spending on fragmented health/longevity/performance services; 3) strategic referral partners (clinicians, trainers, gyms, wellness operators); 4) broader social inbound after message + conversion process are proven.

## 9. WP ACCEPTANCE TESTS (Code verifies; Fable gates)

**WP1:** 6 tabs render; CC tab gone with archive file present and verbatim-complete; zero content strings in app files (grep); `mxbuild4` → `mx2_status` migration preserves overrides (tested); both metrics render with disclosure drawers; import/export round-trips with validation, preview-before-overwrite, and invalid-file error state; commercial layer renders in Infra Map; org chart Active-Build-Sequence filter works; launcher meets §7 or ships hidden; 390px mobile screenshots of every tab; a11y pass (landmarks, focus order, contrast); no deployment; no changes outside this repo.
**WP2:** all sections render from data; pipeline CRUD + example rules (§5) + import/export work; no prospect data in repo (grep); `Needs Jack` chips render for every unresolved fact; claims taxonomy renders correctly; mobile screenshots.
**WP3:** capability records render with maturity + evidence; validation function proves no capability exceeds evidence class; scenarios labeled Simulated/Specified; mobile screenshots.

## 10. SOURCE-OF-TRUTH REFERENCES

- This document: `docs/founder-build-command-v1.md` (this repo) — immediate authority.
- Drive copy: pending quota; Fable will confirm when it exists.
- Ava governance: 11-doc suite in Drive (FABLE OUTPUTS) — voice, examples, escalation, knowledgebase, evaluation, memory, onboarding, enums.
- Production Command Center authority: MIE-CMD-001 + BUILD-001 Phase 2 (platform repo `docs/mie-specs/`).
- Platform repo: `Jburke39/matrix-longevity-platform` — OUT OF SCOPE for all WPs; never modified.

*END SPEC v1.1*
