document.getElementById("intro").addEventListener("click", () => {
      var op = 1;
      setInterval(function () {
        op -= 0.1;
        document.getElementById("intro").style.opacity = op;
      }, 50);

      document.getElementById("intro").style.display = "none";

      document.body.classList.add('video-started');

      document.getElementById("video").play()
  }
)

document.querySelector("#nav").addEventListener('click', () => {
  var hero = $("#video_container");
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


