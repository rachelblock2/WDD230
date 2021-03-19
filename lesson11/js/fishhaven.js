// ------------- Consume Weather API for Fish Haven Page ---------------- //

const apiURLFH = "https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

fetch(apiURLFH)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelector('#fh_current_1').textContent = jsObject.weather[0].description;
    document.querySelector('#fh_current_2').textContent = (Math.round(jsObject.main.temp));
    document.querySelector('#fh_current_4').textContent = jsObject.main.humidity;
    document.querySelector('#fh_current_5').textContent = jsObject.wind.speed;
  });

const apiForecastFH = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

fetch(apiForecastFH)
  .then((response) => response.json())
  .then((jsObject) => {
    let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); // Gets a new array from all forecast days at 1800 hours

    const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let step = 0; step < 5; step++) {
      // Loop through each of the next 5 forecast days
      let d = new Date(forecast[step].dt_txt); // Creates a new date with the information from the JSON
      let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
      document.querySelector(`#fh_dayoftheweek${step+1}`).textContent = dayofWeek[d.getDay()];
      document.querySelector(`#fh_img${step+1}`).setAttribute('src', image)
      document.querySelector(`#fh_img${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
      document.querySelector(`#fh_forecast${step+1}`).textContent = (Math.round(forecast[step].main.temp));
    };
  });



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

// 5607916 for Soda Springs

// Figure this out for individual pages later
// const requestdata = 'https://byui-cit230.github.io/weather/data/towndata.json';

// fetch(requestdata)
//   .then((response) => response.json())
//   .then((jsonObject) => {
//     const towns = jsonObject['towns'];
//     for (let i = 0; i < towns.length; i++ ) {
//       // removes unnecessary towns from the loop
//       if (towns[i]== towns[1])
//         continue;
//       if (towns[i] == towns[3])
//         continue;
//       if (towns[i] == towns[4])
//         continue;
//       if (towns[i] == towns[5])
//         continue;
//         // Should allow for the upcoming events to show up FIX THIS FIX THIS, will be used for events on the city pages//

//         let eventBox = document.createElement('div');
//         let event1 = document.createElement('p');
//         let event2 = document.createElement('p');
//         let event3 = document.createElement('p');

//         event1.textContent = towns[i].events[1];
//         event2.textContent = towns[i].events[2];
//         event3.textContent = towns[i].events[3];

//         eventBox.appendChild(event1);  
//         eventBox.appendChild(event2);
//         eventBox.appendChild(event3);

//         document.querySelector('#upcoming_events').appendChild(eventBox);
//         // document.querySelector('#upcoming_1').textContent = towns[i].events[1];
//         // document.querySelector('#upcoming_2').textContent = towns[i].events[2];
//         // document.querySelector('#upcoming_3').textContent = towns[i].events[3];
//     }
//   });