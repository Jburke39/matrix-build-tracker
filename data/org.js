/* window.MX.org — Agent org chart (full future-state) + activeSequence flag per agent
   CONTENT OWNER: Fable (canonical operating content).
   Code owns app.js/app.css/index.html only. Loaded as a plain <script>;
   populates a stable window.MX namespace. */
window.MX = window.MX || {};
window.MX.org = {
  "activeSequenceRule": "status built|progress|spec ⇒ in Active Build Sequence; planned ⇒ future-state only",
  "top": [
    {
      "t": "Jack Burke — Founder / CEO",
      "s": "built",
      "what": "Final decision authority. You.",
      "lead": true,
      "activeSequence": true
    },
    {
      "t": "Ava-CEO AI — Chief Executive Agent",
      "s": "spec",
      "what": "Strategic synthesis, delegation, execution oversight, cross-domain intelligence. Reports directly to Jack. Bounded authority: cannot prescribe/diagnose, move money, alter legal structure, deploy code, or modify the machine.",
      "gov": "MIE-AVA-001 + org chart v1.0; Phase 5, not built",
      "lead": true,
      "activeSequence": true
    }
  ],
  "cols": [
    {
      "h": "Executive Office",
      "items": [
        {
          "t": "Chief of Staff Agent",
          "s": "progress",
          "what": "Executive synthesis, priorities/OKRs, decision tracking, reporting.",
          "gov": "CEO Today / Command Center is the first surface of this (#5/#7)",
          "activeSequence": true
        },
        {
          "t": "Exec Calendar & Scheduling",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Executive Communications",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Priorities & OKR Mgmt",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Decision Tracking",
          "s": "progress",
          "what": "decisions/approvals canonical tables specced (#7).",
          "activeSequence": true
        },
        {
          "t": "Executive Reporting",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Meeting Prep",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Follow-Up & Commitments",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Operations",
      "items": [
        {
          "t": "COO Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Onboarding Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Client Lifecycle Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Client Success Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Check-In Workflow Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Ongoing Mgmt Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Operations Quality Agent",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Health Intelligence & Care",
      "items": [
        {
          "t": "Chief Health Intelligence Agent",
          "s": "progress",
          "what": "The MIE health core. Foundation merged.",
          "gov": "HIE-002 signals + safety engine",
          "activeSequence": true
        },
        {
          "t": "Safety Agent",
          "s": "built",
          "what": "Safety classification + escalation.",
          "gov": "mie-safety merged (#10), 62 tests",
          "activeSequence": true
        },
        {
          "t": "Lab Intake Agent",
          "s": "built",
          "what": "Per-report lab ingestion.",
          "gov": "Labs L1 merged (#13)",
          "activeSequence": true
        },
        {
          "t": "Lab Intelligence Agent",
          "s": "progress",
          "what": "Biomarker analysis over the lab spine.",
          "gov": "L2 projection merged; analysis next",
          "activeSequence": true
        },
        {
          "t": "Longitudinal Biomarker Agent",
          "s": "spec",
          "activeSequence": true
        },
        {
          "t": "Protocol Library / Review Agents",
          "s": "spec",
          "gov": "MIE-PRO-001",
          "activeSequence": true
        },
        {
          "t": "Progress Intelligence Agent",
          "s": "progress",
          "gov": "signals #18",
          "activeSequence": true
        },
        {
          "t": "Adherence Agent",
          "s": "spec",
          "activeSequence": true
        },
        {
          "t": "Biological Age Agent",
          "s": "spec",
          "what": "Bio-Age scoring.",
          "gov": "Bio-Age prep merged (#9); clinical model gated",
          "activeSequence": true
        },
        {
          "t": "Nutrition / Fitness Intelligence Agents",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "AI Health Orchestrator Agent",
          "s": "spec",
          "gov": "Phase 5",
          "activeSequence": true
        }
      ]
    },
    {
      "h": "Revenue",
      "items": [
        {
          "t": "CRO Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Lead Qualification Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Pipeline Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Sales Follow-Up Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Meeting Intelligence Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Retention Risk Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Expansion Agent",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Growth & Brand",
      "items": [
        {
          "t": "Growth Executive Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Content Strategy Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Trend Intelligence Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Social Publishing Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Creative Production Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Growth Analytics Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Partnership Agent",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Finance",
      "items": [
        {
          "t": "CFO Agent",
          "s": "progress",
          "what": "Vendor & subscription register is the first CFO-domain artifact.",
          "gov": "09.07 register in progress",
          "activeSequence": true
        },
        {
          "t": "Cash / Billing / Receivables / Payables Agents",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Forecast Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Unit Economics Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Financial Reporting Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Budgeting Agent",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Supply & Fulfillment",
      "items": [
        {
          "t": "Supply Chain Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Inventory Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Demand Forecast Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Refill Intelligence Agent",
          "s": "spec",
          "what": "Refill forecasting.",
          "gov": "BUILD-001 Phase 7",
          "activeSequence": true
        },
        {
          "t": "Order/Shipment/Vendor/Procurement Agents",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Legal & Compliance",
      "items": [
        {
          "t": "Legal & Compliance Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Compliance Monitoring Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Regulation Intelligence Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Policy / Contract / Legal Research Agents",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Risk & Audit Agent",
          "s": "progress",
          "gov": "admin audit trail (#11)",
          "activeSequence": true
        },
        {
          "t": "Disclosure Mgmt Agent",
          "s": "planned",
          "activeSequence": false
        }
      ]
    },
    {
      "h": "Technology, Data & AI / ME",
      "items": [
        {
          "t": "CTO / ME Executive Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "ME Orchestration Agent",
          "s": "spec",
          "activeSequence": true
        },
        {
          "t": "Data Quality Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Identity Resolution Agent",
          "s": "built",
          "what": "One-client-one-identity resolver.",
          "gov": "mie-core F2 merged (#10)",
          "activeSequence": true
        },
        {
          "t": "Integration Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Reliability Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Security Agent",
          "s": "progress",
          "gov": "hardening #11",
          "activeSequence": true
        },
        {
          "t": "Agent Governance Agent",
          "s": "planned",
          "activeSequence": false
        },
        {
          "t": "Systems Auditor Agent",
          "s": "planned",
          "activeSequence": false
        }
      ]
    }
  ],
  "xdomain": {
    "h": "Specialized Cross-Domain Agents (report to Ava)",
    "items": [
      {
        "t": "Medication Intelligence Agent",
        "s": "spec",
        "what": "Reviews meds, interactions, optimization across protocols.",
        "gov": "DATA-002 + Phase 6",
        "activeSequence": true
      },
      {
        "t": "Safety & Risk Intelligence Agent",
        "s": "built",
        "what": "Monitors safety signals, patterns, escalation triggers.",
        "gov": "mie-safety (#10)",
        "activeSequence": true
      },
      {
        "t": "Client Communications Agent",
        "s": "spec",
        "what": "Omnichannel communication hub across Matrix OS.",
        "gov": "Comms layer / Phase 5",
        "activeSequence": true
      },
      {
        "t": "Knowledge & Research Agent",
        "s": "spec",
        "what": "Retrieves, synthesizes, indexes the verified knowledge base + enterprise intel. (This is the Ava knowledgebase engine you asked about.)",
        "gov": "MIE-AVA-001; Fable to spec the governance next",
        "activeSequence": true
      },
      {
        "t": "Execution & Follow-Up Agent",
        "s": "progress",
        "what": "Delegated tasks, timelines, owners, closure across the loop.",
        "gov": "command_actions backbone (#1)",
        "activeSequence": true
      },
      {
        "t": "Analytics & Insights Agent",
        "s": "planned",
        "what": "Dashboards, forecasts, strategic recommendations.",
        "activeSequence": false
      }
    ]
  }
};
