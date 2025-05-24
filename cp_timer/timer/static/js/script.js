const fullscreenButton = document.getElementById("fullscreenToggle");
const cpMode = document.querySelector(".challenge-msg")


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