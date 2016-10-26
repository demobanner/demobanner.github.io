
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
  playFromStart(timeline1, timeline2);
  Enabler.finishExpand();
}

function expandFinishHandler() {
  creative.isExpanded = true;
}

function collapseStartHandler() {
  // Perform collapse animation.
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.closeButton.style.display = 'none';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  resumeAtPoint(timeline1);
  // When animation finished must call
  Enabler.finishCollapse();
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
  openFlag = false;
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
  clearInterval(timer);
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
  Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
  Enabler.exit('CollapsedExit');
}

var tl1 = new TimelineLite();

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

      tl1.to(img1_1, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text1_1, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut}, "-=0.2")
        .to([img1_1, text1_1, logo1_1], 0.5, {autoAlpha:0}, "+=2");

      tl1.to(car1, 0.5, {autoAlpha:1})
        .to(price1, 0.5, {autoAlpha:1, top:0, ease: Power4.easeInOut})
        .to(tc1, 0.5, {autoAlpha:1})
        .to([car1, price1, tc1], 0.5, {autoAlpha:0}, "+=2.5");

      tl1.to(img1_2, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text1_3, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut}, "-=0.2")
        .to(title1_1, 0.5, {autoAlpha:1}, "+=0.5")
        .to(text1_3, 0.5, {autoAlpha:0}, "+=2");

      tl1.to(text1_4, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text1_4, 0.5, {autoAlpha:0}, "+=2");

      tl1.to(text1_5, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text1_5, 0.5, {autoAlpha:0}, "+=2");

      tl1.to(text1_6, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text1_6, 0.5, {autoAlpha:0}, "+=2");

      tl1.to(text1_7, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to([text1_7, img1_2, title1_1], 0.5, {autoAlpha:0}, "+=2");

      tl1.to(logo1_2, 0.5, {autoAlpha:1})
        .to(title1_2, 0.5, {autoAlpha:1})
        .to(cta1, 0.5, {autoAlpha:1, top:0, ease: Power4.easeInOut});
    }

var tl2 = new TimelineLite();

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

      tl2.to(img2_1, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text2_1, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut}, "-=0.2")
        .to([img2_1, text2_1, logo2_1], 0.5, {autoAlpha:0}, "+=2");

      tl2.to(car2, 0.5, {autoAlpha:1})
        .to(price2, 0.5, {autoAlpha:1, top:0, ease: Power4.easeInOut})
        .to(tc2, 0.5, {autoAlpha:1})
        .to([car2, price2, tc2], 0.5, {autoAlpha:0}, "+=2.5");

      tl2.to(img2_2, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text2_3, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut}, "-=0.2")
        .to(title2_1, 0.5, {autoAlpha:1}, "+=0.5")
        .to(text2_3, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_4, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text2_4, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_5, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text2_5, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_6, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to(text2_6, 0.5, {autoAlpha:0}, "+=2");

      tl2.to(text2_7, 0.5, {autoAlpha:1, left:0, ease: Power4.easeInOut})
        .to([text2_7, img1_2, title1_1], 0.5, {autoAlpha:0}, "+=2");

      tl2.to(logo2_2, 0.5, {autoAlpha:1})
        .to(title2_2, 0.5, {autoAlpha:1})
        .to(cta2, 0.5, {autoAlpha:1, top:0, ease: Power4.easeInOut});
    }

window.addEventListener('load', preInit);
