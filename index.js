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
let zombieMoles;
let zombieHoles;

let launchPage = () => (window.location.pathname = "./Whack-A-Mole/");

let moleReset = () => holes.forEach((element) => (element.className = "hole"));

let clearAllInt = () => {
  this.clearInterval(easyMoles);
  this.clearInterval(easyHoles);
  this.clearInterval(hardMoles);
  this.clearInterval(hardHoles);
  this.clearInterval(normalMoles);
  this.clearInterval(normalHoles);
  this.clearInterval(ludicrousMoles);
  this.clearInterval(ludicrousHoles);
  this.clearInterval(zombieMoles);
  this.clearInterval(zombieHoles);
};

let launchPageNightMode = () => {
  [...$("#launch-screen")][0].style["background-image"] =
    "url('images/zombie-forest-background.png')";
  [...$("#page-title")][0].style["color"] = "green";
  [...$("#objective-title")][0].style["color"] = "green";
  [...$("#objective-text")][0].style["color"] = "green";
  [...$("#current-difficulty")][0].style["color"] = "green";
  [...$("#launch-window")][0].style["background-color"] = "darkslategrey";
  [...$("#launch-window")][0].style["border"] = "solid 20px grey";
  [...$("div button")].forEach(
    (element) => (element.style["background-color"] = "slategrey")
  );
};

let launchPageBloodyMode = () => {
  [...$("#launch-screen")][0].style["background-image"] =
    "url('images/bloody-forest-background.png')";
  [...$("#page-title")][0].style["color"] = "red";
  [...$("#objective-title")][0].style["color"] = "red";
  [...$("#objective-text")][0].style["color"] = "red";
  [...$("#current-difficulty")][0].style["color"] = "red";
  [...$("#launch-window")][0].style["background-color"] = "darkred";
  [...$("#launch-window")][0].style["border"] = "solid 20px black";
  [...$("div button")].forEach((element) => {
    element.style["background-color"] = "red";
    element.style["color"] = "black";
  });
};

let launchPageDayMode = () => {
  [...$("#launch-screen")][0].style["background-image"] =
    "url('images/normal-forest-background.jpeg')";
  [...$("#page-title")][0].style["color"] = "black";
  [...$("#objective-title")][0].style["color"] = "black";
  [...$("#objective-text")][0].style["color"] = "black";
  [...$("#current-difficulty")][0].style["color"] = "black";
  [...$("#launch-window")][0].style["background-color"] = "olivedrab";
  [...$("#launch-window")][0].style["border"] = "solid 20px black";
  [...$("div button")].forEach((element) => {
    element.style["background-color"] = "darkolivegreen";
    element.style["color"] = "white";
  });
};

let nightMode = () => {
  [...$("#game-screen")][0].style["background-image"] =
    "url('images/zombie-forest-background.png')";
  [...$("#game-title")][0].style["color"] = "green";
  [...$("#score")][0].style["color"] = "green";
  [...$("#timer")][0].style["color"] = "green";
  [...$("#whack-a-mole")][0].style["background-color"] = "darkslategrey";
  [...$("#whack-a-mole")][0].style["border"] = "solid 20px grey";
  [...$("button")].forEach((element) => {
    element.style["background-color"] = "slategrey";
    element.style["color"] = "white";
  });
};

let bloodyMode = () => {
  [...$("#game-screen")][0].style["background-image"] =
    "url('images/bloody-forest-background.png')";
  [...$("#game-title")][0].style["color"] = "red";
  [...$("#score")][0].style["color"] = "red";
  [...$("#timer")][0].style["color"] = "red";
  [...$("#whack-a-mole")][0].style["background-color"] = "darkred";
  [...$("#whack-a-mole")][0].style["border"] = "solid 20px black";
  [...$("button")].forEach((element) => {
    element.style["background-color"] = "red";
    element.style["color"] = "black";
  });
};

let dayMode = () => {
  [...$("#game-screen")][0].style["background-image"] =
    "url('images/normal-forest-background.jpeg')";
  [...$("#game-title")][0].style["color"] = "black";
  [...$("#score")][0].style["color"] = "black";
  [...$("#timer")][0].style["color"] = "black";
  [...$("#whack-a-mole")][0].style["background-color"] = "darkolivegreen";
  [...$("#whack-a-mole")][0].style["border"] = "solid 20px black";
  [...$("button")].forEach((element) => {
    element.style["background-color"] = "darkolivegreen";
    element.style["color"] = "white";
  });
};

