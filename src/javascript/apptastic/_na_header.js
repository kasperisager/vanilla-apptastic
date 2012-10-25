jQuery(function() {
	
	$(".navbar form").each(function() {
		$(this).addClass("navbar-search");
		$(this).find("input").addClass("search-query span2").attr("placeholder","enter your search terms");
		$(this).find("input[type=submit]").remove();
		$(this).show();
	});
	
});