const canvas = document.getElementById("draw");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 1;

//we need a  flag to tell us if we are drwing on the canvas
let isDrawing = false;
//we need coordinates where the line we draw starts
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; //this will stop the function from running when we have not clicked the mouse

  //using hsl to change the colors of the brush
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  context.beginPath();
  //strating from
  context.moveTo(lastX, lastY);
  // go to
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));