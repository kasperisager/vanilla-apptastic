jQuery(function() {
	
	$('.Popup').livequery(function() {
		$(this).find('.Body').addClass('modal');
	});
	$('.Popup .Content').livequery(function() {
		$(this).children('h1, h2').addClass('modal-header');
		$(this).children('*:not(.modal-header):not(.Entry)').addClass('modal-body');
	});
	$('.Popup .Content h1, .Popup .Content h2').livequery(function() {
		$(this).addClass('modal-header');
	});
	$('.Popup .Content').find('> *:not(.modal-header):not(.Entry)').livequery(function() {
		$(this).addClass('modal-body');
	});
	$('.Popup .Footer').livequery(function() {
		$(this).find('span').addClass('close');
	});
	$('.Overlay').livequery(function() {
		$(this).fadeIn(150);
	});
	
});