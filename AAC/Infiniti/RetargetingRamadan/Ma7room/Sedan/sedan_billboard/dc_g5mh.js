var dcmh = dcmh || {};
dcmh.scriptVersion = '1.13';
dcmh.isIol = false;

dcmh.initialSetup = function() {
    for (var i=0; i<studioV2.api.creatives.length; i++) {
        var asset = studioV2.api.creatives[0].getFirstAssetByType(studioV2.api.creatives[0].AssetTypes.EXPANDING);
        if (asset && asset.getDimension().width == 970) {
            studioV2.myAsset = asset;
            studioV2.ce = studioV2.myAsset.getContainerElement();
            if (studioV2.ce.parentElement.style.height) {
                studioV2.ce.parentElement.style.height = "auto";
            }
            if (studioV2.ce.parentElement.style) {
                studioV2.ce.parentElement.style.margin = "0 auto";
                studioV2.ce.parentElement.style.width = "970px";
            }
        }
    }
};

dcmh.dm = function(s) {
  return (document.URL.indexOf(s)>=0);
};

dcmh.corriereFix = function() {
    dcmh.corfix = dcmh.corfix ? dcmh.corfix + 1 : 1;
    studioV2.ce.parentElement.parentElement.style.display = 'block';
    if (dcmh.corfix < 50) {
        setTimeout(dcmh.corriereFix, 100);
    }
};

dcmh.gazzettaFix = function() {
    studioV2.ce.style.zIndex = 997;
    dcmh.gazwidth = dcmh.gazwidth ? dcmh.gazwidth : 0;
    var newWidth = $('.adv-pushbar-box').width();
    setTimeout(dcmh.gazzettaFix, 1000);
    if (newWidth == dcmh.gazwidth) {
        return;
    } else if (newWidth < 1000) {
        studioV2.ce.parentElement.parentElement.className =
            studioV2.ce.parentElement.parentElement.className.replace(' dotnAdMHParent', ' dcfix');
        studioV2.ce.parentElement.parentElement.style.marginLeft = '-10px';
    } else {
        studioV2.ce.parentElement.parentElement.className =
            studioV2.ce.parentElement.parentElement.className.replace(' dcfix', ' dotnAdMHParent');
        studioV2.ce.parentElement.parentElement.style.marginLeft = '0';
    }
};

dcmh.siteSpecificFixes = function() {
    if (dcmh.dm('mediaset.it')) {
        document.getElementById("stripadv").style.float = "center";
        studioV2.ce.parentElement.style.margin = "0 auto !important";
    } else if (dcmh.dm('pianetadonna.it')) {
        /* sospeso per ora
        if (typeof altezza_testata != 'undefined') { // solo quando c'e' la skin
            studioV2.ce.style.marginBottom = '-95px';
            document.getElementById('contenitore-sito-x-adv').style.marginBottom = '85px';
        } */
    } else if (dcmh.dm('pianetamamma.it')) {
        if (typeof altezza_testata != 'undefined') { // solo quando c'e' la skin
            studioV2.ce.style.marginBottom = '-95px';
            document.getElementById('contenitore-sito-x-adv').style.marginBottom = '85px';
        }
    } else if (dcmh.dm('living.corriere')) {
        studioV2.ce.parentElement.parentElement.style.padding = 0;
    } else if (dcmh.dm('viaggi.corriere')) {
        studioV2.ce.parentElement.parentElement.className =
            studioV2.ce.parentElement.parentElement.className.replace(' dotnAdMHParent', '');
        studioV2.ce.parentElement.parentElement.style.marginLeft = '-5px';
    } else if (dcmh.dm('nationalgeographic.it') || dcmh.dm('comingsoon.it') ||
            dcmh.dm('finanza.com')) { // centering the ad
        studioV2.ce.style.margin = "0 auto";
        if (dcmh.dm('comingsoon.it')) {
            document.getElementById('AdvHeader').className = document.getElementById('AdvHeader').className.replace(' dotnAdMHParent', '');
            studioV2.ce.style.zIndex = 100;
        }
    } else if (dcmh.dm('panorama.it')) {
        studioV2.ce.style.marginLeft = '-335px';
    } else if (dcmh.dm('giornalettismo.com')) {
        if(document.getElementById("overlay") !== null)
          document.getElementById("overlay").style.zIndex = 1000000;
        studioV2.ce.style.zIndex = 100;
    } else if (dcmh.dm('filmtv.it')) {
        studioV2.ce.style.zIndex = 0;
    } else if (dcmh.dm('girlpower.it') || dcmh.dm('liquida.it')) {
        studioV2.ce.style.zIndex = 100;
    } else if (dcmh.dm('verytech.smartworld.it') || dcmh.dm('iomobile.smartworld.it')) {
        if(document.getElementById("bnzm_container") !== null)
          document.getElementById("bnzm_container").style.zIndex = 100;
    } else if (dcmh.dm('gazzetta.it')) {
        dcmh.gazzettaFix();
    } else if (dcmh.dm('dilei') || dcmh.dm('virgilio.it') || dcmh.dm('212.48.6.40') ||
          dcmh.dm('motorlife.it') || dcmh.dm('quifinanza.it') || dcmh.dm('siviaggia.it')) {
        document.getElementById('admasthead').style.height = 'auto';
        studioV2.ce.style.margin = "0 auto";
    }
    if (dcmh.dm('corriere.it')) {
		$('.bk_adv_02')[0].style.zIndex = 100;
		studioV2.ce.style.zIndex = 100;
        dcmh.corriereFix();
    }
	// z-index fixes (for menus)
	if (dcmh.dm('tgcom24.mediaset') || dcmh.dm('iodonna.it') || dcmh.dm('ilgiornale.it') ||
	       dcmh.dm('pianetamamma.it') || dcmh.dm('www.meteo.it') || dcmh.dm('cucinare.meglio.it') ||
           dcmh.dm('motorlife.it')) {
		studioV2.ce.style.zIndex = 10;
	} else if (dcmh.dm('starbene.it')) {
        studioV2.ce.style.zIndex = 1;
    }
    // IOL custom function to call
    if (typeof adv_dfp_iframe_id != 'undefined') {
      try {
        document.getElementById(adv_dfp_iframe_id).contentWindow.adv_g5_activate();
      } catch(e) {}
      dcmh.isIol = true;
      dcmh.mhEmptyDiv = document.getElementById('adv_mh_empty');
      dcmh.originalHeight = dcmh.mhEmptyDiv.style.height;
      studioV2.ce.parentElement.parentElement.style.height = 'auto';
    }
};

dcmh.resizeCreative = function(tl, tr, br, bl) {
    if (dcmh.isIol) {
        if (br==50) {
            dcmh.mhEmptyDiv.style.height = 0;
        } else if (br==250) {
            dcmh.mhEmptyDiv.style.height = dcmh.originalHeight;
        }
    }
};

dcmh.initialSetup();
dcmh.siteSpecificFixes();