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

// Add active class to the current button (highlight it)
let holder = document.querySelector(".navigation");
let btns = document.querySelector(".button");

btns.addEventListener('click', () => {btns.classList.toggle('active')}, false);