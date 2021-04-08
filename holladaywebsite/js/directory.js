// Looping through JSON files for businesses on homepage

const businessJSON = 'https://rachelblock2.github.io/holladaywebsite/js/index.json';

fetch(businessJSON)
  .then((response) => 
  response.json())
  .then((jsObject) => {
    const Businesses = jsObject['Businesses'];
    for (let i = 0; i < 7; i++ ) {

        let caption = document.createElement('section');
        let h2 = document.createElement('h2');
        let div = document.createElement('div')
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = Businesses.name;
        phone.textContent = 'Phone: ' + Businesses.phone;
        email.textContent = 'Email: ' + Businesses.email;
        website.textContent = 'Website: ' + Businesses.website;

        image.setAttribute('src', Businesses.image_link);
        image.setAttribute('alt', h2.textContent + Businesses.order);
        div.appendChild(image)

        caption.appendChild(div);
        caption.appendChild(h2);
        caption.appendChild(phone);
        caption.appendChild(email);
        caption.appendChild(website);

        document.querySelector('.business_cards').appendChild(caption);
    }
  });

// // Add our event listeners
// window.addEventListener('click', someFunction, false);
// window.addEventListener('mouseover', someFunction, false);


const gridView = document.querySelector('#grid_icon')
const barView = document.querySelector('#bar_icon')
const cardHolder = document.querySelector('.business_cards')

// // Setup our function to run on various events
// let changeLayout = layout (change) {
//     if (cardHolder.classList.contains('business_cards')) {
//         cardHolder.classList.toggle('business_card_bars')
//     });
// };

gridView.addEventListener('click', () => {
    cardHolder.classList.toggle('business_cards')
}, false);

barView.addEventListener('click', () => {
    cardHolder.classList.toggle('business_card_bars')
}, false);