const eye = document.querySelector(".password-eye");
const hide_eye = document.querySelector(".hide-eye");
const show_eye = document.querySelector(".show-eye");
const password = document.querySelector("#password");
const password_container = document.querySelector(".password-container");
const login = document.querySelector("#login");
const email = document.querySelector("#email");
var err_pass = document.querySelector(".err-password");
const err_email = document.querySelector(".err-email");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    hide_eye.classList.toggle("show");
    show_eye.classList.toggle("show");
  } else {
    password.type = "password";
    hide_eye.classList.toggle("show");
    show_eye.classList.toggle("show");
  }
});

login.addEventListener("click", (e) => {
  e.preventDefault();

  //   Email validation
  if (email.value.trim() == "") {
    error(email, "looks like this is not an email");
  } else {
    success(email);
  }

  //  Email pattern validation
  if (email.value.match(pattern)) {
    success(email);
  } else {
    error(email, "looks like this is not an email");
  }

  //   Password validation
  if (password.value.trim() == "") {
    error_password(password, "Password can not be empty");
  } else if (
    password.value.trim().length < 8 ||
    password.value.trim().length > 20
  ) {
    error_password(password, "Password min of 8 and max 20 characters");
  } else {
    success_password(password);
  }

  if (
    email.value == "altschoolafrica@gmail.com" &&
    password.value == "circle127"
  ) {
    window.location.href = "all.html";
  }
});

// function for email validation
function error(element, msg) {
  element.style.border = "3px solid hsl(0, 100%, 74%)";
  const parent = element.parentElement;
  const z = parent.querySelector("input");
  z.placeholder = "";
  err_email.innerHTML = msg;
  err_email.style.color = "hsl(0, 100%, 74%)";
}

function success(element) {
  element.style.border = "3px solid #35268c";
  const parent = element.parentElement;
  const z = parent.querySelector("input");
  z.placeholder = "";
  err_email.textContent = "";
}

// function for password validation
function error_password(element, msg) {
  password_container.style.border = "3px hsl(0, 100%, 74%) solid";
  const parent = element.parentElement;
  const z = parent.querySelector("input");
  z.placeholder = "";
  err_pass.innerHTML = msg;
  err_pass.style.color = "hsl(0, 100%, 74%)";
}

function success_password(element) {
  password_container.style.border = "3px solid #35268c";
  const parent = element.parentElement;
  const z = parent.querySelector("input");
  z.placeholder = "";
  err_pass.textContent = "";
}
