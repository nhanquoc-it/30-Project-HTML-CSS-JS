// Get the value of elements on html
var eKey = document.querySelector(".card.key p:last-child");
var eLocation = document.querySelector(".card.location p:last-child");
var eWhich = document.querySelector(".card.which p:last-child");
var eCode = document.querySelector(".card.code p:last-child");
var alert = document.querySelector(".alert");
var box = document.querySelector(".box");
var result = document.querySelector(".result");

// Listen for user keyboard press events
document.addEventListener("keydown", (e) => {
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  result.innerText = e.key;
  alert.classList.add("hide");
  box.classList.remove("hide");
});
