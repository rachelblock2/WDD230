// ------------- Consume Weather API for Soda Springs Page ---------------- //

const apiURLSS = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

fetch(apiURLSS)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelector('#ss_current_1').textContent = jsObject.weather[0].description;
    document.querySelector('#ss_current_2').textContent = (Math.round(jsObject.main.temp));
    document.querySelector('#ss_current_4').textContent = jsObject.main.humidity;
    document.querySelector('#ss_current_5').textContent = jsObject.wind.speed;
  });

const apiForecastSS = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

fetch(apiForecastSS)
  .then((response) => response.json())
  .then((jsObject) => {
    let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); // Gets a new array from all forecast days at 1800 hours

    const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let step = 0; step < 5; step++) {
      // Loop through each of the next 5 forecast days
      let d = new Date(forecast[step].dt_txt); // Creates a new date with the information from the JSON
      let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
      document.querySelector(`#ss_dayoftheweek${step+1}`).textContent = dayofWeek[d.getDay()];
      document.querySelector(`#ss_img${step+1}`).setAttribute('src', image)
      document.querySelector(`#ss_img${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
      document.querySelector(`#ss_forecast${step+1}`).textContent = (Math.round(forecast[step].main.temp));
    };
  });


// ----------- Calculate current windchill on Soda Springs Page--------- //
ssTemperature = document.querySelector("#ss_current_2").innerHTML
ssWindSpeed = document.querySelector("#ss_current_5").innerHTML

console.log(ssTemperature)
console.log(ssWindSpeed)

if (ssTemperature < 50 && ssWindSpeed > 3) {
    totalWindChill = calcWindchill(ssTemperature, ssWindSpeed)
    document.querySelector("#ss_total_wind_chill").innerHTML = totalWindChill + "\u00B0";
} else {
    document.querySelector("#ss_total_wind_chill").innerHTML = "N/A";
}