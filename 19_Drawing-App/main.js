// Get the value of elements on html
var color = document.querySelector("#color");
var eraser = document.querySelector("#eraser");
var decrease = document.querySelector("#decrease");
var sizeDOM = document.querySelector("#size");
var increase = document.querySelector("#increase");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");
var buttons = document.querySelectorAll("button");
// Get the value of <canvas> on html
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// Initialize and assign initial values ​​before using canvas
canvas.width = 1000;
canvas.height = 600;
var pos1 = {
  x: 0,
  y: 0,
};
var pos2 = {
  x: 0,
  y: 0,
};
var isDrawing = false;
var colorPaint = "#000000";
var size = 5;
sizeDOM.innerText = size;

// Listen for events when the user mouses down
document.addEventListener("mousedown", function (e) {
  pos1 = {
    x: e.offsetX,
    y: e.offsetY,
  };
  isDrawing = true;
});

// Listen for events when the user moves the mouse
document.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    pos2 = {
      x: e.offsetX,
      y: e.offsetY,
    };
    // Draw in progress
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.strokeStyle = colorPaint;
    ctx.fillStyle = colorPaint;
    ctx.lineWidth = size * 2;
    ctx.lineCap = "round";
    // Finish drawing
    ctx.stroke();

    pos1.x = pos2.x;
    pos1.y = pos2.y;
  }
});

// Listen for events when the user mouses over
document.addEventListener("mouseup", function (e) {
  isDrawing = false;
});
// Listen for the event of changing the color code when selecting the input box with id "color"
color.addEventListener("change", function (e) {
  console.log("Bạn đã chọn màu: ", e.target.value);
  colorPaint = e.target.value;
});
// Listen for the "Erase, Delete" event when clicking on the icon with id "eraser"
eraser.addEventListener("click", function () {
  console.log("Cục tẩy được kích hoạt");
  colorPaint = "#ffffff";
});
// Listen for the "Decrease" event when clicking on the icon with id "decrease"
decrease.addEventListener("click", function () {
  size -= 5;
  size = size > 5 ? size : 5;
  sizeDOM.innerText = size;
});
// Listen for the "Increase" event when clicking on the icon with id "increase"
increase.addEventListener("click", function () {
  size += 5;
  size = size < 30 ? size : 30;
  sizeDOM.innerText = size;
});
// Listen for the "click" event when clicking the "X" icon on the DOM
clear.addEventListener("click", function () {
  var canvasRects = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasRects.width, canvasRects.height);
  console.log("Bản vẽ của bạn đã bị xóa");
});
// Listen for the "save file" event when clicking on the icon with the id "save"
save.addEventListener("click", function () {
  var output = canvas.toDataURL("image/png");
  save.setAttribute("href", output);
});