function currentDifficulty() {
  return ($("#current-difficulty")[0].innerText = `Difficulty Selected: ${localStorage.getItem("modeSelector")[0].toUpperCase() +
    localStorage.getItem("modeSelector").slice(1)}`);
}

function easySel() {
  localStorage.setItem("modeSelector", "easy");
  currentDifficulty();
  launchPageDayMode();
}

function normalSel() {
  localStorage.setItem("modeSelector", "normal");
  currentDifficulty();
  launchPageDayMode();
}

function hardSel() {
  localStorage.setItem("modeSelector", "hard");
  currentDifficulty();
  launchPageDayMode();
}

function ludicrousSel() {
  localStorage.setItem("modeSelector", "ludicrous");
  currentDifficulty();
  launchPageBloodyMode();
}

function zombieSel() {
  localStorage.setItem("modeSelector", "zombie");
  launchPageNightMode();
  currentDifficulty();
  launchPageNightMode();
}

let marioWind = () => {
  $("#hammer-image")[0].src = "images/hammer-wind-up.png";
  $("#hammer-image")[0].style.left = "55vw";
};

let marioHit = () => {
  $("#hammer-image")[0].src = "images/hammer-hit.png";
  $("#hammer-image")[0].style.left = "55vw";
};

let easyMode = function () {
  localStorage.setItem("modeSelector", "easy");
  clearAllInt();
  moleReset();

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
  dayMode();
};

let normalMode = function () {
  localStorage.setItem("modeSelector", "normal");
  clearAllInt();
  moleReset();

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
  dayMode();
};

let hardMode = function () {
  localStorage.setItem("modeSelector", "hard");
  clearAllInt();
  moleReset();

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

  hardHoles = setInterval(() => {
    if (holes.filter((element) => element.className === "mole").length !== 0) {
      holes.filter((element) => element.className === "mole")[
        Math.floor(
          Math.random() *
            holes.filter((element) => element.className === "mole").length
        )
      ].className = "hole";
    }
  }, 200);

  timer = 60;

  marioWind();

  [...$("#game-title")][0].innerText = `Whack-a-Mole: Hard Mode`;
  score = 0;

  [...$("#score")][0].innerText = `Moles Whacked: ${score}`;

  dayMode();
};

