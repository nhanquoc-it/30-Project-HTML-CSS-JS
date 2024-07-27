// Get the value of elements on html
var boxList = document.querySelectorAll(".box");
var targetList = document.querySelectorAll(".target");

// Loop through each "target" image on the page
currentTarget = null;
targetList.forEach((target) => {
  target.addEventListener("dragstart", function () {
    this.classList.add("dragging");
    currentTarget = this; // Assign the current element (being dragged) to the variable "currentTarget"
  });
  target.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });
});

// Loop through the cells containing "box" on the page
boxList.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    // The default of the "dragover" event is to not allow dropping elements into the container.
    e.preventDefault(); // Prevent event default action
  });
  box.addEventListener("drop", function () {
    if (!box.querySelector(".target")) {
      this.appendChild(currentTarget);
    }
  });
});
