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
            this.f1_title_css = adkit.getSVData("f1_title_style");
            this.f1_title_css_array = this.f1_title_css.split(',');
            this.f1_title_color     = this.f1_title_css_array[0];
            this.f1_title_size      = this.f1_title_css_array[1];

            this.f2_title_css = adkit.getSVData("f2_title_style");
            this.f2_title_css_array = this.f2_title_css.split(',');
            this.f2_title_color     = this.f2_title_css_array[0];
            this.f2_title_size      = this.f2_title_css_array[1];

            this.f2_subtitle1_css = adkit.getSVData("f2_subtitle1_style");
            this.f2_subtitle1_css_array = this.f2_subtitle1_css.split(',');
            this.f2_subtitle1_color     = this.f2_subtitle1_css_array[0];
            this.f2_subtitle1_size      = this.f2_subtitle1_css_array[1];

            this.f2_subtitle2_css = adkit.getSVData("f2_subtitle2_style");
            this.f2_subtitle2_css_array = this.f2_subtitle2_css.split(',');
            this.f2_subtitle2_color     = this.f2_subtitle2_css_array[0];
            this.f2_subtitle2_size      = this.f2_subtitle2_css_array[1];

            this.cta_wrapper_css = adkit.getSVData("cta_wrapper_style");
            this.cta_wrapper_css_array = this.cta_wrapper_css.split(',');
            this.cta_wrapper_width     = this.cta_wrapper_css_array[0];
            this.cta_wrapper_height    = this.cta_wrapper_css_array[1];
            this.cta_wrapper_left      = this.cta_wrapper_css_array[2];
            this.cta_wrapper_top       = this.cta_wrapper_css_array[3];

            this.cta_text_css = adkit.getSVData("cta_text_style");
            this.cta_text_css_array = this.cta_text_css.split(',');
            this.cta_text_size      = this.cta_text_css_array[0];
            this.cta_line_height    = this.cta_text_css_array[1];
            this.cta_text_indent    = this.cta_text_css_array[2];

            this.cta_highlight_css = adkit.getSVData("cta_highlight_style");
            this.cta_highlight_css_array = this.cta_highlight_css.split(',');
            this.cta_highlight_width     = this.cta_highlight_css_array[0];
            this.cta_highlight_height    = this.cta_highlight_css_array[1];
            this.cta_highlight_left      = this.cta_highlight_css_array[2];

            this.cta_icon_css = adkit.getSVData("cta_icon_style");
            this.cta_icon_css_array = this.cta_icon_css.split(',');
            this.cta_icon_width     = this.cta_icon_css_array[0];
            this.cta_icon_height    = this.cta_icon_css_array[1];
            this.cta_icon_right     = this.cta_icon_css_array[2];
            this.cta_icon_top       = this.cta_icon_css_array[3];

            //Initializing all config value
            this.f1_title    = adkit.getSVData('f1_title');
            this.f2_title    = adkit.getSVData('f2_title');
            this.f2_subtitle1 = adkit.getSVData('f2_subtitle1');
            this.f2_subtitle2 = adkit.getSVData('f2_subtitle2');
            this.f1_image     = adkit.getSVData('f1_image');
            this.logo     = adkit.getSVData('logo');
            this.background = adkit.getSVData('background');
            this.packshot   = adkit.getSVData('packshot');
            this.headlights = adkit.getSVData('headlights');
            this.cta_wrapper = adkit.getSVData('cta_wrapper');
            this.cta_icon    = adkit.getSVData('cta_icon');
            this.cta_text    = adkit.getSVData('cta_text');
            this.cta_highlight = adkit.getSVData('cta_highlight');
            this.cta_icon_animate      = adkit.getSVData('cta_icon_animate');
            this.border        = adkit.getSVData('border');
            this.Standalone    = adkit.getSVData('Standalone');
            this.Standalone_status = adkit.getSVData('Standalone_status');

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
                f2_subtitle1 =  $('#f2_subtitle1'),
                f2_subtitle2 =  $('#f2_subtitle2'),
                background =  $('#background'),
                f1_image =  $('#f1_image'),
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
            background.css('background-image', 'url(' + this.background + ')');
            logo.css('background-image', 'url(' + this.logo + ')');
            f1_image.css('background-image', 'url(' + this.f1_image + ')');
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

            f2_subtitle1.css({
                fontSize: this.f2_subtitle1_size,
                color: this.f2_subtitle1_color
            });
            f2_subtitle1.html(this.f2_subtitle1);

            f2_subtitle2.css({
                fontSize: this.f2_subtitle2_size,
                color: this.f2_subtitle2_color
            });
            f2_subtitle2.html(this.f2_subtitle2);

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

                this.timeline.to(f1_image, 0.8, {alpha:1, scale:1, ease: Power2.easeOut}, '+=0.2');
                this.timeline.to(f1_title, 0.5, {alpha:1, left: 98, ease: Power2.easeOut});
                this.timeline.to([f1_image,f1_title], 0.5, {alpha:0},"+=2");

                this.timeline.to(packshot, 1.5, {left: 0, top:0, width: '100%', height: '100%', ease: Power2.easeOut});
                this.timeline.to(f2_title, 0.5, {alpha:1});
                this.timeline.to(f2_subtitle1, 0.5, {alpha:1, top: 45, ease: Power2.easeOut});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:0});
                this.timeline.to(f2_subtitle1, 0.5, {alpha:0},"+=0.5");
                this.timeline.to(f2_subtitle2, 0.5, {alpha:1, top:45, ease: Power2.easeOut});
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











































































