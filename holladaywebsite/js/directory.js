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
    console.log(jsObject);
    const Businesses = jsObject['Businesses'];
    for (let i = 0; i < 7; i++ ) {

        let caption = document.createElement('section');
        let h2 = document.createElement('h2');
        let div = document.createElement('div')
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('p');

        h2.textContent = Businesses[i].name;
        phone.textContent = 'Phone: ' + Businesses[i].phone;
        email.textContent = 'Email: ' + Businesses[i].email;
        website.textContent = 'Website: ' + Businesses[i].website;

        image.setAttribute('src', Businesses[i].image_link);
        image.setAttribute('alt', h2.textContent + Businesses[i].order);
        div.appendChild(image)

        caption.appendChild(div);
        caption.appendChild(h2);
        caption.appendChild(phone);
        caption.appendChild(email);
        caption.appendChild(website);

        document.querySelector('.business_cards').appendChild(caption);
    }
  });