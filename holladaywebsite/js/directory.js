const barView = document.querySelector('#bar_icon')
const cardHolder = document.querySelector('.business_cards')

barView.addEventListener('click', () => {
    cardHolder.classList.toggle('business_card_bars')
}, false);


// Looping through JSON file for businesses

const businessList = 'https://rachelblock2.github.io/WDD230/holladaywebsite/js/directory.json';

fetch(businessList)
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