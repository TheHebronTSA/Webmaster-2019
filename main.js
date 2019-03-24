var $ = require('jquery');
var bootstrap_style = require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
var css = require('./resources/css/main.css')
var bootstrap = require('bootstrap');

// var animation = require('./resources/js/animation.js');

$(document).ready(function () {
  var mojs = require('mo-js');
  var Barba = require('barba.js');
  
  var navigation = require('./resources/js/navigation');
  var blockReveal = require('./resources/js/blockReveal');

  var THREE = require('three');
  var SVGLoader = require('three/examples/js/loaders/SVGLoader');
  var TrackballControls = require('three/examples/js/controls/TrackballControls');
  var WEBGL = require('three/examples/js/WebGL');

  if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
  }

  var camera, controls, scene, renderer, stats, loader;

  function init() {

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    controls = new THREE.TrackballControls(camera);

    controls.noZoom = false;
    controls.noRotate = true;
    controls.noPan = true;

    controls.zoomSpeed = 1.2;

    controls.staticMoving = false;
    controls.enableDamping = true;
    controls.dynamicDampingFactor = 0.3;

    controls.addEventListener('change', render);

    // world

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x044bda);
    scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

    var geometry = new THREE.CylinderBufferGeometry(0, 10, 30, 4, 1);
    var material = new THREE.MeshPhongMaterial({
      color: 0xbf0222,
      flatShading: true
    });

    for (var i = 0; i < 200; i++) {

      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 1000;
      mesh.position.y = (Math.random() - 0.5) * 1000;
      mesh.position.z = (Math.random() - 0.5) * 1000;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      scene.add(mesh);

    }

    loader = new THREE.SVGLoader();

    // load a SVG resource
    loader.load(
      // resource URL
      'banner.svg',
      // called when the resource is loaded
      function (paths) {

        var group = new THREE.Group();

        for (var i = 0; i < paths.length; i++) {

          var path = paths[i];

          var material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false
          });

          var shapes = path.toShapes(true);

          for (var j = 0; j < shapes.length; j++) {

            var shape = shapes[j];
            var geometry = new THREE.ShapeBufferGeometry(shape);
            var mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);

          }

        }

        scene.add(group);

      },
      // called when loading is in progresses
      function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

      },
      // called when loading has errors
      function (error) {

        console.log('An error happened');

      }
    );

    var update = function () {
      geometry.rotation.y += 0.005;
    }

    // lights

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x002288);
    light.position.set(-1, -1, -1);
    scene.add(light);

    var light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    // renderer
    var container = document.getElementById('canvas');
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    stats = new Stats();
    document.body.appendChild(stats.dom);

    //

    window.addEventListener('resize', onWindowResize, false);
    //

    render();

  }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    controls.handleResize();

    render();

  }

  function animate() {

    requestAnimationFrame(animate);

    controls.update();

    stats.update();

  }

  function render() {

    renderer.render(scene, camera);

  }

  init();
  animate();

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