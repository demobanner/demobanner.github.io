
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
			Enabler.exit('HTML5_Background_Clickthrough');
			Enabler.close();
		}

		closeBtn.addEventListener('click', onCloseHandler, false);
		bgExtBtn.addEventListener('click', onBgExitHandler, false);

		init();
	}

}

function init() {
		var f1_text = document.getElementById('f1_text'),
        f1_bg = document.getElementById('f1_bg'),
        f1_woman1 = document.getElementById('f1_woman1'),
        f1_woman2 = document.getElementById('f1_woman2'),
        f2_bg = document.getElementById('f2_bg'),
        f2_text1 = document.getElementById('f2_text1'),
        f2_woman1 = document.getElementById('f2_woman1'),
        f2_woman2 = document.getElementById('f2_woman2'),
        f2_woman3 = document.getElementById('f2_woman3'),
        f2_box1 = document.getElementById('f2_box1'),
        f2_box2 = document.getElementById('f2_box2'),
        f2_text2 = document.getElementById('f2_text2'),
        logo = document.getElementById('logo');

    var bannerTween = new TimelineLite();

      	bannerTween.to(f1_text, 0.5, {autoAlpha: 1, left: 0, ease: Power2.easeOut})
                    .to(f1_text, 0.5, {autoAlpha: 0}, '+=2')
                    .to(f1_woman1, 0.5, {autoAlpha: 1})
                    .to(f1_woman2, 0.5, {autoAlpha: 1}, '+=0.5')
                    .to(f1_woman2, 0.5, {left: -300, ease: Power2.easeOut}, '+=1')
                    .to(f1_woman1, 0.1, {autoAlpha: 0}, '-=0.5')

                    .to(f2_bg, 0.5, {left: 0, ease: Power2.easeOut}, '-=0.5')
                    .to(f2_text1, 0.5, {left: 0, ease: Power2.easeOut}, '-=0.5')
                    .to(f2_text1, 0.5, {autoAlpha: 0}, '+=2')

                    .to(f2_woman1, 0.5, {autoAlpha: 1}, '-=0.5')
                    .to(f2_woman2, 0.5, {autoAlpha: 1})
                    .to(f2_woman3, 0.5, {autoAlpha: 1})
                    .to([f2_woman1, f2_woman2, f2_woman3], 0.5, {autoAlpha: 0}, '+=1')

                    .to(logo, 0.5, {autoAlpha: 1})
                    .to(f2_text2, 0.5, {autoAlpha: 1, left: 0, ease: Power2.easeOut})
                    .to(f2_box1, 0.5, {autoAlpha: 1, left: 0, ease: Power2.easeOut})
                    .to(f2_box2, 0.5, {autoAlpha: 1, left: 0, ease: Power2.easeOut}, '-=0.5');
                    


}

window.addEventListener('load', onLoadHandler);