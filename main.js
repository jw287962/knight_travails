/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Roboto-Regular.ttf */ "./src/asset/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Roboto-Bold.ttf */ "./src/asset/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/asset/knight.png */ "./src/asset/knight.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: RobotoRegular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n:root {\n  --boxSize: 60px;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: RobotoRegular, Arial, Helvetica, sans-serif;\n}\n\n.header {\n  position: relative;\n  margin: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  width: 100vw;\n  border-bottom: 2px solid grey;\n}\n.input {\n  display: flex;\n  flex-direction: column;\n}\n\n.information {\n  background-color: white;\n  border-radius: 50%;\n  position: relative;\n  top: 5px;\n  left: 3px;\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.information:hover::after {\n  content: \"Knight Travails shows the shortest possible way to get from one square to another by displaying all squares the knight will stop on along the way.\";\n  position: absolute;\n  top: 25px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: white;\n  right: 10px;\n  width: 300px;\n  border: 1px solid black;\n}\n\n/* BOARD BODY  */\n.instruction {\n  text-align: center;\n}\n/* REAL BOARD */\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n}\n.boardRow {\n  height: var(--boxSize);\n  display: flex;\n}\n.boardElement {\n  position: relative;\n  height: var(--boxSize);\n  width: var(--boxSize);\n  background-color: white;\n  border: 1px solid black;\n}\n\n.knightImg {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  height: 60px;\n  translate: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 10px;\n}\n\n.moveNumber {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n\n  height: 15px;\n  width: 15px;\n\n  background-color: rgb(255, 238, 0);\n  border: 1px solid black;\n  border-radius: 50%;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,4CAAsC;AACxC;AACA;EACE,uBAAuB;EACvB,4CAAmC;AACrC;;AAEA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,wDAAwD;AAC1D;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,qDAAqD;EACrD,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,6JAA6J;EAC7J,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;AACpB;AACA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,qBAAqB;EACrB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gDAAuC;EACvC,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;;EAEV,YAAY;EACZ,WAAW;;EAEX,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: RobotoRegular;\n  src: url(\"./asset/Roboto-Regular.ttf\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url(\"./asset/Roboto-Bold.ttf\");\n}\n\n:root {\n  --boxSize: 60px;\n}\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: RobotoRegular, Arial, Helvetica, sans-serif;\n}\n\n.header {\n  position: relative;\n  margin: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n  font-family: RobotoBold, Arial, Helvetica, sans-serif;\n  width: 100vw;\n  border-bottom: 2px solid grey;\n}\n.input {\n  display: flex;\n  flex-direction: column;\n}\n\n.information {\n  background-color: white;\n  border-radius: 50%;\n  position: relative;\n  top: 5px;\n  left: 3px;\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.information:hover::after {\n  content: \"Knight Travails shows the shortest possible way to get from one square to another by displaying all squares the knight will stop on along the way.\";\n  position: absolute;\n  top: 25px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: white;\n  right: 10px;\n  width: 300px;\n  border: 1px solid black;\n}\n\n/* BOARD BODY  */\n.instruction {\n  text-align: center;\n}\n/* REAL BOARD */\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n}\n.boardRow {\n  height: var(--boxSize);\n  display: flex;\n}\n.boardElement {\n  position: relative;\n  height: var(--boxSize);\n  width: var(--boxSize);\n  background-color: white;\n  border: 1px solid black;\n}\n\n.knightImg {\n  content: url(\"../src/asset/knight.png\");\n  height: 60px;\n  translate: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 10px;\n}\n\n.moveNumber {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n\n  height: 15px;\n  width: 15px;\n\n  background-color: rgb(255, 238, 0);\n  border: 1px solid black;\n  border-radius: 50%;\n  font-weight: 600;\n  font-size: 14px;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

