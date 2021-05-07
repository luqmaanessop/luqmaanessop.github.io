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

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction createSection(titleValue, sectionClass, data) {\n  const section = document.createElement('section');\n  const sectionTitle = document.createElement('h2');\n  sectionTitle.classList.add(\"section-title\");\n  sectionTitle.textContent = titleValue;\n\n  const body = document.createElement('div');\n  body.classList.add(sectionClass);\n\n  data.forEach(element => {\n    const htmlSection = document.createElement(element.HTMLType);\n    if(element.class && !element.class.length == 0) {\n      htmlSection.classList.add(element.class);\n    }\n\n    if(element.HTMLType == \"img\") {\n      htmlSection.setAttribute(\"alt\", element.value);\n      htmlSection.setAttribute(\"src\", element.src);\n    } else {\n      htmlSection.textContent = element.value;\n    }\n\n    body.appendChild(htmlSection);\n  });\n\n\n  section.appendChild(sectionTitle);\n  section.appendChild(body);\n\n\n  switchContent(section);\n}\n\nfunction loadContactPage() {\n  createSection(\"Contact Us - Meepo's bakery\", \"col-3\",\n    [\n      { HTMLType: \"h3\", value:\"This is a h3 title\"},\n      { HTMLType: \"p\", value:\"This is some example text over here\", class:\"\" },\n      { HTMLType: \"img\", src:\"https://source.unsplash.com/random/600x600/?abstract\", value:\"This is some example text over here\", class:\"\" },\n    ]\n  );\n}\n\nfunction switchContent(element) {\n  document.getElementById(\"content\").innerHTML = \"\";\n  document.getElementById(\"content\").appendChild(element);\n}\n\n\n\n\n//# sourceURL=webpack://Restaurant-page/./src/contactpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageContent\": () => (/* binding */ homePageContent)\n/* harmony export */ });\nconst homePageContent = () => '<h1>This is my fancy restaurant page - the meepo bakery</h1><div class=\"two-col\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat elementum ipsum eget posuere. Morbi laoreet urna varius justo cursus sodales. Nam accumsan cursus ligula, a fringilla neque ullamcorper quis. Vestibulum porta cursus viverra. Aenean vel dui accumsan, malesuada turpis efficitur, faucibus sapien. Curabitur pharetra mattis ipsum. Vestibulum bibendum vestibulum dictum. Integer dignissim bibendum enim, id dictum diam accumsan sed. Sed tempor cursus suscipit.</p><img src=\"https://source.unsplash.com/random/600x600/?abstract\"></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat elementum ipsum eget posuere. Morbi laoreet urna varius justo cursus sodales. Nam accumsan cursus ligula, a fringilla neque ullamcorper quis. Vestibulum porta cursus viverra. Aenean vel dui accumsan, malesuada turpis efficitur, faucibus sapien. Curabitur pharetra mattis ipsum. Vestibulum bibendum vestibulum dictum. Integer dignissim bibendum enim, id dictum diam accumsan sed. Sed tempor cursus suscipit.In suscipit dui quis dictum efficitur. Maecenas mauris lorem, condimentum nec dictum eu, lacinia non purus. In congue urna et sagittis posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ac nisi enim. Donec volutpat lacus id velit molestie egestas. Maecenas vel efficitur augue. Curabitur tristique egestas mi, ut cursus eros viverra sed. Mauris nisi libero, aliquet at sodales sed, aliquam ac elit. Nam et viverra velit, vel euismod magna.Cras justo odio, pulvinar eu iaculis sed, pulvinar vitae velit. Maecenas lacinia tortor id ligula ultrices posuere. Nullam sed est molestie risus dignissim vulputate. Aliquam sit amet semper metus. In vitae nisl nec magna facilisis dignissim. Duis nibh lacus, dapibus semper congue et, tristique dapibus augue. Duis sagittis, leo ac ultrices porttitor, erat ante blandit leo, eu interdum libero metus at nibh. Donec vel scelerisque dui. Sed pulvinar lorem a interdum ullamcorper.Suspendisse potenti. Nam id lacinia lacus. Duis non mi sed purus ornare molestie non sit amet lorem. Maecenas ac tincidunt diam. Vestibulum turpis urna, ultrices ac nibh sed, tempus ultricies sapien. Aenean euismod varius aliquet. Nunc accumsan enim at dolor pretium egestas. Aliquam erat volutpat. Aliquam erat volutpat.</p><div class=\"three-col\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat elementum ipsum eget posuere. Morbi laoreet urna varius justo cursus sodales. Nam accumsan cursus ligula, a fringilla neque ullamcorper quis. Vestibulum porta cursus viverra. Aenean vel dui accumsan, malesuada turpis efficitur, faucibus sapien. Curabitur pharetra mattis ipsum. Vestibulum bibendum vestibulum dictum. Integer dignissim bibendum enim, id dictum diam accumsan sed. Sed tempor cursus suscipit.</p><img src=\"https://source.unsplash.com/random/600x600/?abstract\">></div>'\n\n\n\n\n//# sourceURL=webpack://Restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactpage */ \"./src/contactpage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  homePageSwitch();\n\n  document.getElementById(\"contact\").addEventListener(\"click\", contactPageSwitch);\n  document.getElementById(\"menu\").addEventListener(\"click\", menuPageSwitch);\n  document.getElementById(\"home\").addEventListener(\"click\", homePageSwitch);\n\n})\n\nfunction homePageSwitch() {\n  const element = document.createElement('div');\n  element.innerHTML = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.homePageContent)();\n\n  switchContent(element);\n}\n\nfunction contactPageSwitch() {\n  (0,_contactpage__WEBPACK_IMPORTED_MODULE_1__.loadContactPage)();\n}\n\nfunction menuPageSwitch() {\n  const element = document.createElement('div');\n  element.innerHTML = (0,_menupage__WEBPACK_IMPORTED_MODULE_2__.menuPageContent)();\n\n  switchContent(element);\n}\n\nfunction switchContent(element) {\n  document.getElementById(\"content\").innerHTML = \"\";\n  document.getElementById(\"content\").appendChild(element);\n}\n\n\n//# sourceURL=webpack://Restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageContent\": () => (/* binding */ menuPageContent)\n/* harmony export */ });\nconst menuPageContent = () => '<h1>Whats on the menu - the meepo bakery</h1><div class=\"four-col\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"><img src=\"https://source.unsplash.com/random/600x600/?abstract\"></div>'\n\n\n\n\n//# sourceURL=webpack://Restaurant-page/./src/menupage.js?");

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