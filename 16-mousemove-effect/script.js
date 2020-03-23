const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 200; //100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  //getting the position of the cursor
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  //offseting the walk to be from -50 to 50 instead of from 0 to a 100
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(50,50,50,0.5), 
  ${xWalk * -1}px ${yWalk}px 0 rgba(250,0,250,0.5),
  ${yWalk}px ${xWalk * -1}px 0 rgba(20,250,250,0.5),
  ${yWalk * -1}px ${xWalk}px 0 rgba(200,250,20,0.5)`;
}

hero.addEventListener("mousemove", shadow);
