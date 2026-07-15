/* window.MX.marketing — Marketing tab rendering contract (WP1 schema; WP2 content).
   CONTENT OWNER: Fable. Shares audiences/offers/campaigns/CTAs with Sales via
   window.MX.shared. Claims use the approval-CLASS taxonomy (§5); "Founder approved"
   never implies legal/regulatory/clinical approval. */
window.MX = window.MX || {};
window.MX.marketing = {

  sections:[
    { id:'m-positioning', title:'Positioning' },
    { id:'m-audience',    title:'Audience' },
    { id:'m-claims',      title:'Claims Taxonomy' },
    { id:'m-pillars',     title:'Content Pillars' },
    { id:'m-campaign',    title:'Active Campaign' },
    { id:'m-postnext',    title:'Post This Next' },
    { id:'m-board',       title:'Content Production Board' },
    { id:'m-library',     title:'Content Library' },
    { id:'m-outcomes',    title:'Marketing Outcomes' },
    { id:'m-decisions',   title:'Decisions Requiring Jack' }
  ],

  /* A — POSITIONING (WP2 authors the narrative). */
  positioning:{ stub:true, note:'What Matrix is / is not, promise, differentiation and narrative authored in WP2.' },

  /* Exact claim-status categories (do NOT collapse to a generic "Approved"). */
  claimStatuses:['Founder approved','Counsel reviewed','Clinically substantiated','Needs counsel review','Needs substantiation','Internal only','Do not publish'],

  /* Current known claim states (spec §5). A claim can carry more than one status. */
  claims:[
    { id:'cl-superint',  claim:'Superintelligence phrasing', statuses:['Founder approved','Needs counsel review'] },
    { id:'cl-cancer',    claim:'Cancer-screening claims',    statuses:['Needs counsel review','Do not publish'] },
    { id:'cl-regen',     claim:'Regenerative-medicine claims',statuses:['Needs counsel review','Do not publish'] },
    { id:'cl-bioage',    claim:'Bio-Age framing',            statuses:['Internal only'] }
  ],

  /* C — PILLARS (5; client-stories deferred until substantiated). */
  pillars:[
    { id:'p-problem',   name:'The Fragmented-Health Problem' },
    { id:'p-os',        name:'Connected Health OS' },
    { id:'p-ava',       name:'Ava & the Matrix Intelligence Engine' },
    { id:'p-education', name:'Longevity Education' },
    { id:'p-founder',   name:'Building-Matrix Founder POV' }
  ],
  pillarsDeferred:[ { name:'Client stories', reason:'Deferred until substantiated.' } ],

  /* D — ACTIVE CAMPAIGN (shared). */
  campaignRef:'camp-establish',

  /* E — POST THIS NEXT (5 fully scripted posts authored in WP2). */
  postNext:{ stub:true, count:5, note:'Five scripted posts authored in WP2.' },

  /* F — PRODUCTION BOARD columns. Overrides stored browser-local (mx2_board). */
  boardColumns:['Idea','Approved','Needs Jack','In Production','Review','Ready','Published'],
  boardSeeds:[],

  /* G — CONTENT LIBRARY (structure only). */
  library:{ stub:true, note:'Content library structure; entries authored in WP2.' },

  /* H — OUTCOMES: primary = DMs, qualified conversations, consultations, clients, revenue. */
  outcomesRef:['out-dms','out-qualified','out-consults','out-clients','out-revenue'],

  /* I — DECISIONS REQUIRING JACK. */
  decisionsRef:['D8','D9','D10']
};
