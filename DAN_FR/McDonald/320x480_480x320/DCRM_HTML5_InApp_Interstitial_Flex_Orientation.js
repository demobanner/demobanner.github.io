// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var dcAd = {};

//Function to run with any animations starting on load, or bringing in images etc
dcAd.setObjects = function() {


	Enabler.addEventListener(studio.events.StudioEvent.ORIENTATION, dcAd.changeOrientationHandler);

	//Assign All the elements to the element on the page
	dcAd.container = document.getElementById('container_dc');
	dcAd.bgExit = document.getElementById('background_exit_dc');

	dcAd.banner1 = document.getElementById('banner1');
	dcAd.banner2 = document.getElementById('banner2');

	dcAd.modeText = document.getElementById('modeText');
	dcAd.degreesText = document.getElementById('degreesText');

	dcAd.banner1.style.display = 'inline';
	dcAd.banner1animation();
	dcAd.banner2.style.display = 'none';
	dcAd.banner2.style.visibility = 'hidden';

	dcAd.addListeners();
}

//Add Event Listeners
dcAd.addListeners = function() {

	dcAd.bgExit.addEventListener('click', dcAd.bgExitHandler , false);

	// dcAd.modeText.innerHTML = 'mode: '+Enabler.getOrientation().getMode();
	// dcAd.degreesText.innerHTML = 'degrees: '+Enabler.getOrientation().getDegrees();

	console.log("orientation mode: "+Enabler.getOrientation().getMode());
	console.log("orientation degrees: "+Enabler.getOrientation().getDegrees());

}

//exits
dcAd.bgExitHandler = function(e) {
	console.log("jjjjjjjjjjjjjjjjjjjjj");
	dcAd.enablerExit(dcAd.ON_BG_EXIT);
}


//Function to call for Custom Exit Tracking - using switch method
dcAd.enablerExit = function(type) {
	switch (type) {
		case dcAd.ON_BG_EXIT:
			Enabler.exit('HTML5_Background_Clickthrough');
			break;
	}
}

dcAd.changeOrientationHandler = function(){
	console.log("orientation mode: "+Enabler.getOrientation().getMode());
	console.log("orientation degrees: "+Enabler.getOrientation().getDegrees());

	// dcAd.modeText.innerHTML = 'mode: '+Enabler.getOrientation().getMode();
	// dcAd.degreesText.innerHTML = 'degrees: '+Enabler.getOrientation().getDegrees();

	if(Enabler.getOrientation().getMode() == 'portrait'){
		dcAd.container.style.width = 318+'px';
		dcAd.container.style.height = 478+'px';

		dcAd.banner1.style.display = 'inline';
		dcAd.banner1animation();
		dcAd.banner2.style.display = 'none';
		dcAd.banner2.style.visibility = 'hidden';
	}else{
		dcAd.container.style.width = 478+'px';
		dcAd.container.style.height = 318+'px';

		dcAd.banner1.style.display = 'none';
		dcAd.banner1.style.visibility = 'hidden';
		dcAd.banner2.style.display = 'inline';
		dcAd.banner2animation();
	}
}