let ludicrousMode = function () {
  localStorage.setItem("modeSelector", "ludicrous");
  clearAllInt();
  moleReset();

  ludicrousMoles = setInterval(
    () => (
      holes.forEach((element) =>
        Math.ceil(Math.random() * 2) > 1
          ? (element.className = "bloody-mole")
          : null
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

  marioWind();
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Ludicrous Mode`;

  score = 0;

  bloodyMode();
};

let zombieMode = function () {
  localStorage.setItem("modeSelector", "zombie");
  clearAllInt();
  moleReset();

  zombieMoles = setInterval(
    () =>
      holes.filter((element) => element.className === "hole").length
        ? (holes.filter((element) => element.className === "hole")[
            Math.floor(
              Math.random() *
                holes.filter((element) => element.className === "hole").length
            )
          ].className = "zombie-mole")
        : null,
    1000
  );

  zombieHoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "zombie-mole")[
        Math.floor(
          Math.random() *
            holes.filter((element) => element.className === "zombie-mole")
              .length
        )
      ].className = "hole"),
    1500
  );

  timer = 60;

  marioWind();
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Zombie Mode`;
  score = 0;
  [...$("#score")][0].innerText = `Moles Whacked: ${score}`;
  nightMode();
};

let startOverButtonFunc = () => {
  let startOverButton = document.createElement("button");
  startOverButton.innerText = "Play Again";
  startOverButton.style.width = "30vw";
  startOverButton.style.height = "15vh";
  startOverButton.style["font-size"] = "6vh";
  startOverButton.style["color"] =
    localStorage.getItem("modeSelector") === "ludicrous" ? "black" : "white";
  startOverButton.style["background-color"] =
    localStorage.getItem("modeSelector") === "ludicrous"
      ? "red"
      : localStorage.getItem("modeSelector") === "zombie"
      ? "darkslategray"
      : "darkolivegreen";
  startOverButton.setAttribute("onclick", "launchPage()");
  return startOverButton;
};

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
  [...$("#game-controls")][0].appendChild(startOverButtonFunc());
};

let zombieVictory = () => {
  $(
    "#whack-a-mole"
  )[0].innerHTML = `They won't even die properly?! You have done us all a great service in putting them to their final rest. You re-whacked ${score} zombie moles!`;
  $("#whack-a-mole")[0].style["width"] = "150%";
  $("#whack-a-mole")[0].style["font-size"] = "10vh";
  $("#whack-a-mole")[0].style["text-align"] = "center";
  [...$("#game-title")][0].innerText = `Whack-a-Mole: You Win!`;
  [...$("#game-title")][0].style["font-size"] = `10vh`;
  [...$("#title")][0].style["width"] = `150%`;
  [...$("#score-span")][0].remove();
  [...$("#timer")][0].remove();
  [...$("#game-controls")][0].innerHTML = "";
  [...$("#game-controls")][0].appendChild(startOverButtonFunc());
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
  [...$("#game-controls")][0].appendChild(startOverButtonFunc());
  clearInterval(timeKeeping);
};

let zombieDefeat = () => {
  $(
    "#whack-a-mole"
  )[0].innerHTML = `My God. What horrors have we unleashed!? Despite your efforts laying ${score} of them to rest, what remains of humanity is doomed.`;
  $("#whack-a-mole")[0].style["width"] = "165%";
  $("#whack-a-mole")[0].style["font-size"] = "10vh";
  $("#whack-a-mole")[0].style["text-align"] = "center";
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Zombie Moles Win!`;
  [...$("#game-title")][0].style["font-size"] = `10vh`;
  [...$("#title")][0].style["width"] = `185%`;
  [...$("#score-span")][0].remove();
  [...$("#timer")][0].remove();
  [...$("#game-controls")][0].innerHTML = "";
  [...$("#game-controls")][0].appendChild(startOverButtonFunc());
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
  [...$("#game-controls")][0].appendChild(startOverButtonFunc());
  clearInterval(timeKeeping);
};

let timeKeeping = setInterval(() => {
  if (
    timer === 50 &&
    [...$("#game-title")][0].innerText === `Whack-a-Mole: Ludicrous Mode`
  ) {
    ludicrousDefeat();
    clearInterval(timeKeeping);
  } else if (
    timer === 0 &&
    score > 24 &&
    [...$("#game-title")][0].innerText === `Whack-a-Mole: Zombie Mode`
  ) {
    zombieVictory();
    clearInterval(timeKeeping);
  } else if (
    timer === 0 &&
    score < 25 &&
    [...$("#game-title")][0].innerText === `Whack-a-Mole: Zombie Mode`
  ) {
    zombieDefeat();
    clearInterval(timeKeeping);
  } else if (timer === 0 && score > 24) {
    victory();
    clearInterval(timeKeeping);
  } else if (timer === 0 && score < 25) {
    defeat();
    clearInterval(timeKeeping);
  } else {
    if ($("#timer")[0]) {
      $("#timer")[0].innerText = `Time Remaining: ${timer--}`;
    }
  }
}, 1000);

$("#whack-a-mole").mousedown(marioHit);

$("#whack-a-mole").mouseup(marioWind);

$(".hole").click(function () {
  if (this.className === "mole") {
    this.className = "hole";
    $("#whack-a-mole").bind("mousedown", marioHit);
    $("#whack-a-mole").bind("mouseup", marioWind);
    [...$("#score")][0].innerText = `Moles Whacked: ${++score}`;
  } else if (this.className === "zombie-mole") {
    this.className = "hole";
    $("#whack-a-mole").bind("mousedown", marioHit);
    $("#whack-a-mole").bind("mouseup", marioWind);
    [...$("#score")][0].innerText = `Moles Whacked: ${++score}`;
  } else if (this.className === "bloody-mole") {
    this.className = "hole";
    [...$("#score")][0].innerText = "Moles Whacked: YOU DARE CHALLENGE US!?!?!";
    $("#score-span")[0].style.display = "block";
    $("#score-span")[0].style.margin = "0";
    $("#hammer-image")[0].style.position = "fixed";
    $("#hammer-image")[0].style.left = "70vw";
    $("#hammer-image")[0].style.top = "2vh";
    $("#hammer-image")[0].src = "images/uhoh-defeat.png";
    $("#whack-a-mole").unbind("mousedown", marioHit);
    $("#whack-a-mole").unbind("mouseup", marioWind);
  }
});

function whichMode() {
  if (localStorage.getItem("modeSelector") === "easy") {
    easyMode();
  } else if (localStorage.getItem("modeSelector") === "normal") {
    normalMode();
  } else if (localStorage.getItem("modeSelector") === "hard") {
    hardMode();
  } else if (localStorage.getItem("modeSelector") === "ludicrous") {
    ludicrousMode();
  } else if (localStorage.getItem("modeSelector") === "zombie") {
    zombieMode();
  } else {
    normalMode();
  }
}

clearAllInt();
