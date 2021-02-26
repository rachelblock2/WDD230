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



// ------------- Hamburger button for small CSS ----------//

const hambutton = document.querySelector('.hamburger_menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//Creates date object updated daily
const yearoptions = {year: "numeric", month: "long", day: "2-digit"}
document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", yearoptions);



// ------------- Lazy Loading of Images ----------//

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: "0px, 0px, 50px, 0px"
};

// Remove placeholder image upon loading the image
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// Loop through each image and lazy load it
imagesToLoad.forEach((img) => {
    loadImages(img);
  });

// Allows for items to loaded only when visible in the viewport
  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      // Loop when there is multiple items, aka a src and an data-src
      items.forEach((item) => {
        if(item.isIntersecting) {
          // Load images when the items interact with observer aka come into the viewport
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }



// ------------- Javascript to change slider on the form ----------//

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