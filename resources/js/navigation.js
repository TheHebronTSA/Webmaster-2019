/**
 * Navigation
 */

var $ = require('jquery');

$('#nav-icon').click(function() {
	$('#popup').toggleClass('menu-open');
	$(this).toggleClass('open');
	$('.band-link').toggleClass('band-link-menu-open');
});

$('.menu-link').click(function () {
	$('#popup').toggleClass('menu-open');
	$('#nav-icon').toggleClass('open');
})

$('.pusher').click(function(){    
	if($('#popup').hasClass('menu-open')) {
		$('#popup').toggleClass('menu-open');
		$('#nav-icon').toggleClass('open');
	}
});