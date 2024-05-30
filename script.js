let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#set");
let newGameButton = document.querySelector("#new");
let msgContainer = document.querySelector(".msgcontainr");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const showWinner = (winner) => {
  msg.innerText = `Congrats ${winner}`;
  msgContainer.style.display = "block";
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let box1 = boxes[a].innerText;
    let box2 = boxes[b].innerText;
    let box3 = boxes[c].innerText;

    if (box1 !== "" && box1 === box2 && box2 === box3) {
      console.log("Winner: " + box1);
      showWinner(box1);
      return;
    }
  }
};

const handleClick = (e) => {
  if (e.target.innerText === "") {
    e.target.innerText = turn0 ? "O" : "X";
    turn0 = !turn0;
    checkWinner();
  }
};

const resetGame = () => {
  boxes.forEach(box => {
    box.innerText = "";
  });
  turn0 = true;
  msgContainer.style.display = "none";
};

boxes.forEach(box => {
  box.addEventListener("click", handleClick);
});

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
