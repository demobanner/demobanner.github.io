
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
        var bg   = document.getElementById("bg"),
		    text1   = document.getElementById("text1"),
            text2   = document.getElementById("text2"),
            cup1   = document.getElementById("cup1"),
            cup2   = document.getElementById("cup2"),
            cup3   = document.getElementById("cup3"),
            tea   = document.getElementById("tea"),
            box   = document.getElementById("box");

    var bannerTween = new TimelineLite();

      	bannerTween.to(text1, 0.5, {autoAlpha: 1, ease: Power2.easeInOut})
              .to(text2, 0.5, {autoAlpha: 1, ease: Power2.easeInOut})
              .to(cup1, 0.5, {left: 0, ease: Power2.easeInOut})
              .to(tea, 0.5, {autoAlpha: 1, ease: Power2.easeInOut})

              .to(bg2, 0.5, {height: 184, ease: Power2.easeOut})
              .to(text2, 0.5, {top: 14, ease: Power2.easeOut}, '-=0.5')
              .to(tea, 0.5, {top: 0, ease: Power2.easeOut}, '-=0.5')
              .to(cup2, 0.1, {autoAlpha: 1}, '-=0.1')

              .to(cup3, 0.2, {autoAlpha: 1})
              .to(cup2, 0.1, {autoAlpha:0 , ease: Power1.easeOut}, '-=0.1')
              .to(text2, 0.3, {top: 0, ease: Power2.easeOut}, '-=0.1')
              .to(bg2, 0.3, {height: 175, ease: Power2.easeOut}, '-=0.3')
              .to(tea, 0.3, {top: -53, ease: Power2.easeOut}, '-=0.3')
              .to(box, 0.5, {top: 0, ease: Power2.easeOut}, '-=0.3');
              
}

window.addEventListener('load', onLoadHandler);