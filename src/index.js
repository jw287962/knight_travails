import { knightMoves, allMoves, getRoot } from "./knight_travails";
import node from "./node";
import "./style.css";
// let root = allMoves();
makeBoard();
let form = document.querySelector(".formdata");
const positions = { startPos: [], endPos: [], startPosString: "" };
// form.addEventListener("submit", getPositions);

// and add EVENTLISTENER
function makeBoard() {
  const board = document.querySelector(".board");

  for (let i = 7; i >= 0; i--) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("boardRow");
    board.appendChild(rowDiv);
    // array.push([]);
    for (let j = 0; j <= 7; j++) {
      const boardPos = document.createElement("button");
      boardPos.classList.add("boardElement");
      boardPos.addEventListener("click", clickSetPosition);

      boardPos.dataset.position = [j, i];
      // array[i].push[j];
      rowDiv.appendChild(boardPos);
    }
  }
  // return array;
}
function convertPositionDataString(string, splitter = ",") {
  return string.split(splitter).map((x) => x * 1);
}
//

function clickSetPosition(e) {
  // console.log(e.target.dataset.position);
  e.preventDefault();
  if (positions.startPosString === e.target.dataset.position) {
    return;
  }

  if (positions.startPos.length != 0) {
    e.target.classList.add("endPos");
    positions.endPos = convertPositionDataString(e.target.dataset.position);
  } else {
    resetBoard();
    e.target.classList.add("startPos");
    positions.startPos = convertPositionDataString(e.target.dataset.position);
    positions.startPosString = e.target.dataset.position;
  }
  if (positions.startPos.length && positions.endPos.length) {
    calculateMoves(positions.startPos, positions.endPos);
    positions.startPos = [];
    positions.endPos = [];
  }
}

function resetBoard() {
  const boardElements = document.querySelectorAll(".boardElement");

  boardElements.forEach((ele) => {
    const style = ["endPos", "startPos", "move"];
    ele.classList.remove(...style);
    ele.textContent = "";
    // ele.className.add("boardElement");
  });
}

function calculateMoves(startPosArray, endPosArray) {
  let array = knightMoves(startPosArray, endPosArray);
  updateHTML(array);
}

function updateHTML(array) {
  let i = 0;

  console.log(
    array.forEach((element) => {
      i++;

      const boardElement = document.querySelector(
        `[data-position="${element}"]`
      );

      const div = document.createElement("div");
      div.classList.add("moveNumber");
      boardElement.classList.add("move");

      if (i != 1 && i != array.length) {
        div.textContent = i;
      } else {
        div.textContent = i;
      }
      boardElement.appendChild(div);
    })
  );
}
