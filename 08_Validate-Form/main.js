// Get the value of elements on html
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");

// Declare the showError() function
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

// Declare the showSuccess() function
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

// Check Value Empty
function checkEmptyInvalid(listInput) {
  listInput.forEach((input) => {
    input.value = input.value.trim(); // Check input and remove terminal whitespace

    // Check if the input data is empty (leave blank)
    let isEmptyError = false;
    if (!input.value) {
      isEmptyError = true;
      showError(input, "This field is required and cannot be left empty!");
    } else {
      showSuccess(input);
    }
    return isEmptyError;
  });
}

// Check Email Error
function checkEmailError(input) {
  // Code check email
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  input.value = input.value.trim();

  // regexEmail.test(input.value) : If the value is valid ? return true : otherwise return false.
  let isEmailError = !regexEmail.test(input.value);
  if (isEmailError) {
    showError(input, "Your email is not valid!");
  } else {
    showSuccess(input);
  }
  return isEmailError;
}

// Check Length Error
function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Must not exceed ${max} characters`);
    return true;
  }
  return false;
}

// Check Match Password
function checkMatchPasswordError(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "Passwords do not match!");
    return true;
  }
  return false;
}

// ====================== Form Event Submit ======================
form.addEventListener("submit", function (e) {
  // Prevent an event when the user presses 'submit' on the form which will redirect to another 'action'.
  e.preventDefault();

  // Call functions and assign variables
  let isEmptyError = checkEmptyInvalid([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmailError(email);
  let isUsernameLengthError = checkLengthError(username, 3, 10);
  let isPasswordLengthError = checkLengthError(password, 3, 30);
  let isMatchPasswordError = checkMatchPasswordError(password, confirmPassword);

  if (
    isEmptyError ||
    isEmailError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isMatchPasswordError
  ) {
    // Do nothing
  } else {
    // Logic, call API,...
  }
});
