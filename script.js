let result = document.querySelector(".container .sir .computer .result");
let resulty = document.querySelector(".container .sir .player .resulty");
let hsl = document.querySelector(".container .hasil");
let batu = document.querySelector(".container .opsi .batu #batu");
let kertas = document.querySelector(".container .opsi .kertas #kertas");
let gunting = document.querySelector(".container .opsi .gunting #gunting");

function isi(comp) {
  if (comp == 1) {
    result.innerHTML = "<img src='batu.png'/>";
    return;
  } else if (comp == 2) {
    result.innerHTML = "<img src='kertas.png'/>";
    return;
  } else {
    result.innerHTML = "<img src='gunting.png'/>";
    return;
  }
}

function isii(player) {
  if (player == 1) {
    resulty.innerHTML = "<img src='batu.png'/>";
    return 1;
  } else if (player == 2) {
    resulty.innerHTML = "<img src='kertas.png'/>";
    return 2;
  } else {
    resulty.innerHTML = "<img src='gunting.png'/>";
    return 3;
  }
}

function hasil(comp, player) {
  if (comp == player) {
    hsl.innerHTML = "Draw";
  } else if (
    (player == 1 && comp == 3) ||
    (player == 2 && comp == 1) ||
    (player == 3 && comp == 2)
  ) {
    hsl.innerHTML = "You Win!!";
  } else {
    hsl.innerHTML = "You Lose!!";
  }
}

function playerChoice(choice) {
  let comp = Math.floor(Math.random() * 3) + 1;
  isi(comp);
  let player = isii(choice);
  hasil(comp, player);
}
