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

/**
 * Close the modal
 */
function closeModal(){
  document.getElementById('id01').style.display='none';
}

// Handle form data
function formSubmit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  //Check they've filled their name and email
  if (name == "" || email == "") {
    return false;
  }

  // Get date and extract day of month
  const d = new Date();
  let da=d.getDate();
  
  if (da > 28){
    da=1;
  }

  //Add the ordinal
  const day = dateOrdinal(da);
  
  //Change the HTML
  document.getElementById("form-area").innerHTML = `
      <br><br>
      <h1>Thank You, ${name}!</h1>
      <p>We'll send an email to ${email} every month on the ${day}</p>
      <br><br>

      <div class="clearfix">
          <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Close</button>
      </div>
      <br><br>
  `;
}

//Below credit: https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th/15397495

/**
 * Returns date of month with correct st, nd, rd or th
 */
function dateOrdinal(d) {
  return d+(31==d||21==d||1==d?"st":22==d||2==d?"nd":23==d||3==d?"rd":"th")
};
