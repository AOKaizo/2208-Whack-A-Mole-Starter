let score = 0;
let holes = [...$(".hole")];
let moles = [...$(".mole")];
let easyMoles;
let easyHoles;
let normalMoles;
let normalHoles;
let hardMoles;
let hardHoles;
let ludicrousMoles;
let ludicrousHoles;
let marioWind = () => {
  $("#hammer-image")[0].src = "images/hammer-wind-up.png";
  $("#hammer-image")[0].style.left = "55vw";
};
let marioHit = () => {
  $("#hammer-image")[0].src = "images/hammer-hit.png";
  $("#hammer-image")[0].style.left = "55vw";
};
normalMode();

function easyMode() {
  clearInterval(easyMoles);
  clearInterval(easyHoles);
  clearInterval(hardMoles);
  clearInterval(hardHoles);
  clearInterval(normalMoles);
  clearInterval(normalHoles);
  clearInterval(ludicrousMoles);
  clearInterval(ludicrousHoles);

  easyMoles = setInterval(
    () =>
      holes.filter((element) => element.className === "hole").length
        ? (holes.filter((element) => element.className === "hole")[
            Math.floor(
              Math.random() *
                holes.filter((element) => element.className === "hole").length
            )
          ].className = "mole")
        : null,
    1000
  );
  easyHoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "mole")[
        Math.round(
          Math.random() *
            holes.filter((element) => element.className === "mole").length
        )
      ].className = "hole"),
    5000
  );

  marioWind();
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Easy Mode`;
  score = 0;
  [...$("#score")][0].innerText = `Moles Whacked: ${score}`;
}

function normalMode() {
  clearInterval(easyMoles);
  clearInterval(easyHoles);
  clearInterval(hardMoles);
  clearInterval(hardHoles);
  clearInterval(normalMoles);
  clearInterval(normalHoles);
  clearInterval(ludicrousMoles);
  clearInterval(ludicrousHoles);
  normalMoles = setInterval(
    () =>
      holes.filter((element) => element.className === "hole").length
        ? (holes.filter((element) => element.className === "hole")[
            Math.floor(
              Math.random() *
                holes.filter((element) => element.className === "hole").length
            )
          ].className = "mole")
        : null,
    1000
  );
  normalHoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "mole")[
        Math.floor(
          Math.random() *
            holes.filter((element) => element.className === "mole").length
        )
      ].className = "hole"),
    1500
  );

  marioWind();
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Normal Mode`;
  score = 0;
  [...$("#score")][0].innerText = `Moles Whacked: ${score}`;
}

function hardMode() {
  clearInterval(easyMoles);
  clearInterval(easyHoles);
  clearInterval(hardMoles);
  clearInterval(hardHoles);
  clearInterval(normalMoles);
  clearInterval(normalHoles);
  clearInterval(ludicrousMoles);
  clearInterval(ludicrousHoles);

  hardMoles = setInterval(
    () =>
      holes.filter((element) => element.className === "hole").length
        ? (holes.filter((element) => element.className === "hole")[
            Math.floor(
              Math.random() *
                holes.filter((element) => element.className === "hole").length
            )
          ].className = "mole")
        : null,
    500
  );

  hardHoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "mole")[
        Math.floor(
          Math.random() *
            holes.filter((element) => element.className === "mole").length
        )
      ].className = "hole"),
    200
  );

  marioWind();
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Hard Mode`;
  score = 0;
  [...$("#score")][0].innerText = `Moles Whacked: ${++score}`;
}

function ludicrousMode() {
  clearInterval(easyMoles);
  clearInterval(easyHoles);
  clearInterval(hardMoles);
  clearInterval(hardHoles);
  clearInterval(normalMoles);
  clearInterval(normalHoles);
  clearInterval(ludicrousMoles);
  clearInterval(ludicrousHoles);

  ludicrousMoles = setInterval(
    () => (
      holes.forEach((element) =>
        Math.ceil(Math.random() * 2) > 1 ? (element.className = "mole") : null
      ),
      1000
    )
  );

  ludicrousHoles = setInterval(
    () => (
      holes.forEach((element) =>
        Math.ceil(Math.random() * 2) > 1 ? (element.className = "hole") : null
      ),
      1000
    )
  );

  [...$("#game-title")][0].innerText = `Whack-a-Mole: Ludicrous Mode`;
  score = 0;
}

$("#whack-a-mole").mousedown(marioHit);

$("#whack-a-mole").mouseup(marioWind);

$(".hole").click(function () {
  if (this.className === "mole") {
    this.className = "hole";
    if ([...$("#game-title")][0].innerText === `Whack-a-Mole: Ludicrous Mode`) {
      [...$("#score")][0].innerText =
        "Moles Whacked: YOU DARE CHALLENGE ME!?!?!";
      $("#hammer-image")[0].style.left = "68vw";
      $("#hammer-image")[0].src = "images/uhoh-defeat.png";
      $("#whack-a-mole").unbind("mousedown", marioHit);
      $("#whack-a-mole").unbind("mouseup", marioWind);
    } else {
      $("#whack-a-mole").bind("mousedown", marioHit);
      $("#whack-a-mole").bind("mouseup", marioWind);
      [...$("#score")][0].innerText = `Moles Whacked: ${++score}`;
    }
  }
});

// ---Click with addEventListener---
// holes.forEach((element) =>
//   element.addEventListener("click", () => {
//     if (element.className === "mole") {
//       element.className = "hole";
//       [...$("#score")][0].innerText = `Moles Whacked: ${++score}`;
//     }
//   })
// );

// $("#game-window").on('mousedown', () => this.style.cursor = `url(images/hammer-hit.png), auto`);

// $('#whack-a-mole').mousemove(function (e) {
//   $("#mario-hammer").css({
//     left: e.pageX - 30,
//     top: e.pageY - 40,
//   });
// });
