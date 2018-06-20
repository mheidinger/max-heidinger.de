$(document).ready(function() {
	$("#start_container #learn_more_button").click(function() {
		doTransition("#start_container", "#full_site_container");
	});

	$("#full_site_container #header").click(function() {
		doTransition("#full_site_container", "#start_container");
	});

	let modal = $(".modal");
	$("#data_privacy_link").click(function() {
		modal.css("display", "block");
	});

	$(window).click(function(ev) {
		if (ev.target.className == "modal") {
			modal.css("display", "none");
		}
	});

	$(document).keyup(function(ev) {
		if (ev.keyCode === 27) {
			modal.css("display", "none");
		}
	});
});

function doTransition(from, to) {
	transition.begin($(from)[0], "transform scale(1) scale(0) 0.2s ease-in-out", {
		onTransitionEnd: function() {
			$(from).css("display", "none");
			$(to).css("display", "flex");
			transition.begin($(to)[0], "transform scale(0) scale(1) 0.2s ease-in-out");
		}
	});
};