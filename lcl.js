window.LCL=function(G){
var root=document.querySelector('.lcl-root'),tip=document.createElement('div'),cur=null,pin=false,timer,seen={};
tip.className='lcl-tip';tip.id='lcl-tip';tip.setAttribute('role','tooltip');root.appendChild(tip);
function open(g){
  clearTimeout(timer);
  if(cur&&cur!==g)cur.removeAttribute('aria-describedby');
  cur=g;g.setAttribute('aria-describedby','lcl-tip');
  tip.textContent=G[g.dataset.t];tip.classList.add('o');
  root.style.paddingBottom='';
  var rs=g.getClientRects(),a=rs[rs.length-1],r=root.getBoundingClientRect(),top=a.bottom-r.top+4,over=top+tip.offsetHeight+8-r.height;
  tip.style.left=Math.max(0,Math.min(a.left-r.left,r.width-tip.offsetWidth-2))+'px';
  tip.style.top=top+'px';
  if(over>0)root.style.paddingBottom=over+'px';
}
function close(){
  clearTimeout(timer);tip.classList.remove('o');
  if(cur)cur.removeAttribute('aria-describedby');
  cur=null;pin=false;root.style.paddingBottom='';
}
function later(){if(!pin){clearTimeout(timer);timer=setTimeout(close,120);}}
function toggle(g){if(pin&&cur===g)close();else{pin=true;open(g);}}
document.querySelectorAll('.lcl-g').forEach(function(g){
  var k=g.dataset.t;
  if(!G[k])return;
  if(!seen[k]){seen[k]=1;g.tabIndex=0;g.setAttribute('role','button');}
  g.addEventListener('mouseenter',function(){if(!pin)open(g);});
  g.addEventListener('mouseleave',later);
  g.addEventListener('focus',function(){if(!pin||cur!==g){pin=false;open(g);}});
  g.addEventListener('blur',later);
  g.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();toggle(g);});
  g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle(g);}});
});
tip.addEventListener('mouseenter',function(){clearTimeout(timer);});
tip.addEventListener('mouseleave',later);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
document.addEventListener('click',function(e){if(pin&&!e.target.closest('.lcl-g,.lcl-tip'))close();});
document.addEventListener('toggle',close,true);
var vw=innerWidth;
window.addEventListener('resize',function(){if(innerWidth!==vw){vw=innerWidth;close();}});
};
