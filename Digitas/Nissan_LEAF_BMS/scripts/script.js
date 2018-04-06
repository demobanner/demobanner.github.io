var w=300;
var h=250;
var logoMov = {x0:"12px",y0:"0px"};
var titleMov = {x0:"100px",y0:"28px"};
var carMov = {x0:"-310px",y0:"103px",x1:"-3px",y1:"90px"};
var carW = {w0:"200px",w1:"321px"};
var ctaMov = {x0:"-239px",y0:"210px",x1:"12px",y1:"210px"};
var scrollbarMov = {x0:"56px",y0:"160px"};
var pointerMov = {x0:"-11px",y0:"-51px"};
var scrollbarFullDecal="6px";
var scrollbarFullDim={w:"182px",h:"11px"};
var kmDim={w:"34px",h:"18px"};
var txtMov = {x0:"57px",y0:"300px",x1:"57px",y1:"106px"};
var stop1="-56px";
var lastStepDelay=10.5;

function processAd() {
    if ((isIE() && isIE() < 9)) {
        getEl("clickthrough-button").href="javascript:clickthrough();";
        getEl("protector").style.display='none';
        getEl("part1").style.display='none';
        getEl("part2").style.display='none';
        getEl("legend").style.display='none';
        getEl("legend2").style.display='none';
        getEl("title2").style.display='none';
        getEl("logo_conditions").style.display='none';
        initPos2("logo",logoMov);
        initPos2("title",titleMov);
        initPos2("car",carMov);
        initPos2("cta1",ctaMov);
        getEl("car").style.width = carW.w1;
        return;
    }else{
        addEventListeners();
    }
    initPos("logo",logoMov);
    initPos("title",titleMov);
    initPos("car",carMov);
    initPos("cta1",ctaMov);
    initPos("cta2",ctaMov);
    initPos("scrollbar",scrollbarMov);
    initPos("pointer1",pointerMov);
    initPos("pointer2",pointerMov);
    initPos("txt1",_dMove(txtMov,0,-45));
    initPos("txt2",_dMove(txtMov,0,-25));
    initPos("txt3",_dMove(txtMov,0,-10));
    initPos("txt4",txtMov);
    initPos("txt5",_dMove(txtMov,0,10));
    initPos("txt6",_dMove(txtMov,0,25));
    initPos("txt7",_dMove(txtMov,0,45));
    _hideV("txt1",0.1);
    _hideV("txt2",0.15);
    _hideV("txt3",0.3);
    _hideV("txt4",0.4);
    _hideV("txt5",0.3);
    _hideV("txt6",0.15);
    _hideV("txt7",0.1);

    getEl("bluescroll").style.left = "-"+parseInt(scrollbarFullDim.w)+"px";
    getEl("whiteline").style.left = (parseInt(scrollbarFullDim.w)+parseInt(stop1))+"px";
    getEl("scrollbar_full").style.left = scrollbarFullDecal;
    getEl("scrollbar_full").style.width = scrollbarFullDim.w;
    getEl("scrollbar_full").style.height = scrollbarFullDim.h;
    getEl("whiteline").style.height = scrollbarFullDim.h;
    getEl("km").style.top = (parseInt(scrollbarFullDim.h)+7)+"px";
    getEl("number").style.top = (parseInt(scrollbarFullDim.h)+7)+"px";
    getEl("km").style.left = (parseInt(scrollbarFullDim.w)+parseInt(stop1)-parseInt(kmDim.w))+"px";

    getEl("number").style.width = (parseInt(scrollbarFullDim.w)+parseInt(stop1)-parseInt(kmDim.w)-8)+"px";
    getEl("car").style.width = carW.w0;
    _hide("scrollbar");
    _hide("car");
    _hide("cta2");
    _hide("whiteline");
    _hide("refN");
    _hide("cta1");
    _hide("legend");
    _hide("legend2");
    _hide("title2");
    _hide("logo_conditions");

    _genNumber("0");

    startAd();
    TweenLite.to(protector, 0.15, {ease:Linear.easeNone, opacity:0 });
}

function genNumber(){
    var r = Math.floor(parseInt(getEl("refN").style.opacity));
    console.log(getEl("refN").style.opacity);
    _genNumber(r+"");
}
function _genNumber(s){
    var c="";
    for(var i=0;i<s.length;i++){
        c+= "<img class='num' src='img/n"+s.charAt(i)+".png'>";
    }
    getEl("number").innerHTML = c;
}

