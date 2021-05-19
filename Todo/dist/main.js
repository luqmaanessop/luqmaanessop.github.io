/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handleListAdd.js":
/*!******************************!*\
  !*** ./src/handleListAdd.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listFactory\": () => (/* binding */ listFactory)\n/* harmony export */ });\nfunction listFactory(title) {\n  return {\n    title: title,\n    items: [],\n    getItems: function () {\n      return items\n    },\n    getTitle: function () {\n      return title\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/handleListAdd.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleListAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleListAdd */ \"./src/handleListAdd.js\");\n/* harmony import */ var _regenerateLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regenerateLists */ \"./src/regenerateLists.js\");\n\n\n\n// Initial event listener config\nwindow.addEventListener('load', function () {\n  document.getElementById(\"add-list\").addEventListener(\"click\", openAddListModal);\n  document.getElementById(\"add-list-form-cancel\").addEventListener(\"click\", openAddListModal);\n\n  // Handle submit book form\n  var form = document.querySelector(\"#add-list-form\");\n  form.addEventListener(\"submit\", function(evt) {\n    evt.preventDefault();\n    let title = evt.target[0].value;\n\n    let newListItem = (0,_handleListAdd__WEBPACK_IMPORTED_MODULE_0__.listFactory)(title);\n    // console.log(newListItem);\n\n    updateStorage(newListItem);\n  });\n\n  // Run showLists on window loadto show initial state\n  (0,_regenerateLists__WEBPACK_IMPORTED_MODULE_1__.regenerateLists)();\n})\n\n// Control visibility of the add list form\nconst openAddListModal = () => {\n  const addListForm = document.querySelector('#add-list-form');\n  addListForm.classList.toggle('hidden');\n  addListForm.classList.toggle('flex');\n}\n\n\nconst updateStorage = (item) => {\n  localStorage.setItem(localStorage.length, item.getTitle());\n\n  (0,_regenerateLists__WEBPACK_IMPORTED_MODULE_1__.regenerateLists)();\n}\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/regenerateLists.js":
/*!********************************!*\
  !*** ./src/regenerateLists.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"regenerateLists\": () => (/* binding */ regenerateLists)\n/* harmony export */ });\nfunction regenerateLists() {\n  let OutputContent = document.getElementById(\"content\");\n  //Clear frontend div before repopulating\n  OutputContent.innerHTML = \"\";\n\n  for(let i = 0; i < localStorage.length; i++) {\n    const key = localStorage.key(i);\n    const value = localStorage.getItem(key);\n    OutputContent.innerHTML += `<div class=\"project-list\" id=${key}>${value}</div>`;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/regenerateLists.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;