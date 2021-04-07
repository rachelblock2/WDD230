// Adds last modified date to the footer
document.getElementById("currentyear").textContent = document.lastModified;

// Looping through JSON files for businesses

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
    document.querySelector('#current_1').textContent = (Math.round(jsObject.current.temp));
    document.querySelector('#current_2').textContent = jsObject.current.weather[0].description;
    document.querySelector('#current_3').textContent = jsObject.current.humidity;
  });

// const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=b850fbcd027801228eb544e5bbb816db&units=imperial"

// fetch(apiForecast)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')); // Gets a new array from all forecast days at 1800 hours

//     const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     for (let step = 0; step < 5; step++) {
//       // Loop through each of the next 5 forecast days
//       let d = new Date(forecast[step].dt_txt); // Creates a new date with the information from the JSON
//       let image = 'https://openweathermap.org/img/w/' + forecast[step].weather[0].icon + '.png';
//       document.querySelector(`#dayoftheweek${step+1}`).textContent = dayofWeek[d.getDay()];
//       document.querySelector(`#img${step+1}`).setAttribute('src', image)
//       document.querySelector(`#img${step+1}`).setAttribute('alt', forecast[step].weather[0].description)
//       document.querySelector(`#forecast${step+1}`).textContent = (Math.round(forecast[step].main.temp));
//     };
//   });


// Adds the information to the selected radio button

radiobtns = document.querySelectorAll('.sbs');

