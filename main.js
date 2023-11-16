//Setting a canvas

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas); //representing canvas in <body>

//spaceship coordinates
let spaceshipX = canvas.width / 2 - 48; // 200 - 48
let spaceshipY = canvas.height - 96; // 700 - 96

//loading images
let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameOverImage;
function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "img/galaxy.png";

  spaceshipImage = new Image();
  spaceshipImage.src = "img/spaceship.png";

  bulletImage = new Image();
  bulletImage.src = "img/bullet.png";

  enemyImage = new Image();
  enemyImage.src = "img/enemy.png";

  gameOverImage = new Image();
  gameOverImage.src = "img/gameover.png";
}

//render : draw UI
function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); //image, dx, dy, dWidth, dHeight
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY); //image, dx, dy
}

function main() {
  render();
  console.log("animation calls main function");
  requestAnimationFrame(main); // infinite loop
}

loadImage();
main();
