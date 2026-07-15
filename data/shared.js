/* window.MX.shared — Audiences, offers, campaigns, CTAs, lead sources,
   conversion outcomes, and the D1–D10 decision queue. Referenced by id from
   both Sales and Marketing so there is one definition of the target client.
   CONTENT OWNER: Fable. WP1 seeds structure + provisional decisions per spec §8;
   unresolved commercial facts render as Needs-Jack chips and are never fabricated. */
window.MX = window.MX || {};
window.MX.shared = {

  /* Audiences — priority order is D10 (CONFIRMED). */
  audiences: [
    { id:'aud-warm',      priority:1, name:'Warm network & current clients',
      detail:'Existing relationships, current clients, and referrals.' },
    { id:'aud-highperf',  priority:2, name:'High performers already spending',
      detail:'People already spending on fragmented health, longevity and performance services.' },
    { id:'aud-partners',  priority:3, name:'Strategic referral partners',
      detail:'Clinicians, trainers, gyms and wellness operators.' },
    { id:'aud-social',    priority:4, name:'Broader social inbound',
      detail:'Opened only after the message and conversion process are proven.' }
  ],

  /* Offers — commercial facts governed by D1–D9; provisional until Jack confirms. */
  offers: [
    { id:'offer-concierge', name:'Matrix Concierge', state:'sellableNow',
      nameStatus:'Working name — Needs Jack final approval',
      summary:'Founder-led longevity concierge for the warm network while the platform is built.' }
  ],

  campaigns: [
    { id:'camp-establish', name:'Establish Matrix + founding-client conversations',
      status:'active',
      summary:'Introduce Matrix, open founding-client conversations with the warm network. Full campaign content lands in WP2.' }
  ],

  ctas: [
    { id:'cta-conversation', label:'Start a conversation', kind:'primary',
      note:'Manual/current-process conversation — no automated checkout yet (D3).' },
    { id:'cta-learn',        label:'Learn what Matrix is', kind:'secondary' }
  ],

  leadSources: [
    { id:'ls-referral', name:'Referral' },
    { id:'ls-warm',     name:'Warm network' },
    { id:'ls-partner',  name:'Partner referral' },
    { id:'ls-social',   name:'Social inbound' }
  ],

  /* Outcome DEFINITIONS only. Actual numbers are hand-entered and stay browser-local (mx2_outcomes). */
  conversionOutcomes: [
    { id:'out-dms',           name:'DMs / inbound conversations', primary:true },
    { id:'out-qualified',     name:'Qualified conversations',     primary:true },
    { id:'out-consults',      name:'Consultations',               primary:true },
    { id:'out-clients',       name:'New clients',                 primary:true },
    { id:'out-revenue',       name:'Revenue attribution',         primary:true },
    { id:'out-likes',         name:'Likes / vanity engagement',   primary:false }
  ],

  /* Decision queue D1–D10 (spec §8). status: Confirmed | Provisional | Needs Jack. */
  decisionQueue: [
    { id:'D1', title:'Current offer name', status:'Provisional',
      value:'Matrix Concierge', chip:'Working name — Needs Jack final approval',
      detail:'Provisional working name. Never presented as a finalized public product name.' },
    { id:'D2', title:'Current price', status:'Needs Jack',
      value:'Unresolved', chip:'Needs Jack — current pricing not frozen',
      detail:'Do NOT use $899 / $1,299 / $99 / $149 / $199 as current paid-offer pricing unless Jack explicitly confirms.' },
    { id:'D3', title:'Payment terms', status:'Provisional',
      value:'Manual/current-client payment process; standardized processor and automated checkout are not yet live.',
      chip:'Provisional operating description',
      detail:'No processor, billing frequency or checkout process is named without confirmation.' },
    { id:'D4', title:'Current deliverables', status:'Needs Jack',
      chip:'All fields default Needs Jack',
      fields:[
        { key:'assessment',  label:'Assessment & intake',            value:'Needs Jack' },
        { key:'labs',        label:'Labs & biomarker review',        value:'Needs Jack' },
        { key:'clinician',   label:'Clinician involvement',          value:'Needs Jack' },
        { key:'protocol',    label:'Protocol development',           value:'Needs Jack' },
        { key:'meds',        label:'Medication / peptide coordination', value:'Needs Jack' },
        { key:'nutrition',   label:'Nutrition',                      value:'Needs Jack' },
        { key:'training',    label:'Training',                       value:'Needs Jack' },
        { key:'recovery',    label:'Recovery',                       value:'Needs Jack' },
        { key:'checkins',    label:'Check-ins',                      value:'Needs Jack' },
        { key:'concierge',   label:'Ongoing concierge support',      value:'Needs Jack' },
        { key:'ava',         label:'Ava access',                     value:'Needs Jack' },
        { key:'refills',     label:'Refills & logistics',            value:'Needs Jack' }
      ],
      fieldOptions:['Included','Not included','Partial','Coming soon','Needs Jack'],
      detail:'Structured deliverable fields. Each supports Included / Not included / Partial / Coming soon / Needs Jack. All default Needs Jack until confirmed.' },
    { id:'D5', title:'Current fulfillment', status:'Provisional',
      value:'Founder-led concierge coordination supported by authorized independent clinicians, pharmacy partners and current operational tools.',
      chip:'Needs Jack and clinical-operating confirmation',
      detail:'Never implies Jack personally practices medicine, diagnoses or prescribes.' },
    { id:'D6', title:'Capacity', status:'Needs Jack',
      value:'Unresolved', chip:'Needs Jack — confirm safe concurrent client capacity',
      detail:'Do not infer capacity from existing client count.' },
    { id:'D7', title:'Geographic limits', status:'Needs Jack',
      value:'Unresolved', chip:'Needs clinical/legal confirmation by state',
      detail:'Never represents Matrix as nationally available without evidence.' },
    { id:'D8', title:'Baseline compliance limits', status:'Confirmed',
      chip:'Baseline internal operating constraints — not a substitute for legal review',
      constraints:[
        'No diagnosis by marketing or Ava',
        'No guaranteed outcomes',
        'No independent prescribing by Ava or non-clinical staff',
        'Clinical decisions remain with authorized clinicians',
        'Educational/lifestyle estimates never represented as medical diagnostic tests',
        'Claims needing substantiation or counsel review remain unpublished',
        'Representative/simulated Ava capabilities labeled accurately'
      ],
      detail:'Seeded operating constraints, not counsel substitutes.' },
    { id:'D9', title:'Post-launch-only capabilities', status:'Confirmed',
      chip:'Coming Soon',
      items:[
        'Automated website application & onboarding',
        'Standardized checkout & payment processing',
        'Integrated client portal',
        'Production Ava experience',
        'Full Matrix Intelligence Engine orchestration',
        'Automated lab ingestion & longitudinal intelligence',
        'Integrated protocol, adherence & refill tracking',
        'Wearable & Apple Health integration',
        'Production biological-age tracking',
        'Permanent founder & operational Command Center'
      ],
      detail:'Seeded as Coming Soon; not represented as available today.' },
    { id:'D10', title:'Audience priority', status:'Confirmed',
      chip:'Confirmed order for v1',
      order:['aud-warm','aud-highperf','aud-partners','aud-social'],
      detail:'1) warm network/current clients/referrals; 2) high performers already spending; 3) strategic referral partners; 4) broader social inbound after message + conversion proven.' }
  ]
};
