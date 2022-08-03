const toggle = document.querySelector(".icon-toggle");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".filter");
const nav = document.querySelector(".nav-content");

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

const todaysDate = new Date().toDateString(); // Current date
const currentDay = document.querySelector(".currentDay");

currentDay.innerHTML = todaysDate;
