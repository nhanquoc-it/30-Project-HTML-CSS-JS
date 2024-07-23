// Get the value of elements on html
var btnSuccess = document.querySelector(".toast-notify--success");
var btnWarning = document.querySelector(".toast-notify--warning");
var btnError = document.querySelector(".toast-notify--error");

// Listen for HTML <button> button click events
btnSuccess.addEventListener("click", function () {
  renderToast("success", 10000);
});
btnWarning.addEventListener("click", function () {
  renderToast("warning");
});
btnError.addEventListener("click", function () {
  renderToast("error");
});

// Initialize and declare a function that displays messages for each <button> button
function renderToast(status, timeout) {
  let template = `
    <i class="toast__icon fa-solid fa-circle-check"></i>
    <span class="toast__message">This is a Success message</span>
    `;
  switch (status) {
    case "success":
      template = `
                <i class="toast__icon fa-solid fa-circle-check"></i>
                <span class="toast__message">This is a Success message</span>
                `;
      break;
    case "warning":
      template = `
                <i class="toast__icon fa-solid fa-circle-exclamation"></i>
                <span class="toast__message">This is a Warning message</span>
                `;
      break;
    case "error":
      template = `
                <i class="toast__icon fa-solid fa-triangle-exclamation"></i>
                <span class="toast__message">This is a Error message</span>
                `;
      break;
  }

  // Create a new Element <div> and assign values ​​to it
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add("toast--" + status);
  toast.innerHTML = `
        ${template}
        <span class="toast__timeline"></span>
  `;

  // Add the Element just created above into the DOM with id="toast-content"
  var toastContent = document.getElementById("toast-content");
  toastContent.appendChild(toast);

  // Set hide time and remove toast from DOM
  timeout = timeout || 4000;
  setTimeout(function () {
    toast.style.animation = "toastHide 2s ease forwards";
  }, timeout + 2000);
  setTimeout(function () {
    toast.remove();
  }, timeout + 4000);
}
