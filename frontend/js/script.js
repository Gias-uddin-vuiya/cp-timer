
const displayTime = document.querySelector(".display-time")
const startTimer = document.querySelector(".start-btn")
const fullscreenButton = document.getElementById("fullscreenToggle");


let countdown;
let timeLeft = 2 * 60; // min in second

startTimer.addEventListener('click', (evt) => {
    evt.preventDefault()
    
    clearInterval(countdown)

    countdown = setInterval(() => {
        let minute = Math.floor(timeLeft / 60)
        let second = timeLeft % 60;

        displayTime.textContent = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`

        if (timeLeft <= 0) {
            clearInterval(countdown)
        }

        timeLeft--
    }, 1000)
})


fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
