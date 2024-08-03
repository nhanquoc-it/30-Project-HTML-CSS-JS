// // Get the value of elements on html
const slide = document.querySelector(".slide");
let isMouseDown = false;
let startX, scrollLeft;

// Listen for the event when the user clicks down on the "slide" element
slide.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - slide.offsetLeft;
  scrollLeft = slide.scrollLeft;
});
// Listen for event when mouse pointer leaves "slide" element
slide.addEventListener("mouseleave", () => {
  isMouseDown = false;
});
// Listen for event when user releases mouse
slide.addEventListener("mouseup", () => {
  isMouseDown = false;
});
// Listen for events when the user moves the mouse over the "slide" element
slide.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;

  const x = e.pageX - slide.offsetLeft;
  // 3 is scroll speed
  const walk = (x - startX) * 3;
  slide.scrollLeft = scrollLeft - walk;
});

/* Note :
- isMouseDown : This variable will be used to track whether the user is clicking down or not?
- startX : Saves the X coordinate of the mouse pointer when starting to drag.
- scrollLeft : Saves the scroll position of the element when dragging starts.
- e.pageX : Is the X coordinate of the mouse pointer from the left edge of the document.
- slide.offsetLeft : Is the distance from the left edge of the document to the left edge of the "slide" element.
*/
