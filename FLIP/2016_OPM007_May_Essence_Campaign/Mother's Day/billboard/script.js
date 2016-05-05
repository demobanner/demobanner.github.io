
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var container;
var collapsedPanel;
var expandedPanel;
var expandBtn;
var exitBtn;
var cta;
var cta1;
var hideBtn;
var screenWidth;
var bannerTween;
// =============================================================================================

//Function to run with any animations starting on load, or bringing in images etc
pageLoadedHandler = function(){
	//Assign All the elements to the element on the page
	Enabler.setExpandingPixelOffsets(
  	0, // left offset of expanded ad
  	0, // top offset of expanded ad
 	970, // expanded width of ad
  	250); // expanded height of ad

	// Set Expansion to Auto-Expand
	// Enabler.setStartExpanded(true);

	container 			= document.getElementById('container');
	collapsedPanel 	= document.getElementById('collapsed');
	expandBtn 			= document.getElementById('expand_btn');
	hideBtn 			  = document.getElementById('hide_btn');
	expandedPanel 	= document.getElementById('expanded');
	exitBtn 			  = document.getElementById('exit_btn');
  cta             = document.getElementById('cta');
  cta1            = document.getElementById('cta1');

	setTimeout(function(){
		container.style.display = "block";
    animations();

		//Platforms indicator
		platformsIndicator();
	},1300);

	// Added Listeners
	addListeners();
	setupExternalScript();
	// Enabler.requestExpand();
}

addListeners = function (){
	expandBtn.addEventListener('click', onExpandHandler, false);
	hideBtn.addEventListener('click', onHideHandler, false);
	exitBtn.addEventListener('click', onExitHandler, false);
  cta.addEventListener('click', onCtaHandler, false);
  cta1.addEventListener('click', onCta1Handler, false);
}

onExpandHandler = function(e){
	platformsIndicator();
	collapsedPanel.style.display = "none";
	expandedPanel.style.display = "block";
}

onExitHandler = function(e){
	Enabler.exit('mainExit', 'http://www.pandora.net/en-ae/');
}

onCtaHandler = function(e){
  Enabler.exit('mainExit1', 'http://www.pandora.net/en-ae/explore/collections/essence');
}

onCta1Handler = function(e){
  Enabler.exit('mainExit2', 'http://www.pandora.net/en-ae/explore/collections/essence');
}

onHideHandler = function(e){
	Enabler.counter('Manual_Close');
	Enabler.reportManualClose();
	showCollapsed();
}

onCloseAd = function(){
	Enabler.requestCollapse();
}

platformsIndicator = function (){
	screenWidth = window.screen.width;

	if(screenWidth > 1024)
	{
		console.log("DESKTOP VIEW");
		resizeCreative(0, 970, 250, 0, true);
		expandedPanel.style.width = "968px";
		expandedPanel.style.height = "248px";
		container.style.width = "970px";
		container.style.height = "250px";
	}
	else if(screenWidth > 500 && screenWidth <= 1024)
	{
		console.log("TABLET VIEW");
		resizeCreative(0, 768, 100, 0, true);
		expandedPanel.style.width = "766px";
		expandedPanel.style.height = "98px";
		container.style.width = "768px";
		container.style.height = "100px";
	}
	else if(screenWidth <= 500)
	{
		console.log("PHONE VIEW");
		resizeCreative(0, 320, 100, 0, true);
		expandedPanel.style.width = "318px";
		expandedPanel.style.height = "98px";
		container.style.width = "320px";
		container.style.height = "100px";
	}
}

showCollapsed = function (){
	collapsedPanel.style.display = "block";
	expandedPanel.style.display = "none";
	if(screenWidth > 1024)
	{
		resizeCreative(0, 970, 40, 0, true);
		container.style.width = "970px";
		container.style.height = "40px";
	}
	else if(screenWidth > 500 && screenWidth <= 1024)
	{
		resizeCreative(0, 768, 40, 0, true);
		container.style.width = "768px";
		container.style.height = "40px";
	}
	else if(screenWidth <= 500)
	{
		resizeCreative(0, 320, 40, 0, true);
		container.style.width = "320px";
		container.style.height = "40px";
	}
}

function dcrmInit(){
	console.log('ENABLER INIT');

	if(Enabler.isPageLoaded()){
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
}

window.onload = function() {
  /* Initialize Enabler */
  if (Enabler.isInitialized()) {
    dcrmInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, dcrmInit);
  }
}

function animations() {
  var bannerTween = new TimelineLite();
  var bracelet1 = document.getElementById('bracelet1'),
    text      = document.getElementById('text'),
    charm1    = document.getElementById('charm1'),
    charm2    = document.getElementById('charm2'),
    charm3    = document.getElementById('charm3'),
    charm4    = document.getElementById('charm4'),
    bracelet  = document.getElementById('bracelet'),
    text1     = document.getElementById('text1'),
    last_pic  = document.getElementById('last_pic'),
    cta       = document.getElementById('cta'),
    cta1      = document.getElementById('cta1');
  bannerTween.to(bracelet1, 0.5, {autoAlpha: 1, scale: 1, ease: Power0.easeOut})
             .to(charm1, 0.5, {autoAlpha: 1}, "+=0.5")
             .to(text, 0.5, {autoAlpha: 1, top: 0})
             .to(cta, 0.5, {autoAlpha: 1, left: 380, ease: Power0.easeOut})
             .to(charm1, 0.5, {autoAlpha: 0}, "+=2")
             .to(charm2, 0.5, {autoAlpha: 1})
             .to(charm2, 0.5, {autoAlpha: 0}, "+=2")
             .to(charm3, 0.5, {autoAlpha: 1})
             .to(charm3, 0.5, {autoAlpha: 0}, "+=2")
             .to(charm4, 0.5, {autoAlpha: 1})
             .to([bracelet1, text, charm4, cta], 0.5, {autoAlpha: 0}, "+=3");
  bannerTween.to(bracelet, 0.5, {autoAlpha: 1, scale: 1, ease: Power0.easeOut})
             .to(text1, 0.5, {autoAlpha: 1, top: 0})
             .to(cta1, 0.5, {autoAlpha: 1, left: 380, ease: Power0.easeOut})
             .to(last_pic, 0.5, {autoAlpha: 1});
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
