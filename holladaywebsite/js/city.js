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



// When the rating input is changed by the user, update the size of the corresponding history image in the HTML
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
        // Clears any other open events with information
        document.querySelector('#choice1_text').textContent = '';
        document.querySelector('#choice2_text').textContent = '';
        document.querySelector('#choice3_text').textContent = '';
        document.querySelector('#choice4_text').textContent = '';
        document.querySelector('#choice5_text').textContent = '';
        document.querySelector('#choice1_text').textContent = description1;
    }
    if (year == 2) {
        event_choice = document.getElementById('bottom_event_choice2');
        event_choice.style.width = '27%';
        // Clears any other open events with information
        document.querySelector('#choice1_text').textContent = '';
        document.querySelector('#choice2_text').textContent = '';
        document.querySelector('#choice3_text').textContent = '';
        document.querySelector('#choice4_text').textContent = '';
        document.querySelector('#choice5_text').textContent = '';
        document.querySelector('#choice2_text').textContent = description2;
    }
    if (year == 3) {
        event_choice = document.getElementById('top_event_choice3');
        event_choice.style.width = '27%';
        // Clears any other open events with information
        document.querySelector('#choice1_text').textContent = '';
        document.querySelector('#choice2_text').textContent = '';
        document.querySelector('#choice3_text').textContent = '';
        document.querySelector('#choice4_text').textContent = '';
        document.querySelector('#choice5_text').textContent = '';
        document.querySelector('#choice3_text').textContent = description3;
    }
    if (year == 4) {
        event_choice = document.getElementById('bottom_event_choice4');
        event_choice.style.width = '27%';
        // Clears any other open events with information
        document.querySelector('#choice1_text').textContent = '';
        document.querySelector('#choice2_text').textContent = '';
        document.querySelector('#choice3_text').textContent = '';
        document.querySelector('#choice4_text').textContent = '';
        document.querySelector('#choice5_text').textContent = '';
        document.querySelector('#choice4_text').textContent = description4;
    }
    if (year == 5) {
        event_choice = document.getElementById('top_event_choice5');
        event_choice.style.width = '27%';
        // Clears any other open events with information
        document.querySelector('#choice1_text').textContent = '';
        document.querySelector('#choice2_text').textContent = '';
        document.querySelector('#choice3_text').textContent = '';
        document.querySelector('#choice4_text').textContent = '';
        document.querySelector('#choice5_text').textContent = '';
        document.querySelector('#choice5_text').textContent = description5;
    }
}