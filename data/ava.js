/* window.MX.ava — Ava Intelligence capability inventory (Client + Business).
   CONTENT OWNER: Fable (WP3 fills full content). WP1 establishes the schema,
   the evidence-gated maturity model, and honest truth-anchored initial scores.
   Personal Ava is EXCLUDED here (it lives only in the flag-gated launcher's
   Personal mode). A capability's displayed maturity may never exceed its
   evidenceClass — enforced by capMaturity() in app.js. */
window.MX = window.MX || {};
window.MX.ava = {

  /* Maturity model. rank = required evidence strength; app.js caps any
     capability's shown level to what its evidenceClass supports. */
  maturityModel:[
    { level:'L1', rank:1, name:'Defined',     evidenceClass:'spec',                    desc:'A specification exists.' },
    { level:'L2', rank:2, name:'Connected',   evidenceClass:'merged-schema',           desc:'The required data source is connected/wired.' },
    { level:'L3', rank:3, name:'Understands', evidenceClass:'merged-engine-tests',     desc:'Interprets the data with verified engine behavior + tests.' },
    { level:'L4', rank:4, name:'Acts',        evidenceClass:'merged-action-tests-safety', desc:'Performs a bounded authorized action with tests + safety controls.' },
    { level:'L5', rank:5, name:'Proactive',   evidenceClass:'proactive-loop-live',     desc:'Initiates an authorized action/escalation via a verified proactive loop.' }
  ],
  /* Evidence classes ranked; a class supports maturity up to the same rank. */
  evidenceRank:{ 'spec':1, 'merged-schema':2, 'merged-engine-tests':3, 'merged-action-tests-safety':4, 'proactive-loop-live':5 },

  statusVocab:['Live','Partial','Simulated','Specified','Planned','Blocked'],

  domains:['Client Ava','Business Ava'],

  capabilities:[
    /* ---- Client Ava ---- */
    { id:'cap-voice', name:'Coaching voice & method', domain:'Client Ava',
      maturity:'L1', status:'Specified', evidenceClass:'spec',
      dataSources:['Ava governance suite (11 docs)'],
      understands:'The governed voice: question-under-the-question, elevation protocol, education-not-diagnosis.',
      actions:'None yet — placeholder responder only.',
      reliability:'Voice-true placeholder; not the governed engine.',
      evidence:['Ava spec suite (Drive)','build:a1','build:a2'],
      limitations:'Live governed engine not wired; no live AI.',
      nextMilestone:'Wire live governed engine (Phase 5, gated on #18).', buildRef:'a4' },
    { id:'cap-labs', name:'Labs & biomarker understanding', domain:'Client Ava',
      maturity:'L2', status:'Partial', evidenceClass:'merged-schema',
      dataSources:['lab_reports','lab_results','registry projection'],
      understands:'Lab data model connected (40 defs / 149 aliases / 76 unit conversions).',
      actions:'None — analysis layer not built.',
      reliability:'Schema merged; flag-gated OFF; migration 0022 not applied.',
      evidence:['#13','build:m5'],
      limitations:'No interpretation/analysis engine yet; tables inert on main.',
      nextMilestone:'Lab intelligence/analysis layer.', buildRef:'m5' },
    { id:'cap-safety', name:'Safety classification & escalation', domain:'Client Ava',
      maturity:'L3', status:'Partial', evidenceClass:'merged-engine-tests',
      dataSources:['mie-safety engine'],
      understands:'Classifies safety signals and escalation triggers (62 tests, 100% cov).',
      actions:'Emits classifications/escalation signals within the engine.',
      reliability:'Merged engine with tests (#10).',
      evidence:['#10','build:m3'],
      limitations:'Not yet wired into a client-facing Ava conversation or action path.',
      nextMilestone:'Wire safety engine into Ava conversation + Command Center view.', buildRef:'m3' },
    { id:'cap-protocol', name:'Protocol coaching', domain:'Client Ava',
      maturity:'L1', status:'Specified', evidenceClass:'spec',
      dataSources:['MIE-PRO-001'], understands:'Protocol/dosing logic specified.',
      actions:'None.', reliability:'Spec only; governed engine not built.',
      evidence:['MIE-PRO-001'], limitations:'No protocol engine wired.',
      nextMilestone:'Protocol engine build.', buildRef:'m9' },
    { id:'cap-bioage', name:'Biological-age framing', domain:'Client Ava',
      maturity:'L1', status:'Specified', evidenceClass:'spec',
      dataSources:['Bio-Age dossier/contract (#9)'],
      understands:'Architecture ratified; numbers null/PENDING+cited.',
      actions:'None.', reliability:'Prep merged; clinical model gated on PCAC.',
      evidence:['#9','build:m8'], limitations:'Not a client claim; clinical model gated.',
      nextMilestone:'Clinical model ratification (PCAC Jul 23-24).', buildRef:'m8' },

    /* ---- Business Ava ---- */
    { id:'cap-board', name:'Build-board reading', domain:'Business Ava',
      maturity:'L1', status:'Simulated', evidenceClass:'spec',
      dataSources:['window.MX.build','mx2_status'],
      understands:'Reads the live local build board (needs-Jack, blocked, per-lane, completion) via rules.',
      actions:'Answers business questions in the launcher — rule-based, not a governed engine.',
      reliability:'Simulated responder; deterministic, not live AI.',
      evidence:['build:a3'],
      limitations:'Rule-based; not the governed Business Ava.',
      nextMilestone:'Governed Business Ava engine.', buildRef:'a4' },
    { id:'cap-chiefofstaff', name:'Chief-of-staff synthesis', domain:'Business Ava',
      maturity:'L1', status:'Specified', evidenceClass:'spec',
      dataSources:['MIE-AVA-001','org chart'],
      understands:'Strategic synthesis, priorities, decision tracking (specified).',
      actions:'None — Phase 5, not built.', reliability:'Spec only.',
      evidence:['MIE-AVA-001'], limitations:'Bounded authority; not built.',
      nextMilestone:'Phase 5 orchestration.', buildRef:'a4' }
  ],

  /* Representative scenarios (WP3 fills from the Worked-Example Bank).
     Always labeled Simulated or Specified — never Live. */
  scenarios:[
    { id:'scn-reta', label:'Specified', domain:'Client Ava', title:'The Reta case (canonical voice example)',
      note:'From the Worked-Example Bank. Specified — illustrates governed voice, not a live interaction.' },
    { id:'scn-attention', label:'Simulated', domain:'Business Ava', title:'"What needs my attention?"',
      note:'Simulated: launcher reads the live board and returns the needs-Jack queue.' }
  ]
};
