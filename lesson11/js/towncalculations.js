// ------- Windchill calculation function ----------//
function calcWindchill(currentTemp, currentWindSpeed) {
    windChill = 35.74 + (0.6215 * currentTemp) - (35.74 * (currentWindSpeed ** 0.16)) + (0.4275 * currentTemp * (currentWindSpeed ** 0.16))
    roundedWindChill = windChill.toFixed(0)
    return roundedWindChill
}



// ------------- Parse through JSON file, display Preston, Fish Haven, and Soda Springs Info on each respective town's pages ----------//

const requestdata = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestdata)
  .then((response) => response.json())
  .then((jsonObject) => {
    const towns = jsonObject['towns'];

    // Determines the file name
    var path = window.location.pathname;
    var pageURL = path.split('/').pop();

    townIndex = selectTown(pageURL) // Returns the index of the town in the JSON file

    towns[townIndex].events.forEach(function (element) {
      let town_event = document.createElement('p');
      let town_text = document.createTextNode(element)
      town_event.appendChild(town_text)
      document.querySelector('#upcoming_events').appendChild(town_event);
    });
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