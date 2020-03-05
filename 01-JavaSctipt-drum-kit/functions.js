function playSound(event) {
  const audioElement = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audioElement) return; //stopping the function from running
  audioElement.currentTime = 0; //rewind to the start
  audioElement.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
