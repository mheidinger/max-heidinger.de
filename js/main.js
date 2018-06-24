(function() {
  $(document).ready(function() {
    $("#start_container #learn_more_button").click(function() {
      pageTransition("#start_container", "#full_site_container");
      $("#start_container_content").removeClass("first_open");
    });

    $("#full_site_container #header").click(function() {
      pageTransition("#full_site_container", "#start_container");
    });

    $("#data_privacy_link").click(function() {
      modalTransition(true);
    });

    $(window).click(function(ev) {
      if (ev.target.className == "modal") {
        modalTransition(false);
      }
    });

    $(document).keyup(function(ev) {
      if (ev.keyCode === 27) {
        modalTransition(false);
      }
    });
  });

  function pageTransition(from, to) {
    transition.begin(
      $(from)[0],
      "transform scale(1) scale(0) 0.2s ease-in-out",
      {
        onTransitionEnd: () => {
          $(from).css("display", "none");
          $(to).css("display", "flex");
          transition.begin(
            $(to)[0],
            "transform scale(0) scale(1) 0.2s ease-in-out"
          );
        }
      }
    );
  }

  function modalTransition(open) {
    let modal = $(".modal");
    let modalContent = $(".modal_content");
    if (open) {
      modal.css("display", "block");
      transition.begin(
        modalContent[0],
        "transform scale(0) scale(1) 0.1 ease-in-out"
      );
    } else {
      transition.begin(
        modalContent[0],
        "transform scale(1) scale(0) 0.1 ease-in-out",
        { onTransitionEnd: () => modal.css("display", "none") }
      );
    }
  }
})();
