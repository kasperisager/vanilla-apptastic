jQuery(function() {
	
	$("html").removeClass("no-js").addClass("js");
	
	$("body").removeClass("thumbnail error");
	
	$(".PageControls .BoxButtons").remove();
	
	$(".MessageList .Item").each(function() {
		if (!($(this).find(".AuthorWrap .PhotoWrap").length)) {
			$(".AuthorWrap .Author").prepend("<a class='PhotoWrap' />");
		};
	});
	
	$.event.add(document, "ready", resizeBody);
	$.event.add(window, "resize", resizeBody);

	function resizeBody() {
		var headerHeight = $("header").outerHeight(),
		    toolbarHeight = $(".toolbar").outerHeight(),
		    pageHeaderHeight = $(".page-header").outerHeight(),
		    footerHeight = $("footer").outerHeight(),
		    windowHeight = $(window).outerHeight(),
		    contentHeight = windowHeight - (headerHeight + toolbarHeight + footerHeight);
		$(".body").css("minHeight", (contentHeight - pageHeaderHeight));
		$(".sidebar").css("minHeight", contentHeight);
	};
	
});

// Recaptcha
var RecaptchaOptions = {
	theme : "clean"
};

// OuterHTML function
jQuery.fn.outerHTML = function(s) {
	return s
		? this.before(s).remove()
		: jQuery("<p>").append(this.eq(0).clone()).html();
};