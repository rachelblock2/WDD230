// Fixes: add specific javascript pages, fix windchill

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



// ------------- Change range slider on the form ----------//

// When the rating input is changed by the user, update the range in the HTML
function adjustRating(rating) {
  document.getElementById("rate").innerHTML = rating;
}

// Allow for the first option of select to show, but not be selectable by user
function selectResponse() {
  const s = document.querySelector('#selected');
  const sel = document.querySelector('#select_subject');
  s.style.display = "block";
  s.textContent = sel.value;
}

// ------------- Parse through JSON file, display Preston, Fish Haven, and Soda Springs Info on homepage ----------//

const requestdata = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestdata)
  .then((response) => response.json())
  .then((jsonObject) => {
    const towns = jsonObject['towns'];

    // Determines the file name
    var path = window.location.pathname;
    var pageURL = path.split('/').pop();
  
    let eventBox = document.createElement('div');
    let event1 = document.createElement('p');
    let event2 = document.createElement('p');
    let event3 = document.createElement('p');

    townIndex = selectTown(pageURL) // Returns the index of the town in the JSON file

    // Adds the information of the town JSON data to the HTML
    event1.textContent = towns[townIndex].events[0];
    event2.textContent = towns[townIndex].events[1];
    event3.textContent = towns[townIndex].events[2];
    if (townIndex == 2) {
      let event4 = document.createElement('p');
      event4.textContent = towns[townIndex].events[3];
    }

    eventBox.appendChild(event1);  
    eventBox.appendChild(event2);
    eventBox.appendChild(event3);
    if (townIndex == 2) {
      eventBox.appendChild(event4);
    }

    document.querySelector('#upcoming_events').appendChild(eventBox);
  });

  function selectTown(pageURL) {
    if (pageURL == 'preston.html') {
      index = 6
    } else if (pageURL == 'fishhaven.html') {
      index = 2
    } else if (pageURL == 'sodasprings.html') {
      index = 0
    }
    return index
  }


// ------------- Consume Weather API for Preston Page ---------------- //

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