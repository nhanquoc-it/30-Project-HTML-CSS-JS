// Get the value of elements on html
var switchBtn = document.querySelector("#switch");
var body = document.querySelector("body");

// Listen to the "Change Interface" event when clicking on the "input" box with id "switch"
switchBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  // Get the "mode" value of the body and save it to "localStorage"
  let mode = body.getAttribute("class") ? "dark" : "";
  localStorage.setItem("mode", mode);
});
// Declare function when user reloads web page
function reload() {
  // Set the "mode" value of the previously saved body and display the interface
  let mode = localStorage.getItem("mode") ? "dark" : "";
  body.setAttribute("class", mode);
}
// Call the reload() function
reload();
