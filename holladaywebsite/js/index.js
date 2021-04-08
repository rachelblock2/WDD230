// Looping through JSON files for businesses on homepage

const holladayJSON = 'https://rachelblock2.github.io/holladaywebsite/js/index.json';

fetch(holladayJSON)
  .then((response) => 
  response.json())
  .then((jsObject) => {
    const Businesses = jsObject['Businesses'];
    for (let i = 0; i < 3; i++ ) {

        const randomBusiness = Businesses[Math.floor(Math.random() * Businesses.length)];

        let caption = document.createElement('section');
        let h2 = document.createElement('h2');
        let div = document.createElement('div')
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = randomBusiness.name;
        phone.textContent = 'Phone: ' + randomBusiness.phone;
        email.textContent = 'Email: ' + randomBusiness.email;
        website.textContent = 'Website: ' + randomBusiness.website;

        image.setAttribute('src', randomBusiness.image_link);
        image.setAttribute('alt', h2.textContent + randomBusiness.order);
        div.appendChild(image)

        caption.appendChild(div);
        caption.appendChild(h2);
        caption.appendChild(phone);
        caption.appendChild(email);
        caption.appendChild(website);

        document.querySelector('.business_highlights').appendChild(caption);
    }
  });

// JSON file data parsed to show current weather for Holladay, Utah

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.66905707603668&lon=-111.82736924315411&appid=b97de52e4ae827dee4e9607c4b37a4b7&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    document.querySelector('#current_1').textContent = "Current Temperature: " + (Math.round(jsObject.current.temp)) + "\xB0 F";
    document.querySelector('#current_2').textContent = jsObject.current.weather[0].description;
    document.querySelector('#current_3').textContent = "Humidity: " + jsObject.current.humidity + "%";

    const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let step = 0; step < 3; step++) {
        let image = 'https://openweathermap.org/img/w/' + jsObject.daily[step].weather[0].icon + '.png';
        let d = new Date((jsObject.daily[step].dt)* 1000).getDay();
        document.querySelector(`#dayoftheweek${step+1}`).textContent = dayofWeek[d];
        console.log(dayofWeek[d])
        document.querySelector(`#img${step+1}`).setAttribute('src', image)
        document.querySelector(`#img${step+1}`).setAttribute('alt', jsObject.daily[step].weather[0].description)
        document.querySelector(`#forecast${step+1}`).textContent = (Math.round(jsObject.daily[step].temp.day));
    }
  });