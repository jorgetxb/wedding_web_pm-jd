var elementos = document.querySelectorAll(".panel__item-img");
var deactivated = document.querySelectorAll(".section .deactivated");

let img_trigger = document.querySelectorAll(".panel__item-imgwrap");
let position;

Array.from(img_trigger).forEach((div, index) => {
  div.addEventListener('click', () => {
    position = index;
    var details = $(".panel__item-subtitle").eq(position);
    if (details.is(":visible")) {
        if (index == 0 || index%2 === 0) {
          elementos[index + 2].style.display = 'block';
          elementos[index + 2].style.opacity = '1';
          elementos[index + 2].style.width = "30vw";
          deactivated[index].style.width = "0vw";
          deactivated[index].style.opacity = '0';
        } else {
          elementos[index].style.display = 'block';
          elementos[index].style.opacity = '1';
          elementos[index].style.width = "30vw";
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
        if (index == 0 || index%2 === 0) {
          elementos[index + 2].style.opacity = '0'; //CV right side
          elementos[index + 2].style.width = "0vw"; //CV right side
          deactivated[index].style.width = "45vw"; //Title
          deactivated[index].style.opacity = '1'; //Title
        } else {
          elementos[index].style.opacity = '0'; //CV right side
          elementos[index].style.width = "0vw"; //CV right side
          deactivated[index].style.width = "45vw"; //Title
          deactivated[index].style.opacity = '1'; //Title
          setTimeout(function() {elementos[index].style.display = 'none';}, 0);
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

/***Active Forms***/

var attent_form = document.getElementById("attent_form");
var music_form = document.getElementById("music_form");
var gifts_info = document.getElementById("gifts_info");
var form_1 = document.getElementById("form_1");
var form_2 = document.getElementById("form_2");
var bank_account_info = document.getElementById("bank_account_info");
var formw = document.getElementById("form_wrapper");

attent_form.addEventListener("click", () => {
  form_1.style.display = "block";
  formw.style.display = "block";
  document.body.style.overflowY = "hidden";
});

music_form.addEventListener("click", () => {
  form_2.style.display = "block";
  formw.style.display = "block";
  document.body.style.overflowY = "hidden";
});

gifts_info.addEventListener("click", () => {
  bank_account_info.style.display = "block";
  formw.style.display = "block";
  document.body.style.overflowY = "hidden";
});

formw.addEventListener("click", () => {
  formw.addEventListener("click", () => {
  form_1.style.display = "none";
  form_2.style.display = "none";
  bank_account_info.style.display = "none";
  formw.style.display = "none";
  document.body.style.overflowY = "auto";
})
})

/***Floating Bar***/

const audio = document.getElementById('audio');

document.getElementById("pause_button").addEventListener("click", () => {
  document.getElementById("pause_button").style.display = "none";
  document.getElementById("play_button").style.display = "block";
  audio.pause();
})

document.getElementById("play_button").addEventListener("click", () => {
  document.getElementById("play_button").style.display = "none";
  document.getElementById("pause_button").style.display = "block";
  audio.play();
})