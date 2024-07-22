// Get the value of elements on html
var search = document.querySelector(".weather-app__search");
var city = document.querySelector(".weather-app__city");
var country = document.querySelector(".weather-app__country");
var time = document.querySelector(".weather-app__times");
var value = document.querySelector(".weather-app__value");
var climate = document.querySelector(".weather-app__climate");
var eye = document.querySelector(".weather-app__eye");
var wind = document.querySelector(".weather-app__wind");
var sun = document.querySelector(".weather-app__sun");
var content = document.querySelector(".weather-app__content");
var body = document.querySelector("body");

// Declare asynchronous processing function changeWeather()
async function changeWeather(input) {
  // Get API : https://openweathermap.org/api
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

  let data = await fetch(apiURL).then((res) => res.json());
  console.log(data);

  if (data.cod == 200) {
    content.classList.remove("hide");
    // Passing data from API to HTML DOM
    city.innerText = data.name;
    country.innerText = data.sys.country;
    time.innerText = new Date().toLocaleString("vi");
    climate.innerText = data.weather[0] ? data.weather[0].main : "";
    eye.innerText = data.visibility + "(m)";
    wind.innerText = data.wind.speed + "(m/s)";
    sun.innerText = data.main.humidity + "(%)";

    const temp = Math.round(data.main.temp);
    value.innerHTML = temp;

    // Check temperature parameters to divide into 4 seasons
    if (temp >= 30) {
      body.setAttribute("class", "summer");
    } else if (temp >= 25) {
      body.setAttribute("class", "spring");
    } else if (temp >= 20) {
      body.setAttribute("class", "autumn");
    } else {
      body.setAttribute("class", "winter");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let input = search.value.trim();
    changeWeather(input);
  }
});

/*
When calling the changeWeather("Ha Noi") function, it will send a request to the OpenWeatherMap API 
to get the wneather informatio of Hanoi city.
After the fetch(apiURL) command completes and returns the data, 
we call .then() to process the returned result.
When the JSON data is returned from the API, it will be saved to the 'data' variable.
*/

// Link weather countries : https://vi.meteotrend.com/
