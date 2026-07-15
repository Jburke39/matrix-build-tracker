/* window.MX.readiness — Matrix Company Readiness: 10 domains × 4 named pass/fail
   gates. CONTENT OWNER: Fable. Seeded CONSERVATIVELY from current repo evidence;
   where there is no verified evidence the gate is failed with an explicit note.
   Domain readiness = gates passed ÷ 4. Company readiness = weighted mean of the 10
   domains (equal weights v1; weights live here and are disclosed in the drawer).
   No partial credit. This number is expected to read low — that is correct. */
window.MX = window.MX || {};
window.MX.readiness = {
  weightingModel:'equal',        // v1 default, disclosed in the readiness drawer
  reviewedPlaceholder:'2026-07-15',
  domains:[
    { id:'dom-website', name:'Website & Brand', weight:1, gates:[
      { gateId:'web-1', name:'Brand & design system defined', pass:true,  evidence:'Brand system + editorial design language locked and approved', evidenceRef:'build:c1', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'web-2', name:'Approved website compositions', pass:true,  evidence:'Apex /, /men, /women, /ava compositions approved', evidenceRef:'build:c1–c4', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'web-3', name:'Website implementation merged', pass:true,  evidence:'Routes merged to main (#14/#15/#16/#17)', evidenceRef:'build:c2,c3', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'web-4', name:'Preview/production render verified', pass:false, evidence:'Not passed — Vercel preview black-screens on Clerk runtime; no verified production render', evidenceRef:'build:c6', lastReviewed:'2026-07-15', notes:'Blocked (#20)' }
    ]},
    { id:'dom-mie', name:'Matrix Intelligence Engine', weight:1, gates:[
      { gateId:'mie-1', name:'Spec estate canonical in-repo', pass:true,  evidence:'21 governing specs byte-faithful in docs/mie-specs', evidenceRef:'build:m1', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'mie-2', name:'Core intelligence engines merged (Wave 1)', pass:true, evidence:'mie-registry/signals/patterns/interventions + harness merged (#8)', evidenceRef:'build:m2', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'mie-3', name:'Safety foundation merged with tests', pass:true, evidence:'mie-core + mie-safety, 62 safety tests (#10)', evidenceRef:'build:m3', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'mie-4', name:'Health signals live in an environment', pass:false, evidence:'Not passed — signals in Codex review (#18); migration 0022 not applied', evidenceRef:'build:m6,m7', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-platform', name:'Client Platform', weight:1, gates:[
      { gateId:'plat-1', name:'Client portal exists', pass:true,  evidence:'Replit client portal product in production', evidenceRef:'infra:Client Portal', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'plat-2', name:'Lab data spine merged', pass:true,  evidence:'Labs L1+L2 spine merged (#13)', evidenceRef:'build:m5', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'plat-3', name:'Lab tables live (migration applied)', pass:false, evidence:'Not passed — migration 0022 not applied; tables inert on main', evidenceRef:'build:m7', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'plat-4', name:'Client-facing intelligence wired', pass:false, evidence:'Not passed — analysis/scoring not wired; Ava interface not built', evidenceRef:'build:m9', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-ava', name:'Ava', weight:1, gates:[
      { gateId:'ava-1', name:'Voice + governance spec suite written', pass:true, evidence:'11-doc Ava governance suite in Drive', evidenceRef:'build:a1,a2', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'ava-2', name:'Interface shell shipped', pass:true, evidence:'Tracker Ava layer + corner launcher shipped', evidenceRef:'build:a3', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'ava-3', name:'Live governed engine wired', pass:false, evidence:'Not passed — placeholder responder only; live engine gated on Phase 5 (#18)', evidenceRef:'build:a4', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'ava-4', name:'Bounded/proactive actions verified', pass:false, evidence:'Not passed — nothing at L4+ today', evidenceRef:'ava', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-clinical', name:'Clinical & Compliance', weight:1, gates:[
      { gateId:'clin-1', name:'Baseline compliance constraints defined', pass:true, evidence:'Operating constraints seeded (D8); governance docs saved', evidenceRef:'shared:D8', lastReviewed:'2026-07-15', notes:'Internal baseline, not counsel review' },
      { gateId:'clin-2', name:'Safety engine merged', pass:true, evidence:'mie-safety merged, 62 tests (#10)', evidenceRef:'build:m3', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'clin-3', name:'Counsel review complete on public claims', pass:false, evidence:'Not passed — superintelligence/cancer/regen claims logged, not cleared', evidenceRef:'build:g3,g5', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'clin-4', name:'Clinical model ratified (PCAC)', pass:false, evidence:'Not passed — Bio-Age clinical model gated on PCAC Jul 23-24', evidenceRef:'build:m8', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-pharmacy', name:'Pharmacy & Fulfillment', weight:1, gates:[
      { gateId:'pha-1', name:'Fulfillment responsibilities confirmed', pass:false, evidence:'Not passed — D5 needs clinical-operating confirmation', evidenceRef:'shared:D5', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'pha-2', name:'Pharmacy partners formalized', pass:false, evidence:'Not passed — relationships informal; no partner system', evidenceRef:'infra:ci-partnerships', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'pha-3', name:'Refill / logistics system', pass:false, evidence:'Not passed — refill intelligence spec-only (BUILD-001 Phase 7)', evidenceRef:'org:Refill Intelligence Agent', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'pha-4', name:'Formulary unlocked', pass:false, evidence:'Not passed — formulary gated on PCAC Jul 23-24', evidenceRef:'build:g6', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-payments', name:'Payments & Finance', weight:1, gates:[
      { gateId:'pay-1', name:'Entity formed', pass:false, evidence:'Not passed — entity/OBA deliberately deferred', evidenceRef:'build:g7', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'pay-2', name:'Business bank account', pass:false, evidence:'Not passed — deferred with entity', evidenceRef:'build:g7', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'pay-3', name:'Processor live', pass:false, evidence:'Not passed — vendor spine deferred; Stripe planned/gated', evidenceRef:'infra:ci-payments', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'pay-4', name:'Platform revenue collected via system', pass:false, evidence:'Not passed — manual/current-client process only (D3)', evidenceRef:'shared:D3', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-sales', name:'Sales', weight:1, gates:[
      { gateId:'sal-1', name:'Offer defined & named', pass:false, evidence:'Not passed — D1 provisional working name only', evidenceRef:'shared:D1', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'sal-2', name:'Pricing frozen', pass:false, evidence:'Not passed — pricing unresolved (D2)', evidenceRef:'shared:D2', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'sal-3', name:'Sales process defined', pass:true, evidence:'Attention→Conversation→Qualified→Consultation→Decision→Onboarding', evidenceRef:'sales:process', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'sal-4', name:'Repeatable conversion proven', pass:false, evidence:'Not passed — message + conversion not yet proven (D10)', evidenceRef:'shared:D10', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-marketing', name:'Marketing', weight:1, gates:[
      { gateId:'mkt-1', name:'Positioning defined', pass:false, evidence:'Not passed — positioning authored in WP2', evidenceRef:'marketing:positioning', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'mkt-2', name:'Claims taxonomy in place', pass:true, evidence:'Approval-class taxonomy defined; claim states seeded', evidenceRef:'marketing:claims', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'mkt-3', name:'Active campaign running', pass:false, evidence:'Not passed — campaign named; content authored in WP2', evidenceRef:'shared:camp-establish', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'mkt-4', name:'Content engine operational', pass:false, evidence:'Not passed — board structure only; no production workflow live', evidenceRef:'marketing:board', lastReviewed:'2026-07-15', notes:'' }
    ]},
    { id:'dom-infra', name:'Infrastructure & Production', weight:1, gates:[
      { gateId:'inf-1', name:'Data & infra foundation built', pass:true, evidence:'Postgres, object storage, workers, scheduler, audit all built', evidenceRef:'infra:Data & Infrastructure Foundation', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'inf-2', name:'Fail-closed admin hardening', pass:true, evidence:'strictBool + double-gated dev-admin + audit log merged (#11)', evidenceRef:'build:p3', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'inf-3', name:'Preview pipeline verified', pass:false, evidence:'Not passed — Vercel preview blocked on Clerk runtime', evidenceRef:'build:i1', lastReviewed:'2026-07-15', notes:'' },
      { gateId:'inf-4', name:'Production cutover readiness declared', pass:false, evidence:'Not passed — cutover dormant until founder readiness declaration', evidenceRef:'build:i5', lastReviewed:'2026-07-15', notes:'' }
    ]}
  ]
};
