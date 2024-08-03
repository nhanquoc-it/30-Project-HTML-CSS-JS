// Get the value of elements on html.
const buttons = document.querySelectorAll("button");

// Listen for the "click" event when the user clicks on the "button".
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const audio = e.target.querySelector("audio");
    playSound(audio);
  });
});

// Declare the Callback function with the parameter "audio" passed in.
const playSound = (audio) => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};
// Listen for user key press events on the keyboard.
document.addEventListener("keydown", (e) => {
  const btn = document.querySelector(`.key-${e.key}`);
  btn && btn.click();
});

/* Note : 
- cloneNode() : Function that creates a copy of an object.
- play() : Function to play sound from newly created copy.
*/
