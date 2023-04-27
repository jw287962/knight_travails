import { knightMoves, allMoves, getRoot } from "./knight_travails";
import node from "./node";
let form = document.querySelector(".formdata");
const positions = { startPos: [], endPos: [], startPosString: "" };
// form.addEventListener("submit", getPositions);

const information = document.querySelector(".information");
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
      boardPos.addEventListener("click", setKnightPosition, true);
      boardPos.dataset.position = [j, i];
      rowDiv.appendChild(boardPos);
    }
  }
}
function convertPositionDataString(string, splitter = ",") {
  return string.split(splitter).map((x) => x * 1);
}
//

function setKnightPosition(e) {
  e.preventDefault();
  console.log(positions.startPosString, e.currentTarget);
  if (positions.startPosString === e.currentTarget.dataset.position) {
    return;
  }
  const knight = document.createElement("img");
  knight.classList.add("knightImg");
  knight.classList.add("move");

  const instructions = document.querySelector(".instruction");
  // console.log(e.currentTarget.dataset.position);

  if (positions.startPos.length != 0) {
    positions.endPos = convertPositionDataString(
      e.currentTarget.dataset.position
    );
    e.currentTarget.appendChild(knight);
  } else {
    resetBoard();
    e.currentTarget.appendChild(knight);
    positions.startPos = convertPositionDataString(
      e.currentTarget.dataset.position
    );
    positions.startPosString = e.currentTarget.dataset.position;
    instructions.textContent = "Choose Ending Position!";
  }
  if (positions.startPos.length && positions.endPos.length) {
    updateHTML(calculateMoves(positions.startPos, positions.endPos));
    positions.startPos = [];
    positions.endPos = [];
    positions.startPosString = "";
    instructions.textContent = "Choose Starting Position!";
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
  return knightMoves(startPosArray, endPosArray);
}

function updateHTML(array) {
  let i = 0;

  array.forEach((element) => {
    i++;

    const boardElement = document.querySelector(`[data-position="${element}"]`);

    const div = document.createElement("div");
    div.classList.add("moveNumber");
    boardElement.classList.add("move");

    const knight = document.createElement("img");
    knight.classList.add("knightImg");
    knight.classList.add("move");

    if (i != 1 && i != array.length) {
      div.textContent = i;
      boardElement.appendChild(knight);
    } else {
      div.textContent = i;
    }
    boardElement.appendChild(div);
  });
}

export { makeBoard };
