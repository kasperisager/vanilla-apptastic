jQuery(function() {
	
	var pageHeader = $(".page-header"),
		commentHeader = $(".CommentHeading"),
		replyHeader = $(".CommentForm h2.H"),
		profileNav = $(".ProfileOptions"),
		profileBtn = profileNav.find(".ProfileButtons"),
		discussionNav = $(".MessageList.Discussion .Options"),

		stickyHeaders = $(
			".body > h1, \
			.PageTitle h1, \
			h1.H, \
			.Profile.EditMode h2.H, \
			.FormTitleWrapper > h1"
		);
	
	profileBtn
		.removeClass("NavButton")
		.addClass("btn");
	
	pageHeader
		.prepend(
			stickyHeaders
				.remove()
				.text()
		)
		.prepend(
			profileNav
				.toggleClass("ProfileOptions pull-right")
				.remove()
				.outerHTML()
		)
		.prepend(
			discussionNav
				.toggleClass("pull-right")
				.remove()
				.outerHTML()
		);
		
	pageHeader.scrollToFixed({
		spacerClass: "scroll-spacer",
		fixed: function() {
		
			var mainWidth = $(".main").width();
		
			$(this)
				.addClass("fixed")
				.css("width", mainWidth);
		},
		unfixed: function() {
			$(this)
				.removeClass("fixed")
				.width();
		}
	});
	
	commentHeader.scrollToFixed({
		spacerClass: "scroll-spacer",
		marginTop: 59,
		limit: function() {
			if (replyHeader.length) {
				return replyHeader.offset().top - 
				commentHeader.outerHeight(true);
			}
		},
		fixed: function() {

			var mainWidth = $(".main").width();
			
			$(this)
				.addClass("fixed")
				.css("width", mainWidth);
		},
		unfixed: function() {
			$(this)
				.removeClass("fixed")
				.width();
		},
		preAbsolute: function() {
			
			$(this)
				.addClass("absolute");
				
			if (replyHeader.length) {
				$(this)
					.css("top", 
						replyHeader.offset().top -
						commentHeader.outerHeight(true)
					);
			}

		},
		postAbsolute: function() {
			$(this)
				.removeClass("absolute")
				.css("z-index", "1000");
		}
	});
	
	replyHeader.scrollToFixed({
    	marginTop: pageHeader.outerHeight(),
    	spacerClass: "scroll-spacer",
		fixed: function() {
		
			var mainWidth = $(".main").width();
		
			$(this)
				.addClass("fixed")
				.css("width", mainWidth);
		},
		unfixed: function() {
			$(this)
				.removeClass("fixed")
				.width();
		}
	});
	
	$(window).scroll(function() {
	
		var mainWidth = $(".main").width();
	
		$(".absolute")
			.addClass("fixed")
			.css("width", mainWidth)
			.css("z-index", 900)
			.css("left", 20);
		
		if (replyHeader.length) {
			$(".absolute")
				.css("top", 
					replyHeader.offset().top - 142
				);
		}
		
	});
	
	
	
});