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
            this.timeline = new TimelineLite();

            //Initializing Css
            this.f1_title_css                       = adkit.getSVData("f1_title_style");
            this.f1_title_css_array                 = this.f1_title_css.split(',');
            this.f1_title_opacity                   = this.f1_title_css_array[0];
            this.f1_title_color                     = this.f1_title_css_array[1];
            this.f1_title_size                      = this.f1_title_css_array[2];
            this.f1_title_left                      = this.f1_title_css_array[3];
            this.f1_title_top                       = this.f1_title_css_array[4];

            this.f1_title_animate                   = adkit.getSVData("f1_title_animate");
            this.f1_title_animate_array             = this.f1_title_animate.split(',');
            this.f1_title_animate_opacity           = this.f1_title_animate_array[0];
            this.f1_title_animate_color             = this.f1_title_animate_array[1];
            this.f1_title_animate_size              = this.f1_title_animate_array[2];
            this.f1_title_animate_left              = this.f1_title_animate_array[3];
            this.f1_title_animate_top               = this.f1_title_animate_array[4];

            this.f1_subtitle_css                    = adkit.getSVData("f1_subtitle_style");
            this.f1_subtitle_css_array              = this.f1_subtitle_css.split(',');
            this.f1_subtitle_opacity                = this.f1_subtitle_css_array[0];
            this.f1_subtitle_color                  = this.f1_subtitle_css_array[1];
            this.f1_subtitle_size                   = this.f1_subtitle_css_array[2];
            this.f1_subtitle_left                   = this.f1_subtitle_css_array[3];
            this.f1_subtitle_top                    = this.f1_subtitle_css_array[4];
            this.f1_subtitle_span_color             = this.f1_subtitle_css_array[5];

            this.f1_subtitle_animate                = adkit.getSVData("f1_subtitle_animate");
            this.f1_subtitle_animate_array          = this.f1_subtitle_animate.split(',');
            this.f1_subtitle_animate_opacity        = this.f1_subtitle_animate_array[0];
            this.f1_subtitle_animate_color          = this.f1_subtitle_animate_array[1];
            this.f1_subtitle_animate_size           = this.f1_subtitle_animate_array[2];
            this.f1_subtitle_animate_left           = this.f1_subtitle_animate_array[3];
            this.f1_subtitle_animate_top            = this.f1_subtitle_animate_array[4];
            this.f1_subtitle_animate_span_color     = this.f1_subtitle_animate_array[5];

            this.f1_cta_wrapper_css                    = adkit.getSVData("f1_cta_wrapper_style");
            this.f1_cta_wrapper_css_array              = this.f1_cta_wrapper_css.split(',');
            this.f1_cta_wrapper_opacity                = this.f1_cta_wrapper_css_array[0];
            this.f1_cta_wrapper_bgcolor                = this.f1_cta_wrapper_css_array[1];
            this.f1_cta_wrapper_width                  = this.f1_cta_wrapper_css_array[2];
            this.f1_cta_wrapper_height                 = this.f1_cta_wrapper_css_array[3];
            this.f1_cta_wrapper_left                   = this.f1_cta_wrapper_css_array[4];
            this.f1_cta_wrapper_top                    = this.f1_cta_wrapper_css_array[5];

            this.f1_cta_wrapper_animate                = adkit.getSVData("f1_cta_wrapper_animate");
            this.f1_cta_wrapper_animate_array          = this.f1_cta_wrapper_animate.split(',');
            this.f1_cta_wrapper_animate_opacity        = this.f1_cta_wrapper_animate_array[0];
            this.f1_cta_wrapper_animate_color          = this.f1_cta_wrapper_animate_array[1];
            this.f1_cta_wrapper_animate_width          = this.f1_cta_wrapper_animate_array[2];
            this.f1_cta_wrapper_animate_height         = this.f1_cta_wrapper_animate_array[3];
            this.f1_cta_wrapper_animate_left           = this.f1_cta_wrapper_animate_array[4];
            this.f1_cta_wrapper_animate_top            = this.f1_cta_wrapper_animate_array[5];

            this.f1_cta_highlight_css                  = adkit.getSVData("f1_cta_highlight_style");
            this.f1_cta_highlight_css_array            = this.f1_cta_highlight_css.split(',');
            this.f1_cta_highlight_opacity              = this.f1_cta_highlight_css_array[0];
            this.f1_cta_highlight_width                = this.f1_cta_highlight_css_array[1];
            this.f1_cta_highlight_height               = this.f1_cta_highlight_css_array[2];
            this.f1_cta_highlight_left                 = this.f1_cta_highlight_css_array[3];
            this.f1_cta_highlight_top                  = this.f1_cta_highlight_css_array[4];

            this.f1_cta_highlight_animate              = adkit.getSVData("f1_cta_highlight_animate");
            this.f1_cta_highlight_animate_array        = this.f1_cta_highlight_animate.split(',');
            this.f1_cta_highlight_animate_opacity      = this.f1_cta_highlight_animate_array[0];
            this.f1_cta_highlight_animate_width        = this.f1_cta_highlight_animate_array[1];
            this.f1_cta_highlight_animate_height       = this.f1_cta_highlight_animate_array[2];
            this.f1_cta_highlight_animate_left         = this.f1_cta_highlight_animate_array[3];
            this.f1_cta_highlight_animate_top          = this.f1_cta_highlight_animate_array[4];

            this.f1_cta_text_css                       = adkit.getSVData("f1_cta_text_style");
            this.f1_cta_text_css_array                 = this.f1_cta_text_css.split(',');
            this.f1_cta_text_color                     = this.f1_cta_text_css_array[0];
            this.f1_cta_text_size                      = this.f1_cta_text_css_array[1];
            this.f1_cta_line_height                    = this.f1_cta_text_css_array[2];
            this.f1_cta_text_indent                    = this.f1_cta_text_css_array[3];

            this.f1_cta_icon_css                       = adkit.getSVData("f1_cta_icon_style");
            this.f1_cta_icon_css_array                 = this.f1_cta_icon_css.split(',');
            this.f1_cta_icon_width                     = this.f1_cta_icon_css_array[0];
            this.f1_cta_icon_height                    = this.f1_cta_icon_css_array[1];
            this.f1_cta_icon_right                     = this.f1_cta_icon_css_array[2];
            this.f1_cta_icon_top                       = this.f1_cta_icon_css_array[3];

            this.f1_image1_css                         = adkit.getSVData("f1_image1_style");
            this.f1_image1_css_array                   = this.f1_image1_css.split(',');
            this.f1_image1_opacity                     = this.f1_image1_css_array[0];
            this.f1_image1_scaleX                      = this.f1_image1_css_array[1];
            this.f1_image1_scaleY                      = this.f1_image1_css_array[2];
            this.f1_image1_left                        = this.f1_image1_css_array[3];
            this.f1_image1_top                         = this.f1_image1_css_array[4];

            this.f1_image1_animate                     = adkit.getSVData("f1_image1_animate");
            this.f1_image1_animate_array               = this.f1_image1_animate.split(',');
            this.f1_image1_animate_opacity             = this.f1_image1_animate_array[0];
            this.f1_image1_animate_scaleX              = this.f1_image1_animate_array[1];
            this.f1_image1_animate_scaleY              = this.f1_image1_animate_array[2];
            this.f1_image1_animate_left                = this.f1_image1_animate_array[3];
            this.f1_image1_animate_top                 = this.f1_image1_animate_array[4];

            this.f1_image2_css                         = adkit.getSVData("f1_image2_style");
            this.f1_image2_css_array                   = this.f1_image2_css.split(',');
            this.f1_image2_opacity                     = this.f1_image2_css_array[0];
            this.f1_image2_scaleX                      = this.f1_image2_css_array[1];
            this.f1_image2_scaleY                      = this.f1_image2_css_array[2];
            this.f1_image2_left                        = this.f1_image2_css_array[3];
            this.f1_image2_top                         = this.f1_image2_css_array[4];

            this.f1_image2_animate                     = adkit.getSVData("f1_image2_animate");
            this.f1_image2_animate_array               = this.f1_image2_animate.split(',');
            this.f1_image2_animate_opacity             = this.f1_image2_animate_array[0];
            this.f1_image2_animate_scaleX              = this.f1_image2_animate_array[1];
            this.f1_image2_animate_scaleY              = this.f1_image2_animate_array[2];
            this.f1_image2_animate_left                = this.f1_image2_animate_array[3];
            this.f1_image2_animate_top                 = this.f1_image2_animate_array[4];

            this.f1_background_css                     = adkit.getSVData("f1_background_style");
            this.f1_background_css_array               = this.f1_background_css.split(',');
            this.f1_background_opacity                 = this.f1_background_css_array[0];

            this.f1_background_animate                 = adkit.getSVData("f1_background_animate");
            this.f1_background_animate_array           = this.f1_background_animate.split(',');
            this.f1_background_animate_opacity         = this.f1_background_animate_array[0];

            this.f2_title_css                       = adkit.getSVData("f2_title_style");
            this.f2_title_css_array                 = this.f2_title_css.split(',');
            this.f2_title_opacity                   = this.f2_title_css_array[0];
            this.f2_title_color                     = this.f2_title_css_array[1];
            this.f2_title_size                      = this.f2_title_css_array[2];
            this.f2_title_left                      = this.f2_title_css_array[3];
            this.f2_title_top                       = this.f2_title_css_array[4];

            this.f2_title_animate                   = adkit.getSVData("f2_title_animate");
            this.f2_title_animate_array             = this.f2_title_animate.split(',');
            this.f2_title_animate_opacity           = this.f2_title_animate_array[0];
            this.f2_title_animate_color             = this.f2_title_animate_array[1];
            this.f2_title_animate_size              = this.f2_title_animate_array[2];
            this.f2_title_animate_left              = this.f2_title_animate_array[3];
            this.f2_title_animate_top               = this.f2_title_animate_array[4];

            this.f2_subtitle_css                    = adkit.getSVData("f2_subtitle_style");
            this.f2_subtitle_css_array              = this.f2_subtitle_css.split(',');
            this.f2_subtitle_opacity                = this.f2_subtitle_css_array[0];
            this.f2_subtitle_color                  = this.f2_subtitle_css_array[1];
            this.f2_subtitle_size                   = this.f2_subtitle_css_array[2];
            this.f2_subtitle_left                   = this.f2_subtitle_css_array[3];
            this.f2_subtitle_top                    = this.f2_subtitle_css_array[4];
            this.f2_subtitle_span_color             = this.f2_subtitle_css_array[5];

            this.f2_subtitle_animate                = adkit.getSVData("f1_subtitle_animate");
            this.f2_subtitle_animate_array          = this.f2_subtitle_animate.split(',');
            this.f2_subtitle_animate_opacity        = this.f2_subtitle_animate_array[0];
            this.f2_subtitle_animate_color          = this.f2_subtitle_animate_array[1];
            this.f2_subtitle_animate_size           = this.f2_subtitle_animate_array[2];
            this.f2_subtitle_animate_left           = this.f2_subtitle_animate_array[3];
            this.f2_subtitle_animate_top            = this.f2_subtitle_animate_array[4];
            this.f2_subtitle_animate_span_color     = this.f2_subtitle_animate_array[5];

            this.f2_cta_wrapper_css                    = adkit.getSVData("f2_cta_wrapper_style");
            this.f2_cta_wrapper_css_array              = this.f2_cta_wrapper_css.split(',');
            this.f2_cta_wrapper_opacity                = this.f2_cta_wrapper_css_array[0];
            this.f2_cta_wrapper_bgcolor                = this.f2_cta_wrapper_css_array[1];
            this.f2_cta_wrapper_width                  = this.f2_cta_wrapper_css_array[2];
            this.f2_cta_wrapper_height                 = this.f2_cta_wrapper_css_array[3];
            this.f2_cta_wrapper_left                   = this.f2_cta_wrapper_css_array[4];
            this.f2_cta_wrapper_top                    = this.f2_cta_wrapper_css_array[5];

            this.f2_cta_wrapper_animate                = adkit.getSVData("f2_cta_wrapper_animate");
            this.f2_cta_wrapper_animate_array          = this.f2_cta_wrapper_animate.split(',');
            this.f2_cta_wrapper_animate_opacity        = this.f2_cta_wrapper_animate_array[0];
            this.f2_cta_wrapper_animate_color          = this.f2_cta_wrapper_animate_array[1];
            this.f2_cta_wrapper_animate_width          = this.f2_cta_wrapper_animate_array[2];
            this.f2_cta_wrapper_animate_height         = this.f2_cta_wrapper_animate_array[3];
            this.f2_cta_wrapper_animate_left           = this.f2_cta_wrapper_animate_array[4];
            this.f2_cta_wrapper_animate_top            = this.f2_cta_wrapper_animate_array[5];

            this.f2_cta_highlight_css                  = adkit.getSVData("f2_cta_highlight_style");
            this.f2_cta_highlight_css_array            = this.f2_cta_highlight_css.split(',');
            this.f2_cta_highlight_opacity              = this.f2_cta_highlight_css_array[0];
            this.f2_cta_highlight_width                = this.f2_cta_highlight_css_array[1];
            this.f2_cta_highlight_height               = this.f2_cta_highlight_css_array[2];
            this.f2_cta_highlight_left                 = this.f2_cta_highlight_css_array[3];
            this.f2_cta_highlight_top                  = this.f2_cta_highlight_css_array[4];

            this.f2_cta_highlight_animate              = adkit.getSVData("f2_cta_highlight_animate");
            this.f2_cta_highlight_animate_array        = this.f2_cta_highlight_animate.split(',');
            this.f2_cta_highlight_animate_opacity      = this.f2_cta_highlight_animate_array[0];
            this.f2_cta_highlight_animate_width        = this.f2_cta_highlight_animate_array[1];
            this.f2_cta_highlight_animate_height       = this.f2_cta_highlight_animate_array[2];
            this.f2_cta_highlight_animate_left         = this.f2_cta_highlight_animate_array[3];
            this.f2_cta_highlight_animate_top          = this.f2_cta_highlight_animate_array[4];

            this.f2_cta_text_css                       = adkit.getSVData("f2_cta_text_style");
            this.f2_cta_text_css_array                 = this.f2_cta_text_css.split(',');
            this.f2_cta_text_color                     = this.f2_cta_text_css_array[0];
            this.f2_cta_text_size                      = this.f2_cta_text_css_array[1];
            this.f2_cta_line_height                    = this.f2_cta_text_css_array[2];
            this.f2_cta_text_indent                    = this.f2_cta_text_css_array[3];

            this.f2_cta_icon_css                       = adkit.getSVData("f2_cta_icon_style");
            this.f2_cta_icon_css_array                 = this.f2_cta_icon_css.split(',');
            this.f2_cta_icon_width                     = this.f2_cta_icon_css_array[0];
            this.f2_cta_icon_height                    = this.f2_cta_icon_css_array[1];
            this.f2_cta_icon_right                     = this.f2_cta_icon_css_array[2];
            this.f2_cta_icon_top                       = this.f2_cta_icon_css_array[3];

            this.f2_image1_css                         = adkit.getSVData("f2_image1_style");
            this.f2_image1_css_array                   = this.f2_image1_css.split(',');
            this.f2_image1_opacity                     = this.f2_image1_css_array[0];
            this.f2_image1_scaleX                      = this.f2_image1_css_array[1];
            this.f2_image1_scaleY                      = this.f2_image1_css_array[2];
            this.f2_image1_left                        = this.f2_image1_css_array[3];
            this.f2_image1_top                         = this.f2_image1_css_array[4];

            this.f2_image1_animate                     = adkit.getSVData("f2_image1_animate");
            this.f2_image1_animate_array               = this.f2_image1_animate.split(',');
            this.f2_image1_animate_opacity             = this.f2_image1_animate_array[0];
            this.f2_image1_animate_scaleX              = this.f2_image1_animate_array[1];
            this.f2_image1_animate_scaleY              = this.f2_image1_animate_array[2];
            this.f2_image1_animate_left                = this.f2_image1_animate_array[3];
            this.f2_image1_animate_top                 = this.f2_image1_animate_array[4];

            this.f2_image2_css                         = adkit.getSVData("f2_image2_style");
            this.f2_image2_css_array                   = this.f2_image2_css.split(',');
            this.f2_image2_opacity                     = this.f2_image2_css_array[0];
            this.f2_image2_scaleX                      = this.f2_image2_css_array[1];
            this.f2_image2_scaleY                      = this.f2_image2_css_array[2];
            this.f2_image2_left                        = this.f2_image2_css_array[3];
            this.f2_image2_top                         = this.f2_image2_css_array[4];

            this.f2_image2_animate                     = adkit.getSVData("f2_image2_animate");
            this.f2_image2_animate_array               = this.f2_image2_animate.split(',');
            this.f2_image2_animate_opacity             = this.f2_image2_animate_array[0];
            this.f2_image2_animate_scaleX              = this.f2_image2_animate_array[1];
            this.f2_image2_animate_scaleY              = this.f2_image2_animate_array[2];
            this.f2_image2_animate_left                = this.f2_image2_animate_array[3];
            this.f2_image2_animate_top                 = this.f2_image2_animate_array[4];

            this.f2_background_css                     = adkit.getSVData("f2_background_style");
            this.f2_background_css_array               = this.f2_background_css.split(',');
            this.f2_background_opacity                 = this.f2_background_css_array[0];

            this.f2_background_animate                 = adkit.getSVData("f2_background_animate");
            this.f2_background_animate_array           = this.f2_background_animate.split(',');
            this.f2_background_animate_opacity         = this.f2_background_animate_array[0];

            this.f3_title_css                       = adkit.getSVData("f3_title_style");
            this.f3_title_css_array                 = this.f3_title_css.split(',');
            this.f3_title_opacity                   = this.f3_title_css_array[0];
            this.f3_title_color                     = this.f3_title_css_array[1];
            this.f3_title_size                      = this.f3_title_css_array[2];
            this.f3_title_left                      = this.f3_title_css_array[3];
            this.f3_title_top                       = this.f3_title_css_array[4];

            this.f3_title_animate                   = adkit.getSVData("f3_title_animate");
            this.f3_title_animate_array             = this.f3_title_animate.split(',');
            this.f3_title_animate_opacity           = this.f3_title_animate_array[0];
            this.f3_title_animate_color             = this.f3_title_animate_array[1];
            this.f3_title_animate_size              = this.f3_title_animate_array[2];
            this.f3_title_animate_left              = this.f3_title_animate_array[3];
            this.f3_title_animate_top               = this.f3_title_animate_array[4];

            this.f3_subtitle_css                    = adkit.getSVData("f3_subtitle_style");
            this.f3_subtitle_css_array              = this.f3_subtitle_css.split(',');
            this.f3_subtitle_opacity                = this.f3_subtitle_css_array[0];
            this.f3_subtitle_color                  = this.f3_subtitle_css_array[1];
            this.f3_subtitle_size                   = this.f3_subtitle_css_array[2];
            this.f3_subtitle_left                   = this.f3_subtitle_css_array[3];
            this.f3_subtitle_top                    = this.f3_subtitle_css_array[4];
            this.f3_subtitle_span_color             = this.f3_subtitle_css_array[5];

            this.f3_subtitle_animate                = adkit.getSVData("f3_subtitle_animate");
            this.f3_subtitle_animate_array          = this.f3_subtitle_animate.split(',');
            this.f3_subtitle_animate_opacity        = this.f3_subtitle_animate_array[0];
            this.f3_subtitle_animate_color          = this.f3_subtitle_animate_array[1];
            this.f3_subtitle_animate_size           = this.f3_subtitle_animate_array[2];
            this.f3_subtitle_animate_left           = this.f3_subtitle_animate_array[3];
            this.f3_subtitle_animate_top            = this.f3_subtitle_animate_array[4];
            this.f3_subtitle_animate_span_color     = this.f3_subtitle_animate_array[5];

            this.f3_cta_wrapper_css                    = adkit.getSVData("f3_cta_wrapper_style");
            this.f3_cta_wrapper_css_array              = this.f3_cta_wrapper_css.split(',');
            this.f3_cta_wrapper_opacity                = this.f3_cta_wrapper_css_array[0];
            this.f3_cta_wrapper_bgcolor                = this.f3_cta_wrapper_css_array[1];
            this.f3_cta_wrapper_width                  = this.f3_cta_wrapper_css_array[2];
            this.f3_cta_wrapper_height                 = this.f3_cta_wrapper_css_array[3];
            this.f3_cta_wrapper_left                   = this.f3_cta_wrapper_css_array[4];
            this.f3_cta_wrapper_top                    = this.f3_cta_wrapper_css_array[5];

            this.f3_cta_wrapper_animate                = adkit.getSVData("f3_cta_wrapper_animate");
            this.f3_cta_wrapper_animate_array          = this.f3_cta_wrapper_animate.split(',');
            this.f3_cta_wrapper_animate_opacity        = this.f3_cta_wrapper_animate_array[0];
            this.f3_cta_wrapper_animate_color          = this.f3_cta_wrapper_animate_array[1];
            this.f3_cta_wrapper_animate_width          = this.f3_cta_wrapper_animate_array[2];
            this.f3_cta_wrapper_animate_height         = this.f3_cta_wrapper_animate_array[3];
            this.f3_cta_wrapper_animate_left           = this.f3_cta_wrapper_animate_array[4];
            this.f3_cta_wrapper_animate_top            = this.f3_cta_wrapper_animate_array[5];

            this.f3_cta_highlight_css                  = adkit.getSVData("f3_cta_highlight_style");
            this.f3_cta_highlight_css_array            = this.f3_cta_highlight_css.split(',');
            this.f3_cta_highlight_opacity              = this.f3_cta_highlight_css_array[0];
            this.f3_cta_highlight_width                = this.f3_cta_highlight_css_array[1];
            this.f3_cta_highlight_height               = this.f3_cta_highlight_css_array[2];
            this.f3_cta_highlight_left                 = this.f3_cta_highlight_css_array[3];
            this.f3_cta_highlight_top                  = this.f3_cta_highlight_css_array[4];

            this.f3_cta_highlight_animate              = adkit.getSVData("f3_cta_highlight_animate");
            this.f3_cta_highlight_animate_array        = this.f3_cta_highlight_animate.split(',');
            this.f3_cta_highlight_animate_opacity      = this.f3_cta_highlight_animate_array[0];
            this.f3_cta_highlight_animate_width        = this.f3_cta_highlight_animate_array[1];
            this.f3_cta_highlight_animate_height       = this.f3_cta_highlight_animate_array[2];
            this.f3_cta_highlight_animate_left         = this.f3_cta_highlight_animate_array[3];
            this.f3_cta_highlight_animate_top          = this.f3_cta_highlight_animate_array[4];

            this.f3_cta_text_css                       = adkit.getSVData("f3_cta_text_style");
            this.f3_cta_text_css_array                 = this.f3_cta_text_css.split(',');
            this.f3_cta_text_color                     = this.f3_cta_text_css_array[0];
            this.f3_cta_text_size                      = this.f3_cta_text_css_array[1];
            this.f3_cta_line_height                    = this.f3_cta_text_css_array[2];
            this.f3_cta_text_indent                    = this.f3_cta_text_css_array[3];

            this.f3_cta_icon_css                       = adkit.getSVData("f3_cta_icon_style");
            this.f3_cta_icon_css_array                 = this.f3_cta_icon_css.split(',');
            this.f3_cta_icon_width                     = this.f3_cta_icon_css_array[0];
            this.f3_cta_icon_height                    = this.f3_cta_icon_css_array[1];
            this.f3_cta_icon_right                     = this.f3_cta_icon_css_array[2];
            this.f3_cta_icon_top                       = this.f3_cta_icon_css_array[3];

            this.f3_image1_css                         = adkit.getSVData("f3_image1_style");
            this.f3_image1_css_array                   = this.f3_image1_css.split(',');
            this.f3_image1_opacity                     = this.f3_image1_css_array[0];
            this.f3_image1_scaleX                      = this.f3_image1_css_array[1];
            this.f3_image1_scaleY                      = this.f3_image1_css_array[2];
            this.f3_image1_left                        = this.f3_image1_css_array[3];
            this.f3_image1_top                         = this.f3_image1_css_array[4];

            this.f3_image1_animate                     = adkit.getSVData("f3_image1_animate");
            this.f3_image1_animate_array               = this.f3_image1_animate.split(',');
            this.f3_image1_animate_opacity             = this.f3_image1_animate_array[0];
            this.f3_image1_animate_scaleX              = this.f3_image1_animate_array[1];
            this.f3_image1_animate_scaleY              = this.f3_image1_animate_array[2];
            this.f3_image1_animate_left                = this.f3_image1_animate_array[3];
            this.f3_image1_animate_top                 = this.f3_image1_animate_array[4];

            this.f3_image2_css                         = adkit.getSVData("f3_image2_style");
            this.f3_image2_css_array                   = this.f3_image2_css.split(',');
            this.f3_image2_opacity                     = this.f3_image2_css_array[0];
            this.f3_image2_scaleX                      = this.f3_image2_css_array[1];
            this.f3_image2_scaleY                      = this.f3_image2_css_array[2];
            this.f3_image2_left                        = this.f3_image2_css_array[3];
            this.f3_image2_top                         = this.f3_image2_css_array[4];

            this.f3_image2_animate                     = adkit.getSVData("f3_image2_animate");
            this.f3_image2_animate_array               = this.f3_image2_animate.split(',');
            this.f3_image2_animate_opacity             = this.f3_image2_animate_array[0];
            this.f3_image2_animate_scaleX              = this.f3_image2_animate_array[1];
            this.f3_image2_animate_scaleY              = this.f3_image2_animate_array[2];
            this.f3_image2_animate_left                = this.f3_image2_animate_array[3];
            this.f3_image2_animate_top                 = this.f3_image2_animate_array[4];

            this.f3_background_css                     = adkit.getSVData("f3_background_style");
            this.f3_background_css_array               = this.f3_background_css.split(',');
            this.f3_background_opacity                 = this.f3_background_css_array[0];

            this.f3_background_animate                 = adkit.getSVData("f3_background_animate");
            this.f3_background_animate_array           = this.f3_background_animate.split(',');
            this.f3_background_animate_opacity         = this.f3_background_animate_array[0];

            //Initializing all config value
            this.f1_title    = adkit.getSVData('f1_title');
            this.f1_subtitle = adkit.getSVData('f2_subtitle');
            this.f2_title    = adkit.getSVData('f2_title');
            this.f2_subtitle = adkit.getSVData('f2_subtitle');
            this.f3_title    = adkit.getSVData('f3_title');
            this.f3_subtitle = adkit.getSVData('f3_subtitle');

            this.f1_delaytime = adkit.getSVData('f1_delaytime');
            this.f2_delaytime = adkit.getSVData('f2_delaytime');
            this.f3_delaytime = adkit.getSVData('f3_delaytime');

            this.f1_image1     = EB.getAssetUrl("", adkit.getSVData('f1_image1'));
            this.f1_image2     = EB.getAssetUrl("", adkit.getSVData('f1_image2'));
            this.f2_image1     = EB.getAssetUrl("", adkit.getSVData('f2_image1'));
            this.f2_image2     = EB.getAssetUrl("", adkit.getSVData('f2_image2'));
            this.f3_image1     = EB.getAssetUrl("", adkit.getSVData('f3_image1'));
            this.f3_image2     = EB.getAssetUrl("", adkit.getSVData('f3_image2'));

            this.f1_cta_text                = adkit.getSVData('f1_cta_text');
            this.f1_cta_icon                = EB.getAssetUrl("", adkit.getSVData('f1_cta_icon'));
            this.f1_cta_icon_animate        = EB.getAssetUrl("", adkit.getSVData('f1_cta_icon_animate'));
            this.f1_cta_highlight           = EB.getAssetUrl("", adkit.getSVData('f1_cta_highlight'));

            this.f1_background = EB.getAssetUrl("", adkit.getSVData('f1_background'));
            this.f2_background = EB.getAssetUrl("", adkit.getSVData('f2_background'));
            this.f3_background = EB.getAssetUrl("", adkit.getSVData('f3_background'));

            this.logo              = EB.getAssetUrl("", adkit.getSVData('logo'));

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

                f1_background = $('#f1_background'),
                f2_background = $('#f2_background'),
                f3_background = $('#f3_background'),

                f1_title    =  $('#f1_title'),
                f2_subtitle =  $('#f2_subtitle'),
                f2_title    =  $('#f2_title'),
                f2_subtitle =  $('#f2_subtitle'),
                f3_title    =  $('#f3_title'),
                f3_subtitle =  $('#f3_subtitle'),

                f1_image1 =  $('#f1_image1'),
                f1_image2 =  $('#f1_image2'),
                f2_image1 =  $('#f2_image1'),
                f2_image2 =  $('#f2_image2'),
                f3_image1 =  $('#f3_image1'),
                f3_image2 =  $('#f3_image2'),

                f1_cta_wrapper = $('#f1_cta'),
                f1_cta_icon     = f1_cta_wrapper.find('.cta_icon'),
                f1_cta_text    = f1_cta_wrapper.find('.cta_text'),
                f1_cta_icon_animate  = f1_cta_wrapper.find('.cta_icon_animate'),
                f1_cta_highlight = f1_cta_wrapper.find('.cta_highlight'),

                f2_cta_wrapper = $('#f2_cta'),
                f2_cta_icon     = f2_cta_wrapper.find('.cta_icon'),
                f2_cta_text    = f2_cta_wrapper.find('.cta_text'),
                f2_cta_icon_animate  = f2_cta_wrapper.find('.cta_icon_animate'),
                f2_cta_highlight = f2_cta_wrapper.find('.cta_highlight'),

                f3_cta_wrapper = $('#f3_cta'),
                f3_cta_icon     = f3_cta_wrapper.find('.cta_icon'),
                f3_cta_text    = f3_cta_wrapper.find('.cta_text'),
                f3_cta_icon_animate  = f3_cta_wrapper.find('.cta_icon_animate'),
                f3_cta_highlight = f3_cta_wrapper.find('.cta_highlight'),

                logo       = $('#logo');

            if (this.border == 'true') {
                $('.global').css('box-sizing', 'border-box');
                $('.global').css('-moz-box-sizing', 'border-box');
                $('.global').css('-webkit-box-sizing', 'border-box');
                $('.global').css('border', '1px solid #000000');
            }

            //set css--------------------------------------------------------------------------------------------------
            logo.css('background-image', 'url(' + this.logo + ')');

            f1_image1.css({
                opacity: this.f1_image1_opacity,
                '-webkit-transform': 'scale(' + this.f1_image1_scaleX + ',' + this.f1_image1_scaleX + ')',
                '-moz-transform': 'scale(' + this.f1_image1_scaleX + ',' + this.f1_image1_scaleX + ')',
                '-ms-transform': 'scale(' + this.f1_image1_scaleX + ',' + this.f1_image1_scaleX + ')',
                '-o-transform': 'scale(' + this.f1_image1_scaleX + ',' + this.f1_image1_scaleX + ')',
                transform: 'scale(' + this.f1_image1_scaleX + ',' + this.f1_image1_scaleX + ')',
                'background-image': 'url(' + this.f1_image1 + ') no-repeat'
            });
            f1_image2.css({
                opacity: this.f1_image2_opacity,
                '-webkit-transform': 'scale(' + this.f1_image2_scaleX + ',' + this.f1_image2_scaleX + ')',
                '-moz-transform': 'scale(' + this.f1_image2_scaleX + ',' + this.f1_image2_scaleX + ')',
                '-ms-transform': 'scale(' + this.f1_image2_scaleX + ',' + this.f1_image2_scaleX + ')',
                '-o-transform': 'scale(' + this.f1_image2_scaleX + ',' + this.f1_image2_scaleX + ')',
                transform: 'scale(' + this.f1_image2_scaleX + ',' + this.f1_image2_scaleX + ')',
                'background-image': 'url(' + this.f1_image2 + ') no-repeat'
            });

            f2_image1.css({
                opacity: this.f2_image1_opacity,
                '-webkit-transform': 'scale(' + this.f2_image1_scaleX + ',' + this.f2_image1_scaleX + ')',
                '-moz-transform': 'scale(' + this.f2_image1_scaleX + ',' + this.f2_image1_scaleX + ')',
                '-ms-transform': 'scale(' + this.f2_image1_scaleX + ',' + this.f2_image1_scaleX + ')',
                '-o-transform': 'scale(' + this.f2_image1_scaleX + ',' + this.f2_image1_scaleX + ')',
                transform: 'scale(' + this.f2_image1_scaleX + ',' + this.f2_image1_scaleX + ')',
                'background-image': 'url(' + this.f2_image1 + ') no-repeat'
            });
            f2_image2.css({
                opacity: this.f2_image2_opacity,
                '-webkit-transform': 'scale(' + this.f2_image2_scaleX + ',' + this.f2_image2_scaleX + ')',
                '-moz-transform': 'scale(' + this.f2_image2_scaleX + ',' + this.f2_image2_scaleX + ')',
                '-ms-transform': 'scale(' + this.f2_image2_scaleX + ',' + this.f2_image2_scaleX + ')',
                '-o-transform': 'scale(' + this.f2_image2_scaleX + ',' + this.f2_image2_scaleX + ')',
                transform: 'scale(' + this.f2_image2_scaleX + ',' + this.f2_image2_scaleX + ')',
                'background-image': 'url(' + this.f2_image2 + ') no-repeat'
            });

            f3_image1.css({
                opacity: this.f3_image1_opacity,
                '-webkit-transform': 'scale(' + this.f3_image1_scaleX + ',' + this.f3_image1_scaleX + ')',
                '-moz-transform': 'scale(' + this.f3_image1_scaleX + ',' + this.f3_image1_scaleX + ')',
                '-ms-transform': 'scale(' + this.f3_image1_scaleX + ',' + this.f3_image1_scaleX + ')',
                '-o-transform': 'scale(' + this.f3_image1_scaleX + ',' + this.f3_image1_scaleX + ')',
                transform: 'scale(' + this.f3_image1_scaleX + ',' + this.f3_image1_scaleX + ')',
                'background-image': 'url(' + this.f3_image1 + ') no-repeat'
            });
            f3_image2.css({
                opacity: this.f3_image2_opacity,
                '-webkit-transform': 'scale(' + this.f3_image2_scaleX + ',' + this.f3_image2_scaleX + ')',
                '-moz-transform': 'scale(' + this.f3_image2_scaleX + ',' + this.f3_image2_scaleX + ')',
                '-ms-transform': 'scale(' + this.f3_image2_scaleX + ',' + this.f3_image2_scaleX + ')',
                '-o-transform': 'scale(' + this.f3_image2_scaleX + ',' + this.f3_image2_scaleX + ')',
                transform: 'scale(' + this.f3_image2_scaleX + ',' + this.f3_image2_scaleX + ')',
                'background-image': 'url(' + this.f3_image2 + ') no-repeat'
            });

            f1_background.css({
                opacity: this.f1_background_opacity,
                'background-image': 'url(' + this.f1_background + ') no-repeat'
            });
            f2_background.css({
                opacity: this.f2_background_opacity,
                'background-image': 'url(' + this.f2_background + ') no-repeat'
            });
            f3_background.css({
                opacity: this.f3_background_opacity,
                'background-image': 'url(' + this.f3_background + ') no-repeat'
            });


            f1_title.css({
                opacity: this.f1_title_opacity,
                color: this.f1_title_color,
                fontSize: this.f1_title_size,
                left: this.f1_title_left,
                top: this.f1_title_top

            });
            f1_title.html(this.f1_title);

            f1_subtitle.css({
                opacity: this.f1_subtitle_opacity,
                color: this.f1_subtitle_color,
                fontSize: this.f1_subtitle_size,
                left: this.f1_subtitle_left,
                top: this.f1_subtitle_top
            });
            f1_subtitle.html(this.f1_subtitle);
            $(f1_subtitle).find('span').css('color', this.f1_subtitle_span_color);

            f2_title.css({
                opacity: this.f2_title_opacity,
                color: this.f2_title_color,
                fontSize: this.f2_title_size,
                left: this.f2_title_left,
                top: this.f2_title_top
            });
            f2_title.html(this.f2_title);

            f2_subtitle.css({
                opacity: this.f2_subtitle_opacity,
                color: this.f2_subtitle_color,
                fontSize: this.f2_subtitle_size,
                left: this.f2_subtitle_left,
                top: this.f2_subtitle_top
            });
            f2_subtitle.html(this.f2_subtitle);
            $(f2_subtitle).find('span').css('color', this.f2_subtitle_span_color);

            f3_title.css({
                opacity: this.f3_title_opacity,
                color: this.f3_title_color,
                fontSize: this.f3_title_size,
                left: this.f3_title_left,
                top: this.f3_title_top

            });
            f3_title.html(this.f3_title);

            f3_subtitle.css({
                opacity: this.f3_subtitle_opacity,
                color: this.f3_subtitle_color,
                fontSize: this.f3_subtitle_size,
                left: this.f3_subtitle_left,
                top: this.f3_subtitle_top
            });
            f3_subtitle.html(this.f3_subtitle);
            $(f3_subtitle).find('span').css('color', this.f3_subtitle_span_color);

            f1_cta_wrapper.css({
                opacity: this.f1_cta_wrapper_opacity,
                background: this.f1_cta_wrapper_bgcolor,
                width: this.f1_cta_wrapper_width,
                height: this.f1_cta_wrapper_height,
                left: this.f1_cta_wrapper_left,
                top: this.f1_cta_wrapper_top
            });

            f1_cta_text.css({
                color: this.f1_cta_text_color,
                fontSize: this.f1_cta_text_size,
                'line-height': this.f1_cta_line_height,
                'text-indent': this.f1_cta_text_indent
            })
            f1_cta_text.html(this.f1_cta_text);

            f1_cta_highlight.css({
                background: 'url(' + this.f1_cta_highlight + ') no-repeat',
                opacity: this.f1_cta_highlight_opacity,
                width: this.f1_cta_highlight_width,
                height: this.f1_cta_highlight_height,
                left: this.f1_cta_highlight_left,
                top: this.f1_cta_highlight_top
            });

            f1_cta_icon.css({
                background: 'url(' + f1_this.cta_icon + ') no-repeat',
                width: this.f1_cta_icon_width,
                height: this.f1_cta_icon_height,
                right: this.f1_cta_icon_right,
                top: this.f1_cta_icon_top
            });

            f1_cta_icon_animate.css({
                background: 'url(' + f1_this.cta_icon + ') no-repeat',
                width: this.f1_cta_icon_width,
                height: this.f1_cta_icon_height,
                right: this.f1_cta_icon_right,
                top: this.f1_cta_icon_top
            });

            f2_cta_wrapper.css({
                opacity: this.f2_cta_wrapper_opacity,
                background: this.f2_cta_wrapper_bgcolor,
                width: this.f2_cta_wrapper_width,
                height: this.f2_cta_wrapper_height,
                left: this.f2_cta_wrapper_left,
                top: this.f2_cta_wrapper_top
            });

            f2_cta_text.css({
                color: this.f2_cta_text_color,
                fontSize: this.f2_cta_text_size,
                'line-height': this.f2_cta_line_height,
                'text-indent': this.f2_cta_text_indent
            })
            f2_cta_text.html(this.f2_cta_text);

            f2_cta_highlight.css({
                background: 'url(' + this.f2_cta_highlight + ') no-repeat',
                opacity: this.f2_cta_highlight_opacity,
                width: this.f2_cta_highlight_width,
                height: this.f2_cta_highlight_height,
                left: this.f2_cta_highlight_left,
                top: this.f2_cta_highlight_top
            });

            f2_cta_icon.css({
                background: 'url(' + f2_this.cta_icon + ') no-repeat',
                width: this.f2_cta_icon_width,
                height: this.f2_cta_icon_height,
                right: this.f2_cta_icon_right,
                top: this.f2_cta_icon_top
            });

            f2_cta_icon_animate.css({
                background: 'url(' + f2_this.cta_icon + ') no-repeat',
                width: this.f2_cta_icon_width,
                height: this.f2_cta_icon_height,
                right: this.f2_cta_icon_right,
                top: this.f2_cta_icon_top
            });

            f3_cta_wrapper.css({
                opacity: this.f3_cta_wrapper_opacity,
                background: this.f3_cta_wrapper_bgcolor,
                width: this.f3_cta_wrapper_width,
                height: this.f3_cta_wrapper_height,
                left: this.f3_cta_wrapper_left,
                top: this.f3_cta_wrapper_top
            });

            f3_cta_text.css({
                color: this.f3_cta_text_color,
                fontSize: this.f3_cta_text_size,
                'line-height': this.f3_cta_line_height,
                'text-indent': this.f3_cta_text_indent
            })
            f3_cta_text.html(this.f3_cta_text);

            f3_cta_highlight.css({
                background: 'url(' + this.f3_cta_highlight + ') no-repeat',
                opacity: this.f3_cta_highlight_opacity,
                width: this.f3_cta_highlight_width,
                height: this.f3_cta_highlight_height,
                left: this.f3_cta_highlight_left,
                top: this.f3_cta_highlight_top
            });

            f3_cta_icon.css({
                background: 'url(' + f3_this.cta_icon + ') no-repeat',
                width: this.f3_cta_icon_width,
                height: this.f3_cta_icon_height,
                right: this.f3_cta_icon_right,
                top: this.f3_cta_icon_top
            });

            f3_cta_icon_animate.css({
                background: 'url(' + f3_this.cta_icon + ') no-repeat',
                width: this.f3_cta_icon_width,
                height: this.f3_cta_icon_height,
                right: this.f3_cta_icon_right,
                top: this.f3_cta_icon_top
            });

            //animate
            var f1_cta_icon_animate_url = this.f1_cta_icon_animate,
                f2_cta_icon_animate_url = this.f2_cta_icon_animate,
                f3_cta_icon_animate_url = this.f3_cta_icon_animate;
                this.timeline.to(f1_cta_icon_animate, 0.2, {background: 'none'});
                this.timeline.to(f2_cta_icon_animate, 0.2, {background: 'none'});
                this.timeline.to(f3_cta_icon_animate, 0.2, {background: 'none'});

                this.timeline.to(f1_image, 0.8, {alpha: this.f1_image1_animate_opacity, scaleX:this.f1_image1_animate_scaleX, scaleY:this.f1_image1_animate_scaleY, ease: Power2.easeOut}, '+=0.2');
                this.timeline.to(f1_title, 0.5, {alpha:1, left: 89, ease: Power2.easeOut});
                this.timeline.to([f1_image,f1_title], 0.5, {alpha:0},"+=2");

                this.timeline.to(packshot, 1.5, {left: 0, top: 0, width: '100%', height: '100%', ease: Power2.easeOut});
                this.timeline.to(f2_title, 0.5, {alpha:1});
                this.timeline.to(f2_subtitle, 0.5, {alpha:1, top: parseInt(this.f2_subtitle_top), ease: Power2.easeOut});
                this.timeline.to(headlights, 0.5, {alpha:1});
                this.timeline.to(headlights, 0.5, {alpha:0});
                this.timeline.to(f2_title, 0.5, {alpha:0},"+=0.5");
                this.timeline.to(f2_subtitle, 0.5, {alpha:0},"-=0.5");
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











































































