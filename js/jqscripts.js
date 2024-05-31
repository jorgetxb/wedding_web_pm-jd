let img_trigger = document.querySelectorAll(".panel__item-imgwrap");
let position;

Array.from(img_trigger).forEach((div, index) => {
  div.addEventListener('click', () => {
    position = index;
    var details = $(".panel__item-subtitle").eq(position);
    if (details.is(":visible")) {
      details.animate(
        { height: "toggle" },
        {duration: 500,
          easing: "swing",
          step: function (now, fx) {
              if (fx.prop == "height") {
                details.css("overflow", "hidden");
              }
          },
          complete: function () {
            details.css("display", "none");
          },
        }
      );
    } else {
      details.css("display", "block");
      details.css("height", "0px");
      details.animate(
        { height: "200px" },
        {duration: 500,
          easing: "swing",
          step: function (now, fx) {
            if (fx.prop == "height") {
              details.css("overflow", "hidden");
            }
          },
          complete: function () {
            details.css("height", "");
          },
        }
      );
    }
  });
});