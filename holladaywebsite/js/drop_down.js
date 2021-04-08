const dropDownButton = document.querySelector('.hamburger_icon');
const navHolder = document.querySelector('.nav_menu')

dropDownButton.addEventListener('click', () => {
    navHolder.classList.toggle('small_menu')
}, false);

if (window.innerWidth > 760) {
    navHolder.classList.toggle('medium_menu');
}

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) {
        navHolder.classList.remove('small_menu');
    }
};

// Adds last modified date to the footer
document.getElementById("currentyear").textContent = document.lastModified;