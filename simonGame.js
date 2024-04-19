let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// let btn = document.querySelectorAll("button");

document.addEventListener("keypress", function () {
  if (started == 0) {
    // alert("Game started");
    document.querySelector("body").style.backgroundColor = "green";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    started = true;
    levelup();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let randidx = Math.floor(Math.random() * 3);
  let randColor = btns[randidx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randbtn);
}

function checkans(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key to start the Game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkans(userSeq.length - 1);
}

let Allbtn = document.querySelectorAll(".btn");

for (btn of Allbtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
