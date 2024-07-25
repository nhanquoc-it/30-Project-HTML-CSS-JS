// Get the value of elements on html
var animationElements = document.querySelectorAll(".scroll");

// Declare a function start moving the animation of elements on the page
function activeAnimationElementInWindow(element) {
  var rect = element.getClientRects()[0];
  var heightScreen = window.innerHeight;
  // Check if an element is inside the browser window or not?
  console.log(rect);
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}
// Declare a function to check motion effects
function checkAnimation() {
  animationElements.forEach((elm) => {
    activeAnimationElementInWindow(elm);
  });
}
// Catch the mouse scroll event when the user scrolls the page
window.onscroll = checkAnimation;

/* Note :
 - element.getClientRects()[0] : Get the element's position on the page ([0] : select the first element).
 - window.innerHeight : Get the height of the browser window (visible window).
 - rect.bottom < 0: Checks if the element is at the top of the display window ?
 - rect.top > heightScreen: Check if the element is at the bottom of the display window ? 
*/
