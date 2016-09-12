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
            this.packshot_css               = adkit.getSVData("packshot_style");
            this.packshot_css_array         = this.packshot_css.split(',');
            this.packshot_opacity             = this.packshot_css_array[0];
            this.packshot_left             = this.packshot_css_array[1];
            this.packshot_top             = this.packshot_css_array[2];
            console.log(this.packshot_left );

            this.packshot_ani_css               = adkit.getSVData("packshot_ani");
            this.packshot_ani_css_array         = this.packshot_ani_css.split(',');
            this.packshot_ani_opacity             = this.packshot_ani_css_array[0];
            this.packshot_ani_left                  = this.packshot_ani_css_array[1];
            this.packshot_ani_top                 = this.packshot_ani_css_array[2];

            this.f1_title_css               = adkit.getSVData("f1_title_style");
            this.f1_title_css_array         = this.f1_title_css.split(',');
            this.f1_title_color             = this.f1_title_css_array[0];
            this.f1_title_size              = this.f1_title_css_array[1];


            this.packshot2_css               = adkit.getSVData("packshot2_style");
            this.packshot2_css_array         = this.packshot2_css.split(',');
            this.packshot2_opacity             = this.packshot2_css_array[0];
            this.packshot2_left             = this.packshot2_css_array[1];
            this.packshot2_top             = this.packshot2_css_array[2];
            console.log(this.packshot2_left)

            this.packshot2_ani_css               = adkit.getSVData("packshot2_ani");
            this.packshot2_ani_css_array         = this.packshot2_ani_css.split(',');
            this.packshot2_ani_opacity             = this.packshot2_ani_css_array[0];
            this.packshot2_ani_left                  = this.packshot2_ani_css_array[1];
            this.packshot2_ani_top                 = this.packshot2_ani_css_array[2];

            this.f2_title_css               = adkit.getSVData("f2_title_style");
            this.f2_title_css_array         = this.f2_title_css.split(',');
            this.f2_title_color             = this.f2_title_css_array[0];
            this.f2_title_size              = this.f2_title_css_array[1];

            this.f2_subtitle_css            = adkit.getSVData("f2_subtitle_style");
            this.f2_subtitle_css_array      = this.f2_subtitle_css.split(',');
            this.f2_subtitle_color          = this.f2_subtitle_css_array[0];
            this.f2_subtitle_size           = this.f2_subtitle_css_array[1];
            this.f2_subtitle_top            = this.f2_subtitle_css_array[2];
            this.f2_subtitle_span_color     = this.f2_subtitle_css_array[3];

            this.f3_title_css               = adkit.getSVData("f3_title_style");
            this.f3_title_css_array         = this.f3_title_css.split(',');
            this.f3_title_color             = this.f3_title_css_array[0];
            this.f3_title_size              = this.f3_title_css_array[1];

            this.f3_subtitle_css           = adkit.getSVData("f3_subtitle_style");
            this.f3_subtitle_css_array     = this.f3_subtitle_css.split(',');
            this.f3_subtitle_color         = this.f3_subtitle_css_array[0];
            this.f3_subtitle_size          = this.f3_subtitle_css_array[1];
            this.f3_subtitle_top           = this.f3_subtitle_css_array[2];
            this.f3_subtitle_span_color    = this.f3_subtitle_css_array[3];

            this.packshot3_css               = adkit.getSVData("packshot3_style");
            this.packshot3_css_array         = this.packshot3_css.split(',');
            this.packshot3_opacity             = this.packshot3_css_array[0];
            this.packshot3_left             = this.packshot3_css_array[1];
            this.packshot3_top             = this.packshot3_css_array[2];

            this.packshot3_ani_css               = adkit.getSVData("packshot3_ani");
            this.packshot3_ani_css_array         = this.packshot3_ani_css.split(',');
            this.packshot3_ani_opacity             = this.packshot3_ani_css_array[0];
            this.packshot3_ani_left                  = this.packshot3_ani_css_array[1];
            this.packshot3_ani_top              = this.packshot3_ani_css_array[2];

            this.f2_title_css               = adkit.getSVData("f2_title_style");
            this.f2_title_css_array         = this.f2_title_css.split(',');
            this.f2_title_color             = this.f2_title_css_array[0];
            this.f2_title_size              = this.f2_title_css_array[1];

            this.cta_wrapper_css            = adkit.getSVData("cta_wrapper_style");
            this.cta_wrapper_css_array      = this.cta_wrapper_css.split(',');
            this.cta_wrapper_opacity        = this.cta_wrapper_css_array[0];
            this.cta_wrapper_width          = this.cta_wrapper_css_array[1];
            this.cta_wrapper_height         = this.cta_wrapper_css_array[2];
            this.cta_wrapper_left           = this.cta_wrapper_css_array[3];
            this.cta_wrapper_top            = this.cta_wrapper_css_array[4];
            this.cta_wrapper_scaleX         = this.cta_wrapper_css_array[5];
            this.cta_wrapper_scaleY         = this.cta_wrapper_css_array[6];

            this.cta_wrapper_ani_css            = adkit.getSVData("cta_wrapper_ani");
            this.cta_wrapper_ani_css_array      = this.cta_wrapper_ani_css.split(',');
            this.cta_wrapper_ani_opacity        = this.cta_wrapper_ani_css_array[0];
            this.cta_wrapper_ani_scaleX         = this.cta_wrapper_ani_css_array[1];
            this.cta_wrapper_ani_scaleY         = this.cta_wrapper_ani_css_array[2];

            this.cta_text_css               = adkit.getSVData("cta_text_style");
            this.cta_text_css_array         = this.cta_text_css.split(',');
            this.cta_text_size              = this.cta_text_css_array[0];
            this.cta_line_height            = this.cta_text_css_array[1];
            this.cta_text_indent            = this.cta_text_css_array[2];

            this.cta_highlight_css          = adkit.getSVData("cta_highlight_style");
            this.cta_highlight_css_array    = this.cta_highlight_css.split(',');
            this.cta_highlight_width        = this.cta_highlight_css_array[0];
            this.cta_highlight_height       = this.cta_highlight_css_array[1];
            this.cta_highlight_left         = this.cta_highlight_css_array[2];

            this.cta_icon_css               = adkit.getSVData("cta_icon_style");
            this.cta_icon_css_array         = this.cta_icon_css.split(',');
            this.cta_icon_width             = this.cta_icon_css_array[0];
            this.cta_icon_height            = this.cta_icon_css_array[1];
            this.cta_icon_right             = this.cta_icon_css_array[2];
            this.cta_icon_top               = this.cta_icon_css_array[3];
            console.log(this.cta_highlight_left )

            this.cta_wrapper2_css            = adkit.getSVData("cta_wrapper2_style");
            this.cta_wrapper2_css_array      = this.cta_wrapper2_css.split(',');
            this.cta_wrapper2_opacity          = this.cta_wrapper2_css_array[0];
            this.cta_wrapper2_width          = this.cta_wrapper2_css_array[1];
            this.cta_wrapper2_height         = this.cta_wrapper2_css_array[2];
            this.cta_wrapper2_left           = this.cta_wrapper2_css_array[3];
            this.cta_wrapper2_top            = this.cta_wrapper2_css_array[4];
            this.cta_wrapper2_scaleX         = this.cta_wrapper2_css_array[5];
            this.cta_wrapper2_scaleY         = this.cta_wrapper2_css_array[6];

            this.cta_wrapper2_ani_css            = adkit.getSVData("cta_wrapper2_ani");
            this.cta_wrapper2_ani_css_array      = this.cta_wrapper2_ani_css.split(',');
            this.cta_wrapper2_ani_opacity        = this.cta_wrapper2_ani_css_array[0];
            this.cta_wrapper2_ani_scaleX         = this.cta_wrapper2_ani_css_array[1];
            this.cta_wrapper2_ani_scaleY         = this.cta_wrapper2_ani_css_array[2];

            this.cta_text2_css               = adkit.getSVData("cta_text2_style");
            this.cta_text2_css_array         = this.cta_text2_css.split(',');
            this.cta_text2_size              = this.cta_text2_css_array[0];
            this.cta_line2_height            = this.cta_text2_css_array[1];
            this.cta_text2_indent            = this.cta_text2_css_array[2];

            this.cta_highlight2_css          = adkit.getSVData("cta_highlight2_style");
            this.cta_highlight2_css_array    = this.cta_highlight2_css.split(',');
            this.cta_highlight2_width        = this.cta_highlight2_css_array[0];
            this.cta_highlight2_height       = this.cta_highlight2_css_array[1];
            this.cta_highlight2_left         = this.cta_highlight2_css_array[2];

            this.cta_icon2_css               = adkit.getSVData("cta_icon2_style");
            this.cta_icon2_css_array         = this.cta_icon2_css.split(',');
            this.cta_icon2_width             = this.cta_icon2_css_array[0];
            this.cta_icon2_height            = this.cta_icon2_css_array[1];
            this.cta_icon2_right             = this.cta_icon2_css_array[2];
            this.cta_icon2_top               = this.cta_icon2_css_array[3];
            
           
            this.cta_wrapper3_css            = adkit.getSVData("cta_wrapper3_style");
            this.cta_wrapper3_css_array      = this.cta_wrapper3_css.split(',');
            this.cta_wrapper3_opacity        = this.cta_wrapper3_css_array[0];
            this.cta_wrapper3_width          = this.cta_wrapper3_css_array[1];
            this.cta_wrapper3_height         = this.cta_wrapper3_css_array[2];
            this.cta_wrapper3_left           = this.cta_wrapper3_css_array[3];
            this.cta_wrapper3_top            = this.cta_wrapper3_css_array[4];
            this.cta_wrapper3_scaleX         = this.cta_wrapper3_css_array[5];
            this.cta_wrapper3_scaleY         = this.cta_wrapper3_css_array[6];

            this.cta_wrapper3_ani_css            = adkit.getSVData("cta_wrapper3_ani");
            this.cta_wrapper3_ani_css_array      = this.cta_wrapper3_ani_css.split(',');
            this.cta_wrapper3_ani_opacity        = this.cta_wrapper3_ani_css_array[0];
            this.cta_wrapper3_ani_scaleX         = this.cta_wrapper3_ani_css_array[1];
            this.cta_wrapper3_ani_scaleY         = this.cta_wrapper3_ani_css_array[2];


            this.cta_text3_css               = adkit.getSVData("cta_text3_style");
            this.cta_text3_css_array         = this.cta_text3_css.split(',');
            this.cta_text3_size              = this.cta_text3_css_array[0];
            this.cta_line3_height            = this.cta_text3_css_array[1];
            this.cta_text3_indent            = this.cta_text3_css_array[2];

            this.cta_highlight3_css          = adkit.getSVData("cta_highlight3_style");
            this.cta_highlight3_css_array    = this.cta_highlight3_css.split(',');
            this.cta_highlight3_width        = this.cta_highlight3_css_array[0];
            this.cta_highlight3_height       = this.cta_highlight3_css_array[1];
            this.cta_highlight3_left         = this.cta_highlight3_css_array[2];

            this.cta_icon3_css               = adkit.getSVData("cta_icon3_style");
            this.cta_icon3_css_array         = this.cta_icon3_css.split(',');
            this.cta_icon3_width             = this.cta_icon3_css_array[0];
            this.cta_icon3_height            = this.cta_icon3_css_array[1];
            this.cta_icon3_right             = this.cta_icon3_css_array[2];
            this.cta_icon3_top               = this.cta_icon3_css_array[3];
       

            this.cta_icon3_ani_css               = adkit.getSVData("cta_icon3_ani");
            this.cta_icon3_ani_css_array         = this.cta_icon3_ani_css.split(',');
            this.cta_icon3_ani_right             = this.cta_icon3_ani_css_array[0];
            this.cta_icon3_ani_top               = this.cta_icon3_ani_css_array[1];
            this.cta_icon3_ani_none              = this.cta_icon3_ani_css_array[2];

            this.frame1_ani_css               = adkit.getSVData("frame1_ani");
            this.frame1_ani_css_array         = this.frame1_ani_css.split(',');
            this.frame1_ani_delay             = this.frame1_ani_css_array[0];

            this.frame2_ani_css               = adkit.getSVData("frame2_ani");
            this.frame2_ani_css_array         = this.frame2_ani_css.split(',');
            this.frame2_ani_delay             = this.frame2_ani_css_array[0];
            

            //Initializing all config value
            this.f1_title    = adkit.getSVData('f1_title');
            this.f2_title    = adkit.getSVData('f2_title');
            this.f2_subtitle = adkit.getSVData('f2_subtitle');
            this.f3_title    = adkit.getSVData('f3_title');
            this.f3_subtitle = adkit.getSVData('f3_subtitle');
            this.logo     = EB.getAssetUrl("", adkit.getSVData('logo'));
            this.background = EB.getAssetUrl("", adkit.getSVData('background'));
            this.background2 = EB.getAssetUrl("", adkit.getSVData('background2'));
            this.background3 = EB.getAssetUrl("", adkit.getSVData('background3'));
            this.packshot   = EB.getAssetUrl("", adkit.getSVData('packshot'));
            this.packshot2   = EB.getAssetUrl("", adkit.getSVData('packshot2'));
            this.packshot3   = EB.getAssetUrl("", adkit.getSVData('packshot3'));
            this.headlights = EB.getAssetUrl("", adkit.getSVData('headlights'));
            this.cta_wrapper =adkit.getSVData('cta_wrapper');
            this.cta_icon    = EB.getAssetUrl("", adkit.getSVData('cta_icon'));
            this.cta_text    = adkit.getSVData('cta_text');
            this.cta_icon_animate = EB.getAssetUrl("", adkit.getSVData('cta_icon_animate'));
            this.cta_highlight = EB.getAssetUrl("", adkit.getSVData('cta_highlight'));
            this.cta_wrapper2 =adkit.getSVData('cta_wrapper2');
            this.cta_icon2    = EB.getAssetUrl("", adkit.getSVData('cta_icon2'));
            this.cta_text2    = adkit.getSVData('cta_text2');
            this.cta_icon2_animate = EB.getAssetUrl("", adkit.getSVData('cta_icon2_animate'));
            this.cta_highlight2 = EB.getAssetUrl("", adkit.getSVData('cta_highlight2'));
            this.cta_wrapper3 =adkit.getSVData('cta_wrapper3');
            this.cta_icon3    = EB.getAssetUrl("", adkit.getSVData('cta_icon3'));
            this.cta_text3    = adkit.getSVData('cta_text3');
            //this.cta_icon3_animate = EB.getAssetUrl("", adkit.getSVData('cta_icon3_animate'));
            this.cta_highlight3 = EB.getAssetUrl("", adkit.getSVData('cta_highlight3'));
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
            }else{
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
                background =  $('#background'),
                background2 =  $('#background2'),
                background3 =  $('#background3'),
                logo       = $('#logo'),
                packshot   = $('#packshot'),
                packshot2   = $('#packshot2'),
                packshot3   = $('#packshot3'),
                headlights = $('#headlights'),
                cta_wrapper = $('#cta_wrapper'),
                cta_icon     = $('#cta_icon'),
                cta_text    = $('#cta_text'),
                cta_icon_animate  = $('#cta_icon_animate'),
                cta_highlight = $('#cta_highlight'),
                cta_wrapper2 = $('#cta_wrapper2'),
                cta_icon2     = $('#cta_icon2'),
                cta_text2    = $('#cta_text2'),
                cta_icon2_animate  = $('#cta_icon2_animate'),
                cta_highlight2 = $('#cta_highlight2'),
                cta_wrapper3 = $('#cta_wrapper3'),
                cta_icon3     = $('#cta_icon3'),
                cta_text3    = $('#cta_text3'),
               // cta_icon3_animate  = $('#cta_icon3_animate'),
                cta_highlight3 = $('#cta_highlight3');

             if (this.border == 'true') {
                $('.global').css('box-sizing', 'border-box');
                $('.global').css('-moz-box-sizing', 'border-box');
                $('.global').css('-webkit-box-sizing', 'border-box');
                $('.global').css('border', '1px solid #000000');
            }

            //get data
            background.css('background-image', 'url(' + this.background + ')');
            background2.css('background-image', 'url(' + this.background2 + ')');
            background3.css('background-image', 'url(' + this.background3 + ')');
            logo.css('background-image', 'url(' + this.logo + ')');
            packshot.css({'background-image':'url(' + this.packshot + ')',
                           'opacity':this.packshot_opacity,
                           'left': this.packshot_left +'px',
                           'top':this.packshot_top +'px'});
            packshot2.css({'background-image':'url(' + this.packshot2 + ')',
                           'opacity':this.packshot2_opacity,
                           'left': this.packshot2_left +'px',
                           'top':this.packshot2_top +'px'});
            packshot3.css({'background-image':'url(' + this.packshot3 + ')',
                           'opacity':this.packshot3_opacity,
                           'left': this.packshot3_left +'px',
                           'top':this.packshot3_top +'px'});
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
                opacity:this.cta_wrapper_opacity,
                width: this.cta_wrapper_width ,
                height: this.cta_wrapper_height,
                left: this.cta_wrapper_left,
                top: this.cta_wrapper_top,
                '-ms-transform': 'scale(' + this.cta_wrapper_scaleX + ',' + this.cta_wrapper_scaleY + ')',
                '-webkit-transform': 'scale(' + this.cta_wrapper_scaleX + ',' + this.cta_wrapper_scaleY + ')',
                'transform':'scale(' + this.cta_wrapper_scaleX + ',' + this.cta_wrapper_scaleY + ')'
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
                height: this.cta_highlight_height,

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

            cta_wrapper2.css({
                opacity:this.cta_wrapper2_opacity,
                width: this.cta_wrapper2_width,
                height: this.cta_wrapper2_height,
                left: this.cta_wrapper2_left,
                top: this.cta_wrapper2_top,
                '-ms-transform': 'scale(' + this.cta_wrapper2_scaleX + ',' + this.cta_wrapper2_scaleY + ')',
                '-webkit-transform': 'scale(' + this.cta_wrapper2_scaleX + ',' + this.cta_wrapper2_scaleY + ')',
                'transform':'scale(' + this.cta_wrapper2_scaleX + ',' + this.cta_wrapper2_scaleY + ')'
            });

            cta_text2.css({
                fontSize: this.cta_text2_size,
                'line-height': this.cta_line2_height,
                'text-indent': this.cta_text2_indent
            })
            cta_text2.html(this.cta_text2);

            cta_highlight2.css({
                'background-image': 'url(' + this.cta_highlight2 + ')',
                width: this.cta_highlight2_width,
                height: this.cta_highlight2_height,

            });

            cta_icon2.css({
                background: 'url(' + this.cta_icon2 + ') no-repeat',
                width: this.cta_icon2_width,
                height: this.cta_icon2_height,
                right: this.cta_icon2_right,
                top: this.cta_icon2_top
            });

            cta_icon2_animate.css({
                background: 'url(' + this.cta_icon2 + ') no-repeat',
                width: this.cta_icon2_width,
                height: this.cta_icon2_height,
                right: this.cta_icon2_right,
                top: this.cta_icon2_top
            });

           cta_wrapper3.css({
                opacity:this.cta_wrapper3_opacity,
                width: this.cta_wrapper3_width ,
                height: this.cta_wrapper3_height,
                left: this.cta_wrapper3_left,
                top: this.cta_wrapper3_top,
                '-ms-transform': 'scale(' + this.cta_wrapper3_scaleX + ',' + this.cta_wrapper3_scaleY + ')',
                '-webkit-transform': 'scale(' + this.cta_wrapper3_scaleX + ',' + this.cta_wrapper3_scaleY + ')',
                'transform':'scale(' + this.cta_wrapper3_scaleX + ',' + this.cta_wrapper3_scaleY + ')'
            });

            cta_text3.css({
                fontSize: this.cta_text3_size,
                'line-height': this.cta_line3_height,
                'text-indent': this.cta_text3_indent
            })
            cta_text3.html(this.cta_text3);

            cta_highlight3.css({
                'background-image': 'url(' + this.cta_highlight3 + ')',
                width: this.cta_highlight3_width,
                height: this.cta_highlight3_height,

            });

            cta_icon3.css({
                background: 'url(' + this.cta_icon3 + ') no-repeat',
                width: this.cta_icon3_width,
                height: this.cta_icon3_height,
                right: this.cta_icon3_right +'px',
                top: this.cta_icon3_top
            });

            // cta_icon3_animate.css({
            //     background: 'url(' + this.cta_icon3 + ') no-repeat',
            //     width: this.cta_icon3_width,
            //     height: this.cta_icon3_height,
            //     right: this.cta_icon3_right,
            //     top: this.cta_icon3_top
            // });

            
            //animate
            var cta_icon_animate_url = this.cta_icon_animate;
                this.timeline.to(cta_icon_animate, 0.2, {background: 'none'});

                
                this.timeline.to(background, 0.5, {alpha:1},"-=0.5");
                this.timeline.to(packshot, 0.5, {alpha:this.packshot_ani_opacity , left: parseInt(this.packshot_ani_left),top:parseInt(this.packshot_ani_left), ease: Power2.easeOut});
                this.timeline.to(f1_title, 0.5, {alpha:1, left: 257, ease: Power2.easeOut});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:0});
                this.timeline.to(cta_wrapper, 0.5, {alpha:this.cta_wrapper_ani_opacity, scaleX:this.cta_wrapper_ani_scaleX, scaleY:this.cta_wrapper_ani_scaleY});
                this.timeline.to(cta_highlight, 1, {left:this.cta_highlight_left});
                this.timeline.to([background,packshot,headlights,f1_title,cta_wrapper,cta_highlight], 0.5, {alpha:0, delay:this.frame1_ani_delay});
                
                 
                this.timeline.to(background2, 0.5, {alpha:1});
                this.timeline.to(packshot2, 0.5, {alpha:this.packshot2_ani_opacity , left: parseInt(this.packshot2_ani_left),top:parseInt(this.packshot2_ani_top), ease: Power2.easeOut});
                this.timeline.to(f2_title, 0.5, {alpha:1});
                this.timeline.to(f2_subtitle, 0.5, {alpha:1, top: parseInt(this.f2_subtitle_top), ease: Power2.easeOut});
                this.timeline.to(cta_wrapper2, 0.5, {alpha:this.cta_wrapper2_ani_opacity, scaleX:this.cta_wrapper2_ani_scaleX, scaleY:this.cta_wrapper2_ani_scaleY});
                this.timeline.to(cta_highlight2, 1, {left:this.cta_highlight2_left});
                this.timeline.to([background2,packshot2,f2_title,f2_subtitle,cta_wrapper2,cta_highlight2], 0.5, {alpha:0, delay:this.frame2_ani_delay });


                this.timeline.to(background3, 0.5, {alpha:1});
                this.timeline.to(packshot3, 0.5, {alpha:this.packshot3_ani_opacity , left: parseInt(this.packshot3_ani_left),top:parseInt(this.packshot3_ani_top), ease: Power2.easeOut});
                this.timeline.to(f3_title, 0.5, {alpha:1});
                this.timeline.to(f3_subtitle, 0.5, {alpha:1, top: parseInt(this.f3_subtitle_top), ease: Power2.easeOut});
                this.timeline.to(cta_wrapper3, 0.5, {alpha:this.cta_wrapper3_ani_opacity, scaleX:this.cta_wrapper3_ani_scaleX, scaleY:this.cta_wrapper3_ani_scaleY});
                this.timeline.to(cta_icon3, 0.2,{right:this.cta_icon3_ani_right})
                this.timeline.to(cta_icon3, 0.2,{right:this.cta_icon3_ani_none })
                this.timeline.to(cta_icon3, 0.2,{right:this.cta_icon3_right })
                this.timeline.to(cta_highlight3, 1, {left:this.cta_highlight_left});
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











































































