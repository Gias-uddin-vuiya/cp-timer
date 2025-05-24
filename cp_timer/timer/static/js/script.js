const body = document.querySelector('body')
const fullscreenButton = document.getElementById("fullscreenToggle");
const cpMode = document.querySelector(".challenge-msg")


cpMode.addEventListener('click', () => {
  
})

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});