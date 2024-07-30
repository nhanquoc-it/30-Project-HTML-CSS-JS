/*========================== Method 1 ==========================*/
// // Get the value of elements on html
// var buttonList = document.querySelectorAll(".category-name");
// var imageList = document.querySelectorAll(".filter-foods__img");

// // Declare the "active" button function
// function activeButton(btnActive) {
//   buttonList.forEach((btn) => {
//     btn.classList.remove("active");
//   });
//   btnActive.classList.add("active");
// }
// // Loop through each "button" in the DOM
// buttonList.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     let currentBtn = e.currentTarget;
//     activeButton(currentBtn);
//     let typeBtn = currentBtn.getAttribute("type");
//     imageList.forEach((img) => {
//       let typeImg = img.getAttribute("type");
//       if (typeBtn == "all" || typeBtn == typeImg) {
//         img.classList.remove("hide");
//       } else {
//         img.classList.add("hide");
//       }
//     });
//   });
// });
/*========================== Method 2 ==========================*/
// Get the value of elements on html
var buttonList = document.querySelectorAll(".category-name");
var imgList = document.querySelectorAll(".filter-foods__img");
var foodList = document.querySelector(".filter-foods__list");

// Declare an empty array and add a list of images to that empty array
var arr = [];
imgList.forEach((img) => {
  arr.push({
    src: img.src,
    type: img.getAttribute("type"),
  });
});
// Declare the "active" button function
function activeButton(btnActive) {
  buttonList.forEach((btn) => {
    btn.classList.remove("active");
  });
  btnActive.classList.add("active");
}
// Loop through each button
buttonList.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Active Button
    activeButton(e.currentTarget);
    // Filter Data Food
    let typeBtn = e.currentTarget.getAttribute("type");
    if (typeBtn == "all") {
      renderFood(arr);
      return;
    }
    let filterData = arr.filter((food) => {
      return food.type == typeBtn;
    });
    renderFood(filterData);
  });
});

// Declare the function to load the interface of the dishes with "list" being the array (arr) passed in.
function renderFood(list) {
  foodList.innerHTML = "";
  list.forEach((item) => {
    let createImg = document.createElement("img");
    createImg.classList.add("filter-foods__img");
    createImg.src = item.src;
    createImg.setAttribute("type", item.type);
    let createDiv = document.createElement("div");
    createDiv.classList.add("filter-foods__item");
    createDiv.append(createImg);
    foodList.append(createDiv);
  });
}
