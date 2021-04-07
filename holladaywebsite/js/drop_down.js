const dropDownButton = document.querySelector('.hamburger_icon');
const navHolder = document.querySelector('.nav_menu')

// function toggleMenu() {
//     console.log("working")
// }

dropDownButton.addEventListener('click', () => {
    navHolder.classList.toggle('small_menu')
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) navHolder.classList.remove('small_menu')};