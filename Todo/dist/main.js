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

/***/ "./src/ShowActiveListItems.js":
/*!************************************!*\
  !*** ./src/ShowActiveListItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowActiveListItems\": () => (/* binding */ ShowActiveListItems)\n/* harmony export */ });\nfunction ShowActiveListItems() {\n  let listOutput = document.getElementById(\"items-container\");\n  //Clear frontend div before repopulating\n  listOutput.innerHTML = \"\";\n  let lists = JSON.parse(localStorage.getItem(\"lists\"));\n  let activeListIndex = localStorage.getItem(\"activeList\");\n  let activeList = lists[activeListIndex];\n\n  for(let i = 0; i < activeList.items.length; i++) {\n    console.log(activeList.items[i]);\n    let title = activeList.items[i].title;\n    let priority = activeList.items[i].priority;\n    let status = activeList.items[i].status == \"on\" ? \"\" : \"checked\";\n    let duedate = activeList.items[i].dueDate == \"\" ? \"When you get a chance\" : activeList.items[i].dueDate;\n\n    listOutput.innerHTML += `<div class=\"item-todo\" data-prio=\"${priority}\" ><label for=\"item-${i}\"><input ${status} type=\"checkbox\" id=\"item-${i}\"></input>${title}</label><span class=\"due-date\"><strong>Due: </strong>${duedate}</span><button class=\"btn-radius\" id=\"edit-item\" type=\"text\">Edit</button></div>`\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/ShowActiveListItems.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n/* harmony import */ var _listItemFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItemFactory */ \"./src/listItemFactory.js\");\n/* harmony import */ var _regenerateLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regenerateLists */ \"./src/regenerateLists.js\");\n/* harmony import */ var _ShowActiveListItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowActiveListItems */ \"./src/ShowActiveListItems.js\");\n\n\n\n\n\n// Initial event listener config\nwindow.addEventListener('load', function () {\n  // Set default initial list if localStorage is empty on initial app load\n  let storage = localStorage.getItem(\"lists\");\n  if(!storage) {\n    localStorage.setItem(\"lists\", JSON.stringify([\n    {\n      \"title\": \"Default\",\n      \"items\": [],\n    }\n    ]))\n  }\n\n  document.getElementById(\"destroy\").addEventListener(\"click\", function(evt) {\n    localStorage.clear();\n    location.reload();\n  });\n  // handle opening/closing of adding forms\n  document.getElementById(\"add-list\").addEventListener(\"click\", openAddListModal);\n  document.getElementById(\"remove-list\").addEventListener(\"click\", removeList);\n  document.getElementById(\"add-list-form-cancel\").addEventListener(\"click\", openAddListModal);\n  document.getElementById(\"add-list-item\").addEventListener(\"click\", function(evt) {\n    this.nextElementSibling.classList.toggle('hidden');\n\n    displayActiveListInForm();\n  });\n  document.getElementById(\"add-list-item-form-cancel\").addEventListener(\"click\", closeAddItemForm, false);\n  document.getElementById(\"add-list-item-save\").addEventListener(\"click\", handleItemAddSubmit, false);\n  // Add onclick to nav items to set localStorage current active list\n  regenerateOnClickProjectLists();\n\n  // Handle submit new list form\n  const addListForm = document.getElementById(\"add-list-form\");\n  addListForm.addEventListener(\"submit\", function(evt) {\n    evt.preventDefault();\n    // console.log(evt);\n    let title = evt.target[0].value;\n\n    let newListItem = (0,_listFactory__WEBPACK_IMPORTED_MODULE_0__.listFactory)(title);\n\n    addList(newListItem);\n    regenerateOnClickProjectLists();\n    // close after adding new list\n    openAddListModal();\n  });\n\n  // Run showLists on window loadto show initial state\n  (0,_regenerateLists__WEBPACK_IMPORTED_MODULE_2__.regenerateLists)();\n  ShowActiveList();\n})\n\nconst handleItemAddSubmit = () => {\n  const title = document.getElementById(\"item-title\").value;\n  const notes = document.getElementById(\"notes\").value;\n  const duedate = document.getElementById(\"duedate\").value;\n  const priority = document.getElementById(\"priority\").value;\n  const status = document.getElementById(\"status\").value;\n\n  let generatedItem = (0,_listItemFactory__WEBPACK_IMPORTED_MODULE_1__.listItemFactory)(title, notes, duedate, priority, status);\n  // fetch active list item, modify it and put it back in localstorage\n  // let activeListInStorage = localStorage.getItem(\"activeList\");\n\n  let lists = JSON.parse(localStorage.getItem(\"lists\"));\n  let activeListIndex = localStorage.getItem(\"activeList\");\n  let activeList = lists[activeListIndex];\n  // console.log(activeList);\n\n  // let moddedList = JSON.parse(localStorage.getItem(activeListIndex));\n  // modify items by adding to array\n  activeList.items.push(generatedItem);\n  console.log(\"activeList.items\");\n  console.log(activeList.items);\n  // console.log(activeList);\n  lists[activeListIndex] = activeList;\n  // localStorage.setItem(activeListInStorage, JSON.stringify(moddedList));\n  localStorage.setItem(\"lists\", JSON.stringify(lists));\n  // Clear and close Item add form\n  clearItemAddForm();\n  closeAddItemForm();\n  (0,_ShowActiveListItems__WEBPACK_IMPORTED_MODULE_3__.ShowActiveListItems)();\n}\n\nconst closeAddItemForm = () => {\n  const formItemList = document.querySelector('#add-listItem-form').offsetParent;\n  formItemList.classList.toggle('hidden');\n}\n\nconst clearItemAddForm = () => {\n  document.getElementById(\"item-title\").value = \"\";\n  document.getElementById(\"notes\").value = \"\";\n  document.getElementById(\"duedate\").value = \"\";\n  document.getElementById(\"priority\").value = \"\";\n  document.getElementById(\"status\").value = \"\";\n}\n\nconst displayActiveListInForm = () => {\n  const listName = document.getElementById(\"list-name\");\n  // fetch active list\n  let lists = JSON.parse(localStorage.getItem(\"lists\"));\n  let activeListIndex = localStorage.getItem(\"activeList\");\n  let activeListTitle = lists[activeListIndex].title;\n  // let activeList = JSON.parse([localStorage.getItem(localStorage.getItem(\"activeList\"))]).title;\n  listName.textContent = `Adding a new item to ${activeListTitle}'s list`;\n}\n\nfunction regenerateOnClickProjectLists() {\n  // Add onclick to nav items to set localStorage current active list\n  setTimeout(function(){\n    const projectLists = document.getElementsByClassName('project-list');\n\n    for(let i = 0;i <= projectLists.length - 1 ; i++) {\n      projectLists[i].removeEventListener('click', handleOnClickProjectList );\n    }\n\n    for(let i = 0;i <= projectLists.length - 1 ; i++) {\n      projectLists[i].addEventListener('click', handleOnClickProjectList);\n    }\n  }, 100);\n}\n\nfunction regenerateOnClickProjectListItems () {\n  setTimeout( function() {\n    const projectListItems = document.getElementsByClassName('item-todo');\n\n    for(let i = 0;i <= projectListItems.length - 1 ; i++) {\n      projectListItems[i].removeEventListener('click', handleOnClickProjectListItems);\n    }\n\n    for(let i = 0;i <= projectListItems.length - 1 ; i++) {\n      projectListItems[i].addEventListener('click', handleOnClickProjectListItems);\n    }\n  }, 100);\n}\n\nconst handleOnClickProjectListItems = (e) => {\n  if (e.target.nodeName === \"LABEL\") {\n    let status = !(e.target.children[0].checked);\n    let itemId = e.target.children[0].id.substring(e.target.children[0].id.length - 1);\n    console.dir(status);\n    console.dir(itemId);\n\n    // Get active list - update status property of clicked item\n    // let lists = JSON.parse(localStorage.getItem(\"lists\"));\n    // let activeList = lists[activeListIndex];\n\n    // let activeListIndex = localStorage.getItem(\"activeList\");\n    // let moddedList = JSON.parse(localStorage.getItem(\"lists\"));\n\n    // moddedList.splice(activeList, 1);\n\n\n  } else {\n    // stop propagation on the input click itself\n    e.stopPropagation();\n    return false;\n  }\n}\n\nconst handleOnClickProjectList = (e) => {\n  // fetch clicked list, set the localStorage activeList key to it and run ShowActiveList to add the css class to display its activeness\n  let activeListId = e.target.getAttribute(\"id\");\n  localStorage.setItem(\"activeList\", activeListId);\n  ShowActiveList();\n}\n\nconst ShowActiveList = () => {\n  const projectLists = document.getElementsByClassName('project-list');\n\n  if(projectLists.length > 0) {\n    for(let i = 0; i < projectLists.length; i++) {\n      projectLists[i].classList.remove('active');\n    }\n    // Set active class onto clicked item as checked by localStorage activeList string\n    projectLists[localStorage.getItem(\"activeList\")].classList.add('active');\n  }\n\n  // console.log(\"imhere\");\n  (0,_ShowActiveListItems__WEBPACK_IMPORTED_MODULE_3__.ShowActiveListItems)();\n  regenerateOnClickProjectListItems();\n}\n\n// Control visibility of the add list form\nconst openAddListModal = () => {\n  const addListForm = document.querySelector('#add-list-form');\n  addListForm.classList.toggle('hidden');\n  addListForm.classList.toggle('flex');\n}\n\nconst removeList = () => {\n  // Check if you really want to delete\n  if (window.confirm(\"Do you really want to delete?\")) {\n    // Get active list, can only delete the list that is active - then splice it out and reset the list in localstorage\n    let activeList = localStorage.getItem(\"activeList\");\n    let moddedList = JSON.parse(localStorage.getItem(\"lists\"));\n    moddedList.splice(activeList, 1);\n    // resave to localStorage\n    localStorage.setItem(\"lists\", JSON.stringify(moddedList));\n    // set active list to last list item\n    localStorage.setItem(\"activeList\", moddedList.length - 1);\n\n    // Refresh frontend\n    (0,_regenerateLists__WEBPACK_IMPORTED_MODULE_2__.regenerateLists)();\n    regenerateOnClickProjectLists();\n    ShowActiveList();\n  }\n}\n\nconst addList = (item) => {\n  // get lists from localStorage, push new item in and regenerate frontend\n  let moddedList = JSON.parse(localStorage.getItem(\"lists\"));\n  moddedList.push(item);\n  localStorage.setItem(\"lists\", JSON.stringify(moddedList));\n\n  localStorage.setItem(\"activeList\", moddedList.length - 1);\n  (0,_regenerateLists__WEBPACK_IMPORTED_MODULE_2__.regenerateLists)();\n  ShowActiveList();\n}\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/listFactory.js":
/*!****************************!*\
  !*** ./src/listFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listFactory\": () => (/* binding */ listFactory)\n/* harmony export */ });\nfunction listFactory(title) {\n  return {\n    title: title,\n    items: [],\n    getItems: function () {\n      return items\n    },\n    getTitle: function () {\n      return title\n    },\n    addItem: function(item) {\n      items.push(item);\n      return items;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/listFactory.js?");

/***/ }),

/***/ "./src/listItemFactory.js":
/*!********************************!*\
  !*** ./src/listItemFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listItemFactory\": () => (/* binding */ listItemFactory)\n/* harmony export */ });\nfunction listItemFactory(title, notes, dueDate, priority, status) {\n  return {\n    title: title,\n    dueDate: dueDate,\n    priority: priority,\n    notes: notes,\n    status: status,\n    getTitle: function () {\n      return title\n    },\n    getDueDate: function () {\n      return dueDate\n    },\n    getPriority: function () {\n      return priority\n    },\n    getNotes: function () {\n      return notes\n    },\n    getStatus: function () {\n      return status\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/listItemFactory.js?");

/***/ }),

/***/ "./src/regenerateLists.js":
/*!********************************!*\
  !*** ./src/regenerateLists.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"regenerateLists\": () => (/* binding */ regenerateLists)\n/* harmony export */ });\nfunction regenerateLists() {\n  let nav = document.getElementById(\"nav\");\n  //Clear frontend div before repopulating\n  nav.innerHTML = \"\";\n\n  const listsInStorage = JSON.parse(localStorage.getItem(\"lists\"));\n  for(let i = 0; i <= listsInStorage.length - 1 ; i++) {\n    var object = listsInStorage[i];\n\n    if(object) {\n      nav.innerHTML += `<li class=\"project-list\" id=${i}>${object.title}</li>`\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/regenerateLists.js?");

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