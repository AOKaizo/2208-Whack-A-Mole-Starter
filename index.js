let score = 0;
let timer = 60;
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
let currentDifficulty = () => $('#current-difficulty')[0].innerText = `Difficulty Selected: ${localStorage.getItem("modeSelector")[0].toUpperCase() + localStorage.getItem("modeSelector").slice(1)}`
function easySel() {
  localStorage.setItem("modeSelector", "easy");
  currentDifficulty();
}
function normalSel() {
  localStorage.setItem("modeSelector", "normal");
  currentDifficulty();
}
function hardSel() {
  localStorage.setItem("modeSelector", "hard");
  currentDifficulty();
}
function ludicrousSel() {
  localStorage.setItem("modeSelector", "ludicrous");
  currentDifficulty();
}
let marioWind = () => {
  $("#hammer-image")[0].src = "images/hammer-wind-up.png";
  $("#hammer-image")[0].style.left = "55vw";
};
let marioHit = () => {
  $("#hammer-image")[0].src = "images/hammer-hit.png";
  $("#hammer-image")[0].style.left = "55vw";
};

function whichMode() {
  if (localStorage.getItem("modeSelector") === "easy") {
    easyMode();
  } else if (localStorage.getItem("modeSelector") === "normal") {
    normalMode();
  } else if (localStorage.getItem("modeSelector") === "hard") {
    hardMode();
  } else if (localStorage.getItem("modeSelector") === "ludicrous") {
    ludicrousMode();
  } else {
    normalMode();
  }
}
whichMode();

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
  timer = 60;

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

  timer = 60;

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

  timer = 60;

  marioWind();
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Hard Mode`;
  score = 0;
  [...$("#score")][0].innerText = `Moles Whacked: ${score}`;
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

  timer = 60;

  [...$("#game-title")][0].innerText = `Whack-a-Mole: Ludicrous Mode`;
  score = 0;
}
let launchPage = () => (window.location.pathname = "/index.html");
startOverButton = document.createElement("button");
startOverButton.innerText = "Play Again";
startOverButton.style.width = "30vw";
startOverButton.style.height = "15vh";
startOverButton.style["font-size"] = "6vh";
startOverButton.setAttribute("onclick", "launchPage()");

let victory = () => {
  $(
    "#whack-a-mole"
  )[0].innerHTML = `Well Done! This was a mighty blow to the enemy. You whacked ${score} moles!`;
  $("#whack-a-mole")[0].style["width"] = "120%";
  $("#whack-a-mole")[0].style["font-size"] = "10vh";
  $("#whack-a-mole")[0].style["text-align"] = "center";
  [...$("#game-title")][0].innerText = `Whack-a-Mole: You Win!`;
  [...$("#game-title")][0].style["font-size"] = `10vh`;
  [...$("#title")][0].style["width"] = `150%`;
  [...$("#score-span")][0].remove();
  [...$("#timer")][0].remove();
  [...$("#game-controls")][0].innerHTML = "";
  [...$("#game-controls")][0].appendChild(startOverButton);
};

let defeat = () => {
  $(
    "#whack-a-mole"
  )[0].innerHTML = `What! There are too many of them! We'll have to fall back but at least there are ${score} less to deal with next time.`;
  $("#whack-a-mole")[0].style["width"] = "165%";
  $("#whack-a-mole")[0].style["font-size"] = "10vh";
  $("#whack-a-mole")[0].style["text-align"] = "center";
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Moles Win!`;
  [...$("#game-title")][0].style["font-size"] = `10vh`;
  [...$("#title")][0].style["width"] = `150%`;
  [...$("#score-span")][0].remove();
  [...$("#timer")][0].remove();
  [...$("#game-controls")][0].innerHTML = "";
  [...$("#game-controls")][0].appendChild(startOverButton);
  clearInterval(timeKeeping);
};

let ludicrousDefeat = () => {
  $(
    "#whack-a-mole"
  )[0].innerHTML = `You challenged them in the seat of their power?!?! You fool, you have doomed us all with your hubris. Doomed us all!`;
  $("#whack-a-mole")[0].style["width"] = "175%";
  $("#whack-a-mole")[0].style["font-size"] = "10vh";
  $("#whack-a-mole")[0].style["text-align"] = "center";
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Moles Win!`;
  [...$("#game-title")][0].style["font-size"] = `10vh`;
  [...$("#title")][0].style["width"] = `150%`;
  [...$("#score-span")][0].remove();
  [...$("#timer")][0].remove();
  [...$("#game-controls")][0].innerHTML = "";
  [...$("#game-controls")][0].appendChild(startOverButton);
  clearInterval(timeKeeping);
};

let timeKeeping = setInterval(() => {
  if (
    timer === 0 &&
    [...$("#game-title")][0].innerText === `Whack-a-Mole: Ludicrous Mode`
  ) {
    ludicrousDefeat();
  } else if (timer === 0 && score > 24) {
    victory();
  } else if (timer === 0 && score < 25) {
    defeat();
  } else {
    $("#timer")[0].innerText = `Time Remaining: ${timer--}`;
  }
}, 1000);

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