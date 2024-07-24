// Get the value of elements on html
var imgFeature = document.querySelector(".slideshow__feature");
var btnPrev = document.querySelector(".btn--prev");
var btnNext = document.querySelector(".btn--next");
var imageList = document.querySelectorAll(".slideshow__list .slideshow__image");
var imageItem = document.querySelectorAll(".slideshow__item");

var currentIndex = 0; // Initialize the initial [index] value = 0
// Function to update images based on [index]
function updateImageByIndex(index) {
  currentIndex = index;
  imageItem.forEach((item) => {
    item.classList.remove("active");
  });
  imgFeature.src = imageList[index].getAttribute("src");
  imageList[index].parentElement.classList.add("active");
}

// Loop through each image and listen for each image's events
imageList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    // Customize the 'opacity' effect
    imgFeature.style.opacity = "0";
    setTimeout(() => {
      updateImageByIndex(index);
      imgFeature.style.opacity = "1";
    }, 400);
  });
});

// Listen to events of 2 buttons (Prev, Next)
btnPrev.addEventListener("click", (e) => {
  if (currentIndex == 0) {
    currentIndex = imageList.length - 1;
  } else {
    currentIndex--;
  }

  // Customize the 'animation' effect
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideLeft 1s ease-in-out forwards";
  }, 200);
});
btnNext.addEventListener("click", (e) => {
  if (currentIndex == imageList.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideRight 1s ease-in-out forwards";
  }, 200);
});

updateImageByIndex(0);
