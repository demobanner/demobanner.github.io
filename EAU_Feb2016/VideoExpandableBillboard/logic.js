
var creative = {};
var counter = 0;
var changed = false;
var isOpened = false;
var timer;

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
  creative.dom.mainContainer = document.getElementById('banner');
  creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-panel');
  creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-panel');
  creative.dom.collapseButton = document.getElementById('collapse-button');
  creative.dom.bigVideo = document.getElementById('big-video');
  creative.dom.bigVideoFrame = document.getElementById('big-video-frame');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setExpandingPixelOffsets(0, 0, 970, 400);
  Enabler.setStartExpanded(false);

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }

  initTween();
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
  creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  creative.dom.expandedExit.addEventListener('mouseout', preCollapseHandler, false);
  creative.dom.expandedExit.addEventListener('click', function() {window.open(window.clickTag)}, false);
  creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
  creative.dom.collapsedExit.addEventListener('mouseover', onExpandHandler, false);
  creative.dom.collapsedExit.addEventListener('mouseout', function() { changed = false;}, false);
  creative.dom.bigVideoFrame.addEventListener('mouseover', function() { isOpened = true }, false);
  creative.dom.bigVideoFrame.addEventListener('mouseout', preCollapseHandler, false);
  creative.dom.bigVideo.addEventListener('mouseover', function() { isOpened = true }, false);
  creative.dom.collapseButton.addEventListener('click', onCloseButtonClickHandler, false);
  creative.dom.collapseButton.addEventListener('mouseover', function() { isOpened = true }, false);
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
  // creative.dom.expandButton.style.display = 'block';
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
  play_970x400();
  Enabler.finishExpand();
}

function expandFinishHandler() {
  creative.isExpanded = true;
  counter ++;
}

function collapseStartHandler() {
  // Perform collapse animation.
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  play_970x250();

  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
}

function onCloseButtonClickHandler() {
  isOpened = false;
  onCollapseHandler();
  changed = true;
}

function preCollapseHandler() {
  isOpened = false;
  timer = setInterval(onCollapseHandler, 100);
}
function onCollapseHandler(){
  if (!isOpened) {
    Enabler.requestCollapse();
    Enabler.stopTimer('Panel Expansion');
    isOpened = true;
  }
  clearInterval(timer);
}

function onExpandHandler(){
  if (changed) { return; }
  isOpened = true;
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
