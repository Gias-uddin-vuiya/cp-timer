const fullscreenButton = document.getElementById("fullscreenToggle");
const cpMode = document.querySelector(".challenge-msg")


const startTimeBtn = document.querySelector(".start-btn")
let timerDisplay = document.querySelector(".display-time");
// default time for the timer
let defaultTime = 5 * 60;
let timerInterval = null;

// default display time
timerDisplay.textContent = `${'05'}:${'00'}`;


// Function to update the timer display
function updateDisplay(leftTime) {
  const min = Math.floor(leftTime / 60)
  const sec = leftTime % 60;
  // console.log(min, sec)
  // console.log(timerDisplay)
  timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Function to start the timer 
startTimeBtn.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  
  if (timerInterval) return;

  let timeLeft = defaultTime;
  updateDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      // alert("Time's up!"); it occurs when the timer reaches 1 second
    }
  }, 1000);
})


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