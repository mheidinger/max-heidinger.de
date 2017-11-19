$(document).ready(function() {
  $("#start_container #learn_more_button").click(function() {
    doTransition("#start_container", "#full_site_container");
  });

  $("#full_site_container #header").click(function() {
    doTransition("#full_site_container", "#start_container");
  });
});

function doTransition(from, to) {
  transition.begin($(from)[0], "transform scale(1) scale(0) 0.2s ease-in-out", { onTransitionEnd: function() {
    $(from).css('display','none');
    $(to).css('display','block');
    transition.begin($(to)[0], "transform scale(0) scale(1) 0.2s ease-in-out");
  } });
};
