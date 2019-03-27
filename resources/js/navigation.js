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