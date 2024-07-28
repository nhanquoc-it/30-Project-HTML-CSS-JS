/* Method 2: Using JS */
// Get the value of elements on html
let p = document.getElementById("typing-text-js");

// Initialize the necessary variables
let index = 0;
let isTyping = true;
const copyString = p.innerHTML;
const time = 100;
const timeDelete = 20;
const delayBeforeDeleting = 3000;
let typingInterval;

// Text update function
function type() {
  if (isTyping) {
    index++;
    if (index > copyString.length) {
      // Stop typing
      isTyping = false;
      clearInterval(typingInterval);
      // Delay deleting text after typing
      setTimeout(() => {
        typingInterval = setInterval(deleteText, timeDelete); // Start deleting text
      }, delayBeforeDeleting);
    }
  } else {
    deleteText();
  }
  p.innerHTML = copyString.substring(0, index);
}

// Function to delete text
function deleteText() {
  index--;
  if (index < 0) {
    // Start typing again from the beginning
    isTyping = true;
    clearInterval(typingInterval); // Stop setInterval
    typingInterval = setInterval(type, time); // Start typing again
  }
  // Update the content of the HTML element p
  p.innerHTML = copyString.substring(0, index);
}

// Start typing
typingInterval = setInterval(type, time);

/* Note :
- index : Current index of the string
- isTyping : Typing status
- copyString : The text string you want to type
- time : Time between updates (milliseconds)
- timeDelete : Time to delete characters (milliseconds)
- delayBeforeDeleting : Delay time before deletion (3 seconds)
- typingInterval : Used to store the ID of setInterval
*/
