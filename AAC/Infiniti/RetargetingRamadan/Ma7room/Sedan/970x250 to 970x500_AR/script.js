

// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var collapsedPanel;
var expandedPanel;
var expandBtn;
var exitBtn;
var exit_btn2;
var closeBtn;


// =============================================================================================

dcrmInit = function(){
	Enabler.setExpandingPixelOffsets(
  	0, // left offset of expanded ad
  	0, // top offset of expanded ad
 	970, // expanded width of ad
  	500); // expanded height of ad


	// Set Expansion to Auto-Expand
	//Enabler.setStartExpanded(true);
	slimbarPanel 		= document.getElementById('slimbarContent')
	slimbar_expandBtn 	= document.getElementById('expand_btn');

	collapsedPanel 		= document.getElementById('collapsed');
	expandBtn 			= document.getElementById('expand_btn2');
	HideBtnCollapse 	= document.getElementById('hide_btn');

	expandedPanel 		= document.getElementById('expanded');
	exit_btn 			= document.getElementById('exit_btn');
	exit_btn2			= document.getElementById('exit_btn2');
	closeBtnExpand 		= document.getElementById('close_btn_expand');
	banner1 			= document.getElementById("banner1");
	banner2 			= document.getElementById("banner2");
	
	// Added Listeners
	addListeners();
	setupExternalScript();
	init1();
	init2();
}


addListeners = function (){
	slimbar_expandBtn.addEventListener('click', onExpandHandlerSlimbar, false);

	expandBtn.addEventListener('click', onExpandHandler, false);
	HideBtnCollapse.addEventListener('click', onCloseHandler_Col, false);

	exit_btn.addEventListener('click', onExitHandler, false);
	exit_btn2.addEventListener('click', onExitHandler2, false);
	closeBtnExpand.addEventListener('click', onCloseHandler_Exp, false);



	// Expand Event Listeners
  	Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,
    function() {
    	
    	Enabler.startTimer('expanded_panel');
		slimbarPanel.style.display = "none";
		collapsedPanel.style.display = "none";
		expandedPanel.style.display = "block";
		resizeCreative(0, 970, 500, 0, false);
		setTimeout(function(){Enabler.finishExpand()}, 1000);
	});


  	// Collapse Event Listeners
  	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,
    function() {
    	
		Enabler.stopTimer('expanded_panel');

    	setTimeout(function(){
    	Enabler.finishCollapse();
		},1000);

		});

  	// Collapse Finished
	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,
	function(){
		slimbarPanel.style.display = "none";
		expandedPanel.style.display = "none";
		collapsedPanel.style.display = "block";
	});

}

onExpandHandlerSlimbar = function(e){
	slimbarPanel.style.display = "none";
	collapsedPanel.style.display = "block";
	resizeCreative(0, 970, 250, 0, true);
}

onExpandHandler = function(e){
	Enabler.requestExpand();
	t2.restart();
}

onExitHandler = function(e){
	Enabler.exit('HTML5_Background_Clickthrough');
	//closeAd();
}
onExitHandler2 = function(e){
	Enabler.exit('HTML5_Background_Clickthrough');
	//closeAd();
}

onCloseHandler_Col = function(e){
	Enabler.counter('Manual_Close');
	Enabler.reportManualClose();
	slimbarPanel.style.display = "block";
	collapsedPanel.style.display = "none";
	resizeCreative(0, 970, 15, 0, true);

}

onCloseHandler_Exp = function(e){
	Enabler.counter('Manual_Close');
	Enabler.reportManualClose();
	closeAd();
	t1.restart();
}

closeAd = function(){
	Enabler.requestCollapse();
}


window.onload = function() {
  /* Initialize Enabler */
  if (Enabler.isInitialized()) {
    dcrmInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, dcrmInit);
  }
}

/**
 * External JS calls.
 */

