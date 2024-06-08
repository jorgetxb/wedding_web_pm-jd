var elementos = document.querySelectorAll(".panel__item-img");
var deactivated = document.querySelectorAll(".section .deactivated");

let img_trigger = document.querySelectorAll(".panel__item-imgwrap");
let position;

Array.from(img_trigger).forEach((div, index) => {
  div.addEventListener('click', () => {
    position = index;
    var details = $(".panel__item-subtitle").eq(position);
    if (details.is(":visible")) {
      
      if (index%2 === 0) {
        elementos[index - 1].style.display = 'block';
        elementos[index - 1].style.opacity = '1';
        elementos[index - 1].style.width = "30vw";
        deactivated[index].style.width = "0vw";
        deactivated[index].style.opacity = '0';
      } else {
        elementos[index + 1].style.display = 'block';
        elementos[index + 1].style.opacity = '1';
        elementos[index + 1].style.width = "30vw";
        deactivated[index].style.width = "0vw";
        deactivated[index].style.opacity = '0';
      }

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

      if (index%2 === 0) {
        elementos[index - 1].style.opacity = '0'; //CV right side
        elementos[index - 1].style.width = "0vw"; //CV right side
        deactivated[index].style.width = "55vw"; //Title
        deactivated[index].style.opacity = '1'; //Title
        setTimeout(function() {elementos[index - 1].style.display = 'none';}, 1000);
      } else {
        elementos[index + 1].style.opacity = '0'; //CV right side
        elementos[index + 1].style.width = "0vw"; //CV right side
        deactivated[index].style.width = "55vw"; //Title
        deactivated[index].style.opacity = '1'; //Title
        setTimeout(function() {elementos[index + 1].style.display = 'none';}, 1000);
      }

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


/*********Inhabilitar función Obsequios Texto*********/

document.getElementById("disable").removeEventListener("click");