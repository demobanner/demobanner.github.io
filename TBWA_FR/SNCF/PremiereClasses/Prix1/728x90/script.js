// ======== Default Vars ======== //
var container;

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
    cta,
    curtain,
    border,
    border_in,
    clickTag;

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
    container = document.getElementById("container");
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
    curtain = document.querySelector(".curtain");
    border = document.querySelector(".border");
    border_in = document.querySelector(".border_in");
    clickTag = document.querySelector(".click-tag");


    container.style.display = "block";

    addListeners();
    timeline();
}

// ======== TIMELINE ======== // 

function timeline() {

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


// ======== RESET ======== // 
// function resetBanner() {

//     frame1.className = "frame-1";
//     picture.className = "picture";
//     background.className = "background";
//     txt1.className = "txt-1";
//     txt2.className = "txt-2";
//     txt3.className = "txt-3";
//     txt3une.className = "txt-3-une";
//     frame2.className = "frame-2";
//     txt6.className = "txt-6";
//     txt6inter.className = "txt-6-inter";
//     lenta.className = "lenta";
//     logo.className = "logo";
//     legal.className = "legal";
//     cta.className = "cta";
//     curtain.className = "curtain";
//     border.className = "border";
//     border_in.className = "border_in";
//     clickTag.className = "click-tag";



    // setTimeout(function() {
    //     frame1.className = "frame-1 frame-1-anim delay-6900";
    //     picture.className = "picture picture-anim delay-0100";
    //     background.className = "background";
    //     txt1.className = "txt-1 txt-1-anim delay-2200";
    //     txt2.className = "txt-2 txt-2-anim delay-2300";
    //     txt3.className = "txt-3 txt-3-anim delay-2400";
    //     txt3une.className = "txt-3-une txt-3-une-anim delay-2500";
    //     txt4.className = "txt-4 txt-4-anim delay-4900";
    //     txt5.className = "txt-5 txt-5-anim delay-5000";
    //     frame2.className = "frame-2";
    //     lenta.className = "lenta lenta-anim delay-7300";
    //     logo.className = "logo logo-anim delay-7300";
    //     txt6.className = "txt-6 txt-6-anim delay-7600";
    //     txt6inter.className = "txt-6-inter txt-6-inter-anim delay-7800";
    //     txt7.className = "txt-7 txt-7-anim delay-7800";
    //     txt7max.className = "txt-7-max txt-7-max-anim delay-8200";
    //     legal.className = "legal legal-anim delay-7800";
    //     cta.className = "cta cta-anim delay-8200";
    //     curtain.className = "curtain curtain-anim delay-12000";
    //     border.className = "border";
    //     clickTag.className = "click-tag";

    // }, 50);

//     setTimeout(function() {
//         init();
//     }, 100);
// }

// ======== ADD LISTENERS ======== // 

function addListeners() {
    var clickTag = document.querySelector(".click-tag");
    clickTag.addEventListener("click", bgExitHandler, false);
}

// ======== bgExitHandler ======== // 

function bgExitHandler() {
    // window.open("");
    screenad.click("default");
}
