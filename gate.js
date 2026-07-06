(function(){
var KEY='haf_flow_v1',CODE='FLOW247';
if(sessionStorage.getItem(KEY)==='1') return;
var style=document.createElement('style');
style.textContent='#haf-gate{position:fixed;inset:0;background:#0F172A;z-index:9999;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}#haf-card{background:#1E293B;border-radius:14px;padding:40px 36px;width:340px;max-width:90vw;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,.5)}#haf-title{font-size:20px;font-weight:800;color:#F97316;margin-bottom:6px;letter-spacing:-.3px}#haf-sub{font-size:12px;color:#94A3B8;margin-bottom:28px}#haf-inp{width:100%;padding:11px 14px;border-radius:8px;border:1.5px solid #334155;background:#0F172A;color:#F1F5F9;font-size:15px;font-family:monospace;letter-spacing:2px;text-align:center;outline:none;margin-bottom:10px}#haf-inp:focus{border-color:#F97316}#haf-btn{width:100%;padding:11px;border-radius:8px;background:#F97316;color:#fff;font-size:14px;font-weight:700;border:none;cursor:pointer;transition:opacity .15s}#haf-btn:hover{opacity:.88}#haf-err{font-size:12px;color:#F87171;margin-top:8px;min-height:18px}';
document.head.appendChild(style);
var overlay=document.createElement('div');
overlay.id='haf-gate';
overlay.innerHTML='<div id="haf-card"><div id="haf-title">HAF System</div><div id="haf-sub">Page Flow Map · Restricted Access</div><input id="haf-inp" type="password" placeholder="Enter access code" autocomplete="off" maxlength="20"><button id="haf-btn">Continue</button><div id="haf-err"></div></div>';
document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(overlay);},false);
// also append immediately if body already exists
if(document.body) document.body.appendChild(overlay);
function attempt(){
var val=document.getElementById('haf-inp').value.trim().toUpperCase();
if(val===CODE){
sessionStorage.setItem(KEY,'1');
var el=document.getElementById('haf-gate');
if(el) el.remove();
} else {
var err=document.getElementById('haf-err');
if(err) err.textContent='Incorrect code. Try again.';
var inp=document.getElementById('haf-inp');
if(inp){inp.value='';inp.focus();}
}
}
document.addEventListener('click',function(e){if(e.target&&e.target.id==='haf-btn') attempt();});
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&document.getElementById('haf-gate')) attempt();});
})();