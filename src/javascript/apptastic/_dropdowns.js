jQuery(function() {
	
	$(".OptionsTitle").livequery(function() {
		$(this).toggleClass("OptionsTitle btn btn-mini")
		.append(" <span class='caret'></span>");
	});
	
	$(".dropdown-menu ul li hr").livequery(function() {
		$(this).parent().addClass("divider");
		$(this).remove();
	});
	
	$(".MenuItems").livequery(function() {
		$(this).toggleClass("MenuItems dropdown-menu");
	});
	$(".FlyoutMenu").livequery(function() {
		$(this).addClass("dropdown-menu");
	});
	$(".ac_results").livequery(function() {
		$(this).find("ul").addClass("typeahead dropdown-menu");
	});
	
});