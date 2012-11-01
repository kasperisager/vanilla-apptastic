jQuery(function() {
	
	$("header").each(function() {
		var height = $(this).find(".brand").innerHeight(),
		    padding = (parseInt(height)-40) / 2,
		    parent = $(this).find(".MeBoxWrap"),
		    username = $(this).find(".Username"),
		    picture = $(this).find(".PhotoWrap"),
		    menu = $(this).find(".MeMenu");
		//picture.css("padding", padding+"px 0");
		username.prepend(picture.find("img"));
		parent.prepend(
			username.outerHTML()
		);
		parent.after(
			"<li class='MeMenu'>" + menu.html() + "</li>"
		);
		$(this).find(".MeBox").remove();
	});
	
});