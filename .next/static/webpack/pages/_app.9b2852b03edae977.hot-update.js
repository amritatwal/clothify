"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Basket */ \"./src/components/Basket/index.js\");\nvar _this = undefined;\n\n\n\n\n// The navigation bar currently only displays a name and the mini-basket.\n// The props being passed in - basket and removeItem - are necessary for <ShoppingBasket/> to have access to the current basket in order to display the items, and also removeItem: needed to handle a removal of a product should the online customer click on the 'remove' button.\nvar Navigation = function(param) {\n    var basket = param.basket, removeItem = param.removeItem;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        justifyContent: \"center\",\n        flexDirection: \"row\",\n        borderBottom: \"solid 1px #ededed\",\n        padding: \".5em\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                border: \"solid 2px blue\",\n                justifyContent: \"center\",\n                display: \"flex\",\n                flexGrow: \"1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    fontFamily: \"Fredoka One\",\n                    fontSize: {\n                        base: \"\"\n                    },\n                    textTransform: \"lowercase\",\n                    children: \"Bloom\"\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/osc/src/components/Navigation/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/osc/src/components/Navigation/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                alignSelf: \"flex-end\",\n                mx: \"1em\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Basket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    basket: basket,\n                    removeItem: removeItem\n                }, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/osc/src/components/Navigation/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amritatwal/Desktop/osc/src/components/Navigation/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amritatwal/Desktop/osc/src/components/Navigation/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDNEI7QUFDZjtBQUV2Qyx5RUFBeUU7QUFDekUsb1JBQW9SO0FBRXBSLElBQU1LLFVBQVUsR0FBRyxnQkFBNEI7UUFBekJDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxVQUFVLFNBQVZBLFVBQVU7SUFDdEMscUJBQ0UsOERBQUNOLGtEQUFJO1FBQ0hPLGNBQWMsRUFBQyxRQUFRO1FBQ3ZCQyxhQUFhLEVBQUMsS0FBSztRQUNuQkMsWUFBWSxFQUFFLG1CQUFtQjtRQUNqQ0MsT0FBTyxFQUFDLE1BQU07OzBCQUVkLDhEQUFDVCxpREFBRztnQkFDRlUsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEJKLGNBQWMsRUFBQyxRQUFRO2dCQUN2QkssT0FBTyxFQUFDLE1BQU07Z0JBQ2RDLFFBQVEsRUFBQyxHQUFHOzBCQUVaLDRFQUFDWCxxREFBTztvQkFBQ1ksVUFBVSxFQUFDLGFBQWE7b0JBQy9CQyxRQUFRLEVBQUU7d0JBQUNDLElBQUksRUFBRSxFQUFFO3FCQUFDO29CQUNwQkMsYUFBYSxFQUFDLFdBQVc7OEJBQUMsT0FBSzs7Ozs7eUJBQVU7Ozs7O3FCQUN2QzswQkFDTiw4REFBQ2hCLGlEQUFHO2dCQUFDVyxPQUFPLEVBQUMsTUFBTTtnQkFBQ00sU0FBUyxFQUFDLFVBQVU7Z0JBQUNDLEVBQUUsRUFBQyxLQUFLOzBCQUMvQyw0RUFBQ2hCLCtDQUFjO29CQUFDRSxNQUFNLEVBQUVBLE1BQU07b0JBQUVDLFVBQVUsRUFBRUEsVUFBVTs7Ozs7eUJBQUk7Ozs7O3FCQUN0RDs7Ozs7O2FBQ0QsQ0FDUDtDQUNIO0FBdkJLRixLQUFBQSxVQUFVO0FBeUJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXguanM/NDFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgQm94LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgU2hvcHBpbmdCYXNrZXQgZnJvbSAnLi4vQmFza2V0JztcblxuLy8gVGhlIG5hdmlnYXRpb24gYmFyIGN1cnJlbnRseSBvbmx5IGRpc3BsYXlzIGEgbmFtZSBhbmQgdGhlIG1pbmktYmFza2V0LlxuLy8gVGhlIHByb3BzIGJlaW5nIHBhc3NlZCBpbiAtIGJhc2tldCBhbmQgcmVtb3ZlSXRlbSAtIGFyZSBuZWNlc3NhcnkgZm9yIDxTaG9wcGluZ0Jhc2tldC8+IHRvIGhhdmUgYWNjZXNzIHRvIHRoZSBjdXJyZW50IGJhc2tldCBpbiBvcmRlciB0byBkaXNwbGF5IHRoZSBpdGVtcywgYW5kIGFsc28gcmVtb3ZlSXRlbTogbmVlZGVkIHRvIGhhbmRsZSBhIHJlbW92YWwgb2YgYSBwcm9kdWN0IHNob3VsZCB0aGUgb25saW5lIGN1c3RvbWVyIGNsaWNrIG9uIHRoZSAncmVtb3ZlJyBidXR0b24uXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBiYXNrZXQsIHJlbW92ZUl0ZW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGJvcmRlckJvdHRvbT17J3NvbGlkIDFweCAjZWRlZGVkJ31cbiAgICAgIHBhZGRpbmc9XCIuNWVtXCJcbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlcj17J3NvbGlkIDJweCBibHVlJ31cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhHcm93PVwiMVwiXG4gICAgICA+XG4gICAgICAgIDxIZWFkaW5nIGZvbnRGYW1pbHk9XCJGcmVkb2thIE9uZVwiXG4gICAgICAgICAgZm9udFNpemU9e3tiYXNlOiBcIlwifX1cbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwibG93ZXJjYXNlXCI+Qmxvb208L0hlYWRpbmc+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnblNlbGY9XCJmbGV4LWVuZFwiIG14PVwiMWVtXCI+XG4gICAgICAgIDxTaG9wcGluZ0Jhc2tldCBiYXNrZXQ9e2Jhc2tldH0gcmVtb3ZlSXRlbT17cmVtb3ZlSXRlbX0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGbGV4IiwiQm94IiwiSGVhZGluZyIsIlNob3BwaW5nQmFza2V0IiwiTmF2aWdhdGlvbiIsImJhc2tldCIsInJlbW92ZUl0ZW0iLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYmFzZSIsInRleHRUcmFuc2Zvcm0iLCJhbGlnblNlbGYiLCJteCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navigation/index.js\n");

/***/ })

});