jQuery(function() {
	
	$.fn.autogrow = function(o) {
		return;
	}
	
	$("textarea").livequery(function() {
		$(this).autosize({append: "\n"});
	});
	
	$(".Category select").each(function() {
		
		$(this).find("option").each(function() {
			var $text = $.trim($(this).text());
			$(this).contents().replaceWith($text.replace(/(\u00a0)/g,' '));
		});

		$(this).find("option[disabled]").each(function() {
			var $label = $(this).text();
			var $options = $(this).nextUntil("option[disabled]");
			var $optionsHtml = $("<option />").append($($options)).html();
			$(this).replaceWith($("<optgroup label='"+$label+"'>"+$optionsHtml+"</optgroup>"));
		});
		
		$(this).find("option:empty").remove();
		
		$(this).select2();
		
	});
	
	$(".CommentForm").find("textarea").attr("placeholder", "Your comment goes here");
	
	$(".ActivityFormWrap .btn, .Profile form.Activity .btn").addClass("btn-primary").wrap("<div class='form-actions' />");
	
	$(".CommentFormWrap .Buttons").each(function() {
		$(this).toggleClass("Buttons form-actions");
		$(this).find("> a, > input").wrapAll("<span class='pull-right' />");
		$(this).find(".CommentButton").addClass("btn-primary");
		$(this).find(".PreviewButton, .WriteButton").addClass("btn");
		$(this).find(".WriteButton").hide();
		$(this).find(".DraftButton").addClass("btn btn-info");
	});
	
});