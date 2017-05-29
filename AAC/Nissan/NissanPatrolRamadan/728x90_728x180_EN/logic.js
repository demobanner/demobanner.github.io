
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
  creative.dom.replayButton_1 = document.getElementById('replayButton_1');
  creative.dom.replayButton_2 = document.getElementById('replayButton_2');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setExpandingPixelOffsets(0, 0, 728, 180);
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
  creative.dom.replayButton_1.addEventListener('click', restart);
  creative.dom.replayButton_2.addEventListener('click', restart);
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
  tl1.to(f2_text1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f2_text1, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .fromTo(f3_car1, 0.5, {autoAlpha:1, x:-210, y:-10}, {x:0, y:0, ease:Power1.easeInOut})
    .to(wheels1, 0.1, {autoAlpha:0, ease:Power1.easeInOut}, "-=0.1")
    .to(wheels1, 0.1, {autoAlpha:1, ease:Power1.easeInOut}, "+=1")
    .to(f3_car1, 0.5, {x:300, y:20, ease:Power1.easeInOut})

    .to(f4_text1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f4_text1, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .to(f5_text1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f5_text1, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .to(f6_text1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f6_text1, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .fromTo(f7_car1, 0.5, {autoAlpha:1, x:-210, y:-10}, {x:91, y:0, ease:Power1.easeOut})
    .to(wheels1, 0.1, {autoAlpha:0, ease:Power1.easeInOut}, "-=0.1")

    
    .to(f8_text1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(logo_awr1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(cta1, 0.5, {autoAlpha:1, top:0, ease:Power3.easeInOut})
    .to(tc1, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(replayButton_1, 0.5, {autoAlpha: 1, rotation: 180});

  tl1.fromTo(stars1, 13, {x:-320}, {x:-45, ease:Linear.easeNone}, '0');
}

function init2() {
  tl2.to(f2_text2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f2_text2, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

   .fromTo(f3_car2, 0.5, {autoAlpha:1, x:-250, y:-20}, {x:0, y:0, ease:Power1.easeInOut})
    .to(wheels2, 0.1, {autoAlpha:0, ease:Power1.easeInOut}, "-=0.1")
    .to(wheels2, 0.1, {autoAlpha:1, ease:Power1.easeInOut}, "+=1")
    .to(f3_car2, 0.5, {x:300, y:20, ease:Power1.easeInOut})

    .to(f4_text2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f4_text2, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .to(f5_text2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f5_text2, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .to(f6_text2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(f6_text2, 0.5, {autoAlpha:0, ease:Power3.easeInOut}, "+=2")

    .fromTo(f7_car2, 0.5, {autoAlpha:1, x:-250, y:-20}, {x:54,y:0, ease:Power1.easeOut})
    .to(wheels2, 0.1, {autoAlpha:0, ease:Power1.easeInOut}, "-=0.1")

    .to(f8_text2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(logo_awr2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(cta2, 0.5, {autoAlpha:1, top:0, ease:Power3.easeInOut})
    .to(tc2, 0.5, {autoAlpha:1, ease:Power3.easeInOut})
    .to(replayButton_2, 0.5, {autoAlpha: 1, rotation: 180});

  tl2.fromTo(stars2, 13, {x:-252}, {x:-2, ease:Linear.easeNone}, '0');
}
function restart() {
  tl1.restart();
  tl2.restart();
}