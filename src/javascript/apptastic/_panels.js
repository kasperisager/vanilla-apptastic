jQuery(function() {
	
	$(".BoxDiscussionFilter ul, .BoxCategories ul, .BoxProfileFilter ul, .BoxActivityFilter ul, .Profile .PanelInfo")
		.removeClass("PanelInfo FilterMenu")
		.addClass("nav nav-tabs nav-stacked");
	
	$(".PanelCategories .Heading").wrapInner("<a class='fish' />");
		
});