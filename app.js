var L={
 0:{icon:'🔗',label:'Layer 0 — Shared Foundation (must exist before any product page works)'},
 1:{icon:'🚪',label:'Layer 1 — Public Entry & Access Gates'},
 2:{icon:'🔑',label:'Layer 2 — Authentication & Identity'},
 3:{icon:'🔀',label:'Layer 3 — Role Router (critical system decision)'},
 4:{icon:'📊',label:'Layer 4 — Core Dashboards (by role)'},
 5:{icon:'🚚',label:'Layer 5 — KNECT Network Jobs Board (links Customer → Driver)'},
 6:{icon:'🔐',label:'Layer 6 — Admin Panels (Brent + agents)'},
 7:{icon:'🎯',label:'Layer 7 — OTIS Hub: Build Checklist (build this FIRST)'}
};

function n(t,r,c){c=c||'miss';var ic=c==='miss'?'❌':c==='prog'?'🟡':c==='done'?'✅':c==='sys'?'⚙️':c==='star'?'⭐':'🔗';return'<div class="n '+c+'"><div class="ni">'+ic+'</div><div class="nt">'+t+'</div><div class="nr">'+r+'</div></div>';}
function arr(){return'<div class="arr">→</div>';}
function row(nodes){return'<div class="nrow">'+nodes+'</div>';}
function grp(hdr,cls,body){return'<div class="grp"><div class="grp-hdr g'+cls+'">'+hdr+'</div>'+body+'</div>';}
function sub(t){return'<div class="grp-sub">'+t+'</div>';}
function lhdr(layer){var d=L[layer];return'<div class="lhdr">'+d.icon+' '+d.label+'</div>';}

var p=document.getElementById('page'),h='';

// LAYER 0
h+=lhdr(0);
h+='<div class="rail"><div class="rail-hdr">These underpin every product — build first</div>';
h+=row(
  n('HAF Master Identity','haf_users / haf_user_roles','shr')+
  n('Role-Based Access Control','System logic','shr')+
  n('Access Code Gate','/access → Otis247','shr')+
  n('HAF Username System','Initials+last4phone+DOByr','shr')+
  n('WhatsApp Number Match','Phone must match username','shr')+
  n('Clever Checked Gate','cleverpay_rag_status','shr')
);
h+='</div>';

// LAYER 1
h+=lhdr(1);
h+='<div class="grid">';
h+=grp('🟠 HAF KNECT','k',row(n('KNECT Landing','knect.usehaf.co.uk')+arr()+n('Access Code','/access · Otis247')));
h+=grp('🟢 HAF PLNA','p',row(n('PLNA Landing','plna.usehaf.co.uk')+arr()+n('Access Code','/access · Otis247')));
h+='<div class="grp" style="border-color:#FDE68A;background:#FFFBEB;flex:0.5;min-width:160px"><div class="grp-hdr" style="background:#FEF3C7;color:#92400E;border:1.5px solid #FDE68A">⚠️ Launch only</div>'+n('Waitlist','launch.usehaf.co.uk only','prog')+'</div>';
h+=grp('🔵 CleverPay','c',n('Admin access only','No public landing','sys'));
h+='</div>';

// LAYER 2
h+=lhdr(2);
h+=row(
  n('Login','/login')+arr()+n('Sign Up','/signup')+arr()+n('HAF Username / ID','/haf-id')+arr()+
  n('Account Confirmed','/account-created')+arr()+n('Founder Activation','/founder-access')+arr()+
  n('Forgot Password','/forgot-password')+arr()+n('Legal / Consent','/legal')
);

// LAYER 3
h+=lhdr(3);
h+=row(n('User Role Router','Reads role → routes to: Customer · Driver · Freight · Business · Admin','sys'));
h+='<div class="nrow" style="font-size:11px;color:#9CA3AF;margin:4px 0 12px">↙ Customer/Business &nbsp; ↓ Driver (PLNA) &nbsp; ↓ Freight Forwarder &nbsp; ↘ Admin</div>';

// LAYER 4
h+=lhdr(4);
h+='<div class="grid">';

h+=grp('🟠 KNECT — Customer & Business','k',
  sub('Core')+row(n('KNECT Dashboard','/dashboard')+n('Profile / Account','/account')+n('Notifications','/notifications'))+
  sub('Delivery Booking (5-step)')+
  row(n('Send Delivery','/send')+arr()+n('Collection','/send/collection')+arr()+n('Drop-off','/send/delivery'))+
  row(n('Goods','/send/goods')+arr()+n('Service','/send/service')+arr()+n('Review & Confirm','/send/review')+arr()+n('Confirmed','/send/confirmed'))+
  row(n('My Jobs','/my-jobs')+arr()+n('Job Detail','/my-jobs/:id'))+
  sub('Business Account')+row(n('Business Dashboard','/business')+n('Internal Consignment','/business/send')+n('Rebates','/business/rebates'))+
  sub('Freight Forwarder')+row(n('Freight Dashboard','/freight')+n('Post a Load','/freight/post-load')+n('Freight Jobs','/freight/jobs')+n('Freight Billing','/freight/billing'))+
  sub('AI Support')+row(n('Ask JAKO','/ask-jako'))
);

h+=grp('🟢 PLNA — Driver','p',
  sub('Onboarding (runs once)')+
  row(n('Start','/onboarding')+arr()+n('Details','/onboarding/details')+arr()+n('Vehicle + Docs','/onboarding/vehicle')+arr()+n('WhatsApp Link','/onboarding/whatsapp')+arr()+n('Compliance Link','/onboarding/compliance')+arr()+n('Done','/onboarding/complete'))+
  sub('Core Planning (daily use)')+
  row(n('PLNA Dashboard','/dashboard')+n('Today','/today')+n('Week Planner','/week')+n('Calendar','/calendar')+n('Availability','/availability')+n('Return Routes','/return-routes')+n('Route Planner','/route-planner'))+
  sub('Jobs — gated by Clever Checked')+
  row(n('Clever Checked?','Gate check','sys')+arr()+n('Job Opportunities','/opportunities')+arr()+n('My Jobs','/my-jobs'))+
  sub('AI Layer (Plus/Pro)')+row(n('Ask JUDD','/ask-judd')+n('AI Daily Plan','/ai/daily-plan')+n('AI Job Match','/ai/job-match'))+
  sub('Membership & Money')+row(n('Pricing','/pricing · Lite/Plus/Pro')+n('Membership','/membership')+n('Earnings','/earnings')+n('Rewards / Pool','/rewards'))
);

h+=grp('🔵 CleverPay (Compliance)','c',
  sub('Admin facing')+row(n('CP Dashboard','/cleverpay')+n('Overview','/cleverpay/overview')+n('Driver Directory','/cleverpay/drivers')+n('Driver Detail','/cleverpay/drivers/:id'))+
  sub('Check & Verification flow')+row(n('Add New Check','/cleverpay/new')+arr()+n('Username Gen','/cleverpay/username')+arr()+n('Doc Upload','/cleverpay/documents')+arr()+n('Expiry Tracker','/cleverpay/expiries'))+
  sub('RAG Status')+row(n('Blocked Drivers','/cleverpay/blocked')+n('RAG Board','/cleverpay/rag','prog')+n('Clever Checked','/cleverpay/checked','done'))+
  sub('Missing items & alerts')+row(n('Missing Info Queue','/cleverpay/missing')+n('Notifications','/cleverpay/notifications')+n('Audit Log','/cleverpay/audit'))+
  sub('Driver self-service')+row(n('My Status','/driver/compliance-status')+n('Upload Docs','/driver/upload-documents')+n('Block Reason','/driver/compliance-blocked')+n('Clever Checked ✓','/driver/clever-checked'))
);

h+='</div>';

// LAYER 5
h+=lhdr(5);
h+=row(n('Jobs Board','/jobs · needs Clever Checked')+arr()+n('Job Detail','/jobs/:id')+arr()+n('Driver KNECT Hub','/driver')+arr()+n('Driver Rewards','/driver/rewards')+arr()+n('Membership Status','/driver/membership')+arr()+n('Compliance Preview','/driver/compliance'));

// LAYER 6
h+=lhdr(6);
h+='<div class="grid">';
h+=grp('⚙️ KNECT Admin','a',row(n('KNECT Admin','/admin/knect')+n('Enquiries Queue','/admin/knect/enquiries')+n('Jobs Admin','/admin/knect/jobs')+n('Dispatch Board','/admin/knect/dispatch')+n('Pricing Engine','/admin/knect/pricing')+n('Network Fees','/admin/knect/fees')+n('Customer Directory','/admin/knect/customers')+n('Driver Directory','/admin/knect/drivers')+n('Audit Log','/admin/knect/audit')));
h+=grp('⚙️ PLNA Admin','a',row(n('PLNA Admin','/admin/plna')+n('Driver Availability','/admin/plna/availability')+n('Return Route Board','/admin/plna/return-routes')+n('Driver Plans','/admin/plna/driver-plans')+n('Membership Admin','/admin/plna/memberships')+n('Billing Admin','/admin/plna/billing')));
h+=grp('⚙️ System Admin','a',row(n('Supabase Tables Map','/admin/system/tables')+n('Data Connections Map','/admin/system/data-map')+n('Agent Ownership Map','/admin/system/agents')+n('Mobile Readiness','/admin/system/mobile')+n('Build Approvals','/admin/system/approvals')+n('Build Timeline','/admin/system/progress')));
h+='</div>';

// LAYER 7
h+=lhdr(7);
h+=row(
  n('HAF Build Checklist','/haf/build-checklist · auto-updates as pages are built','star')+arr()+
  n('KNECT Section','55 items')+arr()+n('PLNA Section','48 items')+arr()+
  n('CleverPay Section','19 items')+arr()+n('Shared System','12 items')
);

h+='<div class="note">HAF System Page Flow Map · OTIS · 7 July 2026 · 134 pages tracked · All statuses reflect V1 brief</div>';
p.innerHTML=h;
