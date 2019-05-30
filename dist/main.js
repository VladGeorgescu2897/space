/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: html, svg, TemplateResult, SVGTemplateResult, LitElement, defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/home/dexter/DevSchool/front/FrontEnd/curs6/space/node_modules/lit-element/lit-element.js'\");\n\n//# sourceURL=webpack:///./node_modules/lit-element/lit-element.js?");

/***/ }),

/***/ "./src/SpaceData.js":
/*!**************************!*\
  !*** ./src/SpaceData.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n\n\nclass SpaceData extends lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n  static get styles() {\n    return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n      :host {\n        background: lightblue;\n        display: block;\n        padding: 1rem;\n      }\n    `;\n  }\n\n  static get properties() {\n    return {\n      lat: { type: Number },\n      lon: { type: Number },\n      place: { type: String },\n    };\n  }\n\n  render() {\n    return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <div>Lat: <output>${this.lat}</output></div>\n      <div>Lon: <output>${this.lon}</output></div>\n      <div>Place: <span>${this.place}</span></div>\n    `;\n  }\n}\n\nwindow.customElements.define('space-data', SpaceData);\n\n//# sourceURL=webpack:///./src/SpaceData.js?");

/***/ }),

/***/ "./src/SpaceMain.js":
/*!**************************!*\
  !*** ./src/SpaceMain.js ***!
  \**************************/
/*! exports provided: SpaceMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpaceMain\", function() { return SpaceMain; });\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n/* harmony import */ var _SpaceTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpaceTool */ \"./src/SpaceTool.js\");\n/* harmony import */ var _SpaceData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpaceData */ \"./src/SpaceData.js\");\n\n\n\n\nclass SpaceMain extends lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n  static get properties() {\n    return {\n      coords: { type: Array },\n      place: { type: String },\n    };\n  }\n\n  constructor() {\n    super();\n    this.coords = [];\n  }\n\n  render() {\n    return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <space-tool @fetch-position=${() => this.onFetchPosition()}></space-tool>\n      <space-data .lat=${this.coords[0]} .lon=${this.coords[1]} .place=${this.place}></space-data>\n    `;\n  }\n\n  updated(changedProps) {\n    if (changedProps.has('coords')) {\n      if (this.coords.length === 2) {\n        this.reverseGeocode(this.coords[0], this.coords[1]).then(place => (this.place = place));\n      }\n    }\n  }\n\n  onFetchPosition() {\n    const url = 'http://api.open-notify.org/iss-now.json';\n    fetch(url)\n      .then(response => response.json())\n      .then(json => {\n        const position = json.iss_position;\n        this.coords = [position.latitude, position.longitude];\n      });\n  }\n\n  reverseGeocode(lat, lon) {\n    const base = 'https://nominatim.openstreetmap.org';\n    const url = `${base}/reverse?format=json&lat=${lat}&lon=${lon}`;\n    return fetch(url)\n      .then(response => response.json())\n      .then(json => json.display_name);\n  }\n}\n\n//# sourceURL=webpack:///./src/SpaceMain.js?");

/***/ }),

/***/ "./src/SpaceTool.js":
/*!**************************!*\
  !*** ./src/SpaceTool.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\n\n\nclass SpaceTool extends lit_element__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n  static get styles() {\n    return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n      :host {\n        background: lightyellow;\n        display: block;\n        padding: 1rem;\n      }\n      button {\n        font-family: sans-serif;\n        font-size: 1rem;\n      }\n    `;\n  }\n  render() {\n    return lit_element__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n      <button @click=${this.onClickFind}>\n        Find position\n      </button>\n    `;\n  }\n\n  onClickFind() {\n    this.dispatchEvent(new CustomEvent('fetch-position'));\n  }\n}\n\nwindow.customElements.define('space-tool', SpaceTool);\n\n//# sourceURL=webpack:///./src/SpaceTool.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpaceMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpaceMain */ \"./src/SpaceMain.js\");\n\n\nwindow.customElements.define('space-main', _SpaceMain__WEBPACK_IMPORTED_MODULE_0__[\"SpaceMain\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });