

$(function() {

    "use strict";

    /*======= SLICK SLIDER ========*/


    if ($('.header-slider').length) {

        $('.header-slider').on('init', function(event, slick) {
            $(this).css('height', 'auto');
        });

        $('.header-slider').slick({
            infinite: true,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            dots: true
        });
    }

    if ($('.testimonial-slider').length) {

        $('.testimonial-slider').on('init', function(event, slick) {
            $(this).css('height', 'auto');
        });

        $('.testimonial-slider').slick({
            cssEase: 'linear',
            autoplay: true,
            dots: true
        });
    }


    /*======= FAN PAGE SLIDER ========*/

    if ($('.slider').length) {
        $(".slider").flexslider({
            selector: ".tabs > .tab",
            controlNav: true,
            directionNav: true,
            start: function() {
                $('.slider .tabs').css('height', 'auto');
            }
        });
    }


    /*======= HIDE LOADER ON CLICK ========*/

    // helpful incase the user is bored of loading 
    // and want to see actual content

    $('#page-loader').on('click', function() {
        $(this).fadeOut();
        $("body").removeClass("preload");
    });
    // automatically hide loading if it takes too much time (eg: JS Error)

    setTimeout(function() {
        $('#page-loader').fadeOut();
        $("body").removeClass("preload");
    }, 10000);

    /*======= MENU SHOW / HIDE ANIMATION ========*/

    $('.toggle-menu').addClass('menu-open');
    $('.toggle-menu > li').addClass('animated');

    $('.menu-trigger a').on('click', function(e) {
        e.preventDefault();
        var container = $('.toggle-menu');
        var elements = container.children('li');
        elements.each(function() {
            var index = $(this).index();
            var reversedIndex = (elements.length - elements.index(this)) + 1;
            var delay = index * 0.08 / 2;
            var reverseDelay = reversedIndex * 0.08 / 2;

            if (container.hasClass('menu-open')) {
                $(this)
                    .css("-webkit-transition-delay", delay + 's')
                    .css("-o-transition-delay", delay + 's')
                    .css("transition-delay", delay + 's')
                    .removeClass('animated');
            } else {
                $(this)
                    .css("-webkit-transition-delay", reverseDelay + 's')
                    .css("-o-transition-delay", reverseDelay + 's')
                    .css("transition-delay", reverseDelay + 's')
                    .addClass('animated');
            }
        });
        container.toggleClass('menu-open');
    });




    /* ================================================
       Parallax
       ================================================ */

    var query = Modernizr.mq('(min-width: 900px)');
    if (query) {
        // the browser window is larger than 900px
        if ($('.has-parallax').length && jQuery().parallax) {
            $('.has-parallax').parallax({
                speed: 0.30
            });
        }
    }



    if ($('.particle').length) {
        var rellax = new Rellax('.particle', { center: true });
    }


    /* ================================================
       Album Apple TV Parallax Hover Effect
       ================================================ */
    if ($('.atvImg').length && $.isFunction(atvImg)) {
        atvImg();
    }

    /* ================================================
       Fixed Audio Player
       ================================================ */
    if ($('.audio-player').length) {

        var myPlaylist = new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_1",
            cssSelectorAncestor: "#jp_container_1"
        }, [{
            title: "Cro Magnon Man",
            artist: "Mushroom Records",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
        }, {
            title: "Your Face",
            artist: "Ministry",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
        }, {
            title: "Cyber Sonnet",
            artist: "You Am I",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
        }, {
            title: "Tempered Song",
            artist: "Shelter",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
        }, {
            title: "Hidden",
            artist: "Bad Religion",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        }, {
            title: "Lentement",
            artist: "Apollo 440",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
        }, {
            title: "Lismore",
            artist: "Bloodhound Gang",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
        }, {
            title: "The Separation",
            artist: "Friendly Fires ",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
        }, {
            title: "Beside Me",
            artist: "Friendly Fires ",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
        }, {
            title: "Bubble",
            artist: "Skunkhour",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
        }, {
            title: "Stirring of a fool",
            artist: "The Meanies",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
        }, {
            title: "Partir",
            artist: "The Living End",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
        }, {
            title: "Thin Ice",
            artist: "Screaming Trees",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
        }], {
            swfPath: "js/plugins",
            supplied: "oga, mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            playlistOptions: {
                autoPlay: false // Change to true to start playing songs on page load
            }
        }); // end jplayer initiate

        /* ======== Other Audio Player Functions ======== */

        $("#jquery_jplayer_1").on(
            $.jPlayer.event.ready + ' ' + $.jPlayer.event.play,
            function(event) {

                /* === ENABLE PLAYLIST ==== */

                var current = myPlaylist.current;
                var playlist = myPlaylist.playlist;
                $.each(playlist, function(index, obj) {
                    if (index == current) {
                        $(".jp-now-playing").html("<div class='jp-track-name'>" + obj.title + "</div> <div class='jp-artist-name'>" + obj.artist + "</div>");

                    }
                });

                /* === VOLUME DRAGGING ==== */

                $('.jp-volume-bar').mousedown(function() {
                        var parentOffset = $(this).offset(),
                            width = $(this).width();
                        $(window).mousemove(function(e) {
                            var x = e.pageX - parentOffset.left,
                                volume = x / width
                            if (volume > 1) {
                                $("#jquery_jplayer_1").jPlayer("volume", 1);
                            } else if (volume <= 0) {
                                $("#jquery_jplayer_1").jPlayer("mute");
                            } else {
                                $("#jquery_jplayer_1").jPlayer("volume", volume);
                                $("#jquery_jplayer_1").jPlayer("unmute");
                            }
                        });
                        return false;
                    })
                    .mouseup(function() {
                        $(window).unbind("mousemove");
                    });

                /* === ENABLE DRAGGING ==== */

                var timeDrag = false; /* Drag status */
                $('.jp-play-bar').mousedown(function(e) {
                    timeDrag = true;
                    updatebar(e.pageX);
                });
                $(document).mouseup(function(e) {
                    if (timeDrag) {
                        timeDrag = false;
                        updatebar(e.pageX);
                    }
                });
                $(document).mousemove(function(e) {
                    if (timeDrag) {
                        updatebar(e.pageX);
                    }
                });

                //update Progress Bar control
                var updatebar = function(x) {

                    var progress = $('.jp-progress');
                    //var maxduration = myPlaylist.duration; //audio duration

                    var position = x - progress.offset().left; //Click pos
                    var percentage = 100 * position / progress.width();

                    //Check within range
                    if (percentage > 100) {
                        percentage = 100;
                    }
                    if (percentage < 0) {
                        percentage = 0;
                    }

                    $("#jquery_jplayer_1").jPlayer("playHead", percentage);

                    //Update progress bar
                    $('.jp-play-bar').css('width', percentage + '%');
                };

                /* === Playlist Functions ==== */

                $('#playlist-toggle, #playlist-text, #playlist-wrap li a').unbind().on('click', function() {
                    $('#playlist-wrap').fadeToggle();
                    $('#playlist-toggle, #playlist-text').toggleClass('playlist-is-visible');
                });

                /*Hide Player*/
                $('.hide_player').unbind().on('click', function() {
                    $('.audio-player').toggleClass('is_hidden');
                    $(this).html($(this).html() == '<i class="fa fa-angle-down"></i> HIDE' ? '<i class="fa fa-angle-up"></i> SHOW PLAYER' : '<i class="fa fa-angle-down"></i> HIDE');
                });

                // Play Audio From media Page
                $('.audio-play-btn').unbind().on('click', function() {
                    $('.audio-play-btn').removeClass('is_playing');
                    $(this).addClass('is_playing');
                    var playlistId = $(this).data('playlist-id');
                    myPlaylist.play(playlistId);
                });
            }); // end jplayer event ready
    }
    /* ================================================
       On Scroll Menu
       ================================================ */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.js-on-scroll').addClass('menu-is-scrolling');
        } else {
            $('.js-on-scroll').removeClass('menu-is-scrolling');
        }
    });

    /* ================================================
       Other Scroll Functions
       ================================================ */

    /**
     * BACK TO TOP 
     */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('.back_to_top').fadeIn('slow');
        } else {
            $('.back_to_top').fadeOut('slow');
        }
    });

    /**
     * ONE PAGE SCROLL
     */

    $('.navbar-nav a, .back_to_top').on('click', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    /*------------  ------------ */

    /* ================================================
       Team Info Modal
       ================================================ */

    $('.team-slider').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            removalDelay: 500,
            fixedContentPos: false,
            gallery: {
                enabled: false
            },
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            }
        });
    });


    /* ================================================
       Slick slider album
       ================================================ */

    if ($('.team-slider').length) {


        $('.team-slider').on('init', function(event, slick) {
            $(this).css('height', 'auto');
        });

        $('.team-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

    }

    /* ================================================
       Magnific popup
       ================================================ */

    if ($('.image-link').length) {

        $('.image-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }



    /* ================================================
       Magnific popup Video
       ================================================ */

    if ($('.mfp-youtube').length) {
        $('.mfp-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 0,
            preloader: false,
            fixedContentPos: false,

        });
    }

    /* ================================================
       Twitter slide
       ================================================ */

    if ($('.twitter-feed').length) {

        $('.twitter-feed').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                    slidesToScroll: 2,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
        });

    }

    /* ================================================
       Modernizr
       ================================================ */

    if (!Modernizr.objectfit) {
        $('.object-fit-container').each(function() {
            var $container = $(this),
                imgUrl = $container.find('img').prop('src');
            if (imgUrl) {
                $container
                    .css('backgroundImage', 'url(' + imgUrl + ')')
                    .addClass('compat-object-fit');
            }
        });
    }


    /* ================================================
       Initialize Countdown
       ================================================ */

    /*Fetch Event Date From HTML via data-* attr */

    var get_date = $('#countdown').data('event-date');
    /*init*/
    if (get_date) {

        $("#countdown").countdown({
            date: get_date,
            /*Change date and time in HTML data-event-date attribute */
            format: "on"
        });
    }

}); // End jQuery Function XXXXXXXXXXXXXXXXXXXXXXXX

/* ================================================
   REMOVE LOADING
   ================================================ */
$(window).load(function() {
    $('#page-loader').fadeOut();
    $("body").removeClass("preload");
});


/* ================================================
   Twitter Widget
   ================================================ */

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));