function startAd() {
    _show(scrollbar,.25,.5);
    TweenLite.to(refN, 2, {delay:.5, opacity:199, ease:Power2.easeOut, onUpdate:genNumber});
    TweenLite.to(refN, 1.33, {delay:1.5, opacity:199, ease:Sine.easeOut, onUpdate:genNumber});
    TweenLite.to(bluescroll, 2, {delay:.5, ease:Power2.easeOut, left:stop1});
    TweenLite.to(bluescroll, 1.33, {delay:1.5, ease:Sine.easeOut, left:stop1});
    TweenLite.to(pointer2, 2, {delay:.5, ease:Power2.easeOut, left:(parseInt(scrollbarFullDim.w)+parseInt(stop1)+parseInt(pointerMov.x0))+"px"});
    TweenLite.to(pointer2, 1.33, {delay:1.5, ease:Sine.easeOut, left:(parseInt(scrollbarFullDim.w)+parseInt(stop1)+parseInt(pointerMov.x0))+"px"});

    TweenLite.to(bluescroll, 2, {delay:3.75, ease:Power1.easeOut, left:"0px"});
    TweenLite.to(bluescroll, 1.33, {delay:4.75, ease:Sine.easeOut, left:"0px"});
    TweenLite.to(refN, 2, {delay:3.75, opacity:250, ease:Power1.easeOut, onUpdate:genNumber});
    TweenLite.to(refN, 1.33, {delay:4.75, opacity:250, ease:Sine.easeOut, onUpdate:genNumber});
    TweenLite.to(pointer2, 2, {delay:3.75, ease:Power1.easeOut, left:(parseInt(scrollbarFullDim.w)+parseInt(pointerMov.x0))+"px"});
    TweenLite.to(pointer2, 1.33, {delay:4.75, ease:Sine.easeOut, left:(parseInt(scrollbarFullDim.w)+parseInt(pointerMov.x0))+"px"});


    _show(whiteline,.25,3.75);
    _hid(scrollbar,.25,7);


    _show(legend,.25,7.85);
    _moveTo1(txt1,.35,7.5,txtMov);
    _moveTo1(txt2,.35,7.5,txtMov);
    _moveTo1(txt3,.35,7.5,txtMov);
    _moveTo1(txt4,.35,7.5,txtMov);
    _moveTo1(txt5,.35,7.5,txtMov);
    _moveTo1(txt6,.35,7.5,txtMov);
    _moveTo1(txt7,.35,7.5,txtMov);
    _hid(txt1, 0.1, 7.75);
    _hid(txt2, 0.1, 7.75);
    _hid(txt3, 0.1, 7.75);
    _show(txt4, 0.1, 7.75);
    _hid(txt5, 0.1, 7.75);
    _hid(txt6, 0.1, 7.75);
    _hid(txt7, 0.1, 7.75);

    TweenLite.to(txt4, .35, {delay:10, ease:Sine.easeIn, top:(parseInt(txtMov.y1)-11)+"px"});
    _hid(txt4, 0.3, 10);
    _hid(legend,.5,10);

    TweenLite.to(car, 1.5, {delay:lastStepDelay, ease:Quad.easeOut, top:carMov.y1, left:carMov.x1, opacity:1, width:carW.w1 });
    TweenLite.to(cta1, 0, {delay:lastStepDelay+1.5, ease:Quad.easeOut, top:ctaMov.y1, left:ctaMov.x1 });
    TweenLite.to(cta2, 0, {delay:lastStepDelay+1.5, ease:Quad.easeOut, top:ctaMov.y1, left:ctaMov.x1 });
    _hid(title, .5, lastStepDelay+1);
    _show(title2,.5,lastStepDelay+1.5);
    _show(legend2,.5,lastStepDelay+2);
    _hid(title2,.5,lastStepDelay+4);
    _hid(legend2,.5,lastStepDelay+4);
    _show(logo_conditions,.5,lastStepDelay+4);
    _show(cta1,.5,lastStepDelay+4.5);

}

function _hide(id){            getEl(id).style.opacity = 0; }
function _hideV(id,v){         getEl(id).style.opacity = v; }
function initPos(id,obj) {     getEl(id).style.left = obj.x0;    getEl(id).style.top = obj.y0;  }
function initPos2(id,obj) {    getEl(id).style.left = obj.x1;    getEl(id).style.top = obj.y1;  }
function getEl(id){            return document.getElementById(id);  }
function _dMove(obj,xx,yy){    return {x0:(parseInt(obj.x0)+xx)+"px",y0:(parseInt(obj.y0)+yy)+"px"};    }
function _moveTo0(id,t,d,obj){ TweenLite.to(id, t, {delay:d, ease:Quad.easeOut, top:obj.y0, left:obj.x0 }); }
function _moveTo1(id,t,d,obj){ TweenLite.to(id, t, {delay:d, ease:Quad.easeOut, top:obj.y1, left:obj.x1 }); }
function _hid(id,t,d){         TweenLite.to(id, t, {delay:d, opacity:0});  }
function _show(id,t,d){        TweenLite.to(id, t, {delay:d, opacity:1});  }
function addEventListeners() {
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
    document.getElementById("clickthrough-button").addEventListener("mouseover", showCTA);
    document.getElementById("clickthrough-button").addEventListener("mouseout", hideCTA);
}

function showCTA(){
    _show(cta2,.25,0);
}

function hideCTA(){
    _hid(cta2,.25,0);
}
function clickthrough() {      EB.clickthrough();}
window.addEventListener("load", initEB);

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, processAd);
    } else {
        processAd();
    }
}

