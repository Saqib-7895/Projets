// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector("#reset");
// let newgameBtn = document.querySelector('#newgame')
// let msgcontainer = document.querySelector('.msg')
// let msg = document.querySelector('#P-msg')
// let turn0 = true;
// let count = 0;
// let winpattern = [
//   [0, 1, 2],
//   [0, 4, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];



// boxes.forEach((box) => {
//     box.addEventListener('click',()=>{
//         if (turn0 == false){
//             box.innerHTML = "X"
//             turn0 = true
//         }else{
            
//             box.innerHTML = "O"
//             turn0 = false
//         }
//             box.disabled = true
//                 count++;
//             checkwinner();
//             checkdraw();
//             // console.log(count);
            
            
//     });
// })

// function checkdraw(){
//     for(let patt of winpattern){
//      let post1 = boxes[patt[0]].innerText;
//      let post2 =  boxes[patt[1]].innerText;
//      let post3 =  boxes[patt[2]].innerText;
//     if(count >= 9   ){
//         showdraw();
//        }
//     }
// }

// function checkwinner(){
//     for(let pattern of winpattern){
//      let post1 = boxes[pattern[0]].innerText;
//      let post2 =  boxes[pattern[1]].innerText;
//      let post3 =  boxes[pattern[2]].innerText;
//      if( post1 != "" && post2 != "" && post3 != "" ){
//         if(post1 === post2 && post2 == post3){
//             showwinner(post1);
//         }
//      }
        
//     }
// }

//     let showdraw = ()=>{
//         msg.innerText  = `Matach is Draw !!`;
//         msgcontainer.classList.remove('hide');
//         disabledboxes();
//     }


// let showwinner = (winner)=>{
//     msg.innerText = `Congratulations, Winner is ${winner}`;
//     msgcontainer.classList.remove('hide');
//     disabledboxes();
// }


// let resetgame = ()=>{
//     turn0 = true;
//     enabledboxes();
//     msgcontainer.classList.add("hide");
//     count =0;
// }

// let disabledboxes = ()=>{
//     for (const box of boxes) {
//         box.disabled = true;
//     }
// }
// let enabledboxes = ()=>{
//     for (const box of boxes) {
//         box.disabled = false;
//         box.innerText = ""
//     }
// }

// newgameBtn.addEventListener('click', resetgame)
// reset.addEventListener('click', resetgame)

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgameBtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#P-msg");
let turn0 = true; // true means "O", false means "X"
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Function to handle player moves
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turn0 ? "O" : "X";
    box.disabled = true;
    turn0 = !turn0; // Switch turns
    count++;

    if (checkWinner()) {
      return;
    }

    if (count === 9) {
      showDraw();
    }
  });
});

// Function to check for a winner
function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let pos1 = boxes[a].innerText;
    let pos2 = boxes[b].innerText;
    let pos3 = boxes[c].innerText;

    if (pos1 && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return true;
    }
  }
  return false;
}

// Function to display draw message
function showDraw() {
  msg.innerText = "Match is Draw!";
  msgcontainer.classList.remove("hide");
  disableBoxes();
}

// Function to display winner message
function showWinner(winner) {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}

// Function to reset the game
function resetGame() {
  turn0 = true;
  count = 0;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

// Function to disable all boxes
function disableBoxes() {
  boxes.forEach((box) => (box.disabled = true));
}

// Function to enable all boxes
function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

// Event Listeners for reset buttons
newgameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
