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
    const rowDiv = makeRowDiv();
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

function convertPositiontoString(string, splitter = ",") {
  return string.split(splitter).map((x) => x * 1);
}
//

function setKnightPosition(e) {
  e.preventDefault();
  const targetPos = e.currentTarget.dataset.position;
  if (startEndPositionisSame(e)) {
    return;
  }
  const knight = createKnightElement();

  if (positions.startPos.length != 0) {
    positions.endPos = convertPositiontoString(targetPos);
    e.currentTarget.appendChild(knight);
  } else {
    resetBoard();
    e.currentTarget.appendChild(knight);
    positions.startPos = convertPositiontoString(targetPos);
    positions.startPosString = targetPos;
    setInstructionText("Choose Ending Position!");
  }
  if (positions.startPos.length && positions.endPos.length) {
    updateHTML(calculateMoves(positions.startPos, positions.endPos));
    resetAllPositionMemory();
    setInstructionText("Choose Starting Position!");
  }
}

// HELPER FUNCTIONS
function setInstructionText(instruction) {
  const instructions = document.querySelector(".instruction");
  instructions.textContent = instruction;
}
function makeRowDiv() {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("boardRow");
  return rowDiv;
}
function resetAllPositionMemory() {
  positions.startPos = [];
  positions.endPos = [];
  positions.startPosString = "";
}
function startEndPositionisSame(e) {
  if (positions.startPosString === e.currentTarget.dataset.position) {
    return true;
  }
}

function createKnightElement() {
  const knight = document.createElement("img");
  knight.classList.add("knightImg");
  knight.classList.add("move");
  return knight;
}
function resetBoard() {
  const boardElements = document.querySelectorAll(".boardElement");
  boardElements.forEach((ele) => {
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
    const knight = createKnightElement();

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
