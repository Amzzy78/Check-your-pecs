/**
 * Add or remove "responsive" from the class name
 */
function hamburgerLinks() {
    const x = document.getElementById("myTopnav");
    (x.className === "topnav") ? x.className += " responsive" : x.className = "topnav";
}

// Get the modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Get the button
var topButton = document.getElementById("topBtn") || document.getElementById("topBtnPrivacy") || document.getElementById("topBtnResource");

// When the user scrolls down 40px from the top of the document, show the top button
window.onscroll = function() {scrollDownFunction()};

function scrollDownFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}