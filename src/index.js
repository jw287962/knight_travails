import { knightMoves, allMoves, getRoot } from "./knight_travails";
import node from "./node";
import "./style.css";
// let root = allMoves();
makeBoard();
let form = document.querySelector(".formdata");
const positions = { startPos: [], endPos: [] };
form.addEventListener("submit", getPositions);

function calculateMoves(startPosArray, endPosArray) {
  let array = knightMoves(startPosArray, endPosArray);
  updateHTML(array);
}

function convertPositionDataString(string, splitter = ",") {
  return string.split(splitter).map((x) => x * 1);
}
//

function setPosition(e) {
  // console.log(e.target.dataset.position);
  e.preventDefault();
  if (positions.startPos.length != 0) {
    positions.endPos = convertPositionDataString(e.target.dataset.position);
  } else {
    positions.startPos = convertPositionDataString(e.target.dataset.position);
  }
  if (positions.startPos.length && positions.endPos.length) {
    calculateMoves(positions.startPos, positions.endPos);
    positions.startPos = [];
    positions.endPos = [];
  }
}

// and add EVENTLISTENER
function makeBoard() {
  const board = document.querySelector(".board");

  for (let i = 0; i <= 7; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("boardRow");
    board.appendChild(rowDiv);
    // array.push([]);
    for (let j = 0; j <= 7; j++) {
      const boardPos = document.createElement("button");
      boardPos.classList.add("boardElement");
      boardPos.addEventListener("click", setPosition);

      boardPos.dataset.position = [i, j];
      // array[i].push[j];
      rowDiv.appendChild(boardPos);
    }
  }
  // return array;
}

function updateHTML(array) {
  const output = document.querySelector(".route");
  output.textContent = "";
  let i = 0;

  console.log(
    array.forEach((element) => {
      i++;
      output.textContent += `Move ${i}: [${element}] \r\n`;
    })
  );
}
