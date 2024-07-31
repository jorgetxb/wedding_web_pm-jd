/*document.getElementById("intro").addEventListener("click", () => {
      document.getElementById("intro").style.opacity = "0";
      document.getElementById("intro").style.display = "none";
      document.body.classList.add('video-started');
      document.getElementById("video").play();
      document.getElementById("audio").play();
  }
)*/

document.querySelector("#nav").addEventListener('click', () => {
  document.getElementById("audio").play();
  var hero = $("#video_container");
  var unlock = document.body;
  unlock.style.overflowY = "auto";
  hero.animate(
    { height: "toggle" },
    {duration: 2000,
      easing: "swing",
      step: function (now, fx) {
        if (fx.prop == "height") {
          hero.css("overflow", "hidden");
        }
      },
      complete: function () {
        hero.css("display", "none");
      },
    }
  );
});

document.querySelector("#back_button").addEventListener('click', () => {
  var hero = $("#video_container");
  var lock = document.body;
  // Bloquea el desplazamiento vertical
  lock.style.overflowY = "hidden";
  hero.animate(
    { height: "toggle" },
    {duration: 2000,
      easing: "swing",
      step: function (now, fx) {
        if (fx.prop == "height") {
          hero.css("overflow", "hidden");
        }
      },
      complete: function () {
        hero.css("display", "block");
      },
    }
  );
});

