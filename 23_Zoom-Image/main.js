// Get the value of elements on html
let imgList = document.querySelectorAll(".zoomer__img");
let mirror = document.querySelector("#mirror");
// Lặp qua danh sách tùng ảnh và lắng nghe sự kiện "mousemove" & "mouseleave"
imgList.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
    var percentMouseOfWidth = (e.offsetX / this.offsetWidth) * 100;
    var percentMouseOfHeight = (e.offsetY / this.offsetHeight) * 100;
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;
    mirror.style.backgroundSize = `1000px 1000px`;
    mirror.style.backgroundPosition = `${percentMouseOfWidth}% ${percentMouseOfHeight}%`;

    var srcImg = e.target.getAttribute("src");
    mirror.style.backgroundImage = `url(${srcImg})`;
    mirror.classList.remove("hide");
  });
  img.addEventListener("mouseleave", function (e) {
    mirror.classList.add("hide");
  });
});

/* Note : 
- e.offsetX,e.offsetY :  Represents the distance from (X: left edge, Y: top edge) of the element on which the event occurs to the position of the mouse pointer.
- this.offsetWidth, this.offsetHeight : Represents the (width, height) of the element being processed including padding and border, but not margin.
- e.clientY, e.clientX : Represents the coordinates (vertical y, horizontal x) of the mouse in the browser window (viewport) when the mouse event occurs.
*/
