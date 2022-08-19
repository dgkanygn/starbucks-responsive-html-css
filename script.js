const hamburgerMenu = document.getElementById("hg-menu");

const menuOn = document.getElementById("menu-on");
const menuOff = document.getElementById("menu-off");

const body = document.body;

function menuOnF() {
  hamburgerMenu.style.display = "block";
  body.style.overflowY = "hidden";
}

function menuOffF() {
  hamburgerMenu.style.display = "none";
  body.style.overflowY = "scroll";
}

menuOn.addEventListener("click", menuOnF);
menuOff.addEventListener("click", menuOffF);
