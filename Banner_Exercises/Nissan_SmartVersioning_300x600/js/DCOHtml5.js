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
            this.f1_title_left                 = this.f1_title_css_array[0];
            this.f1_title_top                  = this.f1_title_css_array[1];
            this.f1_title_color                 = this.f1_title_css_array[2];
            this.f1_title_size                  = this.f1_title_css_array[3];
            this.f1_title_opacity                  = this.f1_title_css_array[4];

            this.f1_title_animation_css                   = adkit.getSVData("f1_title_animation_style");
            this.f1_title_animation_css_array             = this.f1_title_animation_css.split(',');
            this.f1_title_animation_left                 = this.f1_title_animation_css_array[0];
            this.f1_title_animation_top                  = this.f1_title_animation_css_array[1];
            this.f1_title_animation_color                 = this.f1_title_animation_css_array[2];
            this.f1_title_animation_size                  = this.f1_title_animation_css_array[3];
            this.f1_title_animation_opacity                  = this.f1_title_animation_css_array[4];

            this.f1_title_none_css                   = adkit.getSVData("f1_title_none_style");
            this.f1_title_none_css_array             = this.f1_title_none_css.split(',');
            this.f1_title_none_opacity                 = this.f1_title_none_css_array[0];

            this.f2_title_css                   = adkit.getSVData("f2_title_style");
            this.f2_title_css_array             = this.f2_title_css.split(',');
            this.f2_title_left                 = this.f2_title_css_array[0];
            this.f2_title_top                  = this.f2_title_css_array[1];
            this.f2_title_color                 = this.f2_title_css_array[2];
            this.f2_title_size                  = this.f2_title_css_array[3];
            this.f2_title_opacity                  = this.f2_title_css_array[4];

            this.f2_title_animation_css                   = adkit.getSVData("f2_title_animation_style");
            this.f2_title_animation_css_array             = this.f2_title_animation_css.split(',');
            this.f2_title_animation_left                 = this.f2_title_animation_css_array[0];
            this.f2_title_animation_top                  = this.f2_title_animation_css_array[1];
            this.f2_title_animation_color                 = this.f2_title_animation_css_array[2];
            this.f2_title_animation_size                  = this.f2_title_animation_css_array[3];
            this.f2_title_animation_opacity                  = this.f2_title_animation_css_array[4];

            this.f2_title_none_css                   = adkit.getSVData("f2_title_none_style");
            this.f2_title_none_css_array             = this.f2_title_none_css.split(',');
            this.f2_title_none_opacity                 = this.f2_title_none_css_array[0];

            this.f2_subtitle_css                = adkit.getSVData("f2_subtitle_style");
            this.f2_subtitle_css_array          = this.f2_subtitle_css.split(',');
            this.f2_subtitle_color              = this.f2_subtitle_css_array[0];
            this.f2_subtitle_size               = this.f2_subtitle_css_array[1];
            this.f2_subtitle_left                = this.f2_subtitle_css_array[2];
            this.f2_subtitle_top                = this.f2_subtitle_css_array[3];
            this.f2_subtitle_span_color         = this.f2_subtitle_css_array[4];
            this.f2_subtitle_opacity         = this.f2_subtitle_css_array[5];

            this.f2_subtitle_animation_css                = adkit.getSVData("f2_subtitle_animation_style");
            this.f2_subtitle_animation_css_array          = this.f2_subtitle_animation_css.split(',');
            this.f2_subtitle_animation_color              = this.f2_subtitle_animation_css_array[0];
            this.f2_subtitle_animation_size               = this.f2_subtitle_animation_css_array[1];
            this.f2_subtitle_animation_left                = this.f2_subtitle_animation_css_array[2];
            this.f2_subtitle_animation_top                = this.f2_subtitle_animation_css_array[3];
            this.f2_subtitle_animation_span_color         = this.f2_subtitle_animation_css_array[4];
            this.f2_subtitle_animation_opacity         = this.f2_subtitle_animation_css_array[5];

            this.f2_subtitle_none_css                = adkit.getSVData("f2_subtitle_none_style");
            this.f2_subtitle_none_css_array          = this.f2_subtitle_none_css.split(',');
            this.f2_subtitle_none_opacity              = this.f2_subtitle_none_css_array[0];

            this.f3_title_css                   = adkit.getSVData("f3_title_style");
            this.f3_title_css_array             = this.f3_title_css.split(',');
            this.f3_title_left                 = this.f3_title_css_array[0];
            this.f3_title_top                  = this.f3_title_css_array[1];
            this.f3_title_color                 = this.f3_title_css_array[2];
            this.f3_title_size                  = this.f3_title_css_array[3];
            this.f3_title_opacity                  = this.f3_title_css_array[4];

            this.f3_title_animation_css                   = adkit.getSVData("f3_title_animation_style");
            this.f3_title_animation_css_array             = this.f3_title_animation_css.split(',');
            this.f3_title_animation_left                 = this.f3_title_animation_css_array[0];
            this.f3_title_animation_top                  = this.f3_title_animation_css_array[1];
            this.f3_title_animation_color                 = this.f3_title_animation_css_array[2];
            this.f3_title_animation_size                  = this.f3_title_animation_css_array[3];
            this.f3_title_animation_opacity                  = this.f3_title_animation_css_array[4];

            this.f3_subtitle_css                = adkit.getSVData("f3_subtitle_style");
            this.f3_subtitle_css_array          = this.f3_subtitle_css.split(',');
            this.f3_subtitle_color              = this.f3_subtitle_css_array[0];
            this.f3_subtitle_size               = this.f3_subtitle_css_array[1];
            this.f3_subtitle_left                = this.f3_subtitle_css_array[2];
            this.f3_subtitle_top                = this.f3_subtitle_css_array[3];
            this.f3_subtitle_span_color         = this.f3_subtitle_css_array[4];
            this.f3_subtitle_opacity                = this.f3_subtitle_css_array[5];

            this.f3_subtitle_animation_css                = adkit.getSVData("f3_subtitle_animation_style");
            this.f3_subtitle_animation_css_array          = this.f3_subtitle_animation_css.split(',');
            this.f3_subtitle_animation_color              = this.f3_subtitle_animation_css_array[0];
            this.f3_subtitle_animation_size               = this.f3_subtitle_animation_css_array[1];
            this.f3_subtitle_animation_left                = this.f3_subtitle_animation_css_array[2];
            this.f3_subtitle_animation_top                = this.f3_subtitle_animation_css_array[3];
            this.f3_subtitle_animation_span_color         = this.f3_subtitle_animation_css_array[4];
            this.f3_subtitle_animation_opacity                = this.f3_subtitle_animation_css_array[5];

            this.cta_wrapper_css                = adkit.getSVData("cta_wrapper_style");
            this.cta_wrapper_css_array          = this.cta_wrapper_css.split(',');
            this.cta_wrapper_width              = this.cta_wrapper_css_array[0];
            this.cta_wrapper_height             = this.cta_wrapper_css_array[1];
            this.cta_wrapper_left               = this.cta_wrapper_css_array[2];
            this.cta_wrapper_top                = this.cta_wrapper_css_array[3];
            this.cta_wrapper_bgcolor                = this.cta_wrapper_css_array[4];
            this.cta_wrapper_opacity            = this.cta_wrapper_css_array[5];

            this.cta_wrapper_animation_css                = adkit.getSVData("cta_wrapper_animation_style");
            this.cta_wrapper_animation_css_array          = this.cta_wrapper_animation_css.split(',');
            this.cta_wrapper_animation_width              = this.cta_wrapper_animation_css_array[0];
            this.cta_wrapper_animation_height             = this.cta_wrapper_animation_css_array[1];
            this.cta_wrapper_animation_left               = this.cta_wrapper_animation_css_array[2];
            this.cta_wrapper_animation_top                = this.cta_wrapper_animation_css_array[3];
            this.cta_wrapper_animation_opacity            = this.cta_wrapper_animation_css_array[4];


            this.cta_wrapper_none_css           = adkit.getSVData("cta_wrapper_none_style");
            this.cta_wrapper_none_css_array     = this.cta_wrapper_none_css.split(',');
            this.cta_wrapper_none_opacity       = this.cta_wrapper_none_css_array[0];

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
            this.cta_highlight_top             = this.cta_highlight_css_array[3];

            this.cta_highlight_animation_css              = adkit.getSVData("cta_highlight_animation_style");
            this.cta_highlight_animation_css_array        = this.cta_highlight_animation_css.split(',');
            this.cta_highlight_animation_width            = this.cta_highlight_animation_css_array[0];
            this.cta_highlight_animation_height           = this.cta_highlight_animation_css_array[1];
            this.cta_highlight_animation_left             = this.cta_highlight_animation_css_array[2];
            this.cta_highlight_animation_top             = this.cta_highlight_animation_css_array[3];

            this.cta_icon_css                   = adkit.getSVData("cta_icon_style");
            this.cta_icon_css_array             = this.cta_icon_css.split(',');
            this.cta_icon_width                 = this.cta_icon_css_array[0];
            this.cta_icon_height                = this.cta_icon_css_array[1];
            this.cta_icon_right                 = this.cta_icon_css_array[2];
            this.cta_icon_top                   = this.cta_icon_css_array[3];

            this.cta_wrapper2_css               = adkit.getSVData("cta_wrapper2_style");
            this.cta_wrapper2_css_array         = this.cta_wrapper2_css.split(',');
            this.cta_wrapper2_width             = this.cta_wrapper2_css_array[0];
            this.cta_wrapper2_height            = this.cta_wrapper2_css_array[1];
            this.cta_wrapper2_left              = this.cta_wrapper2_css_array[2];
            this.cta_wrapper2_top               = this.cta_wrapper2_css_array[3];
            this.cta_wrapper2_bgcolor                = this.cta_wrapper2_css_array[4];
            this.cta_wrapper2_opacity            = this.cta_wrapper2_css_array[5];

            this.cta_wrapper2_animation_css               = adkit.getSVData("cta_wrapper2_animation_style");
            this.cta_wrapper2_animation_css_array         = this.cta_wrapper2_animation_css.split(',');
            this.cta_wrapper2_animation_width             = this.cta_wrapper2_animation_css_array[0];
            this.cta_wrapper2_animation_height            = this.cta_wrapper2_animation_css_array[1];
            this.cta_wrapper2_animation_left              = this.cta_wrapper2_animation_css_array[2];
            this.cta_wrapper2_animation_top               = this.cta_wrapper2_animation_css_array[3];
            this.cta_wrapper2_animation_opacity           = this.cta_wrapper2_animation_css_array[4];

            this.cta_wrapper2_none_css           = adkit.getSVData("cta_wrapper2_none_style");
            this.cta_wrapper2_none_css_array     = this.cta_wrapper2_none_css.split(',');
            this.cta_wrapper2_none_opacity       = this.cta_wrapper2_none_css_array[0];

            this.cta_text2_css                   = adkit.getSVData("cta_text2_style");
            this.cta_text2_css_array             = this.cta_text2_css.split(',');
            this.cta_text2_size                  = this.cta_text2_css_array[0];
            this.cta_line2_height                = this.cta_text2_css_array[1];
            this.cta_text2_indent                = this.cta_text2_css_array[2];

            this.cta_highlight2_css              = adkit.getSVData("cta_highlight2_style");
            this.cta_highlight2_css_array        = this.cta_highlight2_css.split(',');
            this.cta_highlight2_width            = this.cta_highlight2_css_array[0];
            this.cta_highlight2_height           = this.cta_highlight2_css_array[1];
            this.cta_highlight2_left             = this.cta_highlight2_css_array[2];
            this.cta_highlight2_top             = this.cta_highlight2_css_array[3];

            this.cta_highlight2_animation_css              = adkit.getSVData("cta_highlight2_animation_style");
            this.cta_highlight2_animation_css_array        = this.cta_highlight2_animation_css.split(',');
            this.cta_highlight2_animation_width            = this.cta_highlight2_animation_css_array[0];
            this.cta_highlight2_animation_height           = this.cta_highlight2_animation_css_array[1];
            this.cta_highlight2_animation_left             = this.cta_highlight2_animation_css_array[2];
            this.cta_highlight2_animation_top             = this.cta_highlight2_animation_css_array[3];

            this.cta_icon2_css                   = adkit.getSVData("cta_icon2_style");
            this.cta_icon2_css_array             = this.cta_icon2_css.split(',');
            this.cta_icon2_width                 = this.cta_icon2_css_array[0];
            this.cta_icon2_height                = this.cta_icon2_css_array[1];
            this.cta_icon2_right                 = this.cta_icon2_css_array[2];
            this.cta_icon2_top                   = this.cta_icon2_css_array[3];

            this.cta_wrapper3_css                = adkit.getSVData("cta_wrapper3_style");
            this.cta_wrapper3_css_array          = this.cta_wrapper3_css.split(',');
            this.cta_wrapper3_width              = this.cta_wrapper3_css_array[0];
            this.cta_wrapper3_height             = this.cta_wrapper3_css_array[1];
            this.cta_wrapper3_left               = this.cta_wrapper3_css_array[2];
            this.cta_wrapper3_top                = this.cta_wrapper3_css_array[3];
            this.cta_wrapper3_bgcolor                = this.cta_wrapper3_css_array[4];
            this.cta_wrapper3_opacity            = this.cta_wrapper3_css_array[5];

            this.cta_wrapper3_animation_css                = adkit.getSVData("cta_wrapper3_animation_style");
            this.cta_wrapper3_animation_css_array          = this.cta_wrapper3_animation_css.split(',');
            this.cta_wrapper3_animation_width              = this.cta_wrapper3_animation_css_array[0];
            this.cta_wrapper3_animation_height             = this.cta_wrapper3_animation_css_array[1];
            this.cta_wrapper3_animation_left               = this.cta_wrapper3_animation_css_array[2];
            this.cta_wrapper3_animation_top                = this.cta_wrapper3_animation_css_array[3];
            this.cta_wrapper3_animation_opacity            = this.cta_wrapper3_animation_css_array[4];

            this.cta_text3_css                   = adkit.getSVData("cta_text3_style");
            this.cta_text3_css_array             = this.cta_text3_css.split(',');
            this.cta_text3_size                  = this.cta_text3_css_array[0];
            this.cta_line3_height                = this.cta_text3_css_array[1];
            this.cta_text3_indent                = this.cta_text3_css_array[2];

            this.cta_highlight3_css              = adkit.getSVData("cta_highlight3_style");
            this.cta_highlight3_css_array        = this.cta_highlight3_css.split(',');
            this.cta_highlight3_width            = this.cta_highlight3_css_array[0];
            this.cta_highlight3_height           = this.cta_highlight3_css_array[1];
            this.cta_highlight3_left             = this.cta_highlight3_css_array[2];
            this.cta_highlight3_top             = this.cta_highlight3_css_array[3];

            this.cta_highlight3_animation_css              = adkit.getSVData("cta_highlight3_animation_style");
            this.cta_highlight3_animation_css_array        = this.cta_highlight3_animation_css.split(',');
            this.cta_highlight3_animation_width            = this.cta_highlight3_animation_css_array[0];
            this.cta_highlight3_animation_height           = this.cta_highlight3_animation_css_array[1];
            this.cta_highlight3_animation_left             = this.cta_highlight3_animation_css_array[2];
            this.cta_highlight3_animation_top             = this.cta_highlight3_animation_css_array[3];

            this.cta_icon3_css                   = adkit.getSVData("cta_icon3_style");
            this.cta_icon3_css_array             = this.cta_icon3_css.split(',');
            this.cta_icon3_width                 = this.cta_icon3_css_array[0];
            this.cta_icon3_height                = this.cta_icon3_css_array[1];
            this.cta_icon3_right                 = this.cta_icon3_css_array[2];
            this.cta_icon3_top                   = this.cta_icon3_css_array[3];

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

            this.packshot1_css                  = adkit.getSVData("packshot1_style");
            this.packshot1_css_array            = this.packshot1_css.split(',');
            this.packshot1_left              = this.packshot1_css_array[0];
            this.packshot1_top              = this.packshot1_css_array[1];
            this.packshot1_opacity              = this.packshot1_css_array[2];
            this.packshot1_scaleX              = this.packshot1_css_array[3];
            this.packshot1_scaleY              = this.packshot1_css_array[4];

            this.packshot1_animation_css        = adkit.getSVData("packshot1_animation_style");
            this.packshot1_animation_css_array  = this.packshot1_animation_css.split(',');
            this.packshot1_animation_left              = this.packshot1_animation_css_array[0];
            this.packshot1_animation_top              = this.packshot1_animation_css_array[1];
            this.packshot1_animation_opacity    = this.packshot1_animation_css_array[2];
            this.packshot1_animation_scaleX              = this.packshot1_animation_css_array[3];
            this.packshot1_animation_scaleY              = this.packshot1_animation_css_array[4];

            this.packshot2_css                  = adkit.getSVData("packshot2_style");
            this.packshot2_css_array            = this.packshot2_css.split(',');
            this.packshot2_left              = this.packshot2_css_array[0];
            this.packshot2_top              = this.packshot2_css_array[1];
            this.packshot2_opacity              = this.packshot2_css_array[2];
            this.packshot2_scaleX              = this.packshot2_css_array[3];
            this.packshot2_scaleY              = this.packshot2_css_array[4];

            this.packshot2_animation_css        = adkit.getSVData("packshot2_animation_style");
            this.packshot2_animation_css_array  = this.packshot2_animation_css.split(',');
            this.packshot2_animation_left              = this.packshot2_animation_css_array[0];
            this.packshot2_animation_top              = this.packshot2_animation_css_array[1];
            this.packshot2_animation_opacity    = this.packshot2_animation_css_array[2];
            this.packshot2_animation_scaleX              = this.packshot2_animation_css_array[3];
            this.packshot2_animation_scaleY              = this.packshot2_animation_css_array[4];

            this.packshot3_css                  = adkit.getSVData("packshot3_style");
            this.packshot3_css_array            = this.packshot3_css.split(',');
            this.packshot3_left              = this.packshot3_css_array[0];
            this.packshot3_top              = this.packshot3_css_array[1];
            this.packshot3_opacity              = this.packshot3_css_array[2];
            this.packshot3_scaleX              = this.packshot3_css_array[3];
            this.packshot3_scaleY              = this.packshot3_css_array[4];

            this.packshot3_animation_css        = adkit.getSVData("packshot3_animation_style");
            this.packshot3_animation_css_array  = this.packshot3_animation_css.split(',');
            this.packshot3_animation_left              = this.packshot3_animation_css_array[0];
            this.packshot3_animation_top              = this.packshot3_animation_css_array[1];
            this.packshot3_animation_opacity    = this.packshot3_animation_css_array[2];
            this.packshot3_animation_scaleX              = this.packshot3_animation_css_array[3];
            this.packshot3_animation_scaleY              = this.packshot3_animation_css_array[4];

            this.headlights_css        = adkit.getSVData("headlights_style");
            this.headlights_css_array  = this.headlights_css.split(',');
            this.headlights_opacity    = this.headlights_css_array[0];

            this.headlights_none_css        = adkit.getSVData("headlights_none_style");
            this.headlights_none_css_array  = this.headlights_none_css.split(',');
            this.headlights_none_opacity    = this.headlights_none_css_array[0];

            this.headlights2_css        = adkit.getSVData("headlights2_style");
            this.headlights2_css_array  = this.headlights2_css.split(',');
            this.headlights2_opacity    = this.headlights2_css_array[0];

            this.headlights2_none_css        = adkit.getSVData("headlights2_none_style");
            this.headlights2_none_css_array  = this.headlights2_none_css.split(',');
            this.headlights2_none_opacity    = this.headlights2_none_css_array[0];

            this.headlights3_css        = adkit.getSVData("headlights3_style");
            this.headlights3_css_array  = this.headlights3_css.split(',');
            this.headlights3_opacity    = this.headlights3_css_array[0];

            this.headlights3_none_css        = adkit.getSVData("headlights3_none_style");
            this.headlights3_none_css_array  = this.headlights3_none_css.split(',');
            this.headlights3_none_opacity    = this.headlights3_none_css_array[0];

            this.frame1_delay_css        = adkit.getSVData("frame1_delay");
            this.frame1_delay_css_array  = this.frame1_delay_css.split(',');
            this.frame1_delay_delay    = this.frame1_delay_css_array[0];

            this.frame2_delay_css        = adkit.getSVData("frame2_delay");
            this.frame2_delay_css_array  = this.frame2_delay_css.split(',');
            this.frame2_delay_delay    = this.frame2_delay_css_array[0];

            //Initializing all config value
            this.f1_title    = adkit.getSVData('f1_title');
            this.f2_title    = adkit.getSVData('f2_title');
            this.f2_subtitle = adkit.getSVData('f2_subtitle');
            this.f3_title    = adkit.getSVData('f3_title');
            this.f3_subtitle = adkit.getSVData('f3_subtitle');
            this.logo     = EB.getAssetUrl("", adkit.getSVData('logo'));
            this.background1 = EB.getAssetUrl("", adkit.getSVData('background1'));
            this.packshot1   = EB.getAssetUrl("", adkit.getSVData('packshot1'));
            this.headlights = EB.getAssetUrl("", adkit.getSVData('headlights'));
            this.cta_wrapper =adkit.getSVData('cta_wrapper');
            this.cta_icon    = EB.getAssetUrl("", adkit.getSVData('cta_icon'));
            this.cta_text    = adkit.getSVData('cta_text');
            this.cta_icon_animate = EB.getAssetUrl("", adkit.getSVData('cta_icon_animate'));
            this.cta_highlight = EB.getAssetUrl("", adkit.getSVData('cta_highlight'));
            this.Standalone    = EB.getAssetUrl("", adkit.getSVData('Standalone'));
            this.background2 = EB.getAssetUrl("", adkit.getSVData('background2'));
            this.background3 = EB.getAssetUrl("", adkit.getSVData('background3'));
            this.packshot2   = EB.getAssetUrl("", adkit.getSVData('packshot2'));
            this.packshot3   = EB.getAssetUrl("", adkit.getSVData('packshot3'));
            this.cta_wrapper2 =adkit.getSVData('cta_wrapper2');
            this.cta_icon2    = EB.getAssetUrl("", adkit.getSVData('cta_icon2'));
            this.cta_text2    = adkit.getSVData('cta_text2');
            this.cta_icon_animate2 = EB.getAssetUrl("", adkit.getSVData('cta_icon_animate2'));
            this.cta_highlight2 = EB.getAssetUrl("", adkit.getSVData('cta_highlight2'));
            this.cta_wrapper3 =adkit.getSVData('cta_wrapper3');
            this.cta_icon3    = EB.getAssetUrl("", adkit.getSVData('cta_icon3'));
            this.cta_text3    = adkit.getSVData('cta_text3');
            this.cta_icon_animate3 = EB.getAssetUrl("", adkit.getSVData('cta_icon_animate3'));
            this.cta_highlight3 = EB.getAssetUrl("", adkit.getSVData('cta_highlight3'));
            this.headlights2 = EB.getAssetUrl("", adkit.getSVData('headlights2'));
            this.headlights3 = EB.getAssetUrl("", adkit.getSVData('headlights3'));

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
                packshot1   = $('#packshot1'),
                packshot2   = $('#packshot2'),
                packshot3   = $('#packshot3'),
                headlights = $('#headlights'),
                headlights2 = $('#headlights2'),
                headlights3 = $('#headlights3'),
                cta_wrapper = $('#cta_wrapper'),
                cta_icon     = $('#cta_icon'),
                cta_text    = $('#cta_text'),
                cta_icon_animate  = $('#cta_icon_animate'),
                cta_highlight = $('#cta_highlight'),
                cta_wrapper2 = $('#cta_wrapper2'),
                cta_icon2     = $('#cta_icon2'),
                cta_text2    = $('#cta_text2'),
                cta_icon_animate2  = $('#cta_icon_animate2'),
                cta_highlight2 = $('#cta_highlight2'),
                cta_wrapper3 = $('#cta_wrapper3'),
                cta_icon3     = $('#cta_icon3'),
                cta_text3    = $('#cta_text3'),
                cta_icon_animate3  = $('#cta_icon_animate3'),
                cta_highlight3 = $('#cta_highlight3');

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

            packshot1.attr('src', this.packshot1).load(function() { packshot1.show();});
            packshot1.css({
                  left: this.packshot1_left,
                  top: this.packshot1_top,
                opacity: this.packshot1_opacity,
                '-ms-transform': 'scale(' + this.packshot1_scaleX + ',' + this.packshot1_scaleY + ')',
                  '-webkit-transform': 'scale(' + this.packshot1_scaleX  + ',' +  this.packshot1_scaleY + ')',
                  transform: 'scale(' + this.packshot1_scaleX  + ',' +  this.packshot1_scaleY + ')'
            });

            packshot2.attr('src', this.packshot2).load(function() { packshot2.show();});
            packshot2.css({
                left: this.packshot2_left,
                  top: this.packshot2_top,
                opacity: this.packshot2_opacity,
                '-ms-transform': 'scale(' + this.packshot2_scaleX + ',' + this.packshot2_scaleY + ')',
                  '-webkit-transform': 'scale(' + this.packshot2_scaleX + ',' + this.packshot2_scaleY + ')',
                  transform: 'scale(' + this.packshot2_scaleX + ',' + this.packshot2_scaleY + ')'
            });

            packshot3.attr('src', this.packshot3).load(function() { packshot3.show();});
            packshot3.css({
                  left: this.packshot3_left,
                  top: this.packshot3_top,
                  opacity: this.packshot3_opacity,
                  '-ms-transform': 'scale(' + this.packshot3_scaleX + ',' + this.packshot3_scaleY + ')',
                  '-webkit-transform': 'scale(' + this.packshot3_scaleX + ',' + this.packshot3_scaleY + ')',
                  transform: 'scale(' + this.packshot3_scaleX + ',' + this.packshot3_scaleY + ')'
            });

            headlights.css('background-image', 'url(' + this.headlights + ')');

            headlights2.css('background-image', 'url(' + this.headlights2 + ')');

            headlights3.css('background-image', 'url(' + this.headlights3 + ')');

            f1_title.css({
                  left: this.f1_title_left,
                  top: this.f1_title_top,
                  fontSize: this.f1_title_size,
                  color: this.f1_title_color,
                  opacity: this.f1_title_opacity
            });
            f1_title.html(this.f1_title);

            f2_title.css({
                  left: this.f2_title_left,
                  top: this.f2_title_top,
                fontSize: this.f2_title_size,
                color: this.f2_title_color,
                opacity: this.f2_title_opacity
            });
            f2_title.html(this.f2_title);

            f2_subtitle.css({
                fontSize: this.f2_subtitle_size,
                top: this.f2_subtitle_top,
                left: this.f2_subtitle_left,
                color: this.f2_subtitle_color,
                opacity: this.f2_subtitle_opacity
            });
            f2_subtitle.html(this.f2_subtitle);
            $(f2_subtitle).find('span').css('color', this.f2_subtitle_span_color);

            f3_title.css({
                  left: this.f3_title_left,
                  top: this.f3_title_top,
                fontSize: this.f3_title_size,
                color: this.f3_title_color,
                opacity: this.f3_title_opacity
            });
            f3_title.html(this.f3_title);

            f3_subtitle.css({
                fontSize: this.f3_subtitle_size,
                top: this.f3_subtitle_top,
                left: this.f3_subtitle_left,
                color: this.f3_subtitle_color,
                opacity: this.f3_subtitle_opacity
            });
            f3_subtitle.html(this.f3_subtitle);
            $(f3_subtitle).find('span').css('color', this.f3_subtitle_span_color);

            cta_wrapper.css({
                width: this.cta_wrapper_width,
                height: this.cta_wrapper_height,
                left: this.cta_wrapper_left,
                top: this.cta_wrapper_top,
                'background-color': this.cta_wrapper_bgcolor,
                opacity: this.cta_wrapper_opacity
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
                left: this.cta_highlight_left,
                  top: this.cta_highlight_top
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
                width: this.cta_wrapper2_width,
                height: this.cta_wrapper2_height,
                left: this.cta_wrapper2_left,
                top: this.cta_wrapper2_top,
                'background-color': this.cta_wrapper2_bgcolor,
                opacity: this.cta_wrapper2_opacity
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
                left: this.cta_highlight2_left,
                  top: this.cta_highlight2_top
            });

            cta_icon2.css({
                background: 'url(' + this.cta_icon2 + ') no-repeat',
                width: this.cta_icon2_width,
                height: this.cta_icon2_height,
                right: this.cta_icon2_right,
                top: this.cta_icon2_top
            });

            cta_icon_animate2.css({
                background: 'url(' + this.cta_icon2 + ') no-repeat',
                width: this.cta_icon2_width,
                height: this.cta_icon2_height,
                right: this.cta_icon2_right,
                top: this.cta_icon2_top
            });

            cta_wrapper3.css({
                width: this.cta_wrapper3_width,
                height: this.cta_wrapper3_height,
                left: this.cta_wrapper3_left,
                top: this.cta_wrapper3_top,
                'background-color': this.cta_wrapper3_bgcolor,
                opacity: this.cta_wrapper3_opacity
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
                left: this.cta_highlight3_left,
                  top: this.cta_highlight3_top
            });

            cta_icon3.css({
                background: 'url(' + this.cta_icon3 + ') no-repeat',
                width: this.cta_icon3_width,
                height: this.cta_icon3_height,
                right: this.cta_icon3_right,
                top: this.cta_icon3_top
            });

            cta_icon_animate3.css({
                background: 'url(' + this.cta_icon3 + ') no-repeat',
                width: this.cta_icon3_width,
                height: this.cta_icon3_height,
                right: this.cta_icon3_right,
                top: this.cta_icon3_top
            });

            //animate
            var cta_icon_animate_url = this.cta_icon_animate;
                this.timeline.to(cta_icon_animate, 0.2, {background: 'none'});

                this.timeline.to(packshot1, 1.5, {opacity: this.packshot1_animation_opacity, left: this.packshot1_animation_left, top: this.packshot1_animation_top, scaleX: this.packshot1_animation_scaleX, scaleY: this.packshot1_animation_scaleY});
                this.timeline.to(f1_title, 0.5, {opacity: this.f1_title_animation_opacity, left: this.f1_title_animation_left, top: this.f1_title_animation_top, ease: Power2.easeOut});
                this.timeline.to(cta_wrapper, 0.5, {opacity: this.cta_wrapper_animation_opacity, left: this.cta_wrapper_animation_left, top: this.cta_wrapper_animation_top});
                this.timeline.to(headlights, 0.5, {opacity:this.headlights_opacity});
                this.timeline.to(headlights, 0.5, {opacity:this.headlights_none_opacity});
                this.timeline.to(headlights, 0.5, {opacity:this.headlights_opacity});
                this.timeline.to(cta_highlight, 1, {left:this.cta_highlight_animation_left, top:this.cta_highlight_animation_top});
                this.timeline.to(f1_title, 0.5, {opacity: this.f1_title_none_opacity, delay: this.frame1_delay_delay});
                this.timeline.to(cta_wrapper, 0.5, {opacity: this.cta_wrapper_none_opacity}, "-=0.5");

                this.timeline.to(background2, 0.5, {opacity: this.background2_animation_opacity}, "-=0.5");
                this.timeline.to(packshot2, 1.5, {opacity: this.packshot2_animation_opacity, left: this.packshot2_animation_left, top: this.packshot2_animation_top, scaleX: this.packshot2_animation_scaleX, scaleY: this.packshot2_animation_scaleY});
                this.timeline.to(f2_title, 0.5, {opacity: this.f2_title_animation_opacity, left: this.f2_title_animation_left, top: this.f2_title_animation_top, ease: Power2.easeOut});
                this.timeline.to(f2_subtitle, 0.5, {opacity: this.f2_subtitle_animation_opacity, top: parseInt(this.f2_subtitle_animation_top), left: this.f2_subtitle_animation_left, ease: Power2.easeOut});
                this.timeline.to(cta_wrapper2, 0.5, {opacity: this.cta_wrapper2_animation_opacity, left: this.cta_wrapper2_animation_left, top: this.cta_wrapper2_animation_top});
                this.timeline.to(headlights2, 0.5, {opacity:this.headlights2_opacity});
                this.timeline.to(headlights2, 0.5, {opacity:this.headlights2_none_opacity});
                this.timeline.to(headlights2, 0.5, {opacity:this.headlights2_opacity});
                this.timeline.to(cta_highlight2, 1, {left:this.cta_highlight2_animation_left, top:this.cta_highlight2_animation_top});
                this.timeline.to(f2_title, 0.5, {opacity: this.f2_title_none_opacity, delay: this.frame2_delay_delay});
                this.timeline.to(f2_subtitle, 0.5, {opacity: this.f2_subtitle_none_opacity},"-=0.5");
                this.timeline.to(cta_wrapper2, 0.5, {opacity: this.cta_wrapper2_none_opacity}, "-=0.5");

                this.timeline.to(background3, 0.5, {opacity: this.background3_animation_opacity}, "-=0.5");
                this.timeline.to(packshot3, 1.5, {opacity: this.packshot3_animation_opacity, left: this.packshot3_animation_left, top: this.packshot3_animation_top, scaleX: this.packshot3_animation_scaleX, scaleY: this.packshot3_animation_scaleY});
                this.timeline.to(f3_title, 0.5, {opacity: this.f3_title_animation_opacity, left: this.f3_title_animation_left, top: this.f3_title_animation_top, ease: Power2.easeOut});
                this.timeline.to(f3_subtitle, 0.5, {opacity: this.f3_subtitle_animation_opacity, top: parseInt(this.f3_subtitle_animation_top), left: this.f3_subtitle_animation_left, ease: Power2.easeOut});
                this.timeline.to(cta_wrapper3, 0.5, {opacity: this.cta_wrapper3_animation_opacity, left: this.cta_wrapper3_animation_left, top: this.cta_wrapper3_animation_top});
                this.timeline.to(headlights3, 0.5, {opacity:this.headlights3_opacity});
                this.timeline.to(headlights3, 0.5, {opacity:this.headlights3_none_opacity});
                this.timeline.to(headlights3, 0.5, {opacity:this.headlights3_opacity});
                this.timeline.to(cta_highlight3, 1, {left:this.cta_highlight3_animation_left, top:this.cta_highlight3_animation_top});
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











































































