//optimization will include to remove the this keywords
//optimization will include to make it work on hover

const panels = document.querySelectorAll(".panel");

function openPanel() {
  this.classList.toggle("open");
}

function toggleActive(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach(panel => {
  panel.addEventListener("click", openPanel);
});
panels.forEach(panel => {
  panel.addEventListener("transitionend", toggleActive);
});
