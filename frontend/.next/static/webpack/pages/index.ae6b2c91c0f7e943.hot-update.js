"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row-reverse;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar _s = $RefreshSig$();\nvar LoginBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject());\n_c = LoginBar;\nfunction LoginForm() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(useState(\"\"), 2), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(useState(\"\"), 2), password = ref1[0], setPassword = ref1[1];\n    var handleClick = function() {\n        try {\n            login({\n                email: email,\n                password: password\n            });\n        } catch (e) {\n            alert(\"Failed to login\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginBar, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    value: email,\n                    onChange: function(param) {\n                        var value = param.target.value;\n                        return setEmail(value);\n                    },\n                    type: \"text\",\n                    placeholder: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    value: password,\n                    onChange: function(param) {\n                        var value = param.target.value;\n                        return setPassword(value);\n                    },\n                    type: \"password\",\n                    placeholder: \"password\"\n                }, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"3B3pqDcVnkT+z/sPK6Z9zQsLP+s=\");\n_c1 = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginBar\");\n$RefreshReg$(_c1, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYzs7QUFHdkMsSUFBTUUsUUFBUSxHQUFHRCw0REFBUyxtQkFHekI7QUFIS0MsS0FBQUEsUUFBUTtBQUtkLFNBQVNFLFNBQVMsR0FBRzs7SUFDakIsSUFBMEJDLEdBQVksb0ZBQVpBLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBL0JDLEtBQUssR0FBY0QsR0FBWSxHQUExQixFQUFFRSxRQUFRLEdBQUlGLEdBQVksR0FBaEI7SUFDdEIsSUFBZ0NBLElBQVksb0ZBQVpBLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBckNHLFFBQVEsR0FBaUJILElBQVksR0FBN0IsRUFBRUksV0FBVyxHQUFJSixJQUFZLEdBQWhCO0lBRzVCLElBQU1LLFdBQVcsR0FBRyxXQUFNO1FBQ3RCLElBQUk7WUFDQUMsS0FBSyxDQUFDO2dCQUFFTCxLQUFLLEVBQUxBLEtBQUs7Z0JBQUVFLFFBQVEsRUFBUkEsUUFBUTthQUFFLENBQUMsQ0FBQztTQUM5QixDQUFDLE9BQU9JLENBQUMsRUFBRTtZQUNSQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6Qk4sUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2JFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQjtLQUNKO0lBRUQscUJBQ0ksOERBQUNLLEtBQUc7a0JBRUEsNEVBQUNaLFFBQVE7OzhCQUNMLDhEQUFDYSxPQUFLO29CQUNGQyxLQUFLLEVBQUVWLEtBQUs7b0JBQ1pXLFFBQVEsRUFBRTs0QkFBR0MsS0FBZSxTQUFmQSxNQUFNLENBQUlGLEtBQUs7K0JBQVNULFFBQVEsQ0FBQ1MsS0FBSyxDQUFDO3FCQUFBO29CQUNwREcsSUFBSSxFQUFDLE1BQU07b0JBQ1hDLFdBQVcsRUFBQyxPQUFPOzs7Ozt3QkFDckI7OEJBQ0YsOERBQUNMLE9BQUs7b0JBQ0ZDLEtBQUssRUFBRVIsUUFBUTtvQkFDZlMsUUFBUSxFQUFFOzRCQUFHQyxLQUFlLFNBQWZBLE1BQU0sQ0FBSUYsS0FBSzsrQkFBU1AsV0FBVyxDQUFDTyxLQUFLLENBQUM7cUJBQUE7b0JBQ3ZERyxJQUFJLEVBQUMsVUFBVTtvQkFDZkMsV0FBVyxFQUFDLFVBQVU7Ozs7O3dCQUN4Qjs4QkFDRiw4REFBQ0MsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFWixXQUFXOzhCQUFFLE9BQUs7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ3JDOzs7OztZQUVULENBQ1Q7Q0FDSjtHQXBDUU4sU0FBUztBQUFUQSxNQUFBQSxTQUFTO0FBc0NsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz9lY2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmNvbnN0IExvZ2luQmFyID0gc3R5bGVkLmgxYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuYDtcblxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gbG9naW5cIik7XG4gICAgICAgICAgICBzZXRFbWFpbChcIlwiKTtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxMb2dpbkJhcj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0RW1haWwodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFBhc3N3b3JkKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Mb2dpbkJhcj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkxvZ2luQmFyIiwiaDEiLCJMb2dpbkZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlQ2xpY2siLCJsb2dpbiIsImUiLCJhbGVydCIsImRpdiIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n"));

/***/ })

});