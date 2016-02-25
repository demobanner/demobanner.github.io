
var creative = {};
var counter = 0;
var changed = false;

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
  creative.dom.expandButton = document.getElementById('expand-button');
  creative.dom.image0 = document.getElementById('main-img-0');
  creative.dom.image1 = document.getElementById('main-img-1');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setExpandingPixelOffsets(0, 0, 970, 500);
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
  // creative.dom.expandButton.addEventListener('click', onExpandHandler, false);
  creative.dom.collapseButton.addEventListener('click', onCloseButtonClickHandler, false);
  // creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  // creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
  creative.dom.collapsedExit.addEventListener('mouseover', onExpandHandler, false);
  creative.dom.collapsedExit.addEventListener('mouseout', function() { changed = false }, false);
  creative.dom.expandedExit.addEventListener('mouseout', onCollapseClickHandler, false);

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
  // creative.dom.expandButton.style.display = 'none';

  if (counter <= 0) {
    showBanner_970x500();
  } else {
    play_970x500();
  }

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
  // creative.dom.expandButton.style.display = 'block';

  play_970x250();

  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  creative.isExpanded = false;
}

function onCloseButtonClickHandler() {
  onCollapseClickHandler();
  changed = true;
}

function onCollapseClickHandler(){
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler(){
  console.log(changed);
  if (changed) { return; }
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
