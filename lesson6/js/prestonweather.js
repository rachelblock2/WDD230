// Creates banner for free pancake reminder on Friday
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

// Creates a hamburger button for small css file
const hambutton = document.querySelector('.hamburger_menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//Creates date object updated daily
const yearoptions = {year: "numeric", month: "long", day: "2-digit"}
document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", yearoptions);




//Lazy Loading of gallery images
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