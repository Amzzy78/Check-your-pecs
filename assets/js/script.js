/**
 * Add or remove "responsive" from the class name
 */
function hamburgerLinks() {
    const x = document.getElementById("myTopnav");
    (x.className === "topnav") ? x.className += " responsive" : x.className = "topnav";
}