var bannerTween_970x250 = new TimelineMax();
var bannerTween_970x500 = new TimelineMax();
var myFun_970x250, myFun_970x500;

var f1_text = document.getElementById('f1-text')
    f2_text = document.getElementById('f2-text')
    bgd = document.getElementById('bgd')
    f3_text = document.getElementById('f3-text')
    text_box_1 = document.getElementById('text-box-1')
    text_box_2 = document.getElementById('text-box-2')
    text_box_3 = document.getElementById('text-box-3')
    text_box_4 = document.getElementById('text-box-4')
    text_box_5 = document.getElementById('text-box-5')
    text_box_6 = document.getElementById('text-box-6')
    group_wrap = document.getElementById('group-wrap')
    f4_text = document.getElementById('f4-text')
    f4_bgd = document.getElementById('f4-bgd')
    radar = document.getElementById('radar')
    radar_border = document.getElementById('radar-border')
    radar_img_1 = document.getElementById('radar-img-1')
    radar_img_2 = document.getElementById('radar-img-2')
    radar_img_3 = document.getElementById('radar-img-3')
    radar_img_4 = document.getElementById('radar-img-4')
    logo = document.getElementById('logo')
    cta = document.getElementById('cta')
    // btn_replay_970x250 = document.getElementById('btn-replay-970x250');

var big_f1_text = document.getElementById('big-f1-text')
    big_bgd = document.getElementById('big-bgd')
    big_f2_text = document.getElementById('big-f2-text')
    big_f3_text = document.getElementById('big-f3-text')
    big_text_box_1 = document.getElementById('big-text-box-1')
    big_text_box_2 = document.getElementById('big-text-box-2')
    big_text_box_3 = document.getElementById('big-text-box-3')
    big_text_box_4 = document.getElementById('big-text-box-4')
    big_text_box_5 = document.getElementById('big-text-box-5')
    big_text_box_6 = document.getElementById('big-text-box-6')
    big_group_wrap = document.getElementById('big-group-wrap')
    big_f4_text = document.getElementById('big-f4-text')
    big_f4_bgd = document.getElementById('big-f4-bgd')
    big_radar = document.getElementById('big-radar')
    big_radar_border = document.getElementById('big-radar-border')
    big_radar_img_1 = document.getElementById('big-radar-img-1')
    big_radar_img_2 = document.getElementById('big-radar-img-2')
    big_radar_img_3 = document.getElementById('big-radar-img-3')
    big_radar_img_4 = document.getElementById('big-radar-img-4')
    big_logo = document.getElementById('big-logo')
    big_cta = document.getElementById('big-cta')
    collapse_button = document.getElementById('collapse-button')
    big_btn_replay = document.getElementById('btn-replay-970x500');

function initTween() {
  showBanner_970x250();
}

function showBanner_970x250() {
  bannerTween_970x250.to(logo, 0.5, {autoAlpha: 1},'-=0.2')
                     .to(f1_text, 0.5, {autoAlpha: 1});
  bannerTween_970x250.to(f1_text, 0.5, {autoAlpha: 0},'+=1.5')
                      .to(f2_text, 0.5, {autoAlpha: 1})
                      .to(radar_img_1, 0.5, {autoAlpha: 1})
                      .to(radar, 0.3, {autoAlpha: 1},'-=0.5')
                      .to(radar_border, 0.3, {autoAlpha: 1},'-=0.3')
                      .to(text_box_1, 0.5, {autoAlpha: 1},'-=0.3')
                      .to(text_box_1, 0.3, {autoAlpha: 0},'+=2')
                      .to(text_box_2, 0.3, {autoAlpha: 1})
                      .to(text_box_2, 0.3, {autoAlpha: 0},'+=2')
                      .to(radar_img_1, 0.5, {autoAlpha: 0})
                      .to(radar_img_2, 0.5, {autoAlpha: 1},'-=0.5')
                      .to(text_box_3, 0.3, {autoAlpha: 1})
                      .to(text_box_3, 0.3, {autoAlpha: 0},'+=1.5')
                      .to(radar_img_2, 0.5, {autoAlpha: 0})
                      .to(radar_img_3, 0.5, {autoAlpha: 1},'-=1')
                      .to(f2_text, 0.5, {autoAlpha: 0},'-=0.5')
                      .to(f3_text, 0.5, {autoAlpha: 1}, "-=0.3")
                      .to(text_box_4, 0.3, {autoAlpha: 1})
                      .to(text_box_4, 0.3, {autoAlpha: 0},'+=2')
                      .to(radar_img_3, 0.5, {autoAlpha: 0})
                      .to(radar_img_4, 0.5, {autoAlpha: 1},'-=0.5')
                      .to(text_box_5, 0.3, {autoAlpha: 1})
                      .to(text_box_5, 0.3, {autoAlpha: 0},'+=2')
                      .to(text_box_6, 0.3, {autoAlpha: 1});
    bannerTween_970x250.to(radar, 15, {rotation: 380, ease: Power0.easeNone, y: 0 }, 4.5);
    bannerTween_970x250.to(group_wrap, 0.5, {autoAlpha: 0})
                      .to(f4_bgd, 0.5, {autoAlpha: 1},'-=0.2')
                      .to(f4_text, 0.5, {autoAlpha: 1})
                      .to(cta, 0.5, {autoAlpha: 1, top: 0});
                      // .to(btn_replay_970x250, 0.5, {autoAlpha: 1, rotation: 180});
}

function showBanner_970x500() {
  bannerTween_970x500.to(big_logo, 0.5, {autoAlpha: 1},'-=0.2')
                     .to(big_f1_text, 0.5, {autoAlpha: 1});
  bannerTween_970x500.to(big_f1_text, 0.5, {autoAlpha: 0},'+=1.5')
                      .to(big_f2_text, 0.5, {autoAlpha: 1})
                      .to(big_radar_img_1, 0.5, {autoAlpha: 1})
                      .to(big_radar, 0.3, {autoAlpha: 1},'-=0.5')
                      .to(big_radar_border, 0.3, {autoAlpha: 1},'-=0.3')
                      .to(big_text_box_1, 0.5, {autoAlpha: 1},'-=0.3')
                      .to(big_text_box_1, 0.3, {autoAlpha: 0},'+=2')
                      .to(big_text_box_2, 0.3, {autoAlpha: 1})
                      .to(big_text_box_2, 0.3, {autoAlpha: 0},'+=2')
                      .to(big_radar_img_1, 0.5, {autoAlpha: 0})
                      .to(big_radar_img_2, 0.5, {autoAlpha: 1},'-=0.5')
                      .to(big_text_box_3, 0.3, {autoAlpha: 1})
                      .to(big_text_box_3, 0.3, {autoAlpha: 0},'+=1.5')
                      .to(big_radar_img_2, 0.5, {autoAlpha: 0})
                      .to(big_radar_img_3, 0.5, {autoAlpha: 1},'-=1')
                      .to(big_f2_text, 0.5, {autoAlpha: 0},'-=0.5')
                      .to(big_f3_text, 0.5, {autoAlpha: 1}, "-=0.3")
                      .to(big_text_box_4, 0.3, {autoAlpha: 1})
                      .to(big_text_box_4, 0.3, {autoAlpha: 0},'+=2')
                      .to(big_radar_img_3, 0.5, {autoAlpha: 0})
                      .to(big_radar_img_4, 0.5, {autoAlpha: 1},'-=0.5')
                      .to(big_text_box_5, 0.3, {autoAlpha: 1})
                      .to(big_text_box_5, 0.3, {autoAlpha: 0},'+=2')
                      .to(big_text_box_6, 0.3, {autoAlpha: 1});
    bannerTween_970x500.to(big_radar, 15, {rotation: 380, ease: Power0.easeNone, y: 0 }, 4.5);
    bannerTween_970x500.to(big_group_wrap, 0.5, {autoAlpha: 0})
                .to(big_f4_bgd, 0.5, {autoAlpha: 1},'-=0.2')
                .to(big_f4_text, 0.5, {autoAlpha: 1})
                .to(big_cta, 0.5, {autoAlpha: 1, top: 0})
                .to(big_btn_replay, 0.5, {autoAlpha: 1, rotation: 180});
}

function restart_970x250() {
  bannerTween_970x250.restart().stop();
  bannerTween_970x250 = new TimelineMax();
  showBanner_970x250();
}
function restart_970x500() {
  bannerTween_970x500.restart().stop();
  bannerTween_970x500 = new TimelineMax();
  showBanner_970x500();
}

function play_970x250() {
  bannerTween_970x500.paused(true);
  if (bannerTween_970x250.duration() > bannerTween_970x250.time()) {
    bannerTween_970x250.resume();
  } else {
    restart_970x250();
  }
}
function play_970x500() {
  bannerTween_970x250.paused(true);
  if (bannerTween_970x500.duration() > bannerTween_970x500.time()) {
    bannerTween_970x500.resume();
  } else {
    restart_970x500();
  }
}
