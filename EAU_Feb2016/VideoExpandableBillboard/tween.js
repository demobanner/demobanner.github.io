var bannerTween_970x250 = new TimelineMax();
var bannerTween_970x400 = new TimelineMax();
var text1       = document.getElementById('text1')
    video_frame = document.getElementById('video-frame')
    video       = document.getElementById('video')
    frame2      = document.getElementById('frame-2')
    text2       = document.getElementById('text2')
    cta         = document.getElementById('cta')
    logo        = document.getElementById('logo')
    logo_1        = document.getElementById('logo-1')
    logo_text   = document.getElementById('logo-text');


var big_text1           = document.getElementById('big-text1')
    big_video_frame     = document.getElementById('big-video-frame')
    big_video           = document.getElementById('big-video')
    big_frame2          = document.getElementById('big-frame-2')
    big_text2           = document.getElementById('big-text2')
    big_cta             = document.getElementById('big-cta')
    big_logo            = document.getElementById('big-logo')
    big_logo_1          = document.getElementById('big-logo-1')
    big_logo_text       = document.getElementById('big-logo-text')
    big_collapse_button = document.getElementById('collapse-button');

function initTween() {
  showBanner_970x250();
  showBanner_970x400();
}

function showBanner_970x250() {
    bannerTween_970x250.to(logo, 0.5, {autoAlpha: 1},'-=0.5')
                 .to(text1, 0.5, {autoAlpha: 1})
                 .to(logo, 0.5, {autoAlpha: 1})
                 .to(frame2, 0.5, {autoAlpha: 1, delay: 2});
    bannerTween_970x250.to(logo, 0.5, {autoAlpha: 1},'-=0.5')
               .to(logo_text, 0.5, {autoAlpha: 1})
               .to(text2, 0.5, {autoAlpha: 1})
               .to(cta, 0.5, {autoAlpha: 1})
               .to(video_frame, 0.5, {autoAlpha: 1, onComplete:playVideo970x250});
}
function playVideo970x250() {
  video.style.display = "block";
  video.play();
}
function showBanner_970x400() {
  bannerTween_970x400.to(big_logo, 0.5, {autoAlpha: 1},'-=0.5')
                 .to(big_text1, 0.5, {autoAlpha: 1})
                 .to(big_logo, 0.5, {autoAlpha: 1})
                 .to(big_frame2, 0.5, {autoAlpha: 1, delay: 2});
  bannerTween_970x400.to(big_logo, 0.5, {autoAlpha: 1},'-=0.5')
               .to(big_logo_text, 0.5, {autoAlpha: 1})
               .to(big_text2, 0.5, {autoAlpha: 1})
               .to(big_cta, 0.5, {autoAlpha: 1})
               .to(big_video_frame, 0.5, {autoAlpha: 1, onComplete:playVideo970x400});
}
function playVideo970x400() {
  big_video.style.display = "block";
  big_video.play();
}
function restart_970x250() {
  bannerTween_970x250.restart();
  bannerTween_970x250 = new TimelineMax();
  showBanner_970x250();
  video.pause();
  video.currentTime = 0;
  video.controls = false;
}
function restart_970x400() {
  bannerTween_970x400.restart();
  bannerTween_970x400 = new TimelineMax();
  showBanner_970x400();
  big_video.pause();
  big_video.currentTime = 0;
  big_video.controls = true;
}