// STARTS FROM BOTTON LEFT CORNER 0,0
function allMoves(position = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), x = 0, y = 0, counter = 0) {
  position.value = [x, y];
  // if(position.value[0] > 7 || position.value[1]> 7 || position.value[0] <0 || position.value[1]<0){
  //   return null;
  // }

  if (position.previousPosition.length > 7) return null;

  // if(!visitedLeftDown)
  position.leftdown = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] - 2, position.value[1] - 1],
    position.previousPosition
  );
  // if(!visitedLeftUp)
  position.leftup = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] - 2, position.value[1] + 1],
    position.previousPosition
  );
  // if(!visitedUpleft)
  position.upleft = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] - 1, position.value[1] + 2],
    position.previousPosition
  );
  // if(!visitedUpRight)
  position.upright = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] + 1, position.value[1] + 2],
    position.previousPosition
  );
  // if(!visitedRightDown)
  position.rightdown = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] + 2, position.value[1] - 1],
    position.previousPosition
  );
  // if(!visitedRightUp)
  position.rightup = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] + 2, position.value[1] + 1],
    position.previousPosition
  );
  // if(!visitedDownLeft)
  position.downleft = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] - 1, position.value[1] - 2],
    position.previousPosition
  );
  // if(!visitedDownRight)
  position.downright = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    [position.value[0] + 1, position.value[1] - 2],
    position.previousPosition
  );

  if (
    !(
      position.leftdown ||
      position.leftup ||
      position.upright ||
      position.upleft ||
      position.rightdown ||
      position.rightup ||
      position.downleft ||
      position.downright
    )
  )
    return null;

  if (position.leftdown != null)
    allMoves(
      position.leftdown,
      position.leftdown.value[0],
      position.leftdown.value[1],
      (counter += 1)
    );

  if (position.leftup != null)
    allMoves(
      position.leftup,
      position.leftup.value[0],
      position.leftup.value[1],
      (counter += 1)
    );
  if (position.upleft != null)
    allMoves(
      position.upleft,
      position.upleft.value[0],
      position.upleft.value[1],
      (counter += 1)
    );
  if (position.upright != null)
    allMoves(
      position.upright,
      position.upright.value[0],
      position.upright.value[1],
      (counter += 1)
    );
  if (position.rightdown != null)
    allMoves(
      position.rightdown,
      position.rightdown.value[0],
      position.rightdown.value[1],
      (counter += 1)
    );
  if (position.rightup != null)
    allMoves(
      position.rightup,
      position.rightup.value[0],
      position.rightup.value[1],
      (counter += 1)
    );
  if (position.downleft != null)
    allMoves(
      position.downleft,
      position.downleft.value[0],
      position.downleft.value[1],
      (counter += 1)
    );
  if (position.downright != null)
    allMoves(
      position.downright,
      position.downright.value[0],
      position.downright.value[1],
      (counter += 1)
    );

  return position;
}

function getRoot() {
  return root;
}
let root;

function levelOrder(node = root, endPosition) {
  let queueArray = [];
  if (node == null) return [];
  let orderArray = [];
  queueArray.push(node);

  while (queueArray.length != 0) {
    let sliced = queueArray.splice(0, 1);
    //  if(callback)
    //   orderArray.push(callback(sliced[0].data));
    //  else
    //   orderArray.push(sliced[0].data);
    let currentPosition = sliced[0].value;
    if (
      currentPosition[0] == endPosition[0] &&
      currentPosition[1] == endPosition[1]
    )
      return sliced[0].previousPosition;

    if (sliced[0].leftdown != null) {
      queueArray.push(sliced[0].leftdown);
    }
    if (sliced[0].leftup != null) {
      queueArray.push(sliced[0].leftup);
    }
    if (sliced[0].upleft != null) {
      queueArray.push(sliced[0].upleft);
    }
    if (sliced[0].upright != null) {
      queueArray.push(sliced[0].upright);
    }
    if (sliced[0].rightdown != null) {
      queueArray.push(sliced[0].rightdown);
    }
    if (sliced[0].rightup != null) {
      queueArray.push(sliced[0].rightup);
    }
    if (sliced[0].downleft != null) {
      queueArray.push(sliced[0].downleft);
    }
    if (sliced[0].downright != null) {
      queueArray.push(sliced[0].downright);
    }
  }
}
function knightMoves(start, endPosition) {
  console.log(start, "-->", endPosition);

  let firstMove = (0,_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start);
  let moves = allMoves(firstMove, start[0], start[1]);
  let root = firstMove;
  // while(endPosition[0] != moves.value[0] || endPosition[1] != moves.value[1]){
  let array = levelOrder(firstMove, endPosition);

  array.forEach((element) => {
    console.log(element);
  });

  console.log(moves);
  return array;
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

/***/ }),

/***/ "./src/asset/Roboto-Bold.ttf":
/*!***********************************!*\
  !*** ./src/asset/Roboto-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/asset/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/asset/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/asset/knight.png":
/*!******************************!*\
  !*** ./src/asset/knight.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "644dad9b0120d0d5cbf9.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// let root = allMoves();
makeBoard();
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
      boardPos.addEventListener("click", clickSetPosition, true);

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
    calculateMoves(positions.startPos, positions.endPos);
    positions.startPos = [];
    positions.endPos = [];
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
  let array = (0,_knight_travails__WEBPACK_IMPORTED_MODULE_0__.knightMoves)(startPosArray, endPosArray);
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
    })
  );
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9EQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFJO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixvREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRTBDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9MMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUN6QztBQUNMO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxjQUFjLDZEQUFXO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy8uL3NyYy9rbmlnaHRfdHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodF90cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va25pZ2h0X3RyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRfdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXQvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9Sb2JvdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXQva25pZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ib3hTaXplOiA2MHB4O1xcbn1cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzBweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XFxufVxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluZm9ybWF0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5pbmZvcm1hdGlvbjpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIktuaWdodCBUcmF2YWlscyBzaG93cyB0aGUgc2hvcnRlc3QgcG9zc2libGUgd2F5IHRvIGdldCBmcm9tIG9uZSBzcXVhcmUgdG8gYW5vdGhlciBieSBkaXNwbGF5aW5nIGFsbCBzcXVhcmVzIHRoZSBrbmlnaHQgd2lsbCBzdG9wIG9uIGFsb25nIHRoZSB3YXkuXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICByaWdodDogMTBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKiBCT0FSRCBCT0RZICAqL1xcbi5pbnN0cnVjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIFJFQUwgQk9BUkQgKi9cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG4uYm9hcmRSb3cge1xcbiAgaGVpZ2h0OiB2YXIoLS1ib3hTaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ib2FyZEVsZW1lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiB2YXIoLS1ib3hTaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1ib3hTaXplKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5rbmlnaHRJbWcge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHRyYW5zbGF0ZTogLTEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLm1vdmVOdW1iZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycHg7XFxuICByaWdodDogMnB4O1xcblxcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzgsIDApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUFzQztBQUN4QztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2SkFBNko7RUFDN0osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0RBQXVDO0VBQ3ZDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVOztFQUVWLFlBQVk7RUFDWixXQUFXOztFQUVYLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldC9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0L1JvYm90by1Cb2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJveFNpemU6IDYwcHg7XFxufVxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwdnc7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcXG59XFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5mb3JtYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmluZm9ybWF0aW9uOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiS25pZ2h0IFRyYXZhaWxzIHNob3dzIHRoZSBzaG9ydGVzdCBwb3NzaWJsZSB3YXkgdG8gZ2V0IGZyb20gb25lIHNxdWFyZSB0byBhbm90aGVyIGJ5IGRpc3BsYXlpbmcgYWxsIHNxdWFyZXMgdGhlIGtuaWdodCB3aWxsIHN0b3Agb24gYWxvbmcgdGhlIHdheS5cXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIEJPQVJEIEJPRFkgICovXFxuLmluc3RydWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogUkVBTCBCT0FSRCAqL1xcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcbi5ib2FyZFJvdyB7XFxuICBoZWlnaHQ6IHZhcigtLWJveFNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmJvYXJkRWxlbWVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IHZhcigtLWJveFNpemUpO1xcbiAgd2lkdGg6IHZhcigtLWJveFNpemUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmtuaWdodEltZyB7XFxuICBjb250ZW50OiB1cmwoXFxcIi4uL3NyYy9hc3NldC9rbmlnaHQucG5nXFxcIik7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB0cmFuc2xhdGU6IC0xMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tb3ZlTnVtYmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnB4O1xcbiAgcmlnaHQ6IDJweDtcXG5cXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM4LCAwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBub2RlIGZyb20gXCIuL25vZGUuanNcIjtcbi8vIFNUQVJUUyBGUk9NIEJPVFRPTiBMRUZUIENPUk5FUiAwLDBcbmZ1bmN0aW9uIGFsbE1vdmVzKHBvc2l0aW9uID0gbm9kZSgpLCB4ID0gMCwgeSA9IDAsIGNvdW50ZXIgPSAwKSB7XG4gIHBvc2l0aW9uLnZhbHVlID0gW3gsIHldO1xuICAvLyBpZihwb3NpdGlvbi52YWx1ZVswXSA+IDcgfHwgcG9zaXRpb24udmFsdWVbMV0+IDcgfHwgcG9zaXRpb24udmFsdWVbMF0gPDAgfHwgcG9zaXRpb24udmFsdWVbMV08MCl7XG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICBpZiAocG9zaXRpb24ucHJldmlvdXNQb3NpdGlvbi5sZW5ndGggPiA3KSByZXR1cm4gbnVsbDtcblxuICAvLyBpZighdmlzaXRlZExlZnREb3duKVxuICBwb3NpdGlvbi5sZWZ0ZG93biA9IG5vZGUoXG4gICAgW3Bvc2l0aW9uLnZhbHVlWzBdIC0gMiwgcG9zaXRpb24udmFsdWVbMV0gLSAxXSxcbiAgICBwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uXG4gICk7XG4gIC8vIGlmKCF2aXNpdGVkTGVmdFVwKVxuICBwb3NpdGlvbi5sZWZ0dXAgPSBub2RlKFxuICAgIFtwb3NpdGlvbi52YWx1ZVswXSAtIDIsIHBvc2l0aW9uLnZhbHVlWzFdICsgMV0sXG4gICAgcG9zaXRpb24ucHJldmlvdXNQb3NpdGlvblxuICApO1xuICAvLyBpZighdmlzaXRlZFVwbGVmdClcbiAgcG9zaXRpb24udXBsZWZ0ID0gbm9kZShcbiAgICBbcG9zaXRpb24udmFsdWVbMF0gLSAxLCBwb3NpdGlvbi52YWx1ZVsxXSArIDJdLFxuICAgIHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb25cbiAgKTtcbiAgLy8gaWYoIXZpc2l0ZWRVcFJpZ2h0KVxuICBwb3NpdGlvbi51cHJpZ2h0ID0gbm9kZShcbiAgICBbcG9zaXRpb24udmFsdWVbMF0gKyAxLCBwb3NpdGlvbi52YWx1ZVsxXSArIDJdLFxuICAgIHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb25cbiAgKTtcbiAgLy8gaWYoIXZpc2l0ZWRSaWdodERvd24pXG4gIHBvc2l0aW9uLnJpZ2h0ZG93biA9IG5vZGUoXG4gICAgW3Bvc2l0aW9uLnZhbHVlWzBdICsgMiwgcG9zaXRpb24udmFsdWVbMV0gLSAxXSxcbiAgICBwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uXG4gICk7XG4gIC8vIGlmKCF2aXNpdGVkUmlnaHRVcClcbiAgcG9zaXRpb24ucmlnaHR1cCA9IG5vZGUoXG4gICAgW3Bvc2l0aW9uLnZhbHVlWzBdICsgMiwgcG9zaXRpb24udmFsdWVbMV0gKyAxXSxcbiAgICBwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uXG4gICk7XG4gIC8vIGlmKCF2aXNpdGVkRG93bkxlZnQpXG4gIHBvc2l0aW9uLmRvd25sZWZ0ID0gbm9kZShcbiAgICBbcG9zaXRpb24udmFsdWVbMF0gLSAxLCBwb3NpdGlvbi52YWx1ZVsxXSAtIDJdLFxuICAgIHBvc2l0aW9uLnByZXZpb3VzUG9zaXRpb25cbiAgKTtcbiAgLy8gaWYoIXZpc2l0ZWREb3duUmlnaHQpXG4gIHBvc2l0aW9uLmRvd25yaWdodCA9IG5vZGUoXG4gICAgW3Bvc2l0aW9uLnZhbHVlWzBdICsgMSwgcG9zaXRpb24udmFsdWVbMV0gLSAyXSxcbiAgICBwb3NpdGlvbi5wcmV2aW91c1Bvc2l0aW9uXG4gICk7XG5cbiAgaWYgKFxuICAgICEoXG4gICAgICBwb3NpdGlvbi5sZWZ0ZG93biB8fFxuICAgICAgcG9zaXRpb24ubGVmdHVwIHx8XG4gICAgICBwb3NpdGlvbi51cHJpZ2h0IHx8XG4gICAgICBwb3NpdGlvbi51cGxlZnQgfHxcbiAgICAgIHBvc2l0aW9uLnJpZ2h0ZG93biB8fFxuICAgICAgcG9zaXRpb24ucmlnaHR1cCB8fFxuICAgICAgcG9zaXRpb24uZG93bmxlZnQgfHxcbiAgICAgIHBvc2l0aW9uLmRvd25yaWdodFxuICAgIClcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmIChwb3NpdGlvbi5sZWZ0ZG93biAhPSBudWxsKVxuICAgIGFsbE1vdmVzKFxuICAgICAgcG9zaXRpb24ubGVmdGRvd24sXG4gICAgICBwb3NpdGlvbi5sZWZ0ZG93bi52YWx1ZVswXSxcbiAgICAgIHBvc2l0aW9uLmxlZnRkb3duLnZhbHVlWzFdLFxuICAgICAgKGNvdW50ZXIgKz0gMSlcbiAgICApO1xuXG4gIGlmIChwb3NpdGlvbi5sZWZ0dXAgIT0gbnVsbClcbiAgICBhbGxNb3ZlcyhcbiAgICAgIHBvc2l0aW9uLmxlZnR1cCxcbiAgICAgIHBvc2l0aW9uLmxlZnR1cC52YWx1ZVswXSxcbiAgICAgIHBvc2l0aW9uLmxlZnR1cC52YWx1ZVsxXSxcbiAgICAgIChjb3VudGVyICs9IDEpXG4gICAgKTtcbiAgaWYgKHBvc2l0aW9uLnVwbGVmdCAhPSBudWxsKVxuICAgIGFsbE1vdmVzKFxuICAgICAgcG9zaXRpb24udXBsZWZ0LFxuICAgICAgcG9zaXRpb24udXBsZWZ0LnZhbHVlWzBdLFxuICAgICAgcG9zaXRpb24udXBsZWZ0LnZhbHVlWzFdLFxuICAgICAgKGNvdW50ZXIgKz0gMSlcbiAgICApO1xuICBpZiAocG9zaXRpb24udXByaWdodCAhPSBudWxsKVxuICAgIGFsbE1vdmVzKFxuICAgICAgcG9zaXRpb24udXByaWdodCxcbiAgICAgIHBvc2l0aW9uLnVwcmlnaHQudmFsdWVbMF0sXG4gICAgICBwb3NpdGlvbi51cHJpZ2h0LnZhbHVlWzFdLFxuICAgICAgKGNvdW50ZXIgKz0gMSlcbiAgICApO1xuICBpZiAocG9zaXRpb24ucmlnaHRkb3duICE9IG51bGwpXG4gICAgYWxsTW92ZXMoXG4gICAgICBwb3NpdGlvbi5yaWdodGRvd24sXG4gICAgICBwb3NpdGlvbi5yaWdodGRvd24udmFsdWVbMF0sXG4gICAgICBwb3NpdGlvbi5yaWdodGRvd24udmFsdWVbMV0sXG4gICAgICAoY291bnRlciArPSAxKVxuICAgICk7XG4gIGlmIChwb3NpdGlvbi5yaWdodHVwICE9IG51bGwpXG4gICAgYWxsTW92ZXMoXG4gICAgICBwb3NpdGlvbi5yaWdodHVwLFxuICAgICAgcG9zaXRpb24ucmlnaHR1cC52YWx1ZVswXSxcbiAgICAgIHBvc2l0aW9uLnJpZ2h0dXAudmFsdWVbMV0sXG4gICAgICAoY291bnRlciArPSAxKVxuICAgICk7XG4gIGlmIChwb3NpdGlvbi5kb3dubGVmdCAhPSBudWxsKVxuICAgIGFsbE1vdmVzKFxuICAgICAgcG9zaXRpb24uZG93bmxlZnQsXG4gICAgICBwb3NpdGlvbi5kb3dubGVmdC52YWx1ZVswXSxcbiAgICAgIHBvc2l0aW9uLmRvd25sZWZ0LnZhbHVlWzFdLFxuICAgICAgKGNvdW50ZXIgKz0gMSlcbiAgICApO1xuICBpZiAocG9zaXRpb24uZG93bnJpZ2h0ICE9IG51bGwpXG4gICAgYWxsTW92ZXMoXG4gICAgICBwb3NpdGlvbi5kb3ducmlnaHQsXG4gICAgICBwb3NpdGlvbi5kb3ducmlnaHQudmFsdWVbMF0sXG4gICAgICBwb3NpdGlvbi5kb3ducmlnaHQudmFsdWVbMV0sXG4gICAgICAoY291bnRlciArPSAxKVxuICAgICk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBnZXRSb290KCkge1xuICByZXR1cm4gcm9vdDtcbn1cbmxldCByb290O1xuXG5mdW5jdGlvbiBsZXZlbE9yZGVyKG5vZGUgPSByb290LCBlbmRQb3NpdGlvbikge1xuICBsZXQgcXVldWVBcnJheSA9IFtdO1xuICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gW107XG4gIGxldCBvcmRlckFycmF5ID0gW107XG4gIHF1ZXVlQXJyYXkucHVzaChub2RlKTtcblxuICB3aGlsZSAocXVldWVBcnJheS5sZW5ndGggIT0gMCkge1xuICAgIGxldCBzbGljZWQgPSBxdWV1ZUFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAvLyAgaWYoY2FsbGJhY2spXG4gICAgLy8gICBvcmRlckFycmF5LnB1c2goY2FsbGJhY2soc2xpY2VkWzBdLmRhdGEpKTtcbiAgICAvLyAgZWxzZVxuICAgIC8vICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gc2xpY2VkWzBdLnZhbHVlO1xuICAgIGlmIChcbiAgICAgIGN1cnJlbnRQb3NpdGlvblswXSA9PSBlbmRQb3NpdGlvblswXSAmJlxuICAgICAgY3VycmVudFBvc2l0aW9uWzFdID09IGVuZFBvc2l0aW9uWzFdXG4gICAgKVxuICAgICAgcmV0dXJuIHNsaWNlZFswXS5wcmV2aW91c1Bvc2l0aW9uO1xuXG4gICAgaWYgKHNsaWNlZFswXS5sZWZ0ZG93biAhPSBudWxsKSB7XG4gICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmxlZnRkb3duKTtcbiAgICB9XG4gICAgaWYgKHNsaWNlZFswXS5sZWZ0dXAgIT0gbnVsbCkge1xuICAgICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5sZWZ0dXApO1xuICAgIH1cbiAgICBpZiAoc2xpY2VkWzBdLnVwbGVmdCAhPSBudWxsKSB7XG4gICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnVwbGVmdCk7XG4gICAgfVxuICAgIGlmIChzbGljZWRbMF0udXByaWdodCAhPSBudWxsKSB7XG4gICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnVwcmlnaHQpO1xuICAgIH1cbiAgICBpZiAoc2xpY2VkWzBdLnJpZ2h0ZG93biAhPSBudWxsKSB7XG4gICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnJpZ2h0ZG93bik7XG4gICAgfVxuICAgIGlmIChzbGljZWRbMF0ucmlnaHR1cCAhPSBudWxsKSB7XG4gICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnJpZ2h0dXApO1xuICAgIH1cbiAgICBpZiAoc2xpY2VkWzBdLmRvd25sZWZ0ICE9IG51bGwpIHtcbiAgICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0uZG93bmxlZnQpO1xuICAgIH1cbiAgICBpZiAoc2xpY2VkWzBdLmRvd25yaWdodCAhPSBudWxsKSB7XG4gICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmRvd25yaWdodCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kUG9zaXRpb24pIHtcbiAgY29uc29sZS5sb2coc3RhcnQsIFwiLS0+XCIsIGVuZFBvc2l0aW9uKTtcblxuICBsZXQgZmlyc3RNb3ZlID0gbm9kZShzdGFydCk7XG4gIGxldCBtb3ZlcyA9IGFsbE1vdmVzKGZpcnN0TW92ZSwgc3RhcnRbMF0sIHN0YXJ0WzFdKTtcbiAgbGV0IHJvb3QgPSBmaXJzdE1vdmU7XG4gIC8vIHdoaWxlKGVuZFBvc2l0aW9uWzBdICE9IG1vdmVzLnZhbHVlWzBdIHx8IGVuZFBvc2l0aW9uWzFdICE9IG1vdmVzLnZhbHVlWzFdKXtcbiAgbGV0IGFycmF5ID0gbGV2ZWxPcmRlcihmaXJzdE1vdmUsIGVuZFBvc2l0aW9uKTtcblxuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKG1vdmVzKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgeyBhbGxNb3Zlcywga25pZ2h0TW92ZXMsIGdldFJvb3QgfTtcbiIsIlxuXG5jb25zdCBub2RlID0gKHZhbHVlSG9sZGVyID0gbnVsbCxhcnJheSA9IFtdKSA9PiB7XG4gIGxldCBwcmV2aW91c1Bvc2l0aW9uO1xuICBsZXQgcmVwZWF0ZWQgPSBmYWxzZTtcbiAgIHByZXZpb3VzUG9zaXRpb24gPSBbXS5jb25jYXQoYXJyYXkpO1xuICAgbGV0IHZhbHVlID0gdmFsdWVIb2xkZXI7XG4gICBsZXQgbGVmdHVwID0gbnVsbDtcbiAgIGxldCBsZWZ0ZG93biA9IG51bGw7XG4gICBsZXQgdXBsZWZ0ID0gbnVsbDtcbiAgIGxldCB1cHJpZ2h0ID0gbnVsbDtcbiAgIGxldCByaWdodHVwID0gbnVsbDtcbiAgIGxldCByaWdodGRvd24gID0gbnVsbDtcbiAgIGxldCBkb3dubGVmdCA9IG51bGw7XG4gICBsZXQgZG93bnJpZ2h0ID0gbnVsbDtcbiAgIGlmKHZhbHVlSG9sZGVyICYmKHZhbHVlSG9sZGVyWzBdIDwgMCB8fCB2YWx1ZUhvbGRlclsxXSA8IDAgfHwgdmFsdWVIb2xkZXJbMF0+NyB8fCB2YWx1ZUhvbGRlclsxXT43KSl7XG4gICAgIHJldHVybiBudWxsO1xuICAgfVxuICAgIHByZXZpb3VzUG9zaXRpb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmKGVsZW1lbnRbMF0gPT0gdmFsdWVIb2xkZXJbMF0gJiYgZWxlbWVudFsxXSA9PSB2YWx1ZUhvbGRlclsxXSl7XG4gICAgICAgIHJlcGVhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgfSk7XG4gIGlmKHJlcGVhdGVkKSByZXR1cm4gbnVsbDtcbiAgXG5cbiAgaWYodmFsdWUgJiYgIXJlcGVhdGVkKVxuICBwcmV2aW91c1Bvc2l0aW9uLnB1c2godmFsdWUpO1xuXG5cblxuXG4gICBcblxuICAgIHJldHVybiB7dmFsdWUsbGVmdHVwLGxlZnRkb3duLHVwbGVmdCx1cHJpZ2h0LHJpZ2h0ZG93bixyaWdodHVwLGRvd25sZWZ0LGRvd25yaWdodCxwcmV2aW91c1Bvc2l0aW9ufVxufVxuXG5leHBvcnQgZGVmYXVsdCBub2RlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBrbmlnaHRNb3ZlcywgYWxsTW92ZXMsIGdldFJvb3QgfSBmcm9tIFwiLi9rbmlnaHRfdHJhdmFpbHNcIjtcbmltcG9ydCBub2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBsZXQgcm9vdCA9IGFsbE1vdmVzKCk7XG5tYWtlQm9hcmQoKTtcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtZGF0YVwiKTtcbmNvbnN0IHBvc2l0aW9ucyA9IHsgc3RhcnRQb3M6IFtdLCBlbmRQb3M6IFtdLCBzdGFydFBvc1N0cmluZzogXCJcIiB9O1xuLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldFBvc2l0aW9ucyk7XG5cbmNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvcm1hdGlvblwiKTtcbi8vIGFuZCBhZGQgRVZFTlRMSVNURU5FUlxuZnVuY3Rpb24gbWFrZUJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDc7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3dEaXYuY2xhc3NMaXN0LmFkZChcImJvYXJkUm93XCIpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0Rpdik7XG4gICAgLy8gYXJyYXkucHVzaChbXSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gNzsgaisrKSB7XG4gICAgICBjb25zdCBib2FyZFBvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBib2FyZFBvcy5jbGFzc0xpc3QuYWRkKFwiYm9hcmRFbGVtZW50XCIpO1xuICAgICAgYm9hcmRQb3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrU2V0UG9zaXRpb24sIHRydWUpO1xuXG4gICAgICBib2FyZFBvcy5kYXRhc2V0LnBvc2l0aW9uID0gW2osIGldO1xuICAgICAgLy8gYXJyYXlbaV0ucHVzaFtqXTtcbiAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChib2FyZFBvcyk7XG4gICAgfVxuICB9XG4gIC8vIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRQb3NpdGlvbkRhdGFTdHJpbmcoc3RyaW5nLCBzcGxpdHRlciA9IFwiLFwiKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoc3BsaXR0ZXIpLm1hcCgoeCkgPT4geCAqIDEpO1xufVxuLy9cblxuZnVuY3Rpb24gY2xpY2tTZXRQb3NpdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zb2xlLmxvZyhwb3NpdGlvbnMuc3RhcnRQb3NTdHJpbmcsIGUuY3VycmVudFRhcmdldCk7XG4gIGlmIChwb3NpdGlvbnMuc3RhcnRQb3NTdHJpbmcgPT09IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBvc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGtuaWdodC5jbGFzc0xpc3QuYWRkKFwia25pZ2h0SW1nXCIpO1xuICBrbmlnaHQuY2xhc3NMaXN0LmFkZChcIm1vdmVcIik7XG5cbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvblwiKTtcbiAgLy8gY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucG9zaXRpb24pO1xuXG4gIGlmIChwb3NpdGlvbnMuc3RhcnRQb3MubGVuZ3RoICE9IDApIHtcbiAgICBwb3NpdGlvbnMuZW5kUG9zID0gY29udmVydFBvc2l0aW9uRGF0YVN0cmluZyhcbiAgICAgIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBvc2l0aW9uXG4gICAgKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQoa25pZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICByZXNldEJvYXJkKCk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmFwcGVuZENoaWxkKGtuaWdodCk7XG4gICAgcG9zaXRpb25zLnN0YXJ0UG9zID0gY29udmVydFBvc2l0aW9uRGF0YVN0cmluZyhcbiAgICAgIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBvc2l0aW9uXG4gICAgKTtcbiAgICBwb3NpdGlvbnMuc3RhcnRQb3NTdHJpbmcgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wb3NpdGlvbjtcbiAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBcIkNob29zZSBFbmRpbmcgUG9zaXRpb24hXCI7XG4gIH1cbiAgaWYgKHBvc2l0aW9ucy5zdGFydFBvcy5sZW5ndGggJiYgcG9zaXRpb25zLmVuZFBvcy5sZW5ndGgpIHtcbiAgICBjYWxjdWxhdGVNb3Zlcyhwb3NpdGlvbnMuc3RhcnRQb3MsIHBvc2l0aW9ucy5lbmRQb3MpO1xuICAgIHBvc2l0aW9ucy5zdGFydFBvcyA9IFtdO1xuICAgIHBvc2l0aW9ucy5lbmRQb3MgPSBbXTtcbiAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBcIkNob29zZSBTdGFydGluZyBQb3NpdGlvbiFcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldEJvYXJkKCkge1xuICBjb25zdCBib2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZEVsZW1lbnRcIik7XG5cbiAgYm9hcmRFbGVtZW50cy5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IFtcImVuZFBvc1wiLCBcInN0YXJ0UG9zXCIsIFwibW92ZVwiXTtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSguLi5zdHlsZSk7XG4gICAgZWxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAvLyBlbGUuY2xhc3NOYW1lLmFkZChcImJvYXJkRWxlbWVudFwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmVzKHN0YXJ0UG9zQXJyYXksIGVuZFBvc0FycmF5KSB7XG4gIGxldCBhcnJheSA9IGtuaWdodE1vdmVzKHN0YXJ0UG9zQXJyYXksIGVuZFBvc0FycmF5KTtcbiAgdXBkYXRlSFRNTChhcnJheSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhUTUwoYXJyYXkpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGkrKztcblxuICAgICAgY29uc3QgYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXBvc2l0aW9uPVwiJHtlbGVtZW50fVwiXWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm1vdmVOdW1iZXJcIik7XG4gICAgICBib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vdmVcIik7XG5cbiAgICAgIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBrbmlnaHQuY2xhc3NMaXN0LmFkZChcImtuaWdodEltZ1wiKTtcbiAgICAgIGtuaWdodC5jbGFzc0xpc3QuYWRkKFwibW92ZVwiKTtcblxuICAgICAgaWYgKGkgIT0gMSAmJiBpICE9IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoa25pZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGk7XG4gICAgICB9XG4gICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KVxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9