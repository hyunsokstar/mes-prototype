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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: row-reverse;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar _s = $RefreshSig$();\nvar LoginBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject());\n_c = LoginBar;\nfunction LoginForm() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleClick = function() {\n        try {\n            // login({ email, password });\n            alert(\"\\uB85C\\uADF8\\uC778 \\uBC84\\uD2BC \\uD074\\uB9AD\");\n        } catch (e) {\n            alert(\"Failed to login\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginBar, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    value: email,\n                    onChange: function(param) {\n                        var value = param.target.value;\n                        return setEmail(value);\n                    },\n                    type: \"text\",\n                    placeholder: \"email\"\n                }, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    value: password,\n                    onChange: function(param) {\n                        var value = param.target.value;\n                        return setPassword(value);\n                    },\n                    type: \"password\",\n                    placeholder: \"password\"\n                }, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/LoginForm.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c1 = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginBar\");\n$RefreshReg$(_c1, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7O0FBR3ZDLElBQU1HLFFBQVEsR0FBR0QsNERBQVMsbUJBR3pCO0FBSEtDLEtBQUFBLFFBQVE7QUFLZCxTQUFTRSxTQUFTLEdBQUc7O0lBQ2pCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CSyxLQUFLLEdBQWNMLEdBQVksR0FBMUIsRUFBRU0sUUFBUSxHQUFJTixHQUFZLEdBQWhCO0lBQ3RCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDTyxRQUFRLEdBQWlCUCxJQUFZLEdBQTdCLEVBQUVRLFdBQVcsR0FBSVIsSUFBWSxHQUFoQjtJQUc1QixJQUFNUyxXQUFXLEdBQUcsV0FBTTtRQUN0QixJQUFJO1lBQ0EsOEJBQThCO1lBQzlCQyxLQUFLLENBQUMsOENBQVcsQ0FBQztTQUNyQixDQUFDLE9BQU9DLENBQUMsRUFBRTtZQUNSRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6QkosUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2JFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQjtLQUNKO0lBRUQscUJBQ0ksOERBQUNJLEtBQUc7a0JBQ0EsNEVBQUNWLFFBQVE7OzhCQUNMLDhEQUFDVyxPQUFLO29CQUNGQyxLQUFLLEVBQUVULEtBQUs7b0JBQ1pVLFFBQVEsRUFBRTs0QkFBR0MsS0FBZSxTQUFmQSxNQUFNLENBQUlGLEtBQUs7K0JBQVNSLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDO3FCQUFBO29CQUNwREcsSUFBSSxFQUFDLE1BQU07b0JBQ1hDLFdBQVcsRUFBQyxPQUFPOzs7Ozt3QkFDckI7OEJBQ0YsOERBQUNMLE9BQUs7b0JBQ0ZDLEtBQUssRUFBRVAsUUFBUTtvQkFDZlEsUUFBUSxFQUFFOzRCQUFHQyxLQUFlLFNBQWZBLE1BQU0sQ0FBSUYsS0FBSzsrQkFBU04sV0FBVyxDQUFDTSxLQUFLLENBQUM7cUJBQUE7b0JBQ3ZERyxJQUFJLEVBQUMsVUFBVTtvQkFDZkMsV0FBVyxFQUFDLFVBQVU7Ozs7O3dCQUN4Qjs4QkFDRiw4REFBQ0MsUUFBTTtvQkFBQ0MsT0FBTyxFQUFFWCxXQUFXOzhCQUFFLE9BQUs7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ3JDOzs7OztZQUNULENBQ1Q7Q0FDSjtHQW5DUUwsU0FBUztBQUFUQSxNQUFBQSxTQUFTO0FBcUNsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz9lY2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuY29uc3QgTG9naW5CYXIgPSBzdHlsZWQuaDFgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5gO1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgICAgICAgYWxlcnQoXCLroZzqt7jsnbgg67KE7Yq8IO2BtOumrVwiKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2dpblwiKTtcbiAgICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMb2dpbkJhcj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0RW1haWwodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFBhc3N3b3JkKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Mb2dpbkJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkxvZ2luQmFyIiwiaDEiLCJMb2dpbkZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUNsaWNrIiwiYWxlcnQiLCJlIiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n"));

/***/ })

});