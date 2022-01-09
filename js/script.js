// modal1
var modal = document.getElementById("modalBook");
var button = document.getElementById("book");
var span = document.getElementById("times");

button.addEventListener("click", modalOpen1);
span.addEventListener("click", modalClose1);
window.addEventListener("click", clickedOutside1);
function modalOpen1() {
  modal.style.display = "block";
}

function modalClose1() {
  modal.style.display = "none";
}

function clickedOutside1(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal2
var modal2 = document.getElementById("modalCall");
var button2 = document.getElementById("call");
var span2 = document.getElementById("times1");

button2.addEventListener("click", modalOpen2);
span2.addEventListener("click", modalClose2);
window.addEventListener("click", clickedOutside2);
function modalOpen2() {
  modal2.style.display = "block";
}

function modalClose2() {
  modal2.style.display = "none";
}

function clickedOutside2(e) {
  if (e.target == modal2) {
    modal2.style.display = "none";
  }
}
// modal3
var modal3 = document.getElementById("modalReach");
var button3 = document.getElementById("reach");
var span3 = document.getElementById("time");

button3.addEventListener("click", modalOpen3);
span3.addEventListener("click", modalClose3);
window.addEventListener("click", clickedOutside3);
function modalOpen3() {
  modal3.style.display = "block";
}
function modalClose3() {
  modal3.style.display = "none";
}
function clickedOutside3(gs) {
  if (gs.target == modal3) {
    modal3.style.display = "none";
  }
}
// hamburger
let toggleButton = document.getElementsByClassName("toggle-button")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