dcAd.banner1animation = function(){
	var tl1 = new TimelineLite();
    document.getElementById("banner1").style.visibility = 'visible';
    tl1.to(b1_f1_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 1)

      .to(b1_f2_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 1.5)
      .to(b1_f1_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 1.4)

      .to(b1_f3_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 4)
      .to(b1_f2_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 3.9)

      .to(b1_f4_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 6)
      .to(b1_f3_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 5.9)

      .to([b1_f5_bg,b1_f5_img], 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 8)
      .to(b1_f4_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 7.9)
      .to(b1_f5_img, 0.5, {webkitFilter:"blur(5px)",filter:"blur(5px)", ease:Power0.easeInOut}, 9)
      .to(b1_f5_text, 0.5, {autoAlpha:1, top:0, ease:Power2.easeInOut}, 9.5)
      .to(b1_logo1, 0.5, {autoAlpha:1, top:0, ease:Power2.easeInOut}, 9.8)
      .to([b1_f5_img,b1_f5_text,b1_logo1], 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 13)

      .to(b1_f6_bg, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 13.5)
      .to([b1_f6_img,b1_light], 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 13.5)
      .to(b1_logo2, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 14)
      .to(b1_f6_text, 0.5, {autoAlpha:1, scale:1, webkitFilter:"blur(0px)",filter:"blur(0px)", ease:Power3.easeInOut}, 14.4)
      .to([b1_f6_img,b1_f6_text], 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 16)

      .to([b1_f7_img1,b1_f7_img2], 0.5, {autoAlpha:1, left:0, ease:Power2.easeInOut}, 17)
      .to(b1_cta, 0.5, {autoAlpha:1, left:0, ease:Power2.easeInOut}, 18)
      .from(b1_cta_bg1, 0.3, {autoAlpha:1, clip:"rect(0 0 478px 0)", ease: Power0.easeInOut}, 18)
      .from(b1_cta_bg2, 0.2, {autoAlpha:1, clip:"rect(0 318px 0 0)", ease: Power0.easeInOut}, 18.2)
      .from(b1_cta_bg3, 0.3, {autoAlpha:1, clip:"rect(0 318px 478px 318px)", ease: Power0.easeInOut})
      .from(b1_cta_bg4, 0.2, {autoAlpha:1, clip:"rect(478px 318px 478px 0)", ease: Power0.easeInOut});
}

dcAd.banner2animation = function(){
	var tl2 = new TimelineLite();
    document.getElementById("banner2").style.visibility = 'visible';
    tl2.to(b2_f1_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 1)

      .to(b2_f2_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 1.5)
      .to(b2_f1_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 1.4)

      .to(b2_f3_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 4)
      .to(b2_f2_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 3.9)

      .to(b2_f4_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 6)
      .to(b2_f3_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 5.9)

      .to([b2_f5_bg,b2_f5_img], 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 8)
      .to(b2_f4_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 7.9)
      .to(b2_f5_img, 0.5, {webkitFilter:"blur(5px)",filter:"blur(5px)", ease:Power0.easeInOut}, 9)
      .to(b2_f5_text, 0.5, {autoAlpha:1, top:0, ease:Power2.easeInOut}, 9.5)
      .to(b2_logo1, 0.5, {autoAlpha:1, top:0, ease:Power2.easeInOut}, 9.8)
      .to([b2_f5_img,b2_f5_text,b2_logo1], 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 13)

      .to(b2_f6_bg, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 13.5)
      .to([b2_f6_img,b1_light], 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 13.5)
      .to(b2_logo2, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 14)
      .to(b2_f6_text, 0.5, {autoAlpha:1, scale:1, webkitFilter:"blur(0px)",filter:"blur(0px)", ease:Power3.easeInOut}, 14.4)
      .to([b2_f6_img,b2_f6_text], 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 16)

      .to([b2_f7_img1,b2_f7_img2], 0.5, {autoAlpha:1, left:0, ease:Power2.easeInOut}, 17)
      .to(b2_cta, 0.5, {autoAlpha:1, left:0, ease:Power2.easeInOut}, 18)
      .from(b2_cta_bg1, 0.3, {autoAlpha:1, clip:"rect(0 0 318px 0)", ease: Power0.easeInOut}, 18)
      .from(b2_cta_bg2, 0.2, {autoAlpha:1, clip:"rect(0 478px 0 0)", ease: Power0.easeInOut}, 18.2)
      .from(b2_cta_bg3, 0.3, {autoAlpha:1, clip:"rect(0 478px 318px 478px)", ease: Power0.easeInOut})
      .from(b2_cta_bg4, 0.2, {autoAlpha:1, clip:"rect(318px 478px 318px 0)", ease: Power0.easeInOut});
}

window.onload = function() {
	if (Enabler.isInitialized()) {
		dcAd.setObjects();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, dcAd.setObjects);
	}
}


