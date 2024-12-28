let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerY
let count = 0; //to count the mouse clicks

let mySong = document.querySelector("#music");
let icon = document.querySelector("#songicon");
let pauseIcon = document.querySelector("#songmute");



mySong.volume = 0.5;

icon.onclick = () => {
    mySong.play();
};

pauseIcon.onclick = () => {
    mySong.pause();
};

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");  
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       // console.log("you clicked");
        if(turnO){ // player O's turn
            box.innerText = "O";
            box.style.color = "#A3F500", // A3F500 
            turnO = false;
        } else {// player X's turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();

        if (count === 9 && !iswinner) {
            printDraw();
        }
        
    });
});

const printDraw = () => {
    msg.innerHTML = `Its a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "" ;
    }
};

const  showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
     
    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
            return true;

      }
     }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



function changeBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

// using inline variable
      document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    // using local variable
// uncomment to see how it works

      // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    //   document.body.style.background = bgColor;

    }