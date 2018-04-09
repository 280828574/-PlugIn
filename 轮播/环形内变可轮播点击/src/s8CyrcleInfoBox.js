(function ($) {
    $.fn.s8CircleInfoBox = function (options) {
        // set settings
        var settings = $.extend({
            autoSlide: true,             // true or fasle
            slideSpeed:3000,                // speed of auto slide
            notResponsive:false,             // not responsive
            action: "mouseover",             // mouseover, Click for each bubble
            responsive: true,            // true :rechange cyrcle shape with window resize or false:set with fix container
            breakpoint: 760,             // its a breakpoint size for breaking to simple list style calculate by PX
            hoverStyle:"circleSelect",     // Get Your Css class for hover Style
            spreadStyle: "all"            // the style of spreading the bubbles Top,lef,right,bottom
        }, options);
        // define variables
        var $container = $(this).find(".circleWrapper"),
            $fields = $container.find(".circleFeature"),
            fieldsLength = $fields.length,
            spreadStyle = settings.spreadStyle.toLowerCase(),
            underBreakPoint = true,  // by change of the size it will change
            $infoBox = $container.find(".circleBox");
        var current = 0,        // Which circle is currently inflated
            intervalRef = null;        // reference to the setInterval
        var radius;

        var pauseSlideShow = false;

        if(settings.notResponsive){
            $infoBox.addClass("noResponsive");
            $fields.addClass("noResponsive");
            $container.addClass("noResponsive");
        }
        // make the cyrcle
        var makeCircle = function () {
            var angle = 0;
            switch (spreadStyle){
                case "left":
                    angle=90;
                    break;
                case "top":
                    angle=180;
                    break;
                case "right":
                    angle= 270;
                    break;
                default:
                    angle=0;
                    break;
            }
            var step = (spreadStyle === "all")? 360/ fieldsLength : 180 / (fieldsLength-1);
            $container.css("height", $container.width());
            radius = $container.width() / 2;
            $fields.css("lineHeight", $fields.height() + "px");
            // spin around container by transform from center

            $fields.each(function () {
                var $this = $(this);
                $this.css({
                    'transform': 'rotate(' + angle + 'deg) translate(' + radius + 'px) rotate(' + (-1*angle) + 'deg)'
                })

                angle+=step;
            })
        };
        var boxId;
        // Pass in a jquery selection for which circle to inflate
        var inflate = function ($which) {
            $fields.removeClass(settings.hoverStyle);
            boxId = $which.attr("data-cyrcleBox");
            $which.addClass(settings.hoverStyle);
            $infoBox.filter("#" + boxId).fadeIn();
        };

        var deflate = function ($which) {
            $infoBox.fadeOut();
            $which.removeClass(settings.hoverStyle);
        };

        if (settings.autoSlide) {
            var intervalAnimation = function () {
                    return setInterval(function () {
                        if (!pauseSlideShow) {
                            deflate($($fields[current]));
                            current = ( current + 1 ) % fieldsLength;
                            inflate($($fields[current]));
                        }
                    }, settings.slideSpeed);
                },
                firstTimeKickOff = function () {
                    intervalRef = intervalAnimation();
                };
            // On hover over the container (not individual circles) then pause animation
            $container.hover(function (e) {
                pauseSlideShow = true;
            }, function () {
                if (!underBreakPoint)
                    pauseSlideShow = false;
            });
        }
        // On hover over particular circle
        $fields.on(settings.action,function () {
            if (current != $(this).parent().index() && !underBreakPoint) {
                $infoBox.fadeOut();
                current = $(this).parent().index();
            inflate($(this));
            }
        });


        // If they shrink the browser, pause the animation; else turn it back on.
        $(window).resize(function () {
            if(settings.responsive && !underBreakPoint){
                makeCircle();
            }

            if ($(window).width() < settings.breakpoint) {
                underBreakPoint = true;
                pauseSlideShow = true;
                $fields.removeClass(settings.hoverStyle);
                $container.css("height", "auto");
            }
            else {
                underBreakPoint = false;
                pauseSlideShow = false;
                if (intervalRef === null && settings.autoSlide) {
                    firstTimeKickOff();
                }
            }
        });
        if ($(window).width() >= settings.breakpoint ) {
            makeCircle();
            underBreakPoint = false;
            if(settings.autoSlide)
                firstTimeKickOff();
        }
    }
})(jQuery);
