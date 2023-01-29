import { knightMoves,allMoves, getRoot } from "./knight_travails";
import node from "./node";
import "./style.css";
// let root = allMoves();

//let array = knightMoves([0,0],[7,3]);


let form = document.querySelector('.formdata');

form.addEventListener('submit',calculateMoves);

function calculateMoves(e){
  e.preventDefault();

  let splitter = '';
  const startPosition = document.querySelector(".startpos");
  const endPosition = document.querySelector(".endpos");
  if(startPosition.value.includes(',')){
    splitter = ','
  }
  const startPosArray = (startPosition.value).split(splitter).map(x => x*1 );
  const endPosArray =  (endPosition.value).split(splitter).map(x => x*1 );
  if(startPosArray.length  >2 || endPosArray.length >2){
    startPosArray.splice(2);
    endPosArray.splice(2);
  }
  let array  = knightMoves(startPosArray,endPosArray)
updateHTML(array);

}

function updateHTML(array){
  
  const output = document.querySelector(".route");
  output.textContent = '';
  let i = 0;

  array.forEach(element => {
    i++;
    output.textContent += `Move ${i}: [${element}] \r\n`;

  });
}