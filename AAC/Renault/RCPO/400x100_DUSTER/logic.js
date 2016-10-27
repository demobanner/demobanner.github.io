
var creative = {};

var tl1 = new TimelineLite();
var tl2 = new TimelineLite();

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-state');
  creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-state');
  creative.dom.collapseButton = document.getElementById('collapse-button');
  creative.dom.expandButton = document.getElementById('expand-button');
  creative.dom.featureCollapsed = document.getElementById('feature-collapsed');
  creative.dom.featureExpanded = document.getElementById('feature-expanded');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setExpandingPixelOffsets(0, 0, 400, 200);
  Enabler.setStartExpanded(false);

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
  creative.dom.expandButton.addEventListener('click', onExpandHandler, false);
  creative.dom.collapseButton.addEventListener('click', onCollapseClickHandler, false);
  creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';

  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  creative.dom.expandButton.style.display = 'block';
  creative.dom.featureCollapsed.style.visibility  = 'visible';
  creative.dom.featureExpanded.style.visibility  = 'visible';
  
	init1();
	init2();
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------


function expandStartHandler() {
  // Show expanded content.
  creative.dom.expandedContent.style.display = 'block';
  creative.dom.expandedExit.style.display = 'block';
  creative.dom.collapseButton.style.display = 'block';
  creative.dom.collapsedContent.style.display = 'none';
  creative.dom.collapsedExit.style.display = 'none';
  creative.dom.expandButton.style.display = 'none';

  Enabler.finishExpand();
}

function expandFinishHandler() {
  creative.isExpanded = true;
	tl2.restart();
}

function collapseStartHandler() {
  // Perform collapse animation.
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  creative.dom.expandButton.style.display = 'block';

  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
	tl1.restart();
}

function onCollapseClickHandler(){
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler(){
  Enabler.requestExpand();
  Enabler.startTimer('Panel Expansion');
}

function exitClickHandler() {
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
  Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
  Enabler.exit('CollapsedExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);

function init1() {

	var logo1_1 = document.getElementById("logo1_1"),
		img1_1 = document.getElementById("img1_1"),
		text1_1 = document.getElementById("text1_1"),
		car1 = document.getElementById("car1"),
		price1 = document.getElementById("price1"),
		tc1 = document.getElementById("tc1"),
		img1_2 = document.getElementById("img1_2"),
		text1_3 = document.getElementById("text1_3"),
		title1_1 = document.getElementById("title1_1"),
		text1_4 = document.getElementById("text1_4"),
		text1_5 = document.getElementById("text1_5"),
		text1_6 = document.getElementById("text1_6"),
		text1_7 = document.getElementById("text1_7"),
		logo1_2 = document.getElementById("logo1_2"),
		title1_2 = document.getElementById("title1_2"),
		cta1 = document.getElementById("cta1");

	tl1.to(img1_1, 0.5, {autoAlpha:1, left:0, ease: Power3.easeInOut})
		.to(text1_1, 0.5, {autoAlpha:1, left:0, ease: Power3.easeInOut}, "-=0.2")
		.to([img1_1, text1_1, logo1_1], 0.5, {autoAlpha:0}, "+=2");

	tl1.to(car1, 0.5, {autoAlpha:1})
		.to(price1, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
		.to(tc1, 0.5, {autoAlpha:1})
		.to([car1, price1, tc1], 0.5, {autoAlpha:0}, "+=2.5");

	tl1.to(img1_2, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
		.to(text1_3, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut}, "-=0.2")
		.to(title1_1, 0.5, {autoAlpha:1}, "+=0.5")
		.to(text1_3, 0.5, {autoAlpha:0}, "+=2");

	tl1.to(text1_4, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
		.to(text1_4, 0.5, {autoAlpha:0}, "+=2");

	tl1.to(text1_5, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
		.to(text1_5, 0.5, {autoAlpha:0}, "+=2");

	tl1.to(text1_6, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
		.to(text1_6, 0.5, {autoAlpha:0}, "+=2");

	tl1.to(text1_7, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
		.to([text1_7, img1_2, title1_1], 0.5, {autoAlpha:0}, "+=2");

	tl1.to(logo1_2, 0.5, {autoAlpha:1})
		.to(title1_2, 0.5, {autoAlpha:1})
		.to(cta1, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut});

}


function init2() {
      var logo2_1 = document.getElementById("logo2_1"),
        img2_1 = document.getElementById("img2_1"),
        text2_1 = document.getElementById("text2_1"),
        car2 = document.getElementById("car2"),
        price2 = document.getElementById("price2"),
        tc2 = document.getElementById("tc2"),
        img2_2 = document.getElementById("img2_2"),
        text2_3 = document.getElementById("text2_3"),
        title2_1 = document.getElementById("title2_1"),
        text2_4 = document.getElementById("text2_4"),
        text2_5 = document.getElementById("text2_5"),
        text2_6 = document.getElementById("text2_6"),
        text2_7 = document.getElementById("text2_7"),
        logo2_2 = document.getElementById("logo2_2"),
        title2_2 = document.getElementById("title2_2"),
        cta2 = document.getElementById("cta2");

      tl2.to(img2_1, 0.5, {autoAlpha:1, left:0, ease: Power3.easeInOut})
        .to(text2_1, 0.5, {autoAlpha:1, left:0, ease: Power3.easeInOut}, "-=0.2")
        .to([img2_1, text2_1, logo2_1], 0.5, {autoAlpha:0}, "+=2");

      tl2.to(car2, 0.5, {autoAlpha:1})
        .to(price2, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
        .to(tc2, 0.5, {autoAlpha:1})
        .to([car2, price2, tc2], 0.5, {autoAlpha:0}, "+=2.5");

      tl2.to(img2_2, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
        .to(text2_3, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut}, "-=0.2")
        .to(title2_1, 0.5, {autoAlpha:1}, "+=0.5")
        .to(text2_3, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_4, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
        .to(text2_4, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_5, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
        .to(text2_5, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_6, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
        .to(text2_6, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_7, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut})
        .to([text2_7, img2_2, title2_1], 0.5, {autoAlpha:0}, "+=2");

      tl2.to(logo2_2, 0.5, {autoAlpha:1})
        .to(title2_2, 0.5, {autoAlpha:1})
        .to(cta2, 0.5, {autoAlpha:1, top:0, ease: Power3.easeInOut});
    }
