(function(){
  var s4mAdContainer = document.getElementById(_s4mConfig.containerId);

  s4mAdContainer.style.width = window.innerWidth + "px";
  s4mAdContainer.style.height = window.innerHeight + "px";

  window.addEventListener("resize", function(){
    s4mAdContainer.style.width = window.innerWidth + "px";
    s4mAdContainer.style.height = window.innerHeight + "px";
  });

  window.addEventListener("orientationchange", function(){
    s4mAdContainer.style.width = window.innerWidth + "px";
    s4mAdContainer.style.height = window.innerHeight + "px";
  });

  /**
  * Style injection
  */

  var s4mStyle = document.createElement("style");
  var cssText = "html,body{overflow:hidden}#wrapper{position:absolute;top:0;left:0;width:100%;height:100%;background-color:black;background-image: url("+ _s4mConfig.absoluteAssetURL +"logo-RVB.png);background-size : contain; background-position : center; background-repeat:no-repeat;}";

  s4mStyle.innerHTML += cssText;

  document.head.appendChild(s4mStyle);

  /**
  * HTML injection
  */

  var adHTML = "<div id='wrapper'></div>";

  s4mAdContainer.innerHTML += adHTML;

  /**
  * JS injection
  */

  var adScript = document.createElement("script");
  adScript.type = "text/javascript";

  var scriptText = "var wrapper = document.getElementById('wrapper');wrapper.addEventListener('click',function(){document.location.href='http://www.s4m.io'});";

  adScript.text = scriptText;

  s4mAdContainer.appendChild(adScript);
}());
