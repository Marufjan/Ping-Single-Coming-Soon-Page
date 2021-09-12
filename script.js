"use strict";

const email = document.querySelector(".email");
const myform = document.querySelector(".form");
const errorMessage = document.querySelector(".error");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

myform.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value.match(pattern)) {
    email.value = email.value;
    errorMessage.style.color = "hsl(223, 87%, 63%)";
    email.style.borderColor = "hsl(223, 87%, 63%)";
    errorMessage.textContent = "Your request is accepted!";
    errorMessage.classList.add("show");
  } else {
    errorMessage.textContent = "Please provide a valid email address!";
    errorMessage.classList.add("show");
    email.value = email.value;
    email.style.borderColor = "hsl(354, 100%, 66%)";

    setTimeout(() => {
      email.value = "";
      email.placeholder = "Your Email Address ";
      errorMessage.classList.remove("show");
      email.style.borderColor = "hsl(223, 100%, 88%)";
    }, 2000);
  }
});
