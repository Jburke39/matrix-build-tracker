/* window.MX.infra — Infrastructure Map sections/nodes incl. Commercial & Business Infrastructure
   CONTENT OWNER: Fable (canonical operating content).
   Code owns app.js/app.css/index.html only. Loaded as a plain <script>;
   populates a stable window.MX namespace. */
window.MX = window.MX || {};
window.MX.infra = {
  "sections": [
    {
      "h": "Who We Serve",
      "cap": "audience",
      "cols": "g4",
      "items": [
        {
          "t": "Clients",
          "s": "built",
          "what": "Individuals optimizing healthspan. Client portal exists today (Replit product)."
        },
        {
          "t": "Executives",
          "s": "planned",
          "what": "High performers managing health as a strategic asset. Positioning, not a built surface."
        },
        {
          "t": "Concierge Members",
          "s": "spec",
          "what": "White-glove tier with dedicated team + Ava. Matrix Private — future premium tier."
        },
        {
          "t": "Partners & Providers",
          "s": "planned",
          "what": "Clinics, labs, specialists, data partners. External-partner integrations not built."
        }
      ]
    },
    {
      "h": "Matrix Intelligence Engine — 5 Layers",
      "cap": "the engine",
      "cols": "g3",
      "items": [
        {
          "t": "Data Ingestion Layer",
          "s": "progress",
          "what": "Labs, wearables, questionnaires, lifestyle, protocol logs.",
          "gov": "Labs ingestion L1+L2 merged (#13); wearables/questionnaires not built",
          "deps": "registry, lab spine"
        },
        {
          "t": "Intelligence Layer",
          "s": "progress",
          "what": "AI scoring, pattern recognition, trend/risk, optimization.",
          "gov": "Wave 1 engines merged (#8); signals #18 in review; scoring not wired"
        },
        {
          "t": "Decision & Automation Layer",
          "s": "spec",
          "what": "Protocol adjustments, smart recs, alerts/escalations, task automation, workflow triggers.",
          "gov": "command_actions backbone exists (#1); automation not built",
          "deps": "Intelligence Layer"
        },
        {
          "t": "Communication Layer",
          "s": "spec",
          "what": "Ava conversations, client/team notifications, education delivery, 2-way messaging.",
          "gov": "MIE-AVA-001; Phase 5 not started",
          "deps": "messaging vendor (deferred)"
        },
        {
          "t": "Experience Layer",
          "s": "progress",
          "what": "Client dashboard, mobile app, Ava interface, reports, resource library.",
          "gov": "Client dashboard exists; Ava interface not built; mobile app not started"
        }
      ]
    },
    {
      "h": "Core Platform Modules",
      "cap": "modules",
      "cols": "g3",
      "items": [
        {
          "t": "Client Portal",
          "s": "built",
          "what": "Overview, health timeline, protocols/stack, lab results, goals. Pre-existing Replit product.",
          "gov": "Replit product line (#2 reconciled)"
        },
        {
          "t": "Ava AI Concierge",
          "s": "spec",
          "what": "Daily check-ins, protocol insights, lab explanations, coaching, proactive outreach.",
          "gov": "MIE-AVA-001; scaffolding files exist (ava-knowledge-base.tsx, ava-escalations.tsx), engine not built"
        },
        {
          "t": "Command Center",
          "s": "progress",
          "what": "Client oversight, health alerts, protocol mgmt, team collab, automation hub.",
          "gov": "Operator UI #5 + CEO Today #7 merged; most views planned (see Command Center tab)"
        },
        {
          "t": "Protocol Engine",
          "s": "spec",
          "what": "Stack builder, dosing logic, cycle mgmt, adjustments, history.",
          "gov": "MIE-PRO-001; protocol-builder.tsx exists as UI; governed engine not built"
        },
        {
          "t": "Labs & Biomarkers",
          "s": "built",
          "what": "Upload & parse, AI analysis, trend tracking, reference ranges, action items.",
          "gov": "L1+L2 spine merged (#13); AI analysis layer next"
        },
        {
          "t": "Education Hub",
          "s": "progress",
          "what": "Longevity library, protocol education, video, guides/FAQs.",
          "gov": "education.tsx / education-library-manager.tsx exist; content governance pending"
        }
      ]
    },
    {
      "h": "Data & Infrastructure Foundation",
      "cap": "the plumbing — real",
      "cols": "g3",
      "items": [
        {
          "t": "PostgreSQL Database",
          "s": "built",
          "what": "Clients, protocols, labs, users, logs, metrics. Replit-managed Postgres, canonical.",
          "gov": "Merged #1/#2; schema on main"
        },
        {
          "t": "Object Storage",
          "s": "built",
          "what": "Secure storage for labs, docs, images, reports. GCS via Replit sidecar.",
          "gov": "Live; R2-adapter is the migration lift (dependency map #11)"
        },
        {
          "t": "Background Workers",
          "s": "built",
          "what": "Data processing, lab parsing, notifications, automation tasks. Outbox + claim fencing.",
          "gov": "MIE Phase 1 nervous system (#1)"
        },
        {
          "t": "Scheduler / Cron",
          "s": "built",
          "what": "Time-based jobs: reminders, check-ins, reports, cleanups.",
          "gov": "Internal scheduler trigger (#1)"
        },
        {
          "t": "Audit & Logging",
          "s": "built",
          "what": "Audit trails, system logs, change history. Append-only.",
          "gov": "audit_events (#1) + admin audit (#11)"
        },
        {
          "t": "Security & Compliance",
          "s": "progress",
          "what": "HIPAA-ready posture, encryption, role-based access.",
          "gov": "Fail-closed admin hardening merged (#11); full compliance is a launch workstream"
        }
      ]
    },
    {
      "h": "Integrations",
      "cap": "external",
      "cols": "g4",
      "items": [
        {
          "t": "Clerk — Auth",
          "s": "built",
          "what": "Authentication. Live. Graceful-degradation on public routes shipped; sign-in verified working on the launched site."
        },
        {
          "t": "Airtable — Operational DB",
          "s": "built",
          "what": "Live; being demoted to back-office as portal reads move to Postgres.",
          "gov": "429 incident graceful-degradation shim shipped"
        },
        {
          "t": "PostgreSQL — Relational DB",
          "s": "built",
          "what": "Canonical relational store."
        },
        {
          "t": "Replit — Hosting",
          "s": "built",
          "what": "Production host — new marketing site LIVE Jul 16 from launch branch 53680b2. Discovery: workspace was never git-connected; GitHub main never deployed (~157k-line divergence). Stays home until founder readiness declaration; bridge exit design parked pending founder ruling."
        },
        {
          "t": "Vercel — Preview",
          "s": "built",
          "what": "Per-branch marketing-site previews, working; served as the launch sign-off surface. Preview-only — never the apex origin."
        },
        {
          "t": "SendGrid — Email",
          "s": "planned",
          "what": "Vendor spine deferred (founder decision)."
        },
        {
          "t": "Twilio — SMS/Voice",
          "s": "planned",
          "what": "Vendor spine deferred."
        },
        {
          "t": "Stripe — Payments",
          "s": "planned",
          "what": "Vendor spine deferred; gated on entity/OBA."
        },
        {
          "t": "Google Cloud — Infra",
          "s": "progress",
          "what": "Object storage via Replit GCS sidecar; broader GCP not adopted."
        }
      ]
    },
    {
      "h": "Commercial & Business Infrastructure",
      "cap": "go-to-market",
      "cols": "g4",
      "items": [
        {
          "id": "ci-brand-web",
          "t": "Brand & Website",
          "s": "built",
          "what": "New marketing site LIVE on matrixlongevity.com (Jul 16) — apex, /men, /women, /ava all rendered-content verified; CTAs route to intake and Clerk sign-in.",
          "gov": "Launched via founder-watched Republish from 53680b2 (#23 tree grafted onto production lineage)",
          "limitation": "Ask Ava still demo-only and header uses text logo — hotfix lane queued; compliance sweep now post-launch priority",
          "milestone": "Ava live-chat + logo hotfix → compliance sweep",
          "related": "commercial"
        },
        {
          "id": "ci-marketing",
          "t": "Marketing Engine",
          "s": "spec",
          "what": "Positioning, claims taxonomy, pillars, campaign and production board — being authored (WP2).",
          "gov": "WP2 marketing schema",
          "limitation": "No usable campaign content or workflow live yet",
          "milestone": "WP2 marketing content pass",
          "related": "commercial"
        },
        {
          "id": "ci-sales",
          "t": "Sales Engine",
          "s": "spec",
          "what": "Offer, ICPs, process and playbook structure — being authored (WP2).",
          "gov": "WP2 sales schema",
          "limitation": "Commercial facts (price, terms, capacity) unresolved — Needs Jack",
          "milestone": "Resolve D1–D9, seed playbook",
          "related": "commercial"
        },
        {
          "id": "ci-crm",
          "t": "CRM",
          "s": "planned",
          "what": "Prospect/opportunity system of record.",
          "limitation": "No CRM adopted; pipeline is browser-local only in this tracker",
          "milestone": "Deferred until post-launch",
          "related": "commercial"
        },
        {
          "id": "ci-payments",
          "t": "Payments",
          "s": "planned",
          "what": "Standardized processor + automated checkout.",
          "gov": "Vendor spine deferred (founder decision); gated on entity/OBA",
          "limitation": "Manual/current-client process only; no processor live",
          "milestone": "Entity/OBA → Stripe test mode",
          "related": "infrastructure"
        },
        {
          "id": "ci-partnerships",
          "t": "Partnerships",
          "s": "progress",
          "what": "Clinician / pharmacy / referral relationships that already exist informally.",
          "limitation": "Real relationships, but no formal partner system or agreements layer",
          "milestone": "Formalize referral-partner structure (WP2)",
          "related": "commercial"
        },
        {
          "id": "ci-acquisition",
          "t": "Client Acquisition",
          "s": "progress",
          "what": "Warm-network, referral and founder-led acquisition — currently manual.",
          "limitation": "No automated funnel; manual outreach and conversations",
          "milestone": "Prove message + conversion before scaling (D10)",
          "related": "commercial"
        },
        {
          "id": "ci-analytics",
          "t": "Commercial Analytics",
          "s": "planned",
          "what": "Funnel, conversion and revenue attribution.",
          "limitation": "No analytics pipeline; outcomes hand-entered locally",
          "milestone": "Define outcome metrics (WP2)",
          "related": "commercial"
        }
      ]
    }
  ]
};
