var tl = new TimelineLite();

var LOOP_TIME = 0, // how many time the banner replays
    loop = 0,
    isReplay = true; // show/hide replay button in the end

function init() {
  initConfetti();

  tl.to(text1_off, 0.5, {autoAlpha: 1})
    .to(text1_on, 0, {width:330})
    .to(text1_on, 0, {width:355}, "+=0.1")
    .to(text1_on, 0, {width:400}, "+=0.1")
    .to(text1_on, 0, {width:728}, "+=0.1")
    .to(text1_off, 0, {autoAlpha: 0})
    .to(text1_on, 0.5, {autoAlpha:0, scale:4, ease: Power2.easeInOut}, "+=0.5")
    .to(text1_glow, 0.5, {autoAlpha:1, scale:4, ease: Power2.easeInOut}, "-=0.5")
    .to(text1_glow, 0.3, {autoAlpha:0, ease: Power2.easeInOut}, '-=0.2');

  tl.to(text2_off, 0.5, {autoAlpha: 1})
    .to(text2_on, 0, {width:360})
    .to(text2_on, 0, {width:380}, "+=0.1")
    .to(text2_on, 0, {width:728}, "+=0.1")
    .to(text2_off, 0, {autoAlpha: 0})
    .to(text2_on, 0.5, {autoAlpha:0, scale:4, ease: Power2.easeInOut}, "+=0.5");

  tl.to(text3_off, 0.5, {autoAlpha: 1})
    .to(text3_on, 0, {width:285})
    .to(text3_on, 0, {width:340}, "+=0.1")
    .to(text3_on, 0, {width:450}, "+=0.1")
    .to(text3_on, 0, {width:728}, "+=0.1")
    .to(text3_off, 0, {autoAlpha: 0})
    .to(text3_on, 0.5, {autoAlpha:0, scale:4, ease: Power2.easeInOut}, "+=0.5");

  tl.to(logo, 0.5, {autoAlpha: 1})
    .to(date, 0.5, {autoAlpha: 1, top:0, ease: Power2.easeInOut, onComplete:onLoop});
}

function restart() {
  tl.restart();
}
function onLoop() {
  if ( loop < LOOP_TIME ) {
    restart();
    loop++ ;
  } else if (isReplay) {
    var btn_replay = document.getElementById('btn-replay');
    tl.to(btn_replay, 0.5, {autoAlpha: 0.8, rotation: 180});
  }
}

function initConfetti () {
  //canvas init
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //canvas dimensions
  var W = document.getElementById("banner").offsetWidth;
  var H = document.getElementById("banner").offsetHeight;

  canvas.width = W;
  canvas.height = H;

  //snowflake particles
  var mp = 500; //max particles
  var particles = [];
  for (var i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W, //x-coordinate
      y: Math.random() * H, //y-coordinate
      r: Math.random() * 2, //radius
      color: "rgba(240,180,0," + (Math.random()*0.7 + 0.2) + ")",
      dirX: Math.floor(Math.random()*6 - 3),
      dirY: Math.floor(Math.random()*6 - 3)
    });
  }

  //Lets draw the flakes
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < mp; i++) {
      var p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    update();
  }

  //Function to move the snowflakes

  function update() {
    for (var i = 0; i < mp; i++) {
      var p = particles[i];

      //Updating X and Y coordinates
      p.x += p.dirX;
      p.y += p.dirY;

      if ((p.x > W) || (p.x <= 0)) {
        p.x = Math.random() * W;
      }
      if ((p.y > H) || (p.y <= 0)) {
        p.y = Math.random() * H;
      }
      p.color = "rgba(240,180,0," + (Math.random()*0.7 + 0.2) + ")";
    }
  }

  //animation loop
  setInterval(draw, 150);
}

window.onload = init;
