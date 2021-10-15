// function toggleMenu () {
//     document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
// }

const hambutton = document.querySelector('.hamburger_menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const yearoptions = {year: "numeric", month: "long", day: "2-digit"}
document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", yearoptions);