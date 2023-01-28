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
      if(position.value[0] > 7 || position.value[1]> 7 || position.value[0] <0 || position.value[1]<0){
        return null;
      }
  
      // if(position.previousPosition.length > 10) return null;

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

function knightMoves(start,endPosition){
  let firstMove = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start);
  console.log(firstMove);
  let moves = allMoves(firstMove,start[0],start[0]);
let root = firstMove;
  console.log(moves);
  // while(endPosition[0] != moves.value[0] || endPosition[1] != moves.value[1]){


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




    let leftup = null;
    let leftdown = null;
    let upleft = null;
    let upright = null;
    let rightup = null;
    let rightdown  = null;
    let downleft = null;
    let downright = null;

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



// let root = allMoves();

(0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__.knightMoves)([0,2],[2,1]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2Qjs7O0FBRzdCLDZCQUE2QixvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBLHdCQUF3QixvREFBSTtBQUM1QjtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBLDJCQUEyQixvREFBSTtBQUMvQjtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBLDBCQUEwQixvREFBSTtBQUM5QjtBQUNBLDJCQUEyQixvREFBSTs7O0FBRy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlLElBQUk7Ozs7OztVQ3JDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rRTs7O0FBR2xFOztBQUVBLDZEQUFXLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9zcmMva25pZ2h0X3RyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZSBmcm9tICcuL25vZGUuanMnO1xuXG5cbmZ1bmN0aW9uIGFsbE1vdmVzKHBvc2l0aW9uID0gbm9kZSgpLHggPSAwLHkgPSAwLGNvdW50ZXIgPSAgMCl7XG4gIFxuICAgICAgcG9zaXRpb24udmFsdWUgPSBbeCx5XTtcbiAgICAgIGlmKHBvc2l0aW9uLnZhbHVlWzBdID4gNyB8fCBwb3NpdGlvbi52YWx1ZVsxXT4gNyB8fCBwb3NpdGlvbi52YWx1ZVswXSA8MCB8fCBwb3NpdGlvbi52YWx1ZVsxXTwwKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gIFxuICAgICAgLy8gaWYocG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbi5sZW5ndGggPiAxMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIC8vIGlmKCF2aXNpdGVkTGVmdERvd24pXG4gICAgICBwb3NpdGlvbi5sZWZ0ZG93biA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdLTIscG9zaXRpb24udmFsdWVbMV0tMV0scG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbik7XG4gICAgICAvLyBpZighdmlzaXRlZExlZnRVcClcbiAgICAgIHBvc2l0aW9uLmxlZnR1cCAgID0gbm9kZShbcG9zaXRpb24udmFsdWVbMF0tMixwb3NpdGlvbi52YWx1ZVsxXSsxXSxwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uKTtcbiAgICAgIC8vIGlmKCF2aXNpdGVkVXBsZWZ0KVxuICAgICAgcG9zaXRpb24udXBsZWZ0ID0gbm9kZShbcG9zaXRpb24udmFsdWVbMF0tMSxwb3NpdGlvbi52YWx1ZVsxXSsyXSxwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uKTtcbiAgICAgIC8vIGlmKCF2aXNpdGVkVXBSaWdodClcbiAgICAgIHBvc2l0aW9uLnVwcmlnaHQgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsxLHBvc2l0aW9uLnZhbHVlWzFdKzJdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuICAgICAgLy8gaWYoIXZpc2l0ZWRSaWdodERvd24pXG4gICAgICBwb3NpdGlvbi5yaWdodGRvd24gPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsyLHBvc2l0aW9uLnZhbHVlWzFdLTFdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuICAgICAgLy8gaWYoIXZpc2l0ZWRSaWdodFVwKVxuICAgICAgcG9zaXRpb24ucmlnaHR1cCA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdKzIscG9zaXRpb24udmFsdWVbMV0rMV0scG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbik7XG4gICAgICAvLyBpZighdmlzaXRlZERvd25MZWZ0KVxuICAgICAgcG9zaXRpb24uZG93bmxlZnQgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXS0xLHBvc2l0aW9uLnZhbHVlWzFdLTJdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuICAgICAgLy8gaWYoIXZpc2l0ZWREb3duUmlnaHQpXG4gICAgICBwb3NpdGlvbi5kb3ducmlnaHQgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsxLHBvc2l0aW9uLnZhbHVlWzFdLTJdLHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb24pO1xuXG5cbiAgICAgIGlmKCEocG9zaXRpb24ubGVmdGRvd24gfHwgcG9zaXRpb24ubGVmdHVwfHxwb3NpdGlvbi51cHJpZ2h0IHx8IHBvc2l0aW9uLnVwbGVmdCB8fCBwb3NpdGlvbi5yaWdodGRvd25cbiAgICAgICAgIHx8IHBvc2l0aW9uLnJpZ2h0dXAgfHwgcG9zaXRpb24uZG93bmxlZnQgfHwgcG9zaXRpb24uZG93bnJpZ2h0KSkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGlmKHBvc2l0aW9uLmxlZnRkb3duICE9IG51bGwpXG4gICAgYWxsTW92ZXMocG9zaXRpb24ubGVmdGRvd24scG9zaXRpb24ubGVmdGRvd24udmFsdWVbMF0scG9zaXRpb24ubGVmdGRvd24udmFsdWVbMV0sY291bnRlcis9MSk7XG4gICAgXG4gICAgaWYocG9zaXRpb24ubGVmdHVwICE9IG51bGwpXG4gICBhbGxNb3Zlcyhwb3NpdGlvbi5sZWZ0dXAscG9zaXRpb24ubGVmdHVwLnZhbHVlWzBdLHBvc2l0aW9uLmxlZnR1cC52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBpZihwb3NpdGlvbi51cGxlZnQgIT0gbnVsbClcbiAgYWxsTW92ZXMocG9zaXRpb24udXBsZWZ0LHBvc2l0aW9uLnVwbGVmdC52YWx1ZVswXSxwb3NpdGlvbi51cGxlZnQudmFsdWVbMV0sY291bnRlcis9MSk7XG4gICAgaWYocG9zaXRpb24udXByaWdodCAhPSBudWxsKVxuICBhbGxNb3Zlcyhwb3NpdGlvbi51cHJpZ2h0LHBvc2l0aW9uLnVwcmlnaHQudmFsdWVbMF0scG9zaXRpb24udXByaWdodC52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBpZihwb3NpdGlvbi5yaWdodGRvd24gIT0gbnVsbClcbiAgYWxsTW92ZXMocG9zaXRpb24ucmlnaHRkb3duLHBvc2l0aW9uLnJpZ2h0ZG93bi52YWx1ZVswXSxwb3NpdGlvbi5yaWdodGRvd24udmFsdWVbMV0sY291bnRlcis9MSk7XG4gICAgaWYocG9zaXRpb24ucmlnaHR1cCAhPSBudWxsKVxuICBhbGxNb3Zlcyhwb3NpdGlvbi5yaWdodHVwLHBvc2l0aW9uLnJpZ2h0dXAudmFsdWVbMF0scG9zaXRpb24ucmlnaHR1cC52YWx1ZVsxXSxjb3VudGVyKz0xKTtcbiAgICBpZihwb3NpdGlvbi5kb3dubGVmdCAhPSBudWxsKVxuICAgYWxsTW92ZXMocG9zaXRpb24uZG93bmxlZnQscG9zaXRpb24uZG93bmxlZnQudmFsdWVbMF0scG9zaXRpb24uZG93bmxlZnQudmFsdWVbMV0sY291bnRlcis9MSk7XG4gICAgaWYocG9zaXRpb24uZG93bnJpZ2h0ICE9IG51bGwpXG4gICAgYWxsTW92ZXMocG9zaXRpb24uZG93bnJpZ2h0LHBvc2l0aW9uLmRvd25yaWdodC52YWx1ZVswXSxwb3NpdGlvbi5kb3ducmlnaHQudmFsdWVbMV0sY291bnRlcis9MSk7XG5cbnJldHVybiBwb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2V0Um9vdCgpe1xuICByZXR1cm4gcm9vdDtcbn1cbmxldCByb290O1xuXG5mdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCxlbmRQb3NpdGlvbil7XG4gIGxldCBmaXJzdE1vdmUgPSBub2RlKHN0YXJ0KTtcbiAgY29uc29sZS5sb2coZmlyc3RNb3ZlKTtcbiAgbGV0IG1vdmVzID0gYWxsTW92ZXMoZmlyc3RNb3ZlLHN0YXJ0WzBdLHN0YXJ0WzBdKTtcbmxldCByb290ID0gZmlyc3RNb3ZlO1xuICBjb25zb2xlLmxvZyhtb3Zlcyk7XG4gIC8vIHdoaWxlKGVuZFBvc2l0aW9uWzBdICE9IG1vdmVzLnZhbHVlWzBdIHx8IGVuZFBvc2l0aW9uWzFdICE9IG1vdmVzLnZhbHVlWzFdKXtcblxuXG59XG5cblxuZXhwb3J0IHthbGxNb3Zlcywga25pZ2h0TW92ZXMsZ2V0Um9vdH07IiwiXG5cbmNvbnN0IG5vZGUgPSAodmFsdWVIb2xkZXIgPSBudWxsLGFycmF5ID0gW10pID0+IHtcbiAgbGV0IHByZXZpb3VzUG9zaXRpb247XG4gIGxldCByZXBlYXRlZCA9IGZhbHNlO1xuICAgcHJldmlvdXNQb3NpdGlvbiA9IFtdLmNvbmNhdChhcnJheSk7XG4gICBsZXQgdmFsdWUgPSB2YWx1ZUhvbGRlcjtcblxuICAgaWYodmFsdWVIb2xkZXIgJiYodmFsdWVIb2xkZXJbMF0gPCAwIHx8IHZhbHVlSG9sZGVyWzFdIDwgMCB8fCB2YWx1ZUhvbGRlclswXT43IHx8IHZhbHVlSG9sZGVyWzFdPjcpKXtcbiAgICAgcmV0dXJuIG51bGw7XG4gICB9XG4gICAgcHJldmlvdXNQb3NpdGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYoZWxlbWVudFswXSA9PSB2YWx1ZUhvbGRlclswXSAmJiBlbGVtZW50WzFdID09IHZhbHVlSG9sZGVyWzFdKXtcbiAgICAgICAgcmVwZWF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICB9KTtcbiAgaWYocmVwZWF0ZWQpIHJldHVybiBudWxsO1xuICBcblxuICBpZih2YWx1ZSAmJiAhcmVwZWF0ZWQpXG4gIHByZXZpb3VzUG9zaXRpb24ucHVzaCh2YWx1ZSk7XG5cblxuXG5cbiAgICBsZXQgbGVmdHVwID0gbnVsbDtcbiAgICBsZXQgbGVmdGRvd24gPSBudWxsO1xuICAgIGxldCB1cGxlZnQgPSBudWxsO1xuICAgIGxldCB1cHJpZ2h0ID0gbnVsbDtcbiAgICBsZXQgcmlnaHR1cCA9IG51bGw7XG4gICAgbGV0IHJpZ2h0ZG93biAgPSBudWxsO1xuICAgIGxldCBkb3dubGVmdCA9IG51bGw7XG4gICAgbGV0IGRvd25yaWdodCA9IG51bGw7XG5cbiAgICByZXR1cm4ge3ZhbHVlLGxlZnR1cCxsZWZ0ZG93bix1cGxlZnQsdXByaWdodCxyaWdodGRvd24scmlnaHR1cCxkb3dubGVmdCxkb3ducmlnaHQscHJldmlvdXNQb3NpdGlvbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbm9kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGtuaWdodE1vdmVzLGFsbE1vdmVzLCBnZXRSb290IH0gZnJvbSBcIi4va25pZ2h0X3RyYXZhaWxzXCI7XG5cblxuLy8gbGV0IHJvb3QgPSBhbGxNb3ZlcygpO1xuXG5rbmlnaHRNb3ZlcyhbMCwyXSxbMiwxXSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9