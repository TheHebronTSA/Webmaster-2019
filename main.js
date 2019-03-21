var bootstrap_style = require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
var css = require('./resources/css/main.css')
var $ = require('jquery');
var bootstrap = require('bootstrap');

// var animation = require('./resources/js/animation.js');

$(document).ready(function () {
  var mojs = require('mo-js');
  var Barba = require('barba.js');
  var navigation = require('./resources/js/navigation');
  var blockReveal = require('./resources/js/blockReveal');
  var VanillaTilt = require('vanilla-tilt');

  VanillaTilt.init(document.querySelector(".box"), {
    reverse: true,
    scale: 1,
    "max-glare": 1,
  });
  /** DEFINE MOJS BURSTS */

  const COLORS = {
    RED: '#FD5061',
    YELLOW: '#FFCEA5',
    BLACK: '#29363B',
    WHITE: 'white',
    VINOUS: '#A50710'
  }

  const burst1 = new mojs.Burst({
    left: 0,
    top: 0,
    count: 8,
    radius: {
      50: 150
    },
    children: {
      shape: 'line',
      stroke: ['white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202'],
      scale: 1,
      scaleX: {
        1: 0
      },
      // pathScale:    'rand(.5, 1.25)',
      degreeShift: 'rand(-90, 90)',
      radius: 'rand(20, 40)',
      // duration:     200,
      delay: 'rand(0, 150)',
      isForce3d: true,
      isShowEnd: false
    }
  });

  const largeBurst = new mojs.Burst({
    left: 0,
    top: 0,
    count: 4,
    radius: 0,
    angle: 45,
    radius: {
      0: 450
    },
    children: {
      shape: 'line',
      stroke: '#4ACAD9',
      scale: 1,
      scaleX: {
        1: 0
      },
      radius: 100,
      duration: 450,
      isForce3d: true,
      easing: 'cubic.inout',
      isShowEnd: false
    }
  });

  /** END BURST DEFINITIONS */

  $(document).click(function (e) {
    burst1
      .tune({
        x: e.pageX,
        y: e.pageY
      })
      .generate()
      .replay();

    largeBurst
      .tune({
        x: e.pageX,
        y: e.pageY
      })
      .replay();
  });

  // DEFINE BARBA.JS FADE TRANSITION

  var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */

      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function () {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */

      return $(this.oldContainer).animate({
        opacity: 0
      }).promise();
    },

    fadeIn: function () {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility: 'visible',
        opacity: 0
      });

      $el.animate({
        opacity: 1
      }, 400, function () {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */

        _this.done();
      });
    }
  });

  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  Barba.Pjax.getTransition = function () {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */

    return FadeTransition;
  };

  Barba.Pjax.start();
  Barba.Prefetch.init();
});

//alert('Welcome to Hebron TSA');