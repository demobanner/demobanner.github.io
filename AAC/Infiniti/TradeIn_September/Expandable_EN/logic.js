
var creative = {};
var openFlag = false,
    expandable = true,
    timer;

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
  creative.dom.mainContainer = document.getElementById('ad');
  creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-state');
  creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-state');
  creative.dom.closeButton = document.getElementById('close-button');
  creative.dom.mainCollapsed = document.getElementById('main-collapsed');
  creative.dom.mainExpanded = document.getElementById('main-expanded');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setExpandingPixelOffsets(0, 0, 970, 250);
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
  creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
  creative.dom.collapsedExit.addEventListener('mouseover', onExpandHandler, false);
  creative.dom.collapsedExit.addEventListener('mouseout', function() {expandable = true;}, false);
  creative.dom.closeButton.addEventListener('click', onClickCloseButton, false);
  creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  creative.dom.expandedExit.addEventListener('mouseout', preCollapseHandler, false);
  creative.dom.expandedExit.addEventListener('mouseover', function() {openFlag = false;}, false);
  creative.dom.closeButton.addEventListener('mouseover', function() {openFlag = false;}, false);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.closeButton.style.display = 'none';

  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  creative.dom.mainCollapsed.style.visibility  = 'visible';
  creative.dom.mainExpanded.style.visibility  = 'visible';

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
  creative.dom.closeButton.style.display = 'block';
  creative.dom.collapsedContent.style.display = 'none';
  creative.dom.collapsedExit.style.display = 'none';

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
  creative.dom.closeButton.style.display = 'none';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';

  // When animation finished must call
  Enabler.finishCollapse();
  tl1.restart();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
}

function onClickCloseButton() {
  expandable = false;
  openFlag = true;
  onCollapseHandler();
}

function preCollapseHandler() {
  openFlag = true;
  timer = setInterval(onCollapseHandler, 100);
}

function onCollapseHandler(){
  clearInterval(timer);
  if (!openFlag) {
    return;
  }
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler(){
  if (!expandable) {
    return;
  }
  Enabler.requestExpand();
  Enabler.startTimer('Panel Expansion');
}

function exitClickHandler() {
  /*clearInterval(timer);
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');*/
  onClickCloseButton();
  Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
  Enabler.exit('CollapsedExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);

/*
 *  Banner
 */
var tl1 = new TimelineLite();
var tl2 = new TimelineLite();
init1 = function() {
 var left = document.getElementById("left_1"),
     right = document.getElementById("right_1"),
     text2 = document.getElementById("text2_1"),
     car4 = document.getElementById("car4_1"),
     text6 = document.getElementById("text6_1"),
     car8 = document.getElementById("car8_1"),
     text10 = document.getElementById("text10_1"),
     end = document.getElementById("end_1"),
     logo_AWR = document.getElementById("logo_AWR_1"),
     logo_Infiniti = document.getElementById("logo_Infiniti_1");

  tl1.to([right, logo_Infiniti], 0.5, {left: 280, ease: Power4.easeInOut})
        .to([left, logo_AWR], 0.5, {left: -270, ease: Power4.easeInOut}, "-=0.5")
        .to(text2, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
        .to([left, right, logo_AWR, logo_Infiniti], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
        .to(text2, 0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

  tl1.to([right, logo_Infiniti], 0.5, {left: 280, ease: Power4.easeInOut, delay: 1})
    .to([left, logo_AWR], 0.5, {left: -270, ease: Power4.easeInOut}, "-=0.5")
    .to(car4, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
    .to([left, right, logo_AWR, logo_Infiniti], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
    .to(car4, 0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

  tl1.to([right, logo_Infiniti], 0.5, {left: 280, ease: Power4.easeInOut, delay: 1})
    .to([left, logo_AWR], 0.5, {left: -270, ease: Power4.easeInOut}, "-=0.5")
    .to(text6, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
    .to([left, right, logo_AWR, logo_Infiniti], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
    .to(text6, 0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

  tl1.to([right, logo_Infiniti], 0.5, {left: 280, ease: Power4.easeInOut, delay: 1})
    .to([left, logo_AWR], 0.5, {left: -270, ease: Power4.easeInOut}, "-=0.5")
    .to(car8, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
    .to([left, right, logo_AWR, logo_Infiniti], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
    .to(car8,0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

  tl1.to([right, logo_Infiniti], 0.5, {left: 280, ease: Power4.easeInOut, delay: 1})
    .to([left, logo_AWR], 0.5, {left: -270, ease: Power4.easeInOut}, "-=0.5")
    .to(text10, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
    .to([left, right, logo_AWR, logo_Infiniti], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
    .to(text10,0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

  tl1.to(right, 0.5, {left: 280, ease: Power4.easeInOut, delay: 1})
    .to(left, 0.5, {left: -280, ease: Power4.easeInOut}, "-=0.5")
    .to(end, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25");
}

init2 = function() {
 var left = document.getElementById("left_2"),
     right = document.getElementById("right_2"),
     text2 = document.getElementById("text2_2"),
     car4 = document.getElementById("car4_2"),
     text6 = document.getElementById("text6_2"),
     car8 = document.getElementById("car8_2"),
     text10 = document.getElementById("text10_2"),
     end = document.getElementById("end_2");

  tl2.to(right, 0.5, {left: 308, ease: Power4.easeInOut}, "+=1")
        .to(left, 0.5, {left: -308, ease: Power4.easeInOut}, "-=0.5")
        .to(text2, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
        .to([left, right], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
        .to(text2, 0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

      tl2.to(right, 0.5, {left: 308, ease: Power4.easeInOut, delay: 1})
        .to(left, 0.5, {left: -308, ease: Power4.easeInOut}, "-=0.5")
        .to(car4, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
        .to([left, right], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
        .to(car4, 0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

      tl2.to(right, 0.5, {left: 308, ease: Power4.easeInOut, delay: 1})
        .to(left, 0.5, {left: -308, ease: Power4.easeInOut}, "-=0.5")
        .to(text6, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
        .to([left, right], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
        .to(text6, 0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

      tl2.to(right, 0.5, {left: 308, ease: Power4.easeInOut, delay: 1})
        .to(left, 0.5, {left: -308, ease: Power4.easeInOut}, "-=0.5")
        .to(car8, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
        .to([left, right], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
        .to(car8,0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

      tl2.to(right, 0.5, {left: 308, ease: Power4.easeInOut, delay: 1})
        .to(left, 0.5, {left: -308, ease: Power4.easeInOut}, "-=0.5")
        .to(text10, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25")
        .to([left, right], 0.5, {left: 0, ease: Power4.easeInOut, delay: 2})
        .to(text10,0.3, {autoAlpha: 0, ease: Power2.easeInOut}, "-=0.5");

      tl2.to(right, 0.5, {left: 308, ease: Power4.easeInOut, delay: 1})
        .to(left, 0.5, {left: -308, ease: Power4.easeInOut}, "-=0.5")
        .to(end, 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "-=0.25");
}