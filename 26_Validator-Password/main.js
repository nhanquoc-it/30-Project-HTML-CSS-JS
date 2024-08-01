// Get the value of elements on html
var input = document.querySelector(".form-validate__input");
var iconEye = document.querySelector(".form-validate__icon");
var lowercase = document.querySelector(".field-validator__lowercase");
var uppercase = document.querySelector(".field-validator__uppercase");
var number = document.querySelector(".field-validator__number");
var symbol = document.querySelector(".field-validator__symbol");
var character = document.querySelector(".field-validator__character");

// Listen to the event when clicking on the "eye" icon, it will change the icon
iconEye.addEventListener("click", function () {
  if (input.getAttribute("type") == "text") {
    input.setAttribute("type", "password");
    iconEye.classList.remove("fa-eye");
    iconEye.classList.add("fa-eye-slash");
  } else {
    input.setAttribute("type", "text");
    iconEye.classList.add("fa-eye");
    iconEye.classList.remove("fa-eye-slash");
  }
});
// Listen for "input" event from user and check valid fields
input.addEventListener("input", function () {
  let val = input.value;
  checkFieldValidate(val);
});

// Function to check if input data fields are valid or not?
function checkFieldValidate(val) {
  /[a-z]/.test(val)
    ? lowercase.classList.add("check")
    : lowercase.classList.remove("check");
  /[A-Z]/.test(val)
    ? uppercase.classList.add("check")
    : uppercase.classList.remove("check");
  /[0-9]/.test(val)
    ? number.classList.add("check")
    : number.classList.remove("check");
  /[\W]/.test(val)
    ? symbol.classList.add("check")
    : symbol.classList.remove("check");
  val.length >= 8
    ? character.classList.add("check")
    : character.classList.remove("check");
}
