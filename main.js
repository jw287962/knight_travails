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



function allMoves(position = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),x = 0,y = 0){
      position.value = [x,y];
      if(position.value[0] > 7 || position.value[1]> 7 || position.value[0] <0 || position.value[1]<0){
        return null;
      }
      if(position == null){
        return ;
      }

      console.log(position.value);
    position.leftdown = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-2,position.value[1]-1]);
    position.leftup   = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-2,position.value[1]+1]);
    position.upleft = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-1,position.value[1]+2]);
    position.upright = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+1,position.value[1]+2]);
    position.rightdown = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+2,position.value[1]-1]);
    position.rightup = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+2,position.value[1]+1]);
    position.downleft = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]-1,position.value[1]-2]);
    position.downright = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])([position.value[0]+1,position.value[1]-2]);

return position;
}

function getRoot(){
  return root;
}

function knightMoves(start,endPosition){
  let moves = allMoves(undefined,start[0],start[1]);

  // while(endPosition[0] != moves.value[0] || endPosition[1] != moves.value[1]){
for(let i = 0 ; i <= 10; i++){
      if(moves.leftdown != null)
      moves = allMoves(moves.leftdown,moves.leftdown.value[0],moves.leftdown.value[1]);
      if(moves.leftup != null)
      moves = allMoves(moves.leftup,moves.leftup.value[0],moves.leftup.value[1]);
      if(moves.upleft != null)
      moves = allMoves(moves.upleft,moves.upleft.value[0],moves.upleft.value[1]);
      if(moves.upright != null)
      moves = allMoves(moves.upright,moves.upright.value[0],moves.upright.value[1]);
      if(moves.rightdown != null)
      moves = allMoves(moves.rightdown,moves.rightdown.value[0],moves.rightdown.value[1]);
      if(moves.rightup != null)
      moves = allMoves(moves.rightup,moves.rightup.value[0],moves.rightup.value[1]);
      if(moves.downleft != null)
      moves = allMoves(moves.downleft,moves.downleft.value[0],moves.downleft.value[1]);
      if(moves.downright != null)
      moves = allMoves(moves.downright,moves.downright.value[0],moves.downright.value[1]);

  }

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


const node = (valueHolder = null) => {

  let value = valueHolder;
  if(valueHolder &&(valueHolder[0] < 0 || valueHolder[1] < 0 || valueHolder[0]>7 || valueHolder[1]>7)){
    return null;
  }
    let leftup = null;
    let leftdown = null;
    let upleft = null;
    let upright = null;
    let rightup = null;
    let rightdown  = null;
    let downleft = null;
    let downright = null;

    return {value,leftup,leftdown,upleft,upright,rightdown,rightup,downleft,downright}
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


(0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__.knightMoves)([0,0],[2,1]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2Qjs7O0FBRzdCLDZCQUE2QixvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixvREFBSTtBQUM1Qix3QkFBd0Isb0RBQUk7QUFDNUIsc0JBQXNCLG9EQUFJO0FBQzFCLHVCQUF1QixvREFBSTtBQUMzQix5QkFBeUIsb0RBQUk7QUFDN0IsdUJBQXVCLG9EQUFJO0FBQzNCLHdCQUF3QixvREFBSTtBQUM1Qix5QkFBeUIsb0RBQUk7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDcEJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtFOzs7QUFHbEU7OztBQUdBLDZEQUFXLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9zcmMva25pZ2h0X3RyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZSBmcm9tICcuL25vZGUuanMnO1xuXG5cbmZ1bmN0aW9uIGFsbE1vdmVzKHBvc2l0aW9uID0gbm9kZSgpLHggPSAwLHkgPSAwKXtcbiAgICAgIHBvc2l0aW9uLnZhbHVlID0gW3gseV07XG4gICAgICBpZihwb3NpdGlvbi52YWx1ZVswXSA+IDcgfHwgcG9zaXRpb24udmFsdWVbMV0+IDcgfHwgcG9zaXRpb24udmFsdWVbMF0gPDAgfHwgcG9zaXRpb24udmFsdWVbMV08MCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYocG9zaXRpb24gPT0gbnVsbCl7XG4gICAgICAgIHJldHVybiA7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uLnZhbHVlKTtcbiAgICBwb3NpdGlvbi5sZWZ0ZG93biA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdLTIscG9zaXRpb24udmFsdWVbMV0tMV0pO1xuICAgIHBvc2l0aW9uLmxlZnR1cCAgID0gbm9kZShbcG9zaXRpb24udmFsdWVbMF0tMixwb3NpdGlvbi52YWx1ZVsxXSsxXSk7XG4gICAgcG9zaXRpb24udXBsZWZ0ID0gbm9kZShbcG9zaXRpb24udmFsdWVbMF0tMSxwb3NpdGlvbi52YWx1ZVsxXSsyXSk7XG4gICAgcG9zaXRpb24udXByaWdodCA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdKzEscG9zaXRpb24udmFsdWVbMV0rMl0pO1xuICAgIHBvc2l0aW9uLnJpZ2h0ZG93biA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdKzIscG9zaXRpb24udmFsdWVbMV0tMV0pO1xuICAgIHBvc2l0aW9uLnJpZ2h0dXAgPSBub2RlKFtwb3NpdGlvbi52YWx1ZVswXSsyLHBvc2l0aW9uLnZhbHVlWzFdKzFdKTtcbiAgICBwb3NpdGlvbi5kb3dubGVmdCA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdLTEscG9zaXRpb24udmFsdWVbMV0tMl0pO1xuICAgIHBvc2l0aW9uLmRvd25yaWdodCA9IG5vZGUoW3Bvc2l0aW9uLnZhbHVlWzBdKzEscG9zaXRpb24udmFsdWVbMV0tMl0pO1xuXG5yZXR1cm4gcG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGdldFJvb3QoKXtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0LGVuZFBvc2l0aW9uKXtcbiAgbGV0IG1vdmVzID0gYWxsTW92ZXModW5kZWZpbmVkLHN0YXJ0WzBdLHN0YXJ0WzFdKTtcblxuICAvLyB3aGlsZShlbmRQb3NpdGlvblswXSAhPSBtb3Zlcy52YWx1ZVswXSB8fCBlbmRQb3NpdGlvblsxXSAhPSBtb3Zlcy52YWx1ZVsxXSl7XG5mb3IobGV0IGkgPSAwIDsgaSA8PSAxMDsgaSsrKXtcbiAgICAgIGlmKG1vdmVzLmxlZnRkb3duICE9IG51bGwpXG4gICAgICBtb3ZlcyA9IGFsbE1vdmVzKG1vdmVzLmxlZnRkb3duLG1vdmVzLmxlZnRkb3duLnZhbHVlWzBdLG1vdmVzLmxlZnRkb3duLnZhbHVlWzFdKTtcbiAgICAgIGlmKG1vdmVzLmxlZnR1cCAhPSBudWxsKVxuICAgICAgbW92ZXMgPSBhbGxNb3Zlcyhtb3Zlcy5sZWZ0dXAsbW92ZXMubGVmdHVwLnZhbHVlWzBdLG1vdmVzLmxlZnR1cC52YWx1ZVsxXSk7XG4gICAgICBpZihtb3Zlcy51cGxlZnQgIT0gbnVsbClcbiAgICAgIG1vdmVzID0gYWxsTW92ZXMobW92ZXMudXBsZWZ0LG1vdmVzLnVwbGVmdC52YWx1ZVswXSxtb3Zlcy51cGxlZnQudmFsdWVbMV0pO1xuICAgICAgaWYobW92ZXMudXByaWdodCAhPSBudWxsKVxuICAgICAgbW92ZXMgPSBhbGxNb3Zlcyhtb3Zlcy51cHJpZ2h0LG1vdmVzLnVwcmlnaHQudmFsdWVbMF0sbW92ZXMudXByaWdodC52YWx1ZVsxXSk7XG4gICAgICBpZihtb3Zlcy5yaWdodGRvd24gIT0gbnVsbClcbiAgICAgIG1vdmVzID0gYWxsTW92ZXMobW92ZXMucmlnaHRkb3duLG1vdmVzLnJpZ2h0ZG93bi52YWx1ZVswXSxtb3Zlcy5yaWdodGRvd24udmFsdWVbMV0pO1xuICAgICAgaWYobW92ZXMucmlnaHR1cCAhPSBudWxsKVxuICAgICAgbW92ZXMgPSBhbGxNb3Zlcyhtb3Zlcy5yaWdodHVwLG1vdmVzLnJpZ2h0dXAudmFsdWVbMF0sbW92ZXMucmlnaHR1cC52YWx1ZVsxXSk7XG4gICAgICBpZihtb3Zlcy5kb3dubGVmdCAhPSBudWxsKVxuICAgICAgbW92ZXMgPSBhbGxNb3Zlcyhtb3Zlcy5kb3dubGVmdCxtb3Zlcy5kb3dubGVmdC52YWx1ZVswXSxtb3Zlcy5kb3dubGVmdC52YWx1ZVsxXSk7XG4gICAgICBpZihtb3Zlcy5kb3ducmlnaHQgIT0gbnVsbClcbiAgICAgIG1vdmVzID0gYWxsTW92ZXMobW92ZXMuZG93bnJpZ2h0LG1vdmVzLmRvd25yaWdodC52YWx1ZVswXSxtb3Zlcy5kb3ducmlnaHQudmFsdWVbMV0pO1xuXG4gIH1cblxufVxuXG5leHBvcnQge2FsbE1vdmVzLCBrbmlnaHRNb3ZlcyxnZXRSb290fTsiLCJcblxuY29uc3Qgbm9kZSA9ICh2YWx1ZUhvbGRlciA9IG51bGwpID0+IHtcblxuICBsZXQgdmFsdWUgPSB2YWx1ZUhvbGRlcjtcbiAgaWYodmFsdWVIb2xkZXIgJiYodmFsdWVIb2xkZXJbMF0gPCAwIHx8IHZhbHVlSG9sZGVyWzFdIDwgMCB8fCB2YWx1ZUhvbGRlclswXT43IHx8IHZhbHVlSG9sZGVyWzFdPjcpKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAgIGxldCBsZWZ0dXAgPSBudWxsO1xuICAgIGxldCBsZWZ0ZG93biA9IG51bGw7XG4gICAgbGV0IHVwbGVmdCA9IG51bGw7XG4gICAgbGV0IHVwcmlnaHQgPSBudWxsO1xuICAgIGxldCByaWdodHVwID0gbnVsbDtcbiAgICBsZXQgcmlnaHRkb3duICA9IG51bGw7XG4gICAgbGV0IGRvd25sZWZ0ID0gbnVsbDtcbiAgICBsZXQgZG93bnJpZ2h0ID0gbnVsbDtcblxuICAgIHJldHVybiB7dmFsdWUsbGVmdHVwLGxlZnRkb3duLHVwbGVmdCx1cHJpZ2h0LHJpZ2h0ZG93bixyaWdodHVwLGRvd25sZWZ0LGRvd25yaWdodH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbm9kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGtuaWdodE1vdmVzLGFsbE1vdmVzLCBnZXRSb290IH0gZnJvbSBcIi4va25pZ2h0X3RyYXZhaWxzXCI7XG5cblxuLy8gbGV0IHJvb3QgPSBhbGxNb3ZlcygpO1xuXG5cbmtuaWdodE1vdmVzKFswLDBdLFsyLDFdKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=