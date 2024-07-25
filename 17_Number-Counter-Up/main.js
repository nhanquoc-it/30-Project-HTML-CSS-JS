// Get the value of elements on html
var listCounter = document.querySelectorAll(".counter");

// Declare the counterUp() function to count the value of [value] on the DOM
function counterUp(element) {
  var countValue = element.querySelector(".value");
  var end = parseInt(countValue.innerText);
  var count = 0;
  var time = 144;
  var step = end / time;

  let counting = setInterval(() => {
    count += step;
    if (count > end) {
      clearInterval(counting);
      countValue.innerText = end;
    } else {
      countValue.innerText = Math.round(count);
    }
  });
}

// Loop through each value with class 'counter'
listCounter.forEach((item) => {
  counterUp(item);
});

/* Note : 
- count: Counter variable to store the current value of the count.
- time: The number of time steps in which counting will take place.
- step: Jump to increase the counter value each iteration. 
        The step value is calculated by dividing end by time.
- setInterval() : This function will execute a callback function after a certain period of time.
*/
