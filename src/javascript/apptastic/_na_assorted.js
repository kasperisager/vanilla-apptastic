jQuery(function() {
	
	$("html").removeClass("no-js").addClass("js");
	
	$("body").removeClass("thumbnail error");
	
	$(".PageControls .BoxButtons").remove();
	
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