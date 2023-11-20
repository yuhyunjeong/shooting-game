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

let gameOver = false;
let score = 0;

//store fired bullets in array
let bulletList = [];

function Bullet() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    //bullet initialization
    this.x = spaceshipX + 40; //center
    this.y = spaceshipY;
    this.alive = true;

    bulletList.push(this);
  };

  this.update = function () {
    this.y -= 7; //y-coordinate value of bullet is decremented
  };

  this.checkHit = function () {
    console.log("enemy:", enemyList);
    // when bullets hit the enemies
    for (let i = 0; i < enemyList.length; i++) {
      console.log("enemy:", enemyList[i]);
      if (
        this.y <= enemyList[i].y &&
        this.x >= enemyList[i].x &&
        this.x <= enemyList[i].x + 64
      ) {
        score++; //get 1 point
        this.alive = false; // bullet die
        enemyList.splice(i, 1); // enemy disappear
      }
    }
  };
}

let enemyList = [];

function generateRandomValue(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min); // randomize
  return randomNum;
}

//create enemy
function Enemy() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.y = 0; //top
    this.x = generateRandomValue(0, canvas.width - 64); // x-coordinate value in canvas's width

    enemyList.push(this);
  };
  this.update = function () {
    this.y += 1;

    if (this.y >= canvas.height - 64) {
      gameOver = true;
      console.log("game over");
    }
  };
}

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
    console.log("what key was pressed?: ", event.code);

    keysDown[event.key] = true; // key-value
    //console.log("키 다운 객체에 들어간 값은?:", keysDown)
  });

  document.addEventListener("keyup", function (event) {
    delete keysDown[event.key];
    console.log("버튼 클릭 후", keysDown);

    if (event.code == "Space") {
      createBullet();
    }
  });
}

function createBullet() {
  console.log("총알생성!");

  let b = new Bullet(); // create one bullet
  b.init();

  console.log("새로운 총알 리스트!", bulletList);
}

function createEnemy() {
  //create one per second
  const interval = setInterval(function () {
    let e = new Enemy();
    e.init();
  }, 1000); // The setInterval() method calls a function at specified intervals (in milliseconds). function, times(1000ms = 1 second)
}

function update() {
  // right
  if ("ArrowRight" in keysDown) {
    // prevent the ship leaving the canvas
    if (spaceshipX < canvas.width - 96) {
      spaceshipX += 5; //adjust speed
    }
  }
  // left
  if ("ArrowLeft" in keysDown) {
    // prevent the ship leaving the canvas
    if (spaceshipX > 0) {
      spaceshipX -= 5;
    }
  }

  //fire bullet
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      bulletList[i].update();
      bulletList[i].checkHit();
      console.log("checkHit!");
    }
  }

  //create enemy
  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
}

//render : draw UI
function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); //image, dx, dy, dWidth, dHeight
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY); //image, dx, dy

  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    }
  }

  for (let i = 0; i < enemyList.length; i++) {
    ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
  }
}

function main() {
  // if game is over, stop
  if (!gameOver) {
    update(); // update coordinating values
    render(); // draw
    console.log("animation calls main function");
    requestAnimationFrame(main); // infinite loop
  } else {
    ctx.drawImage(gameOverImage, 0, 150, canvas.width, 400);
  }
}

loadImage();
setupKeyboardListener();
createEnemy();
main();
