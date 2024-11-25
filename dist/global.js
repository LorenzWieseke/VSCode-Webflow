/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("global", [], factory);
	else if(typeof exports === 'object')
		exports["global"] = factory();
	else
		root["global"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const bindBtnsToSpline = (splineViewer) => {\r\n    const btns = document.querySelectorAll(`.spline-btn`);\r\n    const app = splineViewer._spline;\r\n\r\n    // Get all variables in the Spline scene\r\n    const variables = app.getVariables();\r\n    console.log('Spline Variables:', variables);\r\n\r\n    btns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", (event) => {\r\n            event.preventDefault();\r\n\r\n            // Iterate over all attributes of the button\r\n            for (let attr of btn.attributes) {\r\n                const attrName = attr.name;\r\n                const attrValue = attr.value;\r\n\r\n                // Check if the attribute name matches a variable in the Spline scene\r\n                if (variables.hasOwnProperty(attrName)) {\r\n                    console.log(`Setting variable ${attrName} to ${attrValue}`);\r\n                    app.setVariables({ [attrName]: parseInt(attrValue) });\r\n                } \r\n            }\r\n        });\r\n    });\r\n};\r\n\r\n// Initialize the Spline viewer\r\nconst initializeSplineViewer = () => {\r\n    const splineViewer = document.querySelector('spline-viewer');\r\n\r\n    splineViewer.addEventListener(\"load-complete\",() => {\r\n        console.log(\"Spline Viewer loaded\");\r\n        bindBtnsToSpline(splineViewer);\r\n    });\r\n\r\n};\r\n\r\n\r\ninitializeSplineViewer();\r\n\n\n//# sourceURL=webpack://vs-code/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});