"use strict";
const form = document.getElementById("sign-up");
const emailData = document.getElementById("email");
const phoneData = document.getElementById("phone");
const passData = document.getElementById("pass");
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#pass');
form.addEventListener("submit", (e) => {
  if (emailData.value == null || emailData.value == "") {
    document.getElementById("email-error").innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> The email field is required."
  } else if (
    !emailData.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    document.getElementById("email-error").innerHTML =
      "<i class='fa-solid fa-triangle-exclamation'></i>  The email must be a valid email address.";
  } else {
    document.getElementById("email-error").textContent = "";

  }
  if (phoneData.value == "" || phoneData.value == null) {
    document.getElementById("tel-error").innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> The Mobile field is required.";
    e.preventDefault();
  } else if (phoneData.value.length < 10) {
    document.getElementById("tel-error").innerHTML =
      "<i class='fa-solid fa-triangle-exclamation'></i> The mobile must be 10 characters.";
    e.preventDefault();
  } else {
    document.getElementById("tel-error").textContent = "";
  }

  if (passData.value == "" || passData.value == null) {
    document.getElementById("pass-error").innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> The password field is required.";
    e.preventDefault();
  } else if (passData.value.length < 6) {
    document.getElementById("pass-error").innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> The password must be at least 6 characters.";
    e.preventDefault();
  } else if (passData.value.length > 18) {
    document.getElementById("pass-error").innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> The password may not be greater than 18 characters.";
    e.preventDefault();
  } else {
    document.getElementById("pass-error").textContent = "";
  }
  var userData= window.localStorage.getItem("userData")
   userData = JSON.parse(userData)
   userData.push([emailData.value,  passData.value]);

   window.localStorage.setItem("userData",JSON.stringify(userData))})

togglePassword.addEventListener('click', (e) => {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash')
})


