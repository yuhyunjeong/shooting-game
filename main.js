//Set a canvas

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

//load images
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

// click keyboard
let keysDown = {}; //Object type
function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    //console.log("what key was pressed?: ", event.keyCode);
    console.log("what key was pressed?: ", event.key);

    keysDown[event.key] = true; // key-value
    //console.log("키다운객체에 들어간 값은?:", keysDown)
  });

  document.addEventListener("keyup", function (event) {
    delete keysDown[event.key];
    console.log("버튼 클릭 후", keysDown);
  });
}

function update() {
  // right

  if ("ArrowRight" in keysDown) {
    // prevent the ship leaving the canvas
    if (spaceshipX < canvas.width - 96) {
      spaceshipX += 1; //adjust speed
    }
  }
  // left
  if ("ArrowLeft" in keysDown) {
    // prevent the ship leaving the canvas
    if (spaceshipX > 0) {
      spaceshipX -= 1;
    }
  }
}

//render : draw UI
function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); //image, dx, dy, dWidth, dHeight
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY); //image, dx, dy
}

function main() {
  update(); // update coordinating values
  render(); // draw
  console.log("animation calls main function");
  requestAnimationFrame(main); // infinite loop
}

loadImage();
setupKeyboardListener();
main();
