
function onLoadHandler(e){
	var floatCon = document.getElementById('floater_dc');
	var closeBtn = document.getElementById('close_btn_dc');
	var bgExtBtn = document.getElementById('background_ext_dc')

	if (Enabler.isInitialized()) {
	    enablerInitHandler();
	} else {
	    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}

	function enablerInitHandler() {
    	Enabler.setFloatingPixelDimensions(320,480);

    	floatCon.style.display = 'block';

		var autoTimer = setInterval(autoClose, 15000);

		function autoClose() {
		  clearInterval(autoTimer);
		  Enabler.close();
		}

		function onCloseHandler(e){
			clearInterval(autoTimer);
			Enabler.reportManualClose();
			Enabler.close();
		}

		function onBgExitHandler(e){
			clearInterval(autoTimer);
			Enabler.exit('HTML5_Background_Clickthrough','');
			Enabler.close();
		}

		closeBtn.addEventListener('click', onCloseHandler, false);
		bgExtBtn.addEventListener('click', onBgExitHandler, false);

		init();
	}

}

function init() {

    var tl = new TimelineLite();
    document.getElementById("banner").style.visibility = 'visible';
    tl.to(f1_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 1)

      .to(f2_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 1.5)
      .to(f1_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 1.4)

      .to(f3_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 4)
      .to(f2_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 3.9)

      .to(f4_img, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 6)
      .to(f3_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 5.9)

      .to([f5_bg,f5_img], 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 8)
      .to(f4_img, 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 7.9)
      .to(f5_img, 0.5, {webkitFilter:"blur(5px)",filter:"blur(5px)", ease:Power0.easeInOut}, 9)
      .to(f5_text, 0.5, {autoAlpha:1, top:0, ease:Power2.easeInOut}, 9.5)
      .to(logo1, 0.5, {autoAlpha:1, top:0, ease:Power2.easeInOut}, 9.8)
      .to([f5_img,f5_text,logo1], 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 13)

      .to(f6_bg, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 13.5)
      .to([f6_img,light], 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 13.5)
      .to(logo2, 0.5, {autoAlpha:1, ease:Power2.easeInOut}, 14)
      .to(f6_text, 0.5, {autoAlpha:1, scale:1, webkitFilter:"blur(0px)",filter:"blur(0px)", ease:Power3.easeInOut}, 14.4)
      .to([f6_img,f6_text], 0.5, {autoAlpha:0, ease:Power2.easeInOut}, 16)

      .to([f7_img1,f7_img2], 0.5, {autoAlpha:1, left:0, ease:Power2.easeInOut}, 17)
      .to(cta, 0.5, {autoAlpha:1, left:0, ease:Power2.easeInOut}, 18)
      .from(cta_bg1, 0.3, {autoAlpha:1, clip:"rect(0 0 478px 0)", ease: Power0.easeInOut}, 18)
      .from(cta_bg2, 0.2, {autoAlpha:1, clip:"rect(0 318px 0 0)", ease: Power0.easeInOut}, 18.2)
      .from(cta_bg3, 0.3, {autoAlpha:1, clip:"rect(0 318px 478px 318px)", ease: Power0.easeInOut})
      .from(cta_bg4, 0.2, {autoAlpha:1, clip:"rect(478px 318px 478px 0)", ease: Power0.easeInOut})

}

window.addEventListener('load', onLoadHandler);
