/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/knight_travails.js":
/*!********************************!*\
  !*** ./src/knight_travails.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allMoves": () => (/* binding */ allMoves),
/* harmony export */   "getRoot": () => (/* binding */ getRoot),
/* harmony export */   "knightMoves": () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/node.js");



function allMoves(position = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),x = 0,y = 0,counter =  0){
  
      position.value = [x,y];
      // if(position.value[0] > 7 || position.value[1]> 7 || position.value[0] <0 || position.value[1]<0){
      //   return null;
      // }
      
      if(position.previousPosition.length > 10) return null;

      // if(!visitedLeftDown)
      position.leftdown = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-2,position.value[1]-1],position.previousPosition);
      // if(!visitedLeftUp)
      position.leftup   = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-2,position.value[1]+1],position.previousPosition);
      // if(!visitedUpleft)
      position.upleft = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-1,position.value[1]+2],position.previousPosition);
      // if(!visitedUpRight)
      position.upright = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+1,position.value[1]+2],position.previousPosition);
      // if(!visitedRightDown)
      position.rightdown = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+2,position.value[1]-1],position.previousPosition);
      // if(!visitedRightUp)
      position.rightup = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+2,position.value[1]+1],position.previousPosition);
      // if(!visitedDownLeft)
      position.downleft = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-1,position.value[1]-2],position.previousPosition);
      // if(!visitedDownRight)
      position.downright = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+1,position.value[1]-2],position.previousPosition);


      if(!(position.leftdown || position.leftup||position.upright || position.upleft || position.rightdown
        || position.rightup || position.downleft || position.downright)) return null;

      if(position.leftdown != null)
    allMoves(position.leftdown,position.leftdown.value[0],position.leftdown.value[1],counter+=1);
    
    if(position.leftup != null)
   allMoves(position.leftup,position.leftup.value[0],position.leftup.value[1],counter+=1);
    if(position.upleft != null)
  allMoves(position.upleft,position.upleft.value[0],position.upleft.value[1],counter+=1);
    if(position.upright != null)
  allMoves(position.upright,position.upright.value[0],position.upright.value[1],counter+=1);
    if(position.rightdown != null)
  allMoves(position.rightdown,position.rightdown.value[0],position.rightdown.value[1],counter+=1);
    if(position.rightup != null)
  allMoves(position.rightup,position.rightup.value[0],position.rightup.value[1],counter+=1);
    if(position.downleft != null)
   allMoves(position.downleft,position.downleft.value[0],position.downleft.value[1],counter+=1);
    if(position.downright != null)
    allMoves(position.downright,position.downright.value[0],position.downright.value[1],counter+=1);

return position;
}

function getRoot(){
  return root;
}
let root;

function levelOrder(node = root,endPosition){
  let queueArray = [];
    if(node == null) return [];
    let orderArray = [];
    queueArray.push(node);

    while(queueArray.length != 0){
       let sliced = queueArray.splice(0,1);
      //  if(callback)
      //   orderArray.push(callback(sliced[0].data));
      //  else
      //   orderArray.push(sliced[0].data);
      let currentPosition = sliced[0].value;
      if(currentPosition[0] ==  endPosition[0] && currentPosition[1] == endPosition[1])
      return  sliced[0].previousPosition;


      if(sliced[0].leftdown != null){
        queueArray.push(sliced[0].leftdown); 
      }
      if(sliced[0].leftup != null){
    queueArray.push(sliced[0].leftup);
      }
       if(sliced[0].upleft != null){
    queueArray.push(sliced[0].upleft);
      }
      if(sliced[0].upright != null){
    queueArray.push(sliced[0].upright);
      }
      if(sliced[0].rightdown != null){
    queueArray.push(sliced[0].rightdown);
      }
      if(sliced[0].rightup != null){
    queueArray.push(sliced[0].rightup);
      }
      if(sliced[0].downleft != null){
    queueArray.push(sliced[0].downleft);
      }
      if(sliced[0].downright != null){
    queueArray.push(sliced[0].downright);
      }
      
    }
 
}
function knightMoves(start,endPosition){
  let firstMove = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start);
  console.log(firstMove);
  let moves = allMoves(firstMove,start[0],start[0]);
