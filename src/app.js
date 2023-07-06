/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardGenerator();
};

function cardGenerator() {
  let icon = getRandomIcon();
  document.querySelector(`#topicon`).innerHTML = icon;
  document.querySelector(`#middleicon`).innerHTML = getRandomNumber();
  document.querySelector(`#bottomicon`).innerHTML = icon;
}

let getRandomNumber = () => {
  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * number.length);
  return number[randomNumber];
};

let getRandomIcon = () => {
  let icon = ["♥", "♠", "♦", "♣"];
  let randomIcon = Math.floor(Math.random() * icon.length);
  console.log(icon[randomIcon]);
  return icon[randomIcon];
};

document.querySelector(`#btn`).addEventListener("click", () => {
  cardGenerator();
});
