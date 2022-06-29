"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Test; }\n/* harmony export */ });\n/* harmony import */ var _Users_amritatwal_Desktop_osc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_amritatwal_Desktop_osc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_amritatwal_Desktop_osc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Product */ \"./src/components/Product/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _src_components_Tabs_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Tabs/tabs */ \"./src/components/Tabs/tabs.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Test() {\n    _s();\n    // Products fetched from the API are stored in a state\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), products = ref[0], setProducts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchProducts() {\n            return _fetchProducts.apply(this, arguments);\n        }\n        function _fetchProducts() {\n            _fetchProducts = // Using the Fetch API to retrieve the products\n            // useEffect is necessary in order to render the products once mounted\n            _asyncToGenerator(_Users_amritatwal_Desktop_osc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_amritatwal_Desktop_osc_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return fetch(\"https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4\");\n                        case 3:\n                            response = _ctx.sent;\n                            _ctx.next = 6;\n                            return response.json();\n                        case 6:\n                            data = _ctx.sent;\n                            setProducts(_toConsumableArray(products).concat([\n                                data.slice()\n                            ]));\n                            _ctx.next = 13;\n                            break;\n                        case 10:\n                            _ctx.prev = 10;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            throw _ctx.t0;\n                        case 13:\n                            console.log(products);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        10\n                    ]\n                ]);\n            }));\n            return _fetchProducts.apply(this, arguments);\n        }\n        fetchProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            flexDirection: \"column\",\n            color: \"#494949\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Tabs_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/amritatwal/Desktop/osc/pages/test.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            fontFamily: \"Monospace\",\n                            fontSize: {\n                                base: \"1em\",\n                                md: \"1em\"\n                            },\n                            fontWeight: \"800\",\n                            letterSpacing: \"1.5px\",\n                            textTransform: \"uppercase\",\n                            children: \"Best sellers + top rated\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/osc/pages/test.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {}, void 0, false, {\n                            fileName: \"/Users/amritatwal/Desktop/osc/pages/test.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amritatwal/Desktop/osc/pages/test.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amritatwal/Desktop/osc/pages/test.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Test, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Test;\nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFDSTtBQUNoQjtBQUNtQjs7QUFFcEMsU0FBU1EsSUFBSSxHQUFHOztJQUM3QixzREFBc0Q7SUFDdEQsSUFBZ0NKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSOUMsUUFRaUIsR0FBaUJBLEdBQVksR0FBN0IsRUFSakIsV0FROEIsR0FBSUEsR0FBWSxHQUFoQjtJQUU1QkQsZ0RBQVMsQ0FBQyxXQUFNO2lCQUdDUSxhQUFhO21CQUFiQSxjQUFhOztpQkFBYkEsY0FBYTtZQUFiQSxjQUFhLEdBRjVCLCtDQUErQztZQUMvQyxzRUFBc0U7WUFDdEUsOEtBQStCO29CQUdyQkMsUUFBUSxFQUdSQyxJQUFJOzs7Ozs7bUNBSGFDLEtBQUssQ0FDMUIsNkVBQTZFLENBQzlFOzs0QkFGS0YsUUFBUSxZQUViOzttQ0FDa0JBLFFBQVEsQ0FBQ0csSUFBSSxFQUFFOzs0QkFBNUJGLElBQUksWUFBd0I7NEJBQ2xDSCxXQUFXLENBQUMsbUJBQUlELFFBQVEsQ0FBUkEsUUFBSjtnQ0FBY0ksSUFBSSxDQUFDRyxLQUFLLEVBQUU7NkJBQUMsRUFBQyxDQUFDOzs7Ozs7NEJBRXpDLGNBQVk7OzRCQUVkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O2FBQ3ZCO21CQVpjRSxjQUFhOztRQWE1QkEsYUFBYSxFQUFFLENBQUM7S0FDakIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFO2tCQUNFLDRFQUFDWCxrREFBSTtZQUFDbUIsYUFBYSxFQUFDLFFBQVE7WUFBQ0MsS0FBSyxFQUFDLFNBQVM7OzhCQUMxQyw4REFBQ2IsaUVBQVE7Ozs7d0JBQUc7OEJBQ1osOERBQUNQLGtEQUFJOztzQ0FDSCw4REFBQ0Msa0RBQUk7NEJBQ0hvQixVQUFVLEVBQUMsV0FBVzs0QkFDdEJDLFFBQVEsRUFBRTtnQ0FBRUMsSUFBSSxFQUFFLEtBQUs7Z0NBQUVDLEVBQUUsRUFBRSxLQUFLOzZCQUFFOzRCQUNwQ0MsVUFBVSxFQUFDLEtBQUs7NEJBQ2hCQyxhQUFhLEVBQUMsT0FBTzs0QkFDckJDLGFBQWEsRUFBQyxXQUFXO3NDQUMxQiwwQkFFRDs7Ozs7Z0NBQU87c0NBQ1AsOERBQUN6QixpREFBRzs7OztnQ0FBTzs7Ozs7O3dCQUNOOzs7Ozs7Z0JBQ0Y7cUJBQ04sQ0FDSDtDQUNIO0dBMUN1Qk0sSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QuanM/ZDA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBUZXh0LCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0JztcbmltcG9ydCBBUElfVVJMIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgTWVudVRhYnMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGFicy90YWJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCgpIHtcbiAgLy8gUHJvZHVjdHMgZmV0Y2hlZCBmcm9tIHRoZSBBUEkgYXJlIHN0b3JlZCBpbiBhIHN0YXRlXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVXNpbmcgdGhlIEZldGNoIEFQSSB0byByZXRyaWV2ZSB0aGUgcHJvZHVjdHNcbiAgICAvLyB1c2VFZmZlY3QgaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHJlbmRlciB0aGUgcHJvZHVjdHMgb25jZSBtb3VudGVkXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9kdWN0cygpIHtcbiAgICAgIC8vIFV0aWxpc2luZyBhIHRyeSAuLi5jYXRjaCB0byB3cmFwIHRoZSBmZXRjaCBpbnNpZGUgdG8gaGFuZGxlIGV4Y2VwdGlvbnMvZXJyb3IgaGFuZGxpbmdcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy5qc29uP3JhdGluZ19ncmVhdGVyX3RoYW49NCdcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzLCBkYXRhLnNsaWNlKCldKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICAgIH1cbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgY29sb3I9XCIjNDk0OTQ5XCI+XG4gICAgICAgIDxNZW51VGFicyAvPlxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbm9zcGFjZVwiXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnMWVtJywgbWQ6ICcxZW0nIH19XG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiODAwXCJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIxLjVweFwiXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBCZXN0IHNlbGxlcnMgKyB0b3AgcmF0ZWRcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJveD48L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZsZXgiLCJUZXh0IiwiQm94IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0IiwiQVBJX1VSTCIsIk1lbnVUYWJzIiwiVGVzdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYmFzZSIsIm1kIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ })

});