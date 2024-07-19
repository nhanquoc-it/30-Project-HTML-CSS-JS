// Get the value of elements on html
var images = document.querySelectorAll(".image-item img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".icon-close");
var galleryImg = document.querySelector(".gallery__inner img");
var gallery = document.querySelector(".gallery");

// Declare current image position (index) = 0
currentIndex = 0;

// Using forEach() loop: Loop through each image and assign events to all images
images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index; // Current image position = image position when user clicks
    showImage();
  });
});

// Show Image Funtion
function showImage() {
  // Check the [index] position of the first image (delete "Prev" button & opposite)
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  // Check the [index] position of the last image (delete "Next" button & opposite)
  if (currentIndex == images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
  // Show Image
  galleryImg.src = images[currentIndex].src; // Assign image at user click location to display on Gallery
  gallery.classList.add("show");
}
// Remove Image Funtion
function removeImage() {
  gallery.classList.remove("show");
}

// Click event to Close Icon
close.addEventListener("click", function () {
  removeImage();
});

// Event "Prev" & "Next"
prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showImage();
  }
});

next.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage();
  }
});

// Capture keyboard events when the user presses a key "Esc"
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    removeImage();
  }
});
