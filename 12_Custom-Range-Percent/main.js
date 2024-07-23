// Get the value of elements on html
var process = document.querySelector(".process__bar");
var range = document.querySelector(".process__range");
var value = document.querySelector(".process__percent");

// Listen for the mouse cursor movement event on the "process__bar" bar
process.addEventListener("mousemove", function (e) {
  var processWidth = e.pageX - this.offsetLeft;
  var percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);
  updateProcess(percent);

  // Change the background color of the <body> based on the "percent" value
  var colorBody = getColorBodyFromPercent(percent);
  document.body.style.backgroundColor = colorBody;

  // Change text color of <h1> tag based on "percent" value
  var colorHeading = getColorHeadingFromPercent(percent);
  var heading = document.querySelector(".process__title");
  heading.style.color = colorHeading;
});

// Function to get color value based on "percent" value (<body>)
function getColorBodyFromPercent(percent) {
  // Calculate color based on percentage (take decimal value)
  var decimal = percent / 100;
  return `rgba(0,0,0,${decimal})`;
}

// Function to get color value based on "percent" value (<h1> tag)
function getColorHeadingFromPercent(percent) {
  return `hsl(0,0%,${percent}%)`;
}

// The function updates the percentage corresponding to "process"
function updateProcess(percent) {
  range.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
}
updateProcess(50);

/* Note : 
- e.pageX : Is the position of the mouse cursor on the horizontal axis (according to the x axis) of the web page.
- this.offsetLeft : Is the distance from the left edge of the "process" element to the left edge of the viewport.
- this.offsetWidth : Is the current width of the "process" element.
*/
