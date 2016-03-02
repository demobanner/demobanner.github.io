    var bannerTween = new TimelineLite();
    var myFun,
        isEnded = false,
        delayIcon = 1.5,
        opacityIcon = 0.7;
    var bgd1 = document.getElementById('bgd-1'),
        bgd2 = document.getElementById('bgd-2'),
        bgd3 = document.getElementById('bgd-3'),
        bgd4 = document.getElementById('bgd-4'),
        bgd5 = document.getElementById('bgd-5'),
        bgd6 = document.getElementById('bgd-6'),
        bgd7 = document.getElementById('bgd-7'),
        bgd8 = document.getElementById('bgd-8'),
        text1 = document.getElementById('text-1'),
        text2 = document.getElementById('text-2'),
        text3 = document.getElementById('text-3'),
        text4 = document.getElementById('text-4'),
        cta1 = document.getElementById('cta-1'),
        cta2 = document.getElementById('cta-2'),
        groupIcon = document.getElementById('group-icon'),
        icon1 = document.getElementById('icon-1'),
        icon2 = document.getElementById('icon-2'),
        icon3 = document.getElementById('icon-3'),
        icon4 = document.getElementById('icon-4'),
        icon5 = document.getElementById('icon-5'),
        icon6 = document.getElementById('icon-6'),
        icons = [],
        bgds = [],
        logo = document.getElementById('logo'),
        logoText = document.getElementById('logo-text'),
        bgdActive = null,
        btnActive = null;

    function init() {
      for (var i = 1; i <= 6; i++) {
        icons.push(document.getElementById('icon-' + i));
      }

      for (var i = 2; i <= 7; i++) {
        bgds.push(document.getElementById('bgd-' + i));
      }

      showStartBanner();
      myFun = setTimeout(autoPlay, 6000);
    }
    function showTweenIcon(step, d) {
      clearTimeout(myFun);

      bannerTween
        .to(icons[step], 0.5, {autoAlpha: 1, delay: d})
        .to(bgds[step], 0.5, {autoAlpha: 1},'-=0.5');
      for(var i = 0; i < 6; i++) {
        if(i!=step){
          bannerTween.to(icons[i], 0.5, {opacity: opacityIcon},'-=0.5');
        }
      }
      if (null !== bgdActive) {
        bannerTween.to(bgdActive, 0.5, {autoAlpha: 0}, '-=0.5');
      }
      bgdActive = bgds[step];
    }
    function showStartBanner() {
      bannerTween.to(icon1, 0.5, {autoAlpha: 1})
                  .to(icon2, 0.5, {autoAlpha: 1},'-=0.4')
                  .to(icon3, 0.5, {autoAlpha: 1},'-=0.4')
                  .to(icon4, 0.5, {autoAlpha: 1},'-=0.4')
                  .to(icon5, 0.5, {autoAlpha: 1},'-=0.4')
                  .to(icon6, 0.5, {autoAlpha: 1},'-=0.4')
                  .to(text1, 0.5, {autoAlpha: 1})
                  .to(text1, 0.5, {autoAlpha: 0},'+=1.5')
                  .to(text2, 0.5, {autoAlpha: 1})
                  .to(cta1, 0.5, {autoAlpha: 1});
    }
    function showEndFrame() {
      bannerTween.to(groupIcon, 0.5, {autoAlpha: 0},'+=1.5')
                  .to(text2, 0.5, {autoAlpha: 0},'-=0.5')
                  .to(cta1, 0.5, {autoAlpha: 0},'-=0.5')
                  .to(bgd8, 0.5, {autoAlpha: 1},'-=0.5')
                  .to(logoText, 0.5, {autoAlpha: 1})
                  .to(text3, 0.5, {autoAlpha: 1})
                  .to(text4, 0.5, {autoAlpha: 1})
                  .to(cta2, 0.5, {autoAlpha: 1, onComplete: isEndTween});
    }
    function isEndTween() {
        isEnded = true;
    }
    function autoPlay() {
      clearTimeout(myFun);
      bannerTween.to([icon2,icon3,icon4,icon5,icon6], 0.5, {opacity: opacityIcon})
                  .to(bgd2, 0.5, {autoAlpha: 1},'-=0.5')
                  .to(icon2, 0.5, {autoAlpha: 1, delay: delayIcon})
                  .to([icon1,icon3,icon4,icon5,icon6], 0.5, {opacity: opacityIcon},'-=0.5')
                  .to(bgd3, 0.5, {autoAlpha: 1},'-=0.5')
                  .to(icon3, 0.5, {autoAlpha: 1, delay: delayIcon})
                  .to([icon1,icon2,icon4,icon5,icon6], 0.5, {opacity: opacityIcon},'-=0.5')
                  .to(bgd4, 0.5, {autoAlpha: 1},'-=0.5')
                  .to(icon4, 0.5, {autoAlpha: 1, delay: delayIcon})
                  .to([icon1,icon2,icon3,icon5,icon6], 0.5, {opacity: opacityIcon},'-=0.5')
                  .to(bgd5, 0.5, {autoAlpha: 1},'-=0.5')
                  .to(icon5, 0.5, {autoAlpha: 1, delay: delayIcon})
                  .to([icon1,icon2,icon3,icon4,icon6], 0.5, {opacity: opacityIcon},'-=0.5')
                  .to(bgd6, 0.5, {autoAlpha: 1},'-=0.5')
                  .to(icon6, 0.5, {autoAlpha: 1, delay: delayIcon})
                  .to([icon1,icon2,icon3,icon4,icon5], 0.5, {opacity: opacityIcon},'-=0.5')
                  .to(bgd7, 0.5, {autoAlpha: 1},'-=0.5');
      showEndFrame();
    }
    function restart() {
      bannerTween.restart();
    }
window.addEventListener('load', init);
icon1.addEventListener('click', function(){
      showTweenIcon(0, 0);
});
icon2.addEventListener('click', function(){
      showTweenIcon(1, 0);
});
icon3.addEventListener('click', function(){
      showTweenIcon(2, 0);
});
icon4.addEventListener('click', function(){
      showTweenIcon(3, 0);
});
icon5.addEventListener('click', function(){
      showTweenIcon(4, 0);
});
icon6.addEventListener('click', function(){
      showTweenIcon(5, 0);
});