let root = firstMove;
  console.log(moves);
  // while(endPosition[0] != moves.value[0] || endPosition[1] != moves.value[1]){
    let array = levelOrder(firstMove,endPosition);
    console.log(array);

    array.forEach(element => {
      console.log(element);
    });

}





/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const node = (valueHolder = null,array = []) => {
  let previousPosition;
  let repeated = false;
   previousPosition = [].concat(array);
   let value = valueHolder;
   let leftup = null;
   let leftdown = null;
   let upleft = null;
   let upright = null;
   let rightup = null;
   let rightdown  = null;
   let downleft = null;
   let downright = null;
   if(valueHolder &&(valueHolder[0] < 0 || valueHolder[1] < 0 || valueHolder[0]>7 || valueHolder[1]>7)){
     return null;
   }
    previousPosition.forEach(element => {
      if(element[0] == valueHolder[0] && element[1] == valueHolder[1]){
        repeated = true;
      }
  });
  if(repeated) return null;
  

  if(value && !repeated)
  previousPosition.push(value);




   

    return {value,leftup,leftdown,upleft,upright,rightdown,rightup,downleft,downright,previousPosition}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knight_travails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight_travails */ "./src/knight_travails.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./src/node.js");



// let root = allMoves();

let array = (0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__.knightMoves)([0,2],[2,1]);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2Qjs7O0FBRzdCLDZCQUE2QixvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBLHdCQUF3QixvREFBSTtBQUM1QjtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBLDJCQUEyQixvREFBSTtBQUMvQjtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBLDJCQUEyQixvREFBSTs7O0FBRy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDckNuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rRTtBQUN4Qzs7QUFFMUI7O0FBRUEsWUFBWSw2REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9rbmlnaHRfdHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlIGZyb20gJy4vbm9kZS5qcyc7XG5cblxuZnVuY3Rpb24gYWxsTW92ZXMocG9zaXRpb24gPSBub2RlKCkseCA9IDAseSA9IDAsY291bnRlciA9ICAwKXtcbiAgXG4gICAgICBwb3NpdGlvbi52YWx1ZSA9IFt4LHldO1xuICAgICAgLy8gaWYocG9zaXRpb24udmFsdWVbMF0gPiA3IHx8IHBvc2l0aW9uLnZhbHVlWzFdPiA3IHx8IHBvc2l0aW9uLnZhbHVlWzBdIDwwIHx8IHBvc2l0aW9uLnZhbHVlWzFdPDApe1xuICAgICAgLy8gICByZXR1cm4gbnVsbDtcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgaWYocG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbi5sZW5ndGggPiAxMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIC8vIGlmKCF2aXNpdGVkTGVmdERvd24pXG4gICAgICBwb3NpdGlvbi5sZWZ0ZG93biA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdLTIscG9zaXRpb24udmFsdWVbMV0tMV0scG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbik7XG4gICAgICAvLyBpZighdmlzaXRlZExlZnRVcClcbiAgICAgIHBvc2l0aW9uLmxlZnR1cCAgID0gbm9kZShbcG9zaXRpb24udmFsdWVbMF0tMixwb3NpdGlvbi52YWx1ZVsxXSsxXSxwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uKTtcbiAgICAgIC8vIGlmKCF2aXNpdGVkVXBsZWZ0KVxuICAgICAgcG9zaXRpb24udXBsZWZ0ID0gbm9kZShbcG9zaXRpb24udmFsdWVbMF0tMSxwb3NpdGlvbi52YWx1ZVsxXSsyXSxwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uKTtcbiAgICAgIC8vIGlmKCF2aXNpdGVkVXBSaWdodClcbiAgICAgIHBvc2l0aW9uLnVwcmlnaHQgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsxLHBvc2l0aW9uLnZhbHVlWzFdKzJdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuICAgICAgLy8gaWYoIXZpc2l0ZWRSaWdodERvd24pXG4gICAgICBwb3NpdGlvbi5yaWdodGRvd24gPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsyLHBvc2l0aW9uLnZhbHVlWzFdLTFdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuICAgICAgLy8gaWYoIXZpc2l0ZWRSaWdodFVwKVxuICAgICAgcG9zaXRpb24ucmlnaHR1cCA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdKzIscG9zaXRpb24udmFsdWVbMV0rMV0scG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbik7XG4gICAgICAvLyBpZighdmlzaXRlZERvd25MZWZ0KVxuICAgICAgcG9zaXRpb24uZG93bmxlZnQgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXS0xLHBvc2l0aW9uLnZhbHVlWzFdLTJdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuICAgICAgLy8gaWYoIXZpc2l0ZWREb3duUmlnaHQpXG4gICAgICBwb3NpdGlvbi5kb3ducmlnaHQgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsxLHBvc2l0aW9uLnZhbHVlWzFdLTJdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuXG5cbiAgICAgIGlmKCEocG9zaXRpb24ubGVmdGRvd24gfHwgcG9zaXRpb24ubGVmdHVwfHxwb3NpdGlvbi51cHJpZ2h0IHx8IHBvc2l0aW9uLnVwbGVmdCB8fCBwb3NpdGlvbi5yaWdodGRvd25cbiAgICAgICAgfHwgcG9zaXRpb24ucmlnaHR1cCB8fCBwb3NpdGlvbi5kb3dubGVmdCB8fCBwb3NpdGlvbi5kb3ducmlnaHQpKSByZXR1cm4gbnVsbDtcblxuICAgICAgaWYocG9zaXRpb24ubGVmdGRvd24gIT0gbnVsbClcbiAgICBhbGxNb3Zlcyhwb3NpdGlvbi5sZWZ0ZG93bixwb3NpdGlvbi5sZWZ0ZG93bi52YWx1ZVswXSxwb3NpdGlvbi5sZWZ0ZG93bi52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBcbiAgICBpZihwb3NpdGlvbi5sZWZ0dXAgIT0gbnVsbClcbiAgIGFsbE1vdmVzKHBvc2l0aW9uLmxlZnR1cCxwb3NpdGlvbi5sZWZ0dXAudmFsdWVbMF0scG9zaXRpb24ubGVmdHVwLnZhbHVlWzFdLGNvdW50ZXIrPTEpO1xuICAgIGlmKHBvc2l0aW9uLnVwbGVmdCAhPSBudWxsKVxuICBhbGxNb3Zlcyhwb3NpdGlvbi51cGxlZnQscG9zaXRpb24udXBsZWZ0LnZhbHVlWzBdLHBvc2l0aW9uLnVwbGVmdC52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBpZihwb3NpdGlvbi51cHJpZ2h0ICE9IG51bGwpXG4gIGFsbE1vdmVzKHBvc2l0aW9uLnVwcmlnaHQscG9zaXRpb24udXByaWdodC52YWx1ZVswXSxwb3NpdGlvbi51cHJpZ2h0LnZhbHVlWzFdLGNvdW50ZXIrPTEpO1xuICAgIGlmKHBvc2l0aW9uLnJpZ2h0ZG93biAhPSBudWxsKVxuICBhbGxNb3Zlcyhwb3NpdGlvbi5yaWdodGRvd24scG9zaXRpb24ucmlnaHRkb3duLnZhbHVlWzBdLHBvc2l0aW9uLnJpZ2h0ZG93bi52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBpZihwb3NpdGlvbi5yaWdodHVwICE9IG51bGwpXG4gIGFsbE1vdmVzKHBvc2l0aW9uLnJpZ2h0dXAscG9zaXRpb24ucmlnaHR1cC52YWx1ZVswXSxwb3NpdGlvbi5yaWdodHVwLnZhbHVlWzFdLGNvdW50ZXIrPTEpO1xuICAgIGlmKHBvc2l0aW9uLmRvd25sZWZ0ICE9IG51bGwpXG4gICBhbGxNb3Zlcyhwb3NpdGlvbi5kb3dubGVmdCxwb3NpdGlvbi5kb3dubGVmdC52YWx1ZVswXSxwb3NpdGlvbi5kb3dubGVmdC52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBpZihwb3NpdGlvbi5kb3ducmlnaHQgIT0gbnVsbClcbiAgICBhbGxNb3Zlcyhwb3NpdGlvbi5kb3ducmlnaHQscG9zaXRpb24uZG93bnJpZ2h0LnZhbHVlWzBdLHBvc2l0aW9uLmRvd25yaWdodC52YWx1ZVsxXSxjb3VudGVyKz0xKTtcblxucmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRSb290KCl7XG4gIHJldHVybiByb290O1xufVxubGV0IHJvb3Q7XG5cbmZ1bmN0aW9uIGxldmVsT3JkZXIobm9kZSA9IHJvb3QsZW5kUG9zaXRpb24pe1xuICBsZXQgcXVldWVBcnJheSA9IFtdO1xuICAgIGlmKG5vZGUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAgIGxldCBvcmRlckFycmF5ID0gW107XG4gICAgcXVldWVBcnJheS5wdXNoKG5vZGUpO1xuXG4gICAgd2hpbGUocXVldWVBcnJheS5sZW5ndGggIT0gMCl7XG4gICAgICAgbGV0IHNsaWNlZCA9IHF1ZXVlQXJyYXkuc3BsaWNlKDAsMSk7XG4gICAgICAvLyAgaWYoY2FsbGJhY2spXG4gICAgICAvLyAgIG9yZGVyQXJyYXkucHVzaChjYWxsYmFjayhzbGljZWRbMF0uZGF0YSkpO1xuICAgICAgLy8gIGVsc2VcbiAgICAgIC8vICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBzbGljZWRbMF0udmFsdWU7XG4gICAgICBpZihjdXJyZW50UG9zaXRpb25bMF0gPT0gIGVuZFBvc2l0aW9uWzBdICYmIGN1cnJlbnRQb3NpdGlvblsxXSA9PSBlbmRQb3NpdGlvblsxXSlcbiAgICAgIHJldHVybiAgc2xpY2VkWzBdLnByZXZpb3VzUG9zaXRpb247XG5cblxuICAgICAgaWYoc2xpY2VkWzBdLmxlZnRkb3duICE9IG51bGwpe1xuICAgICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmxlZnRkb3duKTsgXG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0ubGVmdHVwICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ubGVmdHVwKTtcbiAgICAgIH1cbiAgICAgICBpZihzbGljZWRbMF0udXBsZWZ0ICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0udXBsZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmKHNsaWNlZFswXS51cHJpZ2h0ICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0udXByaWdodCk7XG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0ucmlnaHRkb3duICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ucmlnaHRkb3duKTtcbiAgICAgIH1cbiAgICAgIGlmKHNsaWNlZFswXS5yaWdodHVwICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ucmlnaHR1cCk7XG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0uZG93bmxlZnQgIT0gbnVsbCl7XG4gICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5kb3dubGVmdCk7XG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0uZG93bnJpZ2h0ICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0uZG93bnJpZ2h0KTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiBcbn1cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0LGVuZFBvc2l0aW9uKXtcbiAgbGV0IGZpcnN0TW92ZSA9IG5vZGUoc3RhcnQpO1xuICBjb25zb2xlLmxvZyhmaXJzdE1vdmUpO1xuICBsZXQgbW92ZXMgPSBhbGxNb3ZlcyhmaXJzdE1vdmUsc3RhcnRbMF0sc3RhcnRbMF0pO1xubGV0IHJvb3QgPSBmaXJzdE1vdmU7XG4gIGNvbnNvbGUubG9nKG1vdmVzKTtcbiAgLy8gd2hpbGUoZW5kUG9zaXRpb25bMF0gIT0gbW92ZXMudmFsdWVbMF0gfHwgZW5kUG9zaXRpb25bMV0gIT0gbW92ZXMudmFsdWVbMV0pe1xuICAgIGxldCBhcnJheSA9IGxldmVsT3JkZXIoZmlyc3RNb3ZlLGVuZFBvc2l0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheSk7XG5cbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgfSk7XG5cbn1cblxuXG5cbmV4cG9ydCB7YWxsTW92ZXMsIGtuaWdodE1vdmVzLGdldFJvb3R9OyIsIlxuXG5jb25zdCBub2RlID0gKHZhbHVlSG9sZGVyID0gbnVsbCxhcnJheSA9IFtdKSA9PiB7XG4gIGxldCBwcmV2aW91c1Bvc2l0aW9uO1xuICBsZXQgcmVwZWF0ZWQgPSBmYWxzZTtcbiAgIHByZXZpb3VzUG9zaXRpb24gPSBbXS5jb25jYXQoYXJyYXkpO1xuICAgbGV0IHZhbHVlID0gdmFsdWVIb2xkZXI7XG4gICBsZXQgbGVmdHVwID0gbnVsbDtcbiAgIGxldCBsZWZ0ZG93biA9IG51bGw7XG4gICBsZXQgdXBsZWZ0ID0gbnVsbDtcbiAgIGxldCB1cHJpZ2h0ID0gbnVsbDtcbiAgIGxldCByaWdodHVwID0gbnVsbDtcbiAgIGxldCByaWdodGRvd24gID0gbnVsbDtcbiAgIGxldCBkb3dubGVmdCA9IG51bGw7XG4gICBsZXQgZG93bnJpZ2h0ID0gbnVsbDtcbiAgIGlmKHZhbHVlSG9sZGVyICYmKHZhbHVlSG9sZGVyWzBdIDwgMCB8fCB2YWx1ZUhvbGRlclsxXSA8IDAgfHwgdmFsdWVIb2xkZXJbMF0+NyB8fCB2YWx1ZUhvbGRlclsxXT43KSl7XG4gICAgIHJldHVybiBudWxsO1xuICAgfVxuICAgIHByZXZpb3VzUG9zaXRpb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmKGVsZW1lbnRbMF0gPT0gdmFsdWVIb2xkZXJbMF0gJiYgZWxlbWVudFsxXSA9PSB2YWx1ZUhvbGRlclsxXSl7XG4gICAgICAgIHJlcGVhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgfSk7XG4gIGlmKHJlcGVhdGVkKSByZXR1cm4gbnVsbDtcbiAgXG5cbiAgaWYodmFsdWUgJiYgIXJlcGVhdGVkKVxuICBwcmV2aW91c1Bvc2l0aW9uLnB1c2godmFsdWUpO1xuXG5cblxuXG4gICBcblxuICAgIHJldHVybiB7dmFsdWUsbGVmdHVwLGxlZnRkb3duLHVwbGVmdCx1cHJpZ2h0LHJpZ2h0ZG93bixyaWdodHVwLGRvd25sZWZ0LGRvd25yaWdodCxwcmV2aW91c1Bvc2l0aW9ufVxufVxuXG5leHBvcnQgZGVmYXVsdCBub2RlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsga25pZ2h0TW92ZXMsYWxsTW92ZXMsIGdldFJvb3QgfSBmcm9tIFwiLi9rbmlnaHRfdHJhdmFpbHNcIjtcbmltcG9ydCBub2RlIGZyb20gXCIuL25vZGVcIjtcblxuLy8gbGV0IHJvb3QgPSBhbGxNb3ZlcygpO1xuXG5sZXQgYXJyYXkgPSBrbmlnaHRNb3ZlcyhbMCwyXSxbMiwxXSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9