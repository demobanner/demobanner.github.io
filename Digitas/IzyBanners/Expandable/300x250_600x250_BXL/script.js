// Status Variable. Mandatory.
var animating = false;

// Document Ready listener. Mandatory.
$(document).ready(onReady);

// Set the expand type
var expandOnMouseOver = true;

function onReady(){

    // Template Listeners. Mandatory! Don't remove them please.
    screenadTemplate.events.addEventListener("onExpandStart", onExpandStart);
    screenadTemplate.events.addEventListener("onExpandComplete", onExpandComplete);
    screenadTemplate.events.addEventListener("onCollapseStart", onCollapseStart);
    screenadTemplate.events.addEventListener("onCollapseComplete", onCollapseComplete);

// Expandable Settings and init.
    // Edit (with care) this settings to change the expanding behaviour.
    // If changing the size, remember to update the SCRWIDTH and SCRHEIGHT variables
    // in our meta data located in the head.
// Also, CSS modifications may be required.
    var settings = {
         collapsedWidth: 300,
         collapsedHeight: 250,
         expandedWidth: 600,
         expandedHeight: 250,
         autoExpandDuration: 0,
         shouldPush: false,
         expandDirection: "LB"
    };

    if (screenad.vars.scr_autoexp != undefined) {
        settings.autoExpandDuration = screenad.vars.scr_autoexp;
        console.log(settings.autoExpandDuration);
    };

    screenadTemplate.init(screenadTemplate.Expandable, settings);

    // Expand & Collapse Triggers (currently with mouse hover but may be changed to click)
    // You can change the target elements and actions of course!
    if ( expandOnMouseOver ) {
// MouseOver
$("#closeBtn").css("display","none");
$("#clickArea").mouseover(function(){
  if(!animating && screenadTemplate.instance.currentState.id != "expandComplete"){
    animating = true;
    screenadTemplate.instance.changeState("expandStart");
  }
});

$("#clickArea").mouseout(function(){
  if(!animating && screenadTemplate.instance.currentState.id == "expandComplete"){
    animating = true;
    screenadTemplate.instance.changeState("collapseStart");
  }
});
} else {
// Click
$("#openBtn").click(function(){
  if(!animating && screenadTemplate.instance.currentState.id != "expandComplete"){
    animating = true;
    screenadTemplate.instance.changeState("expandStart");
  }
});
}
    $("#closeBtn").click(function(){
        if(!animating){
            animating = true;
            screenadTemplate.instance.changeState("collapseStart");
        }
    });

    // Initialize the states!
    if(settings.autoExpandDuration>0){
        $("#collapsedContent").hide();
        onExpandStart();
    }else{
        $("#expandedContent").hide();
        onCollapseStart();
    }
    onStart();
}

// Your custom JS actions:

function onStart(){
    //Custom actions when starting up
}

function onCollapseComplete() {
    //Custom actions when collapse is completed
}

function onExpandComplete() {
    //Custom actions when expand is completed
}

function onExpandStart() {
    console.log(1);
    //Custom actions when expanding is starting
    $("#expandedContent").show( 300, function(){ screenadTemplate.instance.changeState("expandComplete"); animating = false; });
    $("#collapsedContent").hide( 200);
    tl.pause();
    tl_expand.play();
}

function onCollapseStart() {
    //Custom actions when collapse is starting
    $("#collapsedContent").show( 300, function(){ screenadTemplate.instance.changeState("collapseComplete"); animating = false });
    $("#expandedContent").hide( 200);
    tl_expand.pause();
    tl.play();
}
