

var bootstrap_style = require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
var css = require('./resources/css/main.css')
var $ = require('jquery');

var bootstrap = require('./node_modules/bootstrap/dist/js/bootstrap.min.js');

//var mojs = require('./node_modules/mo-js/build/mo.js');

//var animation = require('./resources/js/animation.js');
var navigation = require('./resources/js/navigation.js');
$(document).ready(function(){
$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  $(this).toggleClass('open');
});
});
alert('Welcome to Hebron TSA');
