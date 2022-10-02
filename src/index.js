import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Date from './date.js';

function handleFormSubmission(event) {
  event.preventDefault();
  const userDate = document.getElementById('dateInput').value;
  const dateObj = new Date(userDate);
  dateObj.zellerConvert();
  dateObj.zellerCalc();
  let divOutputs = document.querySelectorAll('.output>div');
  const weekdaysArr = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
  for (let index = 0; index < 7; index++) {
    divOutputs[index].setAttribute("class", "hidden");
    let ptag = document.getElementById("p" + index);
    ptag.innerText = "is a " + weekdaysArr[index] + ".";
  }
  //here we need to prepend the date to the ptag of choice
  (document.getElementById(dateObj.dayValue)).removeAttribute('class');
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});