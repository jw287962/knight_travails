import { knightMoves,allMoves, getRoot } from "./knight_travails";
import node from "./node";
import "./style.css";
// let root = allMoves();

//let array = knightMoves([0,0],[7,3]);


let form = document.querySelector('.formdata');

form.addEventListener('submit',calculateMoves);

function calculateMoves(e){
  e.preventDefault();
  const startPosition = document.querySelector(".startpos");
  const endPosition = document.querySelector(".endpos");
  const startPosArray = (startPosition.value).split(',').map(x => x*1 );
  const endPosArray =  (endPosition.value).split(',').map(x => x*1 );
console.log(startPosArray);
  let array  = knightMoves(startPosArray,endPosArray)
updateHTML(array);


}

function updateHTML(array){
  
  const output = document.querySelector(".route");

  array.forEach(element => {
    output.textContent += `(${element}) --> `;
  });
}