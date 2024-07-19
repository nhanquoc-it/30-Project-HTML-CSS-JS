// Get the value of elements on html
var btnOpen = document.querySelector(".open__modal");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".icon-close");
var btnClose = document.querySelector(".btn-close");

// Function initialization : toggleModal
function toggleModal() {
  modal.classList.toggle("hide");
}
// Event addEventListener() for :
btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  /*If the value the user selects is equal to the current value on the html element, the toggleModal() function will be called.*/
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
