// Get the value of elements on html
let container = document.querySelector(".container");

// Run a for loop to generate 200 <div> elements
for (let i = 0; i < 200; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  // Listen for mouse move event on <div> element
  square.addEventListener("mouseenter", function (e) {
    let elm = e.currentTarget;
    let color = randomColor();
    elm.style.background = `${color}`;
    elm.style.boxShadow = `0 0 10px ${color},0 0 100px ${color}`;
  });
  // Listen to the mouse-out event of the <div> element
  square.addEventListener("mouseleave", function (e) {
    let elm = e.currentTarget;
    elm.style.background = "#1d1d1d";
    elm.style.boxShadow = "0 0 2px #000";
  });
}

// Declare random color generator function
function randomColor() {
  var charColor = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }
  return color;
}