for (const radiobtn of radiobtns) {
    if (radiobtn == radiobtns[0]) {
        radiobtn.addEventListener('click', () => {

            document.querySelector('#member_info').innerHTML = '';

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            let li5 = document.createElement('li');
            let li6 = document.createElement('li');
            let li7 = document.createElement('li');

            li1.appendChild(document.createTextNode('Ribbon Cutting for your business with Board Membership Attendance!'));
            li2.appendChild(document.createTextNode('Chamber Launch opportunities to explore benefits and meet other members'));
            li3.appendChild(document.createTextNode('Networking opportunities throughout the year'));
            li4.appendChild(document.createTextNode('Chamber referrals to your business/organization'));
            li5.appendChild(document.createTextNode('Opportunities to post your company announcements in the monthly Member Newsletter that goes out to all Chamber members, as well as on the Chamber social media platforms'));
            li6.appendChild(document.createTextNode('Advertisement & sponsorship opportunities'));
            li7.appendChild(document.createTextNode('Invitations to workshops, trainings and programs designed to keep you informed, stay engaged, and support your employees & business'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
    if (radiobtn == radiobtns[1]) {
        radiobtn.addEventListener('click', () => {

            document.querySelector('#member_info').innerHTML = '';
            
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            
            li1.appendChild(document.createTextNode('Includes all of the items in "Non Profit Level" plus: '));            
            li2.appendChild(document.createTextNode('5 passes to the Business After Hours social events (held monthly)'));
            li3.appendChild(document.createTextNode('Additional pass to Annual Summer Social'));
            li4.appendChild(document.createTextNode('Priority access to host After Hours & other monthly events'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
    if (radiobtn == radiobtns[2]) {
        radiobtn.addEventListener('click', () => {
            document.querySelector('#member_info').innerHTML = '';

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');

            li1.appendChild(document.createTextNode('Includes all of the items in "Bronze Level" plus:'));
            li2.appendChild(document.createTextNode('Listed as a co-sponsor of one major event (Summer Social, Annual Holiday Bash, etc.)'));
            li3.appendChild(document.createTextNode('Logo on website'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
    if (radiobtn == radiobtns[3]) {
        radiobtn.addEventListener('click', () => {
            document.querySelector('#member_info').innerHTML = '';

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');

            li1.appendChild(document.createTextNode('Includes all of the items in "Bronze" and "Silver" levels, plus:'));
            li2.appendChild(document.createTextNode('Listed as Sponsor of one major event (Summer Social, Annual Holiday Bash, etc.)'));
            li3.appendChild(document.createTextNode('Logo on website'));
            li4.appendChild(document.createTextNode('Log on all e-mail communications'));

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            
            document.querySelector('#member_info').appendChild(ul);
        });
    };
};


// When the rating input is changed by the user, update the image in the HTML
function adjustTime(year) {

    // Clears any existing content to show new images
    document.getElementById("top_event_choice1").style.width = '20%';
    document.getElementById("top_event_choice3").style.width = '20%';
    document.getElementById("top_event_choice5").style.width = '20%';
    document.getElementById("bottom_event_choice2").style.width = '20%';
    document.getElementById("bottom_event_choice4").style.width = '20%';

    if (year == 1) {
        event_choice = document.getElementById("top_event_choice1");
        event_choice.style.width = '27%';
    }
    if (year == 2) {
        event_choice = document.getElementById('bottom_event_choice2');
        event_choice.style.width = '27%';
    }
    if (year == 3) {
        event_choice = document.getElementById('top_event_choice3');
        event_choice.style.width = '27%';
    }
    if (year == 4) {
        event_choice = document.getElementById('bottom_event_choice4');
        event_choice.style.width = '27%';
    }
    if (year == 5) {
        event_choice = document.getElementById('top_event_choice5');
        event_choice.style.width = '27%';
    }
}



// When the user clicks on an event in the timeline, show extra information about it
const choice1 = document.querySelector('#top_event_choice1');
const description1 = `1847: John Holladay, a member of the Mississippi Pioneer Company 
            arrives in Utah. When he was chosen as the branch president for the 
            Church of Jesus Christ of Latter-Day Saints in that area, the area 
            took on the name of Holladay Settlement or Holladay Burgh.`;

choice1.addEventListener('click', () => {

    // Clears any other open events with information
    document.querySelector('#choice1_text').textContent = '';
    document.querySelector('#choice2_text').textContent = '';
    document.querySelector('#choice3_text').textContent = '';
    document.querySelector('#choice4_text').textContent = '';
    document.querySelector('#choice5_text').textContent = '';
    document.querySelector('#choice1_text').textContent = description1;
});

const choice3 = document.querySelector('#top_event_choice3')
const description3 = `1960s: the Cottonwood Mall was constructed in Holladay, 
            it being Utah's first enclosed shopping mall. The mall was closed down 
            in 2007 after a plan to turn the mall into a European-style outdoor 
            shopping village was announced.`;

choice3.addEventListener('click', () => {

    // Clears any other open events with information
    document.querySelector('#choice1_text').textContent = '';
    document.querySelector('#choice2_text').textContent = '';
    document.querySelector('#choice3_text').textContent = '';
    document.querySelector('#choice4_text').textContent = '';
    document.querySelector('#choice5_text').textContent = '';
    document.querySelector('#choice3_text').textContent = description3;
});

const choice5 = document.querySelector('#top_event_choice5');
const description5 = `2002: Holladay has expanded its borders several times, 
            the most significant expansion of which was in 2002.`;

choice5.addEventListener('click', () => {

    // Clears any other open events with information
    document.querySelector('#choice1_text').textContent = '';
    document.querySelector('#choice2_text').textContent = '';
    document.querySelector('#choice3_text').textContent = '';
    document.querySelector('#choice4_text').textContent = '';
    document.querySelector('#choice5_text').textContent = '';
    document.querySelector('#choice5_text').textContent = description5;
});

const choice2 = document.querySelector('#bottom_event_choice2')
const description2 = `Mid 1900s: Another center of settlement in the area was settled by 
            Rasmus Knudsen, now known as Knudsen's Corner. This area lies in the extreme 
            southeastern corner of the city and is split with neighboring Cottonwood Heights.`;

choice2.addEventListener('click', () => {

    // Clears any other open events with information
    document.querySelector('#choice1_text').textContent = '';
    document.querySelector('#choice2_text').textContent = '';
    document.querySelector('#choice3_text').textContent = '';
    document.querySelector('#choice4_text').textContent = '';
    document.querySelector('#choice5_text').textContent = '';
    document.querySelector('#choice2_text').textContent = description2;
});

const choice4 = document.querySelector('#bottom_event_choice4');
const description4 = `1999: The city was incorporated in November as Holladay-Cottonwood, 
            and the name was shortened to Holladay on December 14 of that year.`;

choice4.addEventListener('click', () => {

    // Clears any other open events with information
    document.querySelector('#choice1_text').textContent = '';
    document.querySelector('#choice2_text').textContent = '';
    document.querySelector('#choice3_text').textContent = '';
    document.querySelector('#choice4_text').textContent = '';
    document.querySelector('#choice5_text').textContent = '';
    document.querySelectorAll('.event_row p') == '';
    document.querySelector('#choice4_text').textContent = description4;
});

// const hambutton = document.querySelector('.hamburger_menu');
// const mainnav = document.querySelector('.navigation')

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// // To solve the mid resizing issue with responsive class on
// window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};