jQuery(function() {
	
	$(".BoxDiscussionFilter ul, .BoxCategories ul, .BoxProfileFilter ul, .BoxActivityFilter ul")
		.removeClass("PanelInfo FilterMenu")
		.addClass("nav nav-tabs nav-stacked");
	
	$(".PanelCategories .Heading").wrapInner("<a class='fish' />");
		
});