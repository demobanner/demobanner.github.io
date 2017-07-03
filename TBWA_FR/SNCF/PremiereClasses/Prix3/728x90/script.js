// ======== Default Vars ======== //
var stageBackground;

// ======== Ad Vars ======== //
var frame1,
    frame2,
    background,
    picture,
    txt1,
    txt7,
    txt8,
    lenta,
    logo2,
    legal2,
    cta;

// ======== Taiming Vars ======== //

var counter = 0,
    timeoutID;

// ======== Preload Ad ======== //

var preloadImages = [
    "background.jpg",
    "picture.png",
    "txt-1.png",
    "txt-7.png",
    "txt-8.png",
    "lenta.png",
    "logo-2.png",
    "legal-2.png",
    "cta.png"

];

function preload() {
    var lastLoadedImage = -1;
    stageBackground = document.getElementById("stageBackground");
    loadNext();

    function loadNext() {
        lastLoadedImage++;
        if (lastLoadedImage >= preloadImages.length) {
            init();
        } else {
            var img = new Image();
            img.onload = loadNext;
            img.src = preloadImages[lastLoadedImage];
        }
    }
}

// ======== Show Ad ======== //

function init() {
    frame1 = document.querySelector(".frame-1");
    background = document.querySelector(".background");
    picture = document.querySelector(".picture");
    txt1 = document.querySelector(".txt-1");
    frame2 = document.querySelector(".frame-2");
    txt7 = document.querySelector(".txt-7");
    txt8 = document.querySelector(".txt-8");
    lenta = document.querySelector(".lenta");
    logo2 = document.querySelector(".logo-2");
    legal2 = document.querySelector(".legal-2");
    cta = document.querySelector(".cta");
    border_in = document.querySelector(".border_in");


    stageBackground.style.visibility = "visible";
    timeline();
}

// ======== TIMELINE ======== //

function timeline() {
    console.log('timeline');

    timeoutID = setTimeout(function() {
        picture.className = "picture picture-anim";
    }, 0300);

    timeoutID = setTimeout(function() {
        lenta.className = "lenta lenta-anim";
    }, 0500);


    timeoutID = setTimeout(function() {
        logo2.className = "logo-2 logo-2-anim";
    }, 0500);

    timeoutID = setTimeout(function() {
        txt1.className = "txt-1 txt-1-anim";
    }, 0800);

    timeoutID = setTimeout(function() {
        txt1.className = "txt-1 txt-1-anim-2";
    }, 4200);

    timeoutID = setTimeout(function() {
        frame1.className = "frame-1 frame-1-anim";
    }, 4400);


    timeoutID = setTimeout(function() {
        txt7.className = "txt-7 txt-7-anim";
    }, 4600);

    timeoutID = setTimeout(function() {
        txt8.className = "txt-8 txt-8-anim";
    }, 4800);

    timeoutID = setTimeout(function() {
        legal2.className = "legal-2 legal-2-anim";
    }, 4800);


    timeoutID = setTimeout(function() {
        cta.className = "cta cta-anim";
    }, 5500);

}
