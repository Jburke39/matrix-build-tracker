/* window.MX.sales — Sales tab rendering contract (WP1 schema; WP2 fills content).
   CONTENT OWNER: Fable. WP1 renders honest structured stubs + Needs-Jack
   decisions from window.MX.shared. No unresolved commercial facts are fabricated.
   Real opportunity data is NEVER stored here — it lives browser-local (mx2_pipeline). */
window.MX = window.MX || {};
window.MX.sales = {

  sections: [
    { id:'sec-sellable',  title:'Sellable Now' },
    { id:'sec-coming',    title:'Coming Soon' },
    { id:'sec-offer',     title:'Current Offer' },
    { id:'sec-icp',       title:'Ideal Client Profiles' },
    { id:'sec-strategy',  title:'Sales Strategy' },
    { id:'sec-process',   title:'Sales Process' },
    { id:'sec-pipeline',  title:'Active Opportunities' },
    { id:'sec-playbook',  title:'Conversation Playbook' },
    { id:'sec-outcomes',  title:'Sales Outcomes' },
    { id:'sec-decisions', title:'Decisions Requiring Jack' }
  ],

  /* A — SELLABLE NOW (per D1). offerRef → window.MX.shared.offers. */
  sellableNow: [
    { offerRef:'offer-concierge',
      facts:[
        { label:'Offer name', valueRef:'D1' },
        { label:'Price',      valueRef:'D2' },
        { label:'Payment',    valueRef:'D3' },
        { label:'Fulfillment',valueRef:'D5' },
        { label:'Capacity',   valueRef:'D6' },
        { label:'Geography',  valueRef:'D7' }
      ] }
  ],

  /* B — COMING SOON (per D9). Rendered from shared decision D9. */
  comingSoonRef:'D9',

  /* C — IDEAL CLIENT PROFILES (per D10 priority; audiences in shared). */
  icps:[
    { audienceRef:'aud-warm',     stub:true, note:'Profile detail authored in WP2.' },
    { audienceRef:'aud-highperf', stub:true, note:'Profile detail authored in WP2.' },
    { audienceRef:'aud-partners', stub:true, note:'Profile detail authored in WP2.' }
  ],

  /* D — STRATEGY (ranked). */
  strategy:{
    ranked:[
      'Existing clients & referrals',
      'Warm network',
      'Clinician / trainer / gym partners',
      'Social inbound (after message + conversion proven)'
    ],
    stub:true, note:'Strategy narrative authored in WP2.'
  },

  /* E — PROCESS. */
  process:['Attention','Conversation','Qualified','Consultation','Decision','Onboarding'],

  /* F — ACTIVE OPPORTUNITIES: field schema + EXAMPLE-only seeds.
     Real pipeline is browser-local (mx2_pipeline) and excluded from outcomes. */
  pipelineFields:['name','organization','source','icp','interest','stage','estValue','probability','lastContact','objection','nextAction','dueStatus','owner','outcome','notes'],
  exampleRules:{ labeled:'EXAMPLE', excludedFromOutcomes:true, deletable:'Remove all examples' },
  examples:[
    { example:true, name:'Example Prospect A', organization:'—', source:'ls-warm',    icp:'aud-warm',     interest:'High',   stage:'Conversation', estValue:'', probability:'', lastContact:'', objection:'Timing', nextAction:'Book consult', dueStatus:'', owner:'Jack', outcome:'', notes:'Illustrative row — not a real prospect.' },
    { example:true, name:'Example Prospect B', organization:'—', source:'ls-partner', icp:'aud-partners', interest:'Medium', stage:'Qualified',    estValue:'', probability:'', lastContact:'', objection:'Price (unset)', nextAction:'Share overview', dueStatus:'', owner:'Jack', outcome:'', notes:'Illustrative row — not a real prospect.' },
    { example:true, name:'Example Prospect C', organization:'—', source:'ls-social',  icp:'aud-highperf', interest:'Low',    stage:'Attention',    estValue:'', probability:'', lastContact:'', objection:'—', nextAction:'Nurture', dueStatus:'', owner:'Jack', outcome:'', notes:'Illustrative row — not a real prospect.' }
  ],

  /* G — PLAYBOOK (seeded verbatim in WP2). */
  playbook:{ stub:true, note:'Conversation playbook seeded in WP2.' },

  /* H — OUTCOMES: definitions in shared; numbers hand-entered locally. */
  outcomesRef:['out-qualified','out-consults','out-clients','out-revenue'],

  /* I — DECISIONS REQUIRING JACK — open items pulled from shared decisionQueue. */
  decisionsRef:['D1','D2','D3','D4','D5','D6','D7']
};
