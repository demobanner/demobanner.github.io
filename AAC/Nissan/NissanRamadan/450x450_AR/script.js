//var tl = new TimelineLite();

function onLoadHandler(e){
	var floatCon = document.getElementById('floater_dc');
	var closeBtn = document.getElementById('close_btn_dc');
	var replayBtn = document.getElementById('btn_replay');
	var bgExtBtn = document.getElementById('background_ext_dc')

	if (Enabler.isInitialized()) {
	    enablerInitHandler();
	} else {
	    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}

	function enablerInitHandler() {
    	Enabler.setFloatingPixelDimensions(450,450);

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

		function onReplayHandler (e) {
			tl.restart();
		}

		function onBgExitHandler(e){
			clearInterval(autoTimer);
			Enabler.exit('HTML5_Background_Clickthrough');
			Enabler.close();
		}

		closeBtn.addEventListener('click', onCloseHandler, false);
		replayBtn.addEventListener('click', onReplayHandler, false);
		bgExtBtn.addEventListener('click', onBgExitHandler, false);

		init();
	}
}

function init() {

    //var tl = new TimelineLite();

		tl.to(f2_bg, 0.5, {autoAlpha:1, ease: Power0.easeInOut})
			.to(f3_bg, 0.5, {autoAlpha: 1, ease: Power0.easeInOut}, "+=0.5")
			.to(f4_bg, 0.5, {autoAlpha: 1, ease: Power0.easeInOut}, "+=0.5")
			.to(f5_bg, 0.5, {autoAlpha: 1, ease: Power0.easeInOut}, "+=0.5")
			.to(f6_bg, 0.5, {autoAlpha: 1, ease: Power0.easeInOut})
			.to(f7_text, 0.5, {autoAlpha: 1, top:0, ease: Power2.easeInOut})
			.to(f7_text, 0.5, {autoAlpha: 0, ease: Power2.easeInOut}, "+=2")
			.to(f8_text, 0.5, {autoAlpha: 1, top:0, ease: Power2.easeInOut})
			.to([f1_bg, f2_bg, f3_bg, f4_bg, f5_bg], 0.1, {autoAlpha: 0}, "-=0.1")
			.to(f8_text, 0.5, {scale: 0.9, x: 60, y: -295, ease: Power2.easeInOut}, "+=2")
			.to(f6_bg, 0.5, {scale: 0.6, x: -6, y: -5, ease: Power2.easeInOut}, "-=0.5")
			.to(car, 0.5, {autoAlpha: 1, ease: Power3.easeInOut})
			.to(logo_awr, 0.5, {autoAlpha: 1, ease: Power3.easeInOut})
			.to(cta, 0.5, {autoAlpha: 1, top: 0, ease: Power3.easeInOut})
			.to(tc, 0.5, {autoAlpha: 1, ease: Power3.easeInOut});

    tl.to(btn_replay, 0.5, {autoAlpha: 1, rotation: 180});
}

window.addEventListener('load', onLoadHandler);
