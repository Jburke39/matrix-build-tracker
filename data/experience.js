/* window.MX.experience — Client Experience tab (8th tab, wired additively per the
   shell rule ratified at e540f85: the shell is never replaced, new content lives
   additively as its own tab + data file). CONTENT OWNER: Fable. This file backs the
   in-shell summary; the full multi-tab document is the standalone experience.html page.
   This is the DESIGN/BLUEPRINT half — the forensic twin (CX-1) certifies real state. */
window.MX = window.MX || {};
window.MX.experience = {

  standalone:'experience.html',
  headline:'We have the body of work. We\'re missing the choreography.',
  meta:'Experience blueprint compiled by Fable · July 21, 2026 · pre-dawn · design + honest current-state read from program memory. The forensic twin — CX-1, a touchpoint-by-touchpoint audit with file:line evidence — runs in parallel; where the two disagree, CX-1 wins and this page is corrected.',

  thesis:{
    title:'The one thing that matters',
    body:'A Superpower report feels the way it does not because of the data but because someone walked the member through their own body and made the findings feel authored. Matrix already has the raw material — labs, education library, protocols, goals, intake, bio-age, Ava. What\'s missing is the choreography: the sequenced, narrated moments that turn a dashboard into a story about you. Almost every high-impact win here is an activation of something already shipped, not a new construction.'
  },

  /* status vocab maps to chips: have=confirmed(green) part=jack(amber) none=dnp(red) dark=provisional(blue) idea=internal(violet) */
  scorecard:[
    { t:'Get in the door',            s:'have', label:'7/10', d:'Invite → signup is real and gated. Clean, if transactional.' },
    { t:'First 5 minutes',            s:'none', label:'3/10', d:'Lands on a dashboard. No orientation, no "here\'s what you\'re looking at."' },
    { t:'Understanding my results',   s:'part', label:'4/10', d:'Labs + bio-age display cleanly. Nobody explains what they mean for me.' },
    { t:'Knowing what to do',         s:'part', label:'6/10', d:'Protocol + dose tools are strong. First-dose has no hand-hold.' },
    { t:'Staying engaged',            s:'none', label:'2/10', d:'Almost nothing reaches out. No proactive Ava, reminders dark.' },
    { t:'Feeling seen',               s:'none', label:'3/10', d:'Care shows in the operator tools, not yet in the member\'s inbox.' }
  ],

  underused:[
    { t:'Ava context / aggregation surface', pill:{ s:'dark', label:'built · no consumer' },
      d:'The engine that assembles a member\'s full picture exists (W9) and nothing calls it. The proactive brain is built and idle — this is the tour\'s fuel.' },
    { t:'Direct Resend email adapter', pill:{ s:'dark', label:'adapter live · senders dark' },
      d:'We can send branded email today (S4) but transactional senders aren\'t rewired to it. Lifecycle email has a pipe and no water.' },
    { t:'Bio-age approval flow', pill:{ s:'part', label:'displays a number' },
      d:'The most emotionally loaded number in the product appears with no ceremony. Approval is the perfect trigger for the guided tour — same event, ten times the meaning.' },
    { t:'Education library (18 monographs)', pill:{ s:'part', label:'live · un-sequenced' },
      d:'A real content library nobody is routed to at the right moment. Attach the right monograph to the right lab/protocol moment automatically.' },
    { t:'Blood results / labs area', pill:{ s:'part', label:'renders · no narration' },
      d:'Zero-judgment lab display (W14, 0048) with no "here\'s what this means for you." Data without a voice — needs an Ava-authored read per panel.' },
    { t:'Appointments + ICS + instructions', pill:{ s:'dark', label:'backend · thin surface' },
      d:'Calendar artifacts and appointment instructions exist server-side (W8, 0032–0034); the member-facing moment is thin. (Verify vs CX-1.)' }
  ],

  /* member-facing lifecycle: state = have | part | none */
  lifecycle:[
    { m:'Invite issued',                    s:'have', d:'Invite-gated access is real and verified on prod.' },
    { m:'Signup / account creation',        s:'have', d:'Onboarding V2 flow completes and binds identity.' },
    { m:'Intake / questionnaire',           s:'part', d:'Captured for operators, never reflected back to the member. A form, not a mirror.' },
    { m:'First screen after signup',        s:'none', d:'THE NAMED GAP. Dashboard with no orientation, no "start here."' },
    { m:'Results ready / bio-age approved', s:'none', d:'The emotional peak. Surfaces a number + a table. No walkthrough. Where the tour must live.' },
    { m:'First protocol assigned',          s:'part', d:'Strong UI; the "why this protocol, for you" narration isn\'t attached.' },
    { m:'First dose',                       s:'none', d:'The scariest action happens with zero companionship or acknowledgement.' },
    { m:'First week',                       s:'none', d:'Make-or-break window. No check-in when doubt peaks.' },
    { m:'First lab upload',                 s:'part', d:'Upload area is good; the "got it — here\'s what we see" doesn\'t fire.' },
    { m:'Adherence lapse',                  s:'none', d:'Tracked, but nothing acts on a missed streak.' },
    { m:'Re-order / refill',                s:'part', d:'Operator-side fulfillment/refill exists; member-facing nudge + one-tap reorder do not.' },
    { m:'Ongoing check-in / milestone',     s:'none', d:'No "you\'re 30 days in" cadence. Momentum never reflected back.' },
    { m:'Churn risk / dormancy',            s:'none', d:'No drift signal, no re-engagement. Churn discovered, not prevented.' },
    { m:'Return / win-back',                s:'none', d:'A returning member gets a cold start, greeted like an active one.' }
  ],

  tally:'2 Handled · 4 Partial · 8 Absent across 14 member-facing moments — the front door is solid; the middle and the return are wide open.',

  needsJack:[
    { t:'Approve the thesis',
      d:'Choreography over new capability. If yes, the post-approval guided tour is the next build lane.' },
    { t:'Confirm tour trigger = bio-age approval',
      d:'The approval event already exists; confirm it\'s the right fire point or name another.' },
    { t:'Give Ava a voice for narration',
      d:'Per-panel/per-compound reads need an approved authoring boundary — what Ava may say vs. only present (§3.4 / INV).' },
    { t:'Green-light waking the email channel',
      d:'Rewiring senders is member-facing; needs your go + a from-address/domain confirm.' },
    { t:'Reconcile with CX-1 first',
      d:'Read CX-1\'s forensic audit before Phase 1 so the tour wires to real surfaces, not assumed ones.' }
  ],

  phases:[
    { t:'Phase 0 — Certify the ground', pill:{ s:'part', label:'days' },
      d:'Reconcile this blueprint with CX-1. Turn every "verify vs CX-1" into a fact: email senders, Ava context consumer, notification tables, ICS surface, push/SMS. No member-facing change.' },
    { t:'Phase 1 — The guided tour', pill:{ s:'idea', label:'highest leverage' },
      d:'6-step post-approval walkthrough fed by existing bio-age + labs + protocol + intake + education, narrated through the idle Ava context surface, fired on the approval event. The founder\'s ask and the biggest felt win.' },
    { t:'Phase 2 — Wake the channel', pill:{ s:'dark', label:'activation' },
      d:'Rewire the direct email adapter; ship 7 starter messages with triggers + suppression. The lifecycle stops being silent.' },
    { t:'Phase 3 — Proactive Ava', pill:{ s:'idea', label:'the companion' },
      d:'Give the context surface a proactive consumer: Ava initiates at labs-in, day 7, day 30, drifting. One voice across tour, email, chat.' },
    { t:'Phase 4 — Close the loop', pill:{ s:'idea', label:'retention' },
      d:'Adherence-lapse nudge, member-facing refill/reorder, milestone cadence, dormancy → win-back. Own the eight Absent lifecycle moments.' }
  ],

  /* top gaps ranked by impact(H3/M2/L1) × ease(S3/M2/L1); score shown, higher = sooner */
  top:[
    { r:2,  t:'Wire the email adapter to real senders', imp:'H', eff:'S', sc:9, ty:'activation', need:'Resend direct adapter, from-domain, suppression table' },
    { r:3,  t:'Welcome message with "here\'s what\'s next"', imp:'H', eff:'S', sc:9, ty:'activation', need:'signup event, email channel' },
    { r:4,  t:'Results-ready notification', imp:'H', eff:'S', sc:9, ty:'activation', need:'bio-age approval event, email/in-app' },
    { r:6,  t:'First-week check-in (day 7)', imp:'H', eff:'S', sc:9, ty:'activation', need:'scheduler tick, email, adherence data' },
    { r:10, t:'First-run "start here" on the dashboard', imp:'H', eff:'S', sc:9, ty:'build', need:'empty-state detection, one guided card' },
    { r:1,  t:'Post-approval guided tour (the orientation gap)', imp:'H', eff:'M', sc:6, ty:'build', need:'bio-age, labs, protocol, intake, education, Ava surface' },
    { r:5,  t:'Ava-authored lab read (one paragraph per panel)', imp:'H', eff:'M', sc:6, ty:'build', need:'labs, education, Ava surface, approval boundary' },
    { r:7,  t:'First-dose walkthrough + acknowledgement', imp:'H', eff:'M', sc:6, ty:'build', need:'dose calc, instructions, dose-log event' },
    { r:8,  t:'Protocol "why this, for you" narration', imp:'H', eff:'M', sc:6, ty:'build', need:'protocol assignment, compound detail, education' },
    { r:11, t:'Refill-due nudge + one-tap reorder (member-facing)', imp:'H', eff:'M', sc:6, ty:'build', need:'supply/refill stage, channel, reorder action' },
    { r:13, t:'30-day milestone recap', imp:'H', eff:'M', sc:6, ty:'build', need:'adherence, progress data, Ava surface' },
    { r:15, t:'Adherence-lapse re-engagement', imp:'H', eff:'M', sc:6, ty:'build', need:'adherence signal, threshold rule, channel' },
    { r:9,  t:'Intake reflected back to the member', imp:'M', eff:'S', sc:6, ty:'activation', need:'intake answers, goals' },
    { r:12, t:'Lab-received acknowledgement', imp:'M', eff:'S', sc:6, ty:'activation', need:'upload event, email/toast' },
    { r:16, t:'Dose-logged micro-acknowledgement (toast/streak)', imp:'M', eff:'S', sc:6, ty:'build', need:'dose-log event, in-app toast' },
    { r:17, t:'Appointment confirm + prep + reminder trio', imp:'M', eff:'M', sc:4, ty:'activation', need:'W8 appointments/ICS, email/calendar' },
    { r:18, t:'Weekly fitness recap ("you\'re on a roll")', imp:'M', eff:'M', sc:4, ty:'build', need:'fitness overlays, weight logs, channel' },
    { r:14, t:'Proactive Ava — Ava initiates at key moments', imp:'H', eff:'L', sc:3, ty:'build', need:'Ava context consumer, trigger engine' },
    { r:19, t:'Dormancy → win-back play', imp:'H', eff:'L', sc:3, ty:'build', need:'dormancy signal model, win-back content' },
    { r:20, t:'Invite carries a promise, not just a code', imp:'L', eff:'S', sc:3, ty:'build', need:'invite template, copy' }
  ],

  evidence:'Compiled by Fable from program memory + the build tracker, pre-dawn July 21, 2026. Current-state marks are a founder-facing design read, NOT a certified route-by-route inventory; every implementation-state claim carries a "verify vs CX-1" expectation and is superseded by CX-1\'s file:line findings where they differ. No client data stored; all quoted copy illustrative. Fable\'s regeneration is the source of truth for this page.'
};
