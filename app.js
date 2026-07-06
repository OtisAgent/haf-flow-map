// Compact page data - [statusClass, name, route]
const DATA = {
shared: [['shr','HAF Master Identity','haf_users/roles'],['shr','Role-Based Access Control','System logic'],['shr','Access Code Gate','/access → Otis247'],['shr','HAF Username System','Initials+last4phone+DOByr'],['shr','WhatsApp Number Match','Phone must match username'],['shr','Clever Checked Gate','cleverpay_rag_status']],
l1_knect: [['miss','KNECT Landing','knect.usehaf.co.uk'],['miss','Access Code','/access · Otis247']],
l1_plna:  [['miss','PLNA Landing','plna.usehaf.co.uk'],['miss','Access Code','/access · Otis247']],
l1_launch:[['miss','HAF Launch Site','usehaf.co.uk'],['miss','CP Admin Login','/cleverpay/login']],
l2_auth: [['miss','Login','/login'],['miss','Sign Up','/signup'],['miss','HAF Username/ID','/haf-id'],['miss','Account Confirmed','/account-created'],['miss','Founder Activation','/founder-access'],['miss','Forgot Password','/forgot-password'],['miss','Legal / Consent','/legal']],
l3_router: [['sys','Role Router','Redirects by user.role']],
l4_knect_core:     [['miss','KNECT Dashboard','/dashboard'],['miss','Profile / Account','/account'],['miss','Notifications','/notifications']],
l4_knect_delivery: [['miss','Send Delivery','/send'],['miss','Collection','/send/collection'],['miss','Drop-off','/send/delivery'],['miss','Goods','/send/goods'],['miss','Service','/send/service'],['miss','Review & Confirm','/send/review'],['miss','Confirmed','/send/confirmed'],['miss','My Jobs','/my-jobs'],['miss','Job Detail','/my-jobs/:id']],
l4_knect_business: [['miss','Business Dashboard','/business'],['miss','Internal Consignment','/business/send'],['miss','Rebates','/business/rebates']],
l4_knect_freight:  [['miss','Freight Dashboard','/freight'],['miss','Post a Load','/freight/post-load'],['miss','Freight Jobs','/freight/jobs'],['miss','Freight Billing','/freight/billing']],
l4_knect_ai:       [['miss','Ask JAKO','/ask-jako']],
l4_plna_onboard:   [['miss','Start','/onboarding'],['miss','Details','/onboarding/details'],['miss','Vehicle + Docs','/onboarding/vehicle'],['miss','WhatsApp Link','/onboarding/whatsapp'],['miss','Compliance Link','/onboarding/compliance'],['miss','Done','/onboarding/complete']],
l4_plna_core:      [['miss','PLNA Dashboard','/dashboard'],['miss','Today','/today'],['miss','Week Planner','/week'],['miss','Calendar','/calendar'],['miss','Availability','/availability'],['miss','Return Routes','/return-routes'],['miss','Route Planner','/route-planner']],
l4_plna_jobs:      [['sys','Clever Checked?','Gate check'],['miss','Job Opportunities','/opportunities'],['miss','My Jobs','/my-jobs']],
l4_plna_ai:        [['miss','Ask JUDD','/ask-judd'],['miss','AI Daily Plan','/ai/daily-plan'],['miss','AI Job Match','/ai/job-match']],
l4_plna_money:     [['miss','Pricing','/pricing · Lite/Plus/Pro'],['miss','Membership','/membership'],['miss','Earnings','/earnings'],['miss','Rewards / Pool','/rewards']],
l4_cp_admin:       [['miss','CP Dashboard','/cleverpay'],['miss','Overview','/cleverpay/overview'],['miss','Driver Directory','/cleverpay/drivers'],['miss','Driver Detail','/cleverpay/drivers/:id']],
l4_cp_check:       [['miss','Add New Check','/cleverpay/new'],['miss','Username Gen','/cleverpay/username'],['miss','Doc Upload','/cleverpay/documents'],['miss','Expiry Tracker','/cleverpay/expiries']],
l4_cp_rag:         [['red-node','Blocked Drivers','/cleverpay/blocked'],['prog','RAG Board','/cleverpay/rag'],['green-node','Clever Checked','/cleverpay/checked']],
l4_cp_alerts:      [['miss','Missing Info Queue','/cleverpay/missing'],['miss','Notifications','/cleverpay/notifications'],['miss','Audit Log','/cleverpay/audit']],
l4_cp_driver:      [['miss','My Status','/driver/compliance-status'],['miss','Upload Docs','/driver/upload-documents'],['miss','Block Reason','/driver/compliance-blocked'],['miss','Clever Checked ✓','/driver/clever-checked']],
l5_jobs: [['miss','Jobs Board','/jobs · needs Clever Checked'],['miss','Job Detail','/jobs/:id'],['miss','Driver KNECT Hub','/driver'],['miss','Driver Rewards','/driver/rewards'],['miss','Membership Status','/driver/membership'],['miss','Compliance Preview','/driver/compliance']],
l6_knect_admin: [['miss','KNECT Admin','/admin/knect'],['miss','Enquiries Queue','/admin/knect/enquiries'],['miss','Jobs Admin','/admin/knect/jobs'],['miss','Dispatch Board','/admin/knect/dispatch'],['miss','Pricing Engine','/admin/knect/pricing'],['miss','Network Fees','/admin/knect/fees'],['miss','Customer Directory','/admin/knect/customers'],['miss','Driver Directory','/admin/knect/drivers'],['miss','Audit Log','/admin/knect/audit']],
l6_plna_admin:  [['miss','PLNA Admin','/admin/plna'],['miss','Driver Availability','/admin/plna/availability'],['miss','Return Route Board','/admin/plna/return-routes'],['miss','Driver Plans','/admin/plna/driver-plans'],['miss','Membership Admin','/admin/plna/memberships'],['miss','Billing Admin','/admin/plna/billing']],
l6_sys_admin:   [['miss','Supabase Tables Map','/admin/system/tables'],['miss','Data Connections Map','/admin/system/data-map'],['miss','Agent Ownership Map','/admin/system/agents'],['miss','Mobile Readiness','/admin/system/mobile'],['miss','Build Approvals','/admin/system/approvals'],['miss','Build Timeline','/admin/system/progress']],
l7_checklist: [['star','HAF Build Checklist','/haf/build-checklist · Build first'],['miss','KNECT Section','55 items'],['miss','PLNA Section','48 items'],['miss','CleverPay Section','19 items'],['miss','Shared System','12 items']]
};
// helpers
function icon(cls){return{miss:'❌',prog:'🟡',sys:'⚙️',shr:'🔗',star:'⭐','red-node':'🔴','green-node':'🟢'}[cls]||'❌';}
function node(d){return`<div class="n ${d[0]}"><div class="ni">${icon(d[0])}</div><div class="nt">${d[1]}</div><div class="nr">${d[2]}</div></div>`;}
function nrow(arr,arrows){return`<div class="nrow">${arr.map((d,i)=>node(d)+(arrows&&i<arr.length-1?'<div class="arr">→</div>':'')).join('')}</div>`;}
function grp(label){return`<div class="grp">${label}</div>`;}
function layerLbl(text){return`<div class="layer-lbl">${text}</div>`;}
function col(hdrClass,hdrText,inner){return`<div class="col"><div class="sec-hdr ${hdrClass}">${hdrText}</div>${inner}</div>`;}
// count helpers
function countAll(){
var total=0,miss=0,prog=0,done=0,sys=0,shr=0;
Object.values(DATA).forEach(function(arr){arr.forEach(function(d){
total++;
if(d[0]==='miss') miss++;
else if(d[0]==='prog') prog++;
else if(d[0]==='green-node') done++;
else if(d[0]==='sys') sys++;
else if(d[0]==='shr') shr++;
else if(d[0]==='red-node') miss++;
else if(d[0]==='star') miss++;
});});
return{total,miss,prog,done,sys,shr};
}
function countSection(keys){
var n=0;
keys.forEach(function(k){if(DATA[k]) n+=DATA[k].length;});
return n;
}
// render stats
function renderStats(){
var c=countAll();
var knect=countSection(['l1_knect','l4_knect_core','l4_knect_delivery','l4_knect_business','l4_knect_freight','l4_knect_ai','l6_knect_admin']);
var plna=countSection(['l1_plna','l4_plna_onboard','l4_plna_core','l4_plna_jobs','l4_plna_ai','l4_plna_money','l6_plna_admin']);
var cp=countSection(['l4_cp_admin','l4_cp_check','l4_cp_rag','l4_cp_alerts','l4_cp_driver']);
var shared=countSection(['shared','l1_launch','l2_auth','l3_router','l5_jobs','l6_sys_admin','l7_checklist']);
var pct=Math.round((c.done/c.total)*100);
var el=document.getElementById('stats');
if(!el) return;
el.innerHTML=`<div class="stats-bar">
<div class="stat"><div class="stat-n">${c.total}</div><div class="stat-l">Total Pages</div></div>
<div class="sdiv"></div>
<div class="stat"><div class="stat-n" style="color:#991B1B">${c.miss}</div><div class="stat-l">Not Built</div></div>
<div class="stat"><div class="stat-n" style="color:#92400E">${c.prog}</div><div class="stat-l">In Progress</div></div>
<div class="stat"><div class="stat-n" style="color:#166534">${c.done}</div><div class="stat-l">Complete</div></div>
<div class="sdiv"></div>
<div class="stat"><div class="stat-n" style="color:#C2410C">${knect}</div><div class="stat-l">KNECT</div></div>
<div class="stat"><div class="stat-n" style="color:#166534">${plna}</div><div class="stat-l">PLNA</div></div>
<div class="stat"><div class="stat-n" style="color:#1E40AF">${cp}</div><div class="stat-l">CleverPay</div></div>
<div class="stat"><div class="stat-n" style="color:#4C1D95">${shared}</div><div class="stat-l">Shared</div></div>
<div class="sdiv"></div>
<div class="pb-wrap">
<div class="pb-lbl"><span>Build Progress</span><span>${pct}% (${c.done}/${c.total})</span></div>
<div class="pb-track"><div class="pb-fill" style="width:${Math.max(pct,1)}%"></div></div>
</div>
</div>
<div class="warn">⚠️ <strong>All 134 pages are unbuilt.</strong> Start with the HAF Build Checklist (Layer 7) and work outward from auth → core → features → admin.</div>`;
}
// render flow
function renderFlow(){
var el=document.getElementById('flow');
if(!el) return;
// Layer 0 — Shared Rail
var L0=`${layerLbl('Layer 0 · Shared System (Cross-Platform)')}
<div class="shared-rail">
<div class="sr-title">🔗 Shared Infrastructure — applies to all products</div>
${nrow(DATA.shared,false)}
</div>`;
// Layer 1 — Entry Gates
var L1=`${layerLbl('Layer 1 · Entry Points & Access Gates')}
<div class="row">
${col('knect','KNECT Entry',nrow(DATA.l1_knect,true))}
${col('plna','PLNA Entry',nrow(DATA.l1_plna,true))}
${col('adm','Launch Site / CP Admin',nrow(DATA.l1_launch,false))}
</div>`;
// Layer 2 — Auth Chain
var L2=`${layerLbl('Layer 2 · Authentication (Shared Auth Flow)')}
<div class="col" style="max-width:100%">
<div class="sec-hdr adm">Auth Pages — shared across KNECT + PLNA</div>
${nrow(DATA.l2_auth,true)}
</div>`;
// Layer 3 — Role Router
var L3=`${layerLbl('Layer 3 · Role Router')}
<div class="row">
${nrow(DATA.l3_router,false)}
<div class="arr" style="font-size:13px;align-self:center">→ Customer / Driver / Admin / CP-Admin</div>
</div>`;
// Layer 4 — Core Product Pages
var knectCol=col('knect','KNECT — Customer & Driver',
grp('Core')+nrow(DATA.l4_knect_core)+
grp('Send Delivery')+nrow(DATA.l4_knect_delivery)+
grp('Business')+nrow(DATA.l4_knect_business)+
grp('Freight')+nrow(DATA.l4_knect_freight)+
grp('AI')+nrow(DATA.l4_knect_ai)
);
var plnaCol=col('plna','PLNA — Driver Platform',
grp('Onboarding')+nrow(DATA.l4_plna_onboard,true)+
grp('Core')+nrow(DATA.l4_plna_core)+
grp('Jobs')+nrow(DATA.l4_plna_jobs,true)+
grp('AI')+nrow(DATA.l4_plna_ai)+
grp('Money')+nrow(DATA.l4_plna_money)
);
var cpCol=col('cp','CleverPay — Compliance System',
grp('Admin')+nrow(DATA.l4_cp_admin)+
grp('Compliance Checks')+nrow(DATA.l4_cp_check)+
grp('RAG Status')+nrow(DATA.l4_cp_rag,true)+
grp('Alerts & Queue')+nrow(DATA.l4_cp_alerts)+
grp('Driver Self-Service')+nrow(DATA.l4_cp_driver)
);
var L4=`${layerLbl('Layer 4 · Core Product Pages')}
<div class="row">${knectCol}${plnaCol}${cpCol}</div>`;
// Layer 5 — Jobs Board
var L5=`${layerLbl('Layer 5 · Shared Jobs Board (Clever Checked required)')}
<div class="col" style="max-width:100%">
<div class="sec-hdr adm">Jobs & Driver Hub — requires Clever Checked status</div>
${nrow(DATA.l5_jobs,true)}
</div>`;
// Layer 6 — Admin
var L6=`${layerLbl('Layer 6 · Admin Panels')}
<div class="row">
${col('knect','KNECT Admin',nrow(DATA.l6_knect_admin))}
${col('plna','PLNA Admin',nrow(DATA.l6_plna_admin))}
${col('adm','System Admin',nrow(DATA.l6_sys_admin))}
</div>`;
// Layer 7 — Checklist
var L7=`${layerLbl('Layer 7 · HAF Build Checklist (Build this first)')}
<div class="col" style="max-width:100%;border-color:#F97316">
<div class="sec-hdr" style="background:#FFF7ED;color:#7C2D12;border:1px solid #F97316">⭐ HAF Build Checklist — master tracker for all 134 pages</div>
${nrow(DATA.l7_checklist,true)}
</div>`;
el.innerHTML=L0+L1+L2+L3+L4+L5+L6+L7;
}
// init
renderStats();
renderFlow();