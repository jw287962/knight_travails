import { knightMoves, allMoves, getRoot } from "./knight_travails";

const positions = { startPos: [], endPos: [], startPosString: "" };

function convertPositiontoString(string, splitter = ",") {
  return string.split(splitter).map((x) => x * 1);
}

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
export {
  positions,
  convertPositiontoString,
  calculateMoves,
  resetBoard,
  createKnightElement,
  startEndPositionisSame,
  resetAllPositionMemory,
  makeRowDiv,
  setInstructionText,
  updateHTML,
};
