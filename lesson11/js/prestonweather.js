// ------------- Banner for free pancakes on Friday ----------//
let date = new Date();
let weekday = date.toLocaleDateString("default", { weekday: 'long' });

let message1 = "";

if (weekday == "Friday") {
    message1 = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
    document.querySelector("#pancakes").textContent = message1
} else {
  let pancakes = document.querySelector("#pancakes");
  pancakes.remove()
}



// ------------- Consume Weather and Forecast API for Preston Page ---------------- //

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelector('#current_1').textContent = jsObject.weather[0].description;
    document.querySelector('#current_2').textContent = (Math.round(jsObject.main.temp));
    document.querySelector('#current_4').textContent = jsObject.main.humidity;
    document.querySelector('#current_5').textContent = jsObject.wind.speed;
  });

const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

fetch(apiForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); // Gets a new array from all forecast days at 1800 hours

    const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let step = 0; step < 5; step++) {
      // Loop through each of the next 5 forecast days
      let d = new Date(forecast[step].dt_txt); // Creates a new date with the information from the JSON
      let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
      document.querySelector(`#dayoftheweek${step+1}`).textContent = dayofWeek[d.getDay()];
      document.querySelector(`#img${step+1}`).setAttribute('src', image)
      document.querySelector(`#img${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
      document.querySelector(`#forecast${step+1}`).textContent = (Math.round(forecast[step].main.temp));
    };
  });


// ----------- Calculate current windchill on Preston Page--------- //
temperature = document.querySelector("#current_2").innerHTML
windSpeed = document.querySelector("#current_5").innerHTML

if (temperature < 50 && windSpeed > 3) {
    totalWindChill = calcWindchill(temperature, windSpeed)
    document.querySelector("#total_wind_chill").innerHTML = totalWindChill + "\u00B0";
} else {
    document.querySelector("#total_wind_chill").innerHTML = "N/A";
}