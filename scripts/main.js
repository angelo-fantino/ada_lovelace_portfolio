// === Date of birth in seconds ===
let dateBirth = document.getElementById("dateOfBirth");

// Function to update the current date in seconds
function updatedElapsedTime() {
  // Date objects for the birthdate
  let dateInSeconds = new Date("1815-12-10T00:00:00");
  let currentDate = new Date();

  // Calculate the current date in seconds
  let updatedSeconds = (currentDate - dateInSeconds) / 1000;
  // Update the current date to the span element with number formatting
  dateBirth.textContent = new Intl.NumberFormat().format(
    Math.floor(updatedSeconds)
  );
}

// Initial call to updatedElapsedTime to set the initial value
updatedElapsedTime();

// Set up an interval to update the value every second (1000 milliseconds)
setInterval(updatedElapsedTime, 1000);

// === ACCORDION CODE ===
let accord = document.getElementsByClassName("accordion");

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
