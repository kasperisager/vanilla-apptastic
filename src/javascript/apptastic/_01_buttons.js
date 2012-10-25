jQuery(function() {
	
	$(".Button").toggleClass("Button btn");
	$(".Button").livequery(function() {
		$(this).toggleClass("Button btn");
	});
	
	$(".BigButton").toggleClass("BigButton btn-block btn-large btn-primary");
	$(".ClearConversation").toggleClass("btn-primary btn-danger");
	
	$(".ButtonGroup").each(function() {
		$(this).addClass("btn-group");
		$(this).find(".Handle").each(function() {
			$(this).addClass("dropdown-toggle");
			$(this).find(".Sprite").toggleClass("Sprite SpDropdownHandle caret");
		});
	});
	$(".ButtonGroup.Profiles .dropdown-menu").livequery(function() {
		$(this).addClass("pull-right");
	});
	
	$(".Active").addClass("active");
		
});