// ------------- Change range slider on the form ----------//

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