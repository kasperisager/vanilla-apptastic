jQuery(function() {
	
	var aboveHeight = 0,
	    stickyElement = ".body > h1, .PageTitle h1, h1.H, .Profile.EditMode h2.H, .FormTitleWrapper > h1";
	
	$(".main").each(function() {
	
		var profileNav = $(".ProfileOptions"),
		    profileBtn = profileNav.find(".ProfileButtons");
		$(this).prepend($(stickyElement).remove().wrapInner("<h1 class='page-header' />").html());
		profileBtn.removeClass("NavButton").addClass("btn");
		$(".page-header").wrapInner("<div class='title' />");
		$(".page-header").prepend(profileNav
			.toggleClass("ProfileOptions pull-right")
			.remove().outerHTML());
			
		var discussionNav = $(".MessageList.Discussion .Options"),
		    optionsBtn = discussionNav.find(".btn");
		optionsBtn.removeClass("btn-mini");
		$(".page-header").prepend(discussionNav
			.toggleClass("pull-right")
			.remove().outerHTML());	
		
	});
	
	$.event.add(document, "ready", resizeContent);
	$.event.add(window, "resize", resizeContent);
	
	function resizeContent() {
		var headerHeight = $("header").outerHeight(),
		    toolbarHeight = $(".toolbar").outerHeight(),
		    pageHeaderHeight = $(".page-header").outerHeight(),
		    footerHeight = $("footer").outerHeight(),
		    windowHeight = $(window).outerHeight(),
		    contentHeight = windowHeight - (headerHeight + toolbarHeight + footerHeight);
		$(".body").css("maxHeight", (contentHeight - pageHeaderHeight));
		$(".body").css("minHeight", (contentHeight - pageHeaderHeight));
		$(".sidebar").css("maxHeight", contentHeight);
		$(".sidebar").css("minHeight", contentHeight);
	};
	
	$(".body").scroll(function(){
		if ($(this).scrollTop() > aboveHeight){
			$(".page-header").addClass("scroll");
		} else {
			$(".page-header").removeClass("scroll");
		}
	});
	
});