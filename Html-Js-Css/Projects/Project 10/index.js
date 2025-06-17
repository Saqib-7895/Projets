let body = document.querySelector("body");
let scoreText = document.querySelector(".score");
let controls = document.getElementById("controls");
let startbutt = document.getElementById("start");
let endtbutt = document.getElementById("reset");
let playground = document.getElementById("playground");
let car = document.querySelector(".car");


let created = false;
let gamestart = "end";
let currentDirection = "up";
let score = 0;
let id = null;
let currentSpeed = 10;
let currentTime = 950;

const gameSpeed = {
  5: { time: 800, speed: 20 },
  10: { time: 800, speed: 22 },
  20: { time: 700, speed: 24 },
  30: { time: 600, speed: 25 },
  40: { time: 500, speed: 24 },
  50: { time: 500, speed: 24 },
  70: { time: 400, speed: 28 },
  80: { time: 200, speed: 33 },
  100: { time: 200, speed: 36 },
};

const convertPxToNumber = (px) => {
  return Number(px.split("px")[0]);
};

function createCar() {
  let img = document.createElement("img");
  img.src = "car.png";
  img.style.rotate = "90deg";
  car.appendChild(img);
  created = true;
}

startbutt.addEventListener("click", () => {
  if (created == false) {
    createCar();
    createbomb();
  }
  gamestart = "start";
});

endtbutt.addEventListener("click", () => {
  gamestart = "end";
});

document.addEventListener("keydown", (event) => {
  // car direction
  if (event.key === "ArrowDown" && currentDirection == "up") {
    car.style.transform = "rotate(180deg)";
    currentDirection = "down";
  } else if (event.key === "ArrowDown" && currentDirection == "left") {
    car.style.transform = "rotate(180deg)";
    currentDirection = "down";
  } else if (event.key === "ArrowDown" && currentDirection == "right") {
    car.style.transform = "rotate(180deg)";
    currentDirection = "down";
  } else if (event.key == "ArrowUp" && currentDirection == "down") {
    car.style.transform = "rotate(360deg)";
    currentDirection = "up";
  } else if (event.key == "ArrowUp" && currentDirection == "left") {
    car.style.transform = "rotate(360deg)";
    currentDirection = "up";
  } else if (event.key == "ArrowUp" && currentDirection == "right") {
    car.style.transform = "rotate(360deg)";
    currentDirection = "up";
  } else if (event.key == "ArrowLeft" && currentDirection == "down") {
    car.style.transform = "rotate(-90deg)";
    currentDirection = "left";
  } else if (event.key == "ArrowLeft" && currentDirection == "right") {
    car.style.transform = "rotate(270deg)";
    currentDirection = "left";
  } else if (event.key == "ArrowRight" && currentDirection == "down") {
    car.style.transform = "rotate(90deg)";
    currentDirection = "right";
  } else if (event.key == "ArrowLeft" && currentDirection == "up") {
    car.style.transform = "rotate(-90deg)";
    currentDirection = "left";
  } else if (event.key == "ArrowRight" && currentDirection == "up") {
    car.style.transform = "rotate(90deg)";
    currentDirection = "right";
  } else if (event.key == "ArrowRight" && currentDirection == "left") {
    car.style.transform = "rotate(90deg)";
    currentDirection = "right";
  }

  // car movement
  if (gamestart == "start") {
    if (currentDirection == "left") {
      car.style.left = convertPxToNumber(car.style.left) - 25 + "px";
    } else if (currentDirection == "right") {
      car.style.left = convertPxToNumber(car.style.left) + 25 + "px";
    } else if (currentDirection == "up") {
      car.style.top = convertPxToNumber(car.style.top) - 25 + "px";
    } else if (currentDirection == "down") {
      car.style.top = convertPxToNumber(car.style.top) + 25 + "px";
    }
  }
});

document.addEventListener("keyup", (eve) => {
  if (eve.key == "Enter") {
    gamestart = "start";
    if (created == false) {
      createCar();
    }
  }

  if (eve.key == "Escape") {
    gamestart = "end";
  }
});

setInterval(() => {
  let left = convertPxToNumber(car.style.left);
  let top = convertPxToNumber(car.style.top);

  if (left < 20) {
    car.style.left = window.innerWidth - 100 + "px";
  }

  if (window.innerWidth - 90 < left) {
    car.style.left = "20px";
  }

  if (top > window.innerHeight - 90) {
    car.style.top = "30px";
  }
  if (top < 30) {
    car.style.top = window.innerHeight - 90 + "px";
  }
}, 1);

function createbomb() {
  let newBomb = document.createElement("div");
  newBomb.classList.add("bomb");
  playground.appendChild(newBomb);

  let y = 0;
  let x = Math.random() * (window.innerWidth - 150) + 20;
  newBomb.style.top = y + "px";
  newBomb.style.left = x + "px";
}

setInterval(() => {
  if (gamestart == "start") {
    let allBombs = document.querySelectorAll(".bomb");

    if (allBombs.length >= 1) {
      for (bomb of allBombs) {
        // checking that a car hits by a bomb
        if (
          convertPxToNumber(bomb.style.left) >
            convertPxToNumber(car.style.left) - 50 &&
          convertPxToNumber(bomb.style.left) <
            convertPxToNumber(car.style.left) + 50 &&
          convertPxToNumber(bomb.style.top) <
            convertPxToNumber(car.style.top) + 50 &&
          convertPxToNumber(bomb.style.top) >
            convertPxToNumber(car.style.top) - 50
        ) {
          gamestart = "end";

          setTimeout(() => {
            alert("Game End , your score is " + score);
            
            // TODO => Window Reload so prevent default behavior after games end
            window.location.reload();
            // clearInterval(id);
          }, 200);
        }

        bomb.style.top =
          Number(bomb.style.top.split("px")[0]) + currentSpeed + "px";

        if (convertPxToNumber(bomb.style.top) >= window.innerHeight - 50) {
          bomb.remove();
          score++;
          scoreText.innerHTML = "Score: " + score;

          // score based implementation

          if (Object.hasOwn(gameSpeed, score)) {
            currentSpeed = gameSpeed[score].speed;
            currentTime = gameSpeed[score].time;
            if (id) {
              clearInterval(id);
            }
            changeTime(currentTime, handleBombCreation);
          }
        }
      }
    }
  }
}, 100);

function handleBombCreation() {
  if (gamestart == "start") {
    createbomb();
  }
}

id = setInterval(() => {
  handleBombCreation();
}, currentTime);

function changeTime(time, fn) {
  id = setInterval(() => {
    fn();
  }, time);
}
