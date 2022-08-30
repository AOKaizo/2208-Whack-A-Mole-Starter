let score = 0;
let holes = [...$(".hole")];
let moles = [...$(".mole")];
let easyMoles;
let easyHoles;
let normalMoles;
let normalHoles;
let hardMoles;
let hardHoles;
normalMode();

function easyMode() {
  clearInterval(hardMoles);
  clearInterval(hardHoles);
  clearInterval(normalMoles);
  clearInterval(normalHoles);
  
  easyMoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "hole")[
        Math.round(Math.random() * holes.length)
      ].className = "mole"),
    500
  );
  easyHoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "mole")[
        Math.round(
          Math.random() *
            holes.filter((element) => element.className === "mole").length
        )
      ].className = "hole"),
    10000
  );
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Easy Mode`
}

function normalMode() {
  clearInterval(easyMoles);
  clearInterval(easyHoles);
  clearInterval(hardMoles);
  clearInterval(hardHoles);
  normalMoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "hole")[
        Math.round(Math.random() * holes.length)
      ].className = "mole"),
    1000
  );
  normalHoles = setInterval(
    () =>
      (holes.filter((element) => element.className === "mole")[
        Math.round(
          Math.random() *
            holes.filter((element) => element.className === "mole").length
        )
      ].className = "hole"),
    2500
  );
  [...$("#game-title")][0].innerText = `Whack-a-Mole: Normal Mode`
}

function hardMode() {
  clearInterval(easyMoles);
  clearInterval(easyHoles);
  clearInterval(normalMoles);
  clearInterval(normalHoles);

  hardMoles = setInterval(
    () => (
      holes.forEach((element) =>
        Math.ceil(Math.random() * 2) > 1 ? (element.className = "mole") : null
      ),
      1000
    )
  );

  hardHoles = setInterval(
    () => (
      holes.forEach((element) =>
        Math.ceil(Math.random() * 2) > 1 ? (element.className = "hole") : null
      ),
      1000
    )
  );

  [...$("#game-title")][0].innerText = `Whack-a-Mole: Hard Mode`;
}

holes.forEach((element) =>
  element.addEventListener("click", () => {
    if (element.className === "mole") {
      element.className = "hole";
      [...$("#score")][0].innerText = `Moles Whacked: ${++score}`;
    }
  })
);
