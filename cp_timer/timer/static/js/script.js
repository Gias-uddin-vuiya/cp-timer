const fullscreenButton = document.getElementById("fullscreenToggle");
const cpMode = document.querySelector(".challenge-msg")


const startTimeBtn = document.querySelector(".start-btn")
let timerDisplay = document.querySelector(".display-time");


// default time for the timer
let defaultTime = 1 * 60;
let timeLeft = defaultTime;
let timerInterval = null;
let isPaused = false;

// default display time
timerDisplay.textContent = `${'05'}:${'00'}`;


// Function to update the timer display
function updateDisplay(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60;
  timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Function to start the timer 
function startTimer() {

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      // when user clicks the start button, change the button name and bg color
      startTimeBtn.textContent = "Start";
      startTimeBtn.classList.remove("btn-outline-primary");
      startTimeBtn.classList.add("btn-primary");
      timeLeft = defaultTime;
    }

  }, 1000);
}


// Handle start/pause in the same button
startTimeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (!timerInterval && !isPaused) {
    // Timer starts
    startTimer();
    startTimeBtn.textContent = "Pause";
    startTimeBtn.classList.remove("btn-primary");
    startTimeBtn.classList.add("btn-outline-primary");
  } else if (timerInterval) {
    // Timer is running -> pause it
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused = true;
    startTimeBtn.textContent = "Resume";
    console.log("Timer paused");
  } else if (isPaused) {
    // Timer is paused -> resume it
    startTimer();
    isPaused = false;
    startTimeBtn.textContent = "Pause";
    console.log("Timer resumed");
  }
});


cpMode.addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("customModal"));
    modal.show();
});

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});