-function(){"use strict";var d=function(b,a,c,g,h,k){a=document.createElement("input");a.type=g;a.id=c;a.placeholder=h;a.style.display=k?"block":"none";a.style.width="90%";b.appendChild(a);return a},e=function(b){return b&&"true"==b.toLowerCase()||""==b||"1"==b},f=function(b,a){var c;window.XMLHttpRequest&&(c=new XMLHttpRequest);c.onreadystatechange=function(){4==c.readyState&&200==c.status&&(console.log("ready"),console.log(c.responseText))};
c.open("POST",a,!0);c.setRequestHeader("Content-type","application/x-www-form-urlencoded");
c.send(b)},l=function(){};goog.inherits(l,HTMLFormElement);
l.prototype.createdCallback=function(){
  this.style.display="inherit";
  this.m="https://cplads-hrd.appspot.com/submit/"+this.getAttribute("lead_depot_id");
  this.f=e(this.getAttribute("include_name"));
  this.c=e(this.getAttribute("include_email"));
  this.g=e(this.getAttribute("include_phone"));
  this.b=e(this.getAttribute("include_address"));
  this.v=this.getAttribute("placeholder_name");
  this.u=this.getAttribute("placeholder_email");
  this.w=this.getAttribute("placeholder_phone");this.o=this.getAttribute("placeholder_address");

  this.A=this.getAttribute("placeholder_submit");
  this.s=this.getAttribute("placeholder_confirmation");
  this.j=d(this,this.j,"leadgen-name","text",this.v,this.f);
  this.i=d(this,this.i,"leadgen-email","email",this.u,this.c);
  this.l=d(this,this.l,"leadgen-phone","tel",this.w,this.g);
  this.h=d(this,this.h,"leadgen-address","text",this.o,this.b);
  var b=this.a,a=this.A,b=document.createElement("button");
  b.id="leadgen-submit";
  b.textContent=a;
  b.style.display="block";
  this.appendChild(b);
  this.a=b;
  this.addEventListener("submit",this.B)
};
l.prototype.attributeChangedCallback=function(b){
  var a=this.getAttribute(b);
  switch(b){
    case "lead_depot_id":this.m="https://cplads-hrd.appspot.com/submit/"+a;
      break;
    case "include_name":this.f=e(a);
      break;
    case "include_email":this.c=e(a);
      break;
    case "include_phone":this.g=e(a);
      break;
    case "include_address":this.b=e(a);
      break;
    case "placeholder_name":this.v=a;
      break;
    case "placeholder_email":this.u=a;
      break;
    case "placeholder_phone":this.w=a;
      break;
    case "placeholder_address":this.o=a;
      break;
    case "placeholder_submit":this.A=a;
      break;
    case "placeholder_confirmation":this.s=a
  }
};
l.prototype.B=function(b){
  b.preventDefault();
  f("name="+encodeURIComponent(this.j.value)+"&email="+encodeURIComponent(this.i.value)+"&phone="+encodeURIComponent(this.l.value)+"&address="+encodeURIComponent(this.h.value),this.m);
  this.a.disabled=!0;
  this.a.textContent=this.s;
  b=document.createEvent("Event");
  b.initEvent("lead-submitted",!0,!0);
  this.dispatchEvent(b)};document.registerElement("ci-leadgen",{prototype:l.prototype,"extends":"form"});
}()