setupExternalScript = function() {
  var rand = "?" + Math.floor(Math.random()*1000000);
  var externalScript = '(function(){' +
      '  var extScript = document.createElement("script"); ' +
      //'  extScript.src = "' + Enabler.getUrl('dc_g5mh.js') + rand + '"; ' +
      '  extScript.src = "http://motifcdn2.doubleclick.net/EMEA/dc_templates/live/preview/2015/publisher/msn/pushdown/MSN_Billboard_Templates/resizeCreative.js' + rand + '"; ' +
      '  document.head.appendChild(extScript); ' +
      '})();';
  Enabler.invokeExternalJsFunction(externalScript);
};

resizeCreative = function(tl, tr, br, bl, updateDimension) {
   var externalScript =
      '(function(){' +
      '  studioV2.myAsset.setClip(' + tl + ',' + tr + ',' + br + ',' + bl + ');';
  if (updateDimension) {
      externalScript += '  studioV2.myAsset.setDimension(' + tr + ',' + br + ');';
  }
  externalScript += '  studioV2.myAsset.getContainerElement().firstChild.style.height = "' +
          br + 'px"; })();';
  Enabler.invokeExternalJsFunction(externalScript);
};  

// BANNER
var t1 = new TimelineLite();
var t2 = new TimelineLite();
function init1() {
	var bg = document.getElementById("bg"),
	    sub1 = document.getElementById("sub-1"),
	    sub2 = document.getElementById("sub-2"),
	    sub3 = document.getElementById("sub-3"),
	    sub4 = document.getElementById("sub-4"),
	    sub5 = document.getElementById("sub-5"),
	    tc = document.getElementById("tc"),
	    cta = document.getElementById("cta");
	    // reload = document.getElementById("reload");

	t1.to(bg, 0.5, {autoAlpha: 1})
	  .to(sub1, 0.5, {autoAlpha: 1, ease: Power2.easeOut})
	  .to(sub1, 0.5, {autoAlpha: 0, delay: 3})
	  .to(sub2, 0.5, {autoAlpha: 1, ease: Power2.easeOut})
	  .to(sub3, 0.5, {autoAlpha: 1, ease: Power2.easeOut, delay: 1.5})
	  .to(sub4, 0.5, {autoAlpha: 1, ease: Power2.easeOut, delay: 1.5})
	  .to([sub2, sub3, sub4], 0.5, {autoAlpha: 0, delay: 2})
	  .to([cta, sub5], 0.5, {autoAlpha: 1, ease: Power2.easeOut})
	  .to(tc, 0.5, {autoAlpha: 1, delay: 1, ease: Power2.easeOut});
	  // .to(reload, 0.1, {autoAlpha: 1});
}

function init2() {
	var bg = document.getElementById("bg-2"),
	    sub1 = document.getElementById("sub-1-2"),
	    sub2 = document.getElementById("sub-2-2"),
	    sub3 = document.getElementById("sub-3-2"),
	    sub4 = document.getElementById("sub-4-2"),
	    sub5 = document.getElementById("sub-5-2"),
	    tc = document.getElementById("tc-2"),
	    cta = document.getElementById("cta-2");
	    // reload = document.getElementById("reload");

	t2.to(bg, 0.5, {autoAlpha: 1})
	  .to(sub1, 0.5, {autoAlpha: 1, ease: Power2.easeOut})
	  .to(sub1, 0.5, {autoAlpha: 0, delay: 3})
	  .to(sub2, 0.5, {autoAlpha: 1, ease: Power2.easeOut})
	  .to(sub3, 0.5, {autoAlpha: 1, ease: Power2.easeOut, delay: 1.5})
	  .to(sub4, 0.5, {autoAlpha: 1, ease: Power2.easeOut, delay: 1.5})
	  .to([sub2, sub3, sub4], 0.5, {autoAlpha: 0, delay: 2})
	  .to([cta, sub5], 0.5, {autoAlpha: 1, ease: Power2.easeOut})
	  .to(tc, 0.5, {autoAlpha: 1, delay: 1, ease: Power2.easeOut});
	  // .to(reload, 0.1, {autoAlpha: 1});
}

// function reloadBanner() {
// 	tl.restart();
// }