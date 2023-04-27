import {
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
} from "./boardUIHelper";

// form.addEventListener("submit", getPositions);

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

export { makeBoard };
