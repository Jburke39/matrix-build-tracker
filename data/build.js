/* window.MX.build — Build Command lanes, statuses, needsJack, authorized-lane registry, flags
   CONTENT OWNER: Fable (canonical operating content).
   Code owns app.js/app.css/index.html only. Loaded as a plain <script>;
   populates a stable window.MX namespace. */
window.MX = window.MX || {};
window.MX.build = {
  "flags": {
    "avaLauncher": false
  },
  "authorizedLanes": [
    "commercial",
    "mie",
    "command-center",
    "production",
    "infrastructure",
    "governance",
    "ava-intelligence"
  ],
  "statusWeights": {
    "done": 1,
    "progress": 0.5,
    "blocked": 0.25,
    "next": 0,
    "backlog": 0
  },
  "statusLabels": {
    "done": "Done",
    "progress": "In Progress",
    "blocked": "Blocked",
    "next": "Next",
    "backlog": "Backlog"
  },
  "cycleOrder": [
    "backlog",
    "next",
    "progress",
    "blocked",
    "done"
  ],
  "lanes": [
    {
      "lane": "Commercial — Website & Brand",
      "owner": "Claude Code builds · Fable specs/merges · Jack drives vision",
      "items": [
        {
          "id": "c1",
          "t": "Apex homepage / — cinematic 6-section — MERGED (#14)",
          "n": "Ava hero video, four-step journey, Her/Him split, value carousel, $199 band, footer. Fraunces serif + trackEvent shim. Assets byte-identical, no audio",
          "s": "done"
        },
        {
          "id": "c2",
          "t": "/men (Matrix for Him) — MERGED (#17)",
          "n": "Editorial rebuild sharing apex design system. Supersedes #12's /men. Compliance locks honored",
          "s": "done"
        },
        {
          "id": "c3",
          "t": "/women (Matrix for Her) — MERGED (#15)",
          "n": "Editorial twin, women-first, no pregnancy/cycle assumptions. Both routes wired in App.tsx",
          "s": "done"
        },
        {
          "id": "c4",
          "t": "/ava (The Ava Difference) — MERGED (#16)",
          "n": "5 approved assets, clinician-boundary copy, founder-approved superintelligence phrasing. Ships as mockup; wiring /ava into the live router + nav is a small follow-up",
          "s": "done"
        },
        {
          "id": "c5",
          "t": "Old v1 (#12) closed",
          "n": "Superseded by the new editorial /men + /women. Clean retirement",
          "s": "done"
        },
        {
          "id": "c6",
          "t": "Preview pipeline (Vercel) — BLOCKED on Clerk runtime crash",
          "n": "matrix-longevity-site connected; per-branch previews auto-build. But the site black-screens: bigg-os loads clerk.browser.js at runtime on public routes; #20 guarded the module-load throw but not the runtime init. Dedicated Claude Code lane is diagnosing against the real Vercel build",
          "s": "blocked",
          "jack": "Preview fix is in Claude Code — paste the Clerk-runtime debug prompt (Fable provided it in chat)"
        },
        {
          "id": "c7",
          "t": "/ava route wiring + value-CTA deep pages",
          "n": "Wire /ava into live router+nav; repoint value-panel CTAs to dedicated pages when they exist. Small follow-ups",
          "s": "next"
        },
        {
          "id": "c8",
          "t": "Pre-launch compliance & accuracy sweep",
          "n": "Superintelligence + cancer-screening/regenerative-medicine claims (founder-approved, logged for counsel), Bio-Age framing, marker counts, MD name gate, representative-example labels — LAUNCH GATE",
          "s": "backlog"
        }
      ],
      "laneId": "commercial"
    },
    {
      "lane": "MIE — Intelligence Engine",
      "owner": "Claude Code · specs in docs/mie-specs",
      "items": [
        {
          "id": "m1",
          "t": "Spec estate committed to docs/mie-specs (canonical)",
          "n": "All 21 governing specs byte-faithful in-repo (cp + sha-verified); CON-001 recovered non-empty",
          "s": "done"
        },
        {
          "id": "m2",
          "t": "Wave 1 — Pure Intelligence Core — MERGED (#8)",
          "n": "mie-registry, mie-signals, mie-patterns, mie-interventions + golden harness",
          "s": "done"
        },
        {
          "id": "m3",
          "t": "Foundation F1–F5 — MERGED (#10)",
          "n": "mie-core + mie-safety. 62 safety tests, 100% cov; Codex P1 fail-open fixed",
          "s": "done"
        },
        {
          "id": "m4",
          "t": "Bio-Age prep — MERGED (#9)",
          "n": "Dossier, contract, validation harness, reference data (all numbers null/PENDING+cited)",
          "s": "done"
        },
        {
          "id": "m5",
          "t": "Labs Foundation L1+L2 — MERGED (#13)",
          "n": "lab_reports + lab_results (per-report identity, PHI-minimized) + registry projection (40 defs / 149 aliases / 76 unit-conversions). Flag-gated OFF; migration 0022 NOT applied",
          "s": "done"
        },
        {
          "id": "m6",
          "t": "Health Intelligence signals (11.07) — in Codex review (#18)",
          "n": "Typed projection over mie_events (no migration). H1 signal persistence at Checkpoint 1. Awaiting Codex, then founder merge",
          "s": "progress"
        },
        {
          "id": "m7",
          "t": "Apply migration 0022 to Replit Dev DB",
          "n": "Labs tables are inert on main until applied. Watched psql-runbook pass (never drizzle-push), after confirming DB host from secret. Founder-scheduled",
          "s": "next",
          "jack": "Apply migration 0022 to Dev (watched, when ready)"
        },
        {
          "id": "m8",
          "t": "Bio-Age clinical model ratification",
          "n": "Architecture ratified (Class A Clinical Biomarker Age + fallback). Clinical model gated on RES-001..005 + PCAC Jul 23-24 — NOT a client claim yet",
          "s": "blocked"
        },
        {
          "id": "m9",
          "t": "Phases 5–9 — Ava orchestration, stack reconcile, refills, Bio-Age V1, recommendation loop",
          "n": "Consume labs + signals foundations. Backlog until 11.07 lands",
          "s": "backlog"
        }
      ],
      "laneId": "mie"
    },
    {
      "lane": "Command Center — Matrix OS (Phase A)",
      "owner": "Claude Code · PRs #5 #7 merged",
      "items": [
        {
          "id": "o1",
          "t": "A1 + A2 — control plane + CEO Today (operator UI merged)",
          "n": "#5 Needs-Attention panel + #7 Phase A docs on main; 8 seeded departments, honest UNKNOWN states",
          "s": "done"
        },
        {
          "id": "o2",
          "t": "A3 — Command Page template + Ops/Safety screens",
          "n": "Data layer done; screens building",
          "s": "progress"
        },
        {
          "id": "o3",
          "t": "CEO Today turn-on PLAN written, holding",
          "n": "docs/build/ceo-today-turn-on-plan.md: only migration 0021 (not 0020) + 2 flags, migration-then-flag order, instant rollback, verification checklist. Founder green-lights the live pass when ready",
          "s": "next",
          "jack": "Schedule CEO Today turn-on (plan ready)"
        },
        {
          "id": "o4",
          "t": "A4/A5 — decision cards, drawers, protected actions",
          "n": "Final Phase A increments",
          "s": "next"
        },
        {
          "id": "o5",
          "t": "Phase A acceptance report",
          "n": "Every criterion mapped to evidence; Fable QA gate",
          "s": "backlog"
        }
      ],
      "laneId": "command-center"
    },
    {
      "lane": "Production Stability — Incidents & Hardening",
      "owner": "Claude Code · PR #11 merged",
      "items": [
        {
          "id": "p1",
          "t": "Incident 1 resolved — dev-admin fallback served admin to all",
          "n": "NODE_ENV=production set; routing verified",
          "s": "done"
        },
        {
          "id": "p2",
          "t": "Incident 2 resolved — Airtable 429 blanked portals",
          "n": "CONFIRMED via logs. Upgraded + graceful-degradation shim shipped live",
          "s": "done"
        },
        {
          "id": "p3",
          "t": "Fail-closed admin hardening + audit trail — MERGED (#11)",
          "n": "strictBool + double-gated dev-admin + admin_session audit log. Misconfig locks CLOSED. 9 tests",
          "s": "done"
        },
        {
          "id": "p4",
          "t": "Replit dependency map (§1.1) — MERGED (#11)",
          "n": "Every Replit coupling + staging replacement. Prod DB portable. Object storage = the real lift",
          "s": "done"
        },
        {
          "id": "p5",
          "t": "Confirm prod DATABASE_URL host (OQ-1)",
          "n": "Evidence points to Replit-internal; confirm from the prod secret — do not paste it",
          "s": "next",
          "jack": "Confirm prod DB host (don't paste secret)"
        },
        {
          "id": "p6",
          "t": "Portal reads Airtable → Postgres on current prod (§2)",
          "n": "Flagged PRs to Replit prod; Airtable demoted to back-office. Next hardening wave",
          "s": "next"
        }
      ],
      "laneId": "production"
    },
    {
      "lane": "Infrastructure — Deploy & Staging (Replit stays home)",
      "owner": "Claude Code executes · Fable specs",
      "items": [
        {
          "id": "i1",
          "t": "Vercel preview project connected (matrix-longevity-site)",
          "n": "Per-branch + per-PR preview URLs auto-build. Root artifacts/bigg-os, Vite, output dist/public, SPA rewrite (#19). Launch-gate preview — once the Clerk crash is fixed, it's the click-through-before-prod tool",
          "s": "progress"
        },
        {
          "id": "i2",
          "t": "Vendor spine DEFERRED (founder decision)",
          "n": "Stripe/Cal/Resend/Twilio out of scope until Jack re-opens",
          "s": "done"
        },
        {
          "id": "i3",
          "t": "Merge ≠ deployed — nothing is live on Replit yet",
          "n": "Everything sits on main only. Replit goes live on a deliberate, watched Republish. Do NOT republish until the Vercel preview proves the site works",
          "s": "next",
          "jack": "Do NOT Republish until preview verified working"
        },
        {
          "id": "i4",
          "t": "Local dev environment (Mac + dev DB)",
          "n": "Kills Replit dependency for verification",
          "s": "next"
        },
        {
          "id": "i5",
          "t": "Cutover — DORMANT until founder readiness declaration",
          "n": "Replit stays home until every piece is 100% functional AND Jack knows how to operate it",
          "s": "backlog"
        }
      ],
      "laneId": "infrastructure"
    },
    {
      "lane": "Governance — Pricing, Finance, Legal",
      "owner": "Fable · outside counsel · CPA",
      "items": [
        {
          "id": "g1",
          "t": "Core governance docs saved; credit ruleset ratified",
          "n": "00.0 Root Authority, 09.02.4, pricing amendment. Compliance rules enforced across all marketing",
          "s": "done"
        },
        {
          "id": "g2",
          "t": "Vendor & Subscription Register (09.07, CFO domain)",
          "n": "All tools tracked — cost, renewal, quota alerts. Now includes Vercel (Hobby). Financial fields need Jack",
          "s": "progress",
          "jack": "Fill 09.07 financial fields (costs/renewals)"
        },
        {
          "id": "g3",
          "t": "Counsel review list — superintelligence + cancer-screening + regen-medicine claims",
          "n": "Founder-approved to keep on-site now; LOGGED for the eventual legal-counsel pass (not a blocker today, is a launch gate)",
          "s": "next",
          "jack": "Add to counsel review list (logged)"
        },
        {
          "id": "g4",
          "t": "Pricing anchor — confirm $99/$149 program floors",
          "n": "Confirm public floors are settled before launch. PCAC Jul 23-24 unlocks formulary",
          "s": "next",
          "jack": "Confirm $99/$149 floors (pre-PCAC)"
        },
        {
          "id": "g5",
          "t": "HSA/FSA counsel + CPA determination",
          "n": "External sign-offs gating credit language at launch",
          "s": "blocked",
          "jack": "Engage counsel & CPA"
        },
        {
          "id": "g6",
          "t": "PCAC ruling (Jul 23-24) → formulary + pricing unlock",
          "n": "Green-lists held-out compounds; unlocks pricing-anchor + Bio-Age clinical path",
          "s": "next"
        },
        {
          "id": "g7",
          "t": "Entity + OBA disclosure + business banking",
          "n": "DELIBERATELY DEFERRED (founder decision). Becomes launch gate with legal workstream",
          "s": "backlog"
        }
      ],
      "laneId": "governance"
    },
    {
      "lane": "Ava Intelligence — Voice, Specs & Interface",
      "owner": "Fable specs · Claude Code builds live engine · Jack = sole trainer",
      "items": [
        {
          "id": "a1",
          "t": "Ava governance spec suite — 11 docs written (Drive)",
          "n": "Voice/Method/Communication, Worked-Example Bank v0.1+v0.2, Escalation Message Library, Knowledgebase Governance, Behavioral Evaluation & Red-Team, Memory/Know-the-Person, Onboarding, tone_profile enums, Suite Index. Grounded in AVA-001 + SEC-001. The rulebook Phase 5 builds against",
          "s": "done"
        },
        {
          "id": "a2",
          "t": "Voice locked — coach, not chatbot (founder-directed)",
          "n": "Question-under-the-question; longevity-is-living (never a vice); elevation protocol (intent -> emergency gate -> consent -> coach -> loop-close); numbers to educate, never diagnose. Reta case is canonical",
          "s": "done"
        },
        {
          "id": "a3",
          "t": "Ava layer shipped to this tracker (interface shell)",
          "n": "5th Ava tab (stack, journal, streak, domains) + corner chat on every tab. Two separate Avas (Personal + Business), each browser-local memory. Profile paste-at-runtime, never committed. Business Ava reads this live board. Voice-true placeholder responder",
          "s": "done"
        },
        {
          "id": "a4",
          "t": "Wire live-AI Ava (swap placeholder for governed engine)",
          "n": "Claude Code lane. Build the real Ava from the 11 docs; profile moves to a private secure store, never the public page. Gated on Phase 5 opening (#18 merge)",
          "s": "next",
          "jack": "Say the word and Fable writes the single Claude Code prompt to wire live Ava"
        },
        {
          "id": "a5",
          "t": "Ava spec v0.3 — eval thresholds + gap examples",
          "n": "Numeric pass-bars per eval suite; v0.3 example gaps (plateau/quit, grief, data-gaming, perimenopause, 'I feel great why labs'); delivery_channel enum; quiet-hours/emergency override",
          "s": "next"
        },
        {
          "id": "a6",
          "t": "Founder review of the voice",
          "n": "Read EX-01 (Reta), the elevation protocol (Governance 5), and the living-side boundary (Governance 1). Everything calibrates to these",
          "s": "next",
          "jack": "Review the Reta example + elevation protocol; confirm the voice is right"
        }
      ],
      "laneId": "ava-intelligence"
    }
  ]
};
