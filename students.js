const toggle = document.querySelector(".icon-toggle");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".filter");
const nav = document.querySelector(".nav-content");
const filter = document.querySelector(".filter-data-content");
const filter_modal = document.querySelector(".filter-modal");
const slider = document.querySelectorAll(".slide");

hamburger.addEventListener("click", () => {
  close.classList.add("show");
  hamburger.classList.add("show");
  nav.classList.add("show");
});

close.addEventListener("click", () => {
  close.classList.remove("show");
  hamburger.classList.remove("show");
  nav.classList.remove("show");
});

filter.addEventListener("click", () => {
  filter_modal.classList.toggle("show");
});

const prev = document.querySelector(".circle-one");
const next = document.querySelector(".circle-two");
const tableSlider = document.querySelectorAll(".slide");

var current = 0;

function reset() {
  for (let i = 0; i < tableSlider.length; i++) {
    tableSlider[i].style.display = "none";
  }
}

function start() {
  reset();
  tableSlider[0].style.display = "block";
}

function right() {
  reset();
  tableSlider[current + 1].style.display = "block";
  current++;
}

function left() {
  reset();
  tableSlider[current - 1].style.display = "block";
  current--;
}

prev.addEventListener("click", () => {
  if (current === 0) {
    current = tableSlider.length;
  }
  left();
});

next.addEventListener("click", () => {
  if (current === tableSlider.length - 1) {
    current = -1;
  }
  right();
});

start();

const todaysDate = new Date().toDateString(); // Current date
const currentDay = document.querySelector(".currentDay");

currentDay.innerHTML = todaysDate;
