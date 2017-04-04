
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

		var autoTimer = setInterval(autoClose, 30000);

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
			Enabler.exit('HTML5_Background_Clickthrough');
			Enabler.close();
		}

		closeBtn.addEventListener('click', onCloseHandler, false);
		bgExtBtn.addEventListener('click', onBgExitHandler, false);

		init();
	}
}

function init() {

    var tl = new TimelineLite();

	tl.to(f1_text1, 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, ease: Power4.easeInOut})
		.to(f1_text2, 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, ease: Power4.easeInOut}, "-=.25")
		.to(f1_text3, 0.5, {autoAlpha: 1, y: 0, scale: 1, ease: Power1.easeInOut})

		.to(milk_bottle, 1, {left: 0 , autoAlpha: 1, ease: Power1.easeOut})

		.to(f2_text1, 0.5, {scale: 1, autoAlpha: 1, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.25")
		.to(f2_text2, 0.5, {scale: 1, autoAlpha: 1, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.25")
		.to(f2_text3, 0.5, {scale: 1, autoAlpha: 1, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.25")
		.to(f2_text4, 0.5, {scale: 1, autoAlpha: 1, x: 0, y: 0, ease: Power1.easeInOut}, "-=0.25")
		.to(f2_text5, 0.5, {autoAlpha: 1, ease: Power1.easeInOut}, "-=0.25")
		.to(f2_text6, 0.5, {autoAlpha: 1, ease: Power1.easeInOut})
		.to(f2_text7, 0.5, {autoAlpha: 1, ease: Power1.easeInOut});
		
}

window.addEventListener('load', onLoadHandler);
