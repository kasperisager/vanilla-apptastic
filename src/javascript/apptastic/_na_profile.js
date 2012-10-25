jQuery(function() {
	
	var aboveHeight = $(".Profile .User").outerHeight(),
	    headerHeight = $("header").outerHeight(),
	    toolbarHeight = $(".toolbar").outerHeight(),
	    pageHeaderHeight = $(".page-header").outerHeight(),
	    itemMargin = parseFloat($(".Profile dl.About").css("marginBottom")),
	    bodyPadding = parseFloat($(".body").css("paddingTop")),
	    headerMargin = parseFloat($(".Profile h2.H").css("marginBottom"));
	
	if (isNaN(itemMargin)) {
		itemMargin = 0;
	};
	
	if (isNaN(bodyPadding)) {
		bodyPadding = 0;
	};
	
	$(".body").scroll(function(){
		if ($(this).scrollTop() > (aboveHeight + itemMargin + bodyPadding)){
			$(".Profile h2.H")
				.addClass("scroll")
				.css("top", (headerHeight + toolbarHeight + pageHeaderHeight)+"px");
			$(".Profile form.Activity")
				.css("paddingTop", ($(".Profile h2.H")
				.outerHeight() + headerMargin)+ "px");
		} else {
			$(".Profile h2.H").removeClass("scroll").css("top", "auto");
			$(".Profile form.Activity").css("paddingTop", 0);
		}
		resizeHeader();
	});
	
	$.event.add(document, "ready", resizeHeader);
	$.event.add(window, "resize", resizeHeader);
	
	function resizeHeader() {
		if ($(".Profile h2.H").hasClass("scroll")) {
			$(".Profile h2.H.scroll").css("width", $(".main").outerWidth());
		} else {
			$(".Profile h2.H").css("width", "100%");
		}
	};
	
});