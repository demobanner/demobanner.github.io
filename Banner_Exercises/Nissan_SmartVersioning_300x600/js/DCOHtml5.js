    DCOHtml5 = function() {
        // Establish Method Name
        this.name = 'DCOHtml5';
        // Establish Script Details
        this.script = { name: 'DCOHtml5.js', version: '1.0.0' };
		//Call Init Method
        adkit.onReady(this.init.bind(this));
    };

    DCOHtml5.prototype = {
        // Function That Creates Element Var
        d: function(id) { return document.getElementById(id); },
        // Initialize DCO HTML5 template
        init: function() {
            this.restarted = false;
            this.timeline = new TimelineLite(),

            //Initializing Heading Style Css
            this.f1_title_css                   = adkit.getSVData("f1_title_style");
            this.f1_title_css_array             = this.f1_title_css.split(',');
            this.f1_title_color                 = this.f1_title_css_array[0];
            this.f1_title_size                  = this.f1_title_css_array[1];

            this.f2_title_css                   = adkit.getSVData("f2_title_style");
            this.f2_title_css_array             = this.f2_title_css.split(',');
            this.f2_title_color                 = this.f2_title_css_array[0];
            this.f2_title_size                  = this.f2_title_css_array[1];

            this.f2_subtitle_css                = adkit.getSVData("f2_subtitle_style");
            this.f2_subtitle_css_array          = this.f2_subtitle_css.split(',');
            this.f2_subtitle_color              = this.f2_subtitle_css_array[0];
            this.f2_subtitle_size               = this.f2_subtitle_css_array[1];
            this.f2_subtitle_top                = this.f2_subtitle_css_array[2];
            this.f2_subtitle_span_color         = this.f2_subtitle_css_array[3];

            this.f3_title_css                   = adkit.getSVData("f3_title_style");
            this.f3_title_css_array             = this.f3_title_css.split(',');
            this.f3_title_color                 = this.f3_title_css_array[0];
            this.f3_title_size                  = this.f3_title_css_array[1];

            this.f3_subtitle_css                = adkit.getSVData("f3_subtitle_style");
            this.f3_subtitle_css_array          = this.f3_subtitle_css.split(',');
            this.f3_subtitle_color              = this.f3_subtitle_css_array[0];
            this.f3_subtitle_size               = this.f3_subtitle_css_array[1];
            this.f3_subtitle_top                = this.f3_subtitle_css_array[2];
            this.f3_subtitle_span_color         = this.f3_subtitle_css_array[3];

            this.cta_wrapper_css                = adkit.getSVData("cta_wrapper_style");
            this.cta_wrapper_css_array          = this.cta_wrapper_css.split(',');
            this.cta_wrapper_width              = this.cta_wrapper_css_array[0];
            this.cta_wrapper_height             = this.cta_wrapper_css_array[1];
            this.cta_wrapper_left               = this.cta_wrapper_css_array[2];
            this.cta_wrapper_top                = this.cta_wrapper_css_array[3];

            this.cta_text_css                   = adkit.getSVData("cta_text_style");
            this.cta_text_css_array             = this.cta_text_css.split(',');
            this.cta_text_size                  = this.cta_text_css_array[0];
            this.cta_line_height                = this.cta_text_css_array[1];
            this.cta_text_indent                = this.cta_text_css_array[2];

            this.cta_highlight_css              = adkit.getSVData("cta_highlight_style");
            this.cta_highlight_css_array        = this.cta_highlight_css.split(',');
            this.cta_highlight_width            = this.cta_highlight_css_array[0];
            this.cta_highlight_height           = this.cta_highlight_css_array[1];
            this.cta_highlight_left             = this.cta_highlight_css_array[2];

            this.cta_icon_css                   = adkit.getSVData("cta_icon_style");
            this.cta_icon_css_array             = this.cta_icon_css.split(',');
            this.cta_icon_width                 = this.cta_icon_css_array[0];
            this.cta_icon_height                = this.cta_icon_css_array[1];
            this.cta_icon_right                 = this.cta_icon_css_array[2];
            this.cta_icon_top                   = this.cta_icon_css_array[3];

            this.background1_css                = adkit.getSVData("background1_style");
            this.background1_css_array          = this.background1_css.split(',');
            this.background1_opacity            = this.background1_css_array[0];

            this.background2_css                = adkit.getSVData("background2_style");
            this.background2_css_array          = this.background2_css.split(',');
            this.background2_opacity            = this.background2_css_array[0];

            this.background2_animation_css      = adkit.getSVData("background2_animation_style");
            this.background2_animation_css_array= this.background2_animation_css.split(',');
            this.background2_animation_opacity  = this.background2_animation_css_array[0];

            this.background3_css                = adkit.getSVData("background3_style");
            this.background3_css_array          = this.background3_css.split(',');
            this.background3_opacity            = this.background3_css_array[0];

            this.background3_animation_css      = adkit.getSVData("background3_animation_style");
            this.background3_animation_css_array= this.background3_animation_css.split(',');
            this.background3_animation_opacity  = this.background3_animation_css_array[0];

            //Initializing all config value
            this.f1_title    = adkit.getSVData('f1_title');
            this.f2_title    = adkit.getSVData('f2_title');
            this.f2_subtitle = adkit.getSVData('f2_subtitle');
            this.f3_title    = adkit.getSVData('f3_title');
            this.f3_subtitle = adkit.getSVData('f3_subtitle');
            this.logo     = EB.getAssetUrl("", adkit.getSVData('logo'));
            this.background1 = EB.getAssetUrl("", adkit.getSVData('background1'));
            this.background2 = EB.getAssetUrl("", adkit.getSVData('background2'));
            this.background3 = EB.getAssetUrl("", adkit.getSVData('background3'));
            this.packshot   = EB.getAssetUrl("", adkit.getSVData('packshot'));
            this.headlights = EB.getAssetUrl("", adkit.getSVData('headlights'));
            this.cta_wrapper =adkit.getSVData('cta_wrapper');
            this.cta_icon    = EB.getAssetUrl("", adkit.getSVData('cta_icon'));
            this.cta_text    = adkit.getSVData('cta_text');
            this.cta_icon_animate = EB.getAssetUrl("", adkit.getSVData('cta_icon_animate'));
            this.cta_highlight = EB.getAssetUrl("", adkit.getSVData('cta_highlight'));
            this.Standalone    = EB.getAssetUrl("", adkit.getSVData('Standalone'));

            this.Standalone_status = adkit.getSVData('Standalone_status');
            this.border        =  adkit.getSVData('border');

            //Checking Standalone Status
            if (this.Standalone_status == 'false') {
                $('#standalone').hide();
                $('.global').css('display', 'block');

                this.SetVariables();

                var that = this;
                $('.global').click(function() { that.setUpAd(); });
                $('.global').mouseover(function() { that.restartBanner(); });
            } else{
                if (this.border == 'true') {
                    $('#standalone').css('border', '1px solid #000000');
                }

                $('#standalone').css({
                    'background-image': 'url(' + this.Standalone + ')',
                    display: 'block'
                });
                $('.global').hide();

                $('#standalone').click(function() { that.setUpAd(); });
            }
        },

        // Function that Sets Elements
        SetVariables: function() {
            var that = this,
                f1_title    =  $('#f1_title'),
                f2_title    =  $('#f2_title'),
                f2_subtitle =  $('#f2_subtitle'),
                f3_title    =  $('#f3_title'),
                f3_subtitle =  $('#f3_subtitle'),
                background1 =  $('#background1'),
                background2 =  $('#background2'),
                background3 =  $('#background3'),
                logo       = $('#logo'),
                packshot   = $('#packshot'),
                headlights = $('#headlights'),
                cta_wrapper = $('#cta_wrapper'),
                cta_icon     = $('#cta_icon'),
                cta_text    = $('#cta_text'),
                cta_icon_animate  = $('#cta_icon_animate'),
                cta_highlight = $('#cta_highlight');

            if (this.border == 'true') {
                $('.global').css('box-sizing', 'border-box');
                $('.global').css('-moz-box-sizing', 'border-box');
                $('.global').css('-webkit-box-sizing', 'border-box');
                $('.global').css('border', '1px solid #000000');
            }

            //get data
            background1.css({
                'background-image': 'url(' + this.background1 + ')',
                opacity: this.background1_opacity
            });
            background2.css({
                'background-image': 'url(' + this.background2 + ')',
                opacity: this.background2_opacity
            });
            background3.css({
                'background-image': 'url(' + this.background3 + ')',
                opacity: this.background3_opacity
            });
            logo.css('background-image', 'url(' + this.logo + ')');
            packshot.attr('src', this.packshot).load(function() { packshot.show();});
            headlights.css('background-image', 'url(' + this.headlights + ')');

            f1_title.css({
                fontSize: this.f1_title_size,
                color: this.f1_title_color
            });
            f1_title.html(this.f1_title);

            f2_title.css({
                fontSize: this.f2_title_size,
                color: this.f2_title_color
            });
            f2_title.html(this.f2_title);

            f2_subtitle.css({
                fontSize: this.f2_subtitle_size,
                top: this.f2_subtitle_top - 10,
                color: this.f2_subtitle_color
            });
            f2_subtitle.html(this.f2_subtitle);
            $(f2_subtitle).find('span').css('color', this.f2_subtitle_span_color);

            f3_title.css({
                fontSize: this.f3_title_size,
                color: this.f3_title_color
            });
            f3_title.html(this.f3_title);

            f3_subtitle.css({
                fontSize: this.f3_subtitle_size,
                top: this.f3_subtitle_top - 10,
                color: this.f3_subtitle_color
            });
            f3_subtitle.html(this.f3_subtitle);
            $(f3_subtitle).find('span').css('color', this.f3_subtitle_span_color);

            cta_wrapper.css({
                width: this.cta_wrapper_width,
                height: this.cta_wrapper_height,
                left: this.cta_wrapper_left,
                top: this.cta_wrapper_top
            });

            cta_text.css({
                fontSize: this.cta_text_size,
                'line-height': this.cta_line_height,
                'text-indent': this.cta_text_indent
            })
            cta_text.html(this.cta_text);

            cta_highlight.css({
                'background-image': 'url(' + this.cta_highlight + ')',
                width: this.cta_highlight_width,
                height: this.cta_highlight_height
            });

            cta_icon.css({
                background: 'url(' + this.cta_icon + ') no-repeat',
                width: this.cta_icon_width,
                height: this.cta_icon_height,
                right: this.cta_icon_right,
                top: this.cta_icon_top
            });

            cta_icon_animate.css({
                background: 'url(' + this.cta_icon + ') no-repeat',
                width: this.cta_icon_width,
                height: this.cta_icon_height,
                right: this.cta_icon_right,
                top: this.cta_icon_top
            });

            //animate
            var cta_icon_animate_url = this.cta_icon_animate;
                this.timeline.to(cta_icon_animate, 0.2, {background: 'none'});

                this.timeline.to(packshot, 1.5, {alpha:1});
                this.timeline.to(f1_title, 0.5, {alpha:1, left: 15, ease: Power2.easeOut});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:0});
                this.timeline.to(f1_title, 0.5, {alpha:0},"+=2");

                this.timeline.to(background2, 0.5, {opacity: this.background2_animation_opacity});
                this.timeline.to(f2_title, 0.5, {alpha:1});
                this.timeline.to(f2_subtitle, 0.5, {alpha:1, top: parseInt(this.f2_subtitle_top), ease: Power2.easeOut});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:0});
                this.timeline.to(f2_title, 0.5, {alpha:0},"+=0.5");
                this.timeline.to(f2_subtitle, 0.5, {alpha:0},"-=0.5");

                this.timeline.to(background3, 0.5, {opacity: this.background3_animation_opacity});
                this.timeline.to(f3_title, 0.5, {alpha:1});
                this.timeline.to(f3_subtitle, 0.5, {alpha:1, top: parseInt(this.f3_subtitle_top), ease: Power2.easeOut});
                this.timeline.to(cta_wrapper, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:0});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(cta_highlight, 1, {left:this.cta_highlight_left});
                this.timeline.to(cta_icon_animate, 0.2, {background: 'url(' + cta_icon_animate_url + ') no-repeat', onComplete:function(){
                    that.restarted = true;
                }});

        },
        restartBanner: function() {
            if(this.restarted){
                this.timeline.restart();
                this.restarted = false;
            }
        },
        // Handle Ad Setup
        setUpAd: function() {
            // Ad Clickthrough Button
            EB.clickthrough();
        },
    };











































































