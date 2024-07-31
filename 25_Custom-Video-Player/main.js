// Get the value of elements on html
var video = document.querySelector("video");
var play = document.querySelector(".video-control__play");
var time = document.querySelector(".video-control__time");
var progressFill = document.querySelector(".video-control__progress-fill");
var prev = document.querySelector(".video-control__prev");
var next = document.querySelector(".video-control__next");
var volume = document.querySelector(".video-control__volume");
var volIcon = document.querySelector(".video-control__volume i");
var volInput = document.querySelector(".video-control__volume input");
var volCache = 0;

// Declare Video's "Play" & "Pause" functions
function togglePlay() {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class="video-icon bx bx-pause-circle"></i>`;
  } else {
    video.pause();
    play.innerHTML = `<i class="video-icon bx bx-play-circle"></i>`;
  }
}
// Declare the Video's "Update Time" function
function updateTimer() {
  time.innerHTML =
    ChangeTimeMMSS(video.currentTime) + " / " + ChangeTimeMMSS(video.duration);
  let percentProgress = Math.floor((video.currentTime / video.duration) * 100);
  progressFill.style.width = `${percentProgress}%`;
}
// Declare the "Change Minutes and Seconds" function of Video
function ChangeTimeMMSS(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec % 60);
  return `${minutes}:${seconds}`;
}
// Declare the function "Increase & Decrease" the speed of the Video
function skip(skipTime) {
  video.currentTime += skipTime;
}
// Declare the "Change Volume" function of the Video
function updateVolume() {
  if (video.volume == 0) {
    volIcon.classList.remove("bx-volume-full");
    volIcon.classList.add("bx-volume-mute");
  } else {
    volIcon.classList.add("bx-volume-full");
    volIcon.classList.remove("bx-volume-mute");
  }
}
// Listen to button events on the Video
play.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTimer);
prev.addEventListener("click", function () {
  skip(-2);
});
next.addEventListener("click", function () {
  skip(2);
});
volInput.addEventListener("change", function () {
  volCache = this.value;
  video.volume = this.value;
  updateVolume();
});
volIcon.addEventListener("click", function () {
  if (video.volume == 0) {
    video.volume = volCache;
    volInput.value = volCache;
  } else {
    video.volume = 0;
    volInput.value = 0;
  }
  updateVolume();
});
