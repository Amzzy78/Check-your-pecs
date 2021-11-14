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