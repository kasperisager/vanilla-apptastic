jQuery(function() {
	
	var aboveHeight = $(".ItemDiscussion").outerHeight(),
	    headerHeight = $("header").outerHeight(),
	    toolbarHeight = $(".toolbar").outerHeight(),
	    pageHeaderHeight = $(".page-header").outerHeight(),
	    itemMargin = parseFloat($(".ItemDiscussion").css("marginBottom")),
	    bodyPadding = parseFloat($(".body").css("paddingTop")),
	    headerMargin = parseFloat($(".CommentHeading").css("marginBottom"));
	
	if (isNaN(itemMargin)) {
		itemMargin = 0;
	};
	
	if (isNaN(bodyPadding)) {
		bodyPadding = 0;
	};
	
	$(".body").scroll(function(){
		if ($(this).scrollTop() > (aboveHeight + itemMargin + bodyPadding)){
			$(".CommentHeading")
				.addClass("scroll")
				.css("top", (headerHeight + toolbarHeight + pageHeaderHeight)+"px");
			$(".MessageList.Comments")
				.css("paddingTop", ($(".CommentHeading")
				.outerHeight() + headerMargin)+ "px");
		} else {
			$(".CommentHeading").removeClass("scroll").css("top", "auto");
			$(".MessageList.Comments").css("paddingTop", 0);
		}
		resizeHeader();
	});
	
	$.event.add(document, "ready", resizeHeader);
	$.event.add(window, "resize", resizeHeader);
	
	function resizeHeader() {
		if ($(".CommentHeading").hasClass("scroll")) {
			$(".CommentHeading.scroll").css("width", $(".main").outerWidth());
		} else {
			$(".CommentHeading").css("width", "100%");
		}
	};
	
	$("#PagerAfter").remove();
	
	$("#PagerBefore").each(function() {
		
		$(this).addClass("btn-group");
		$(this).children().addClass("btn btn-mini");
		$(this).find(".Highlight").addClass("active");
		$(this).find("span").addClass("disabled");
		
		$(".CommentHeading").prepend(this);
		
	});
	
});