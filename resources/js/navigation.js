/**
 * Navigation
 */

var $ = require('jquery');

$('#nav-icon').click(function() {
	$('#popup').toggleClass('menu-open');
});

$('#nav-icon').click(function () {
	$(this).toggleClass('open');
});
