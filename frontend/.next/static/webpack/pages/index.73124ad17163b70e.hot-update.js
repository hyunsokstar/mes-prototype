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

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 1.5em;\\n  text-align: center;\\n  color: palevioletred;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar LoginBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject());\n_c = LoginBar;\nvar AppLayout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginBar, {}, void 0, false, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = AppLayout;\nAppLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginBar\");\n$RefreshReg$(_c1, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDSTtBQUd2QyxJQUFNRyxRQUFRLEdBQUdELDREQUFTLG1CQUl6QjtBQUpLQyxLQUFBQSxRQUFRO0FBT2QsSUFBTUUsU0FBUyxHQUFHLGdCQUFrQjtRQUFmQyxRQUFRLFNBQVJBLFFBQVE7SUFDekIscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQSxLQUFHOzBCQUVBLDRFQUFDSixRQUFROzs7O3lCQUVFOzs7OztxQkFHVDtZQUNMRyxRQUFROzs7Ozs7YUFDUCxDQUNSO0NBQ0w7QUFkS0QsTUFBQUEsU0FBUztBQWdCZkEsU0FBUyxDQUFDRyxTQUFTLEdBQUc7SUFDbEJGLFFBQVEsRUFBRUwsbUVBQXlCO0NBQ3RDLENBQUM7QUFFRiwrREFBZUksU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzP2NkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuY29uc3QgTG9naW5CYXIgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG5gO1xuXG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxMb2dpbkJhcj5cblxuICAgICAgICAgICAgICAgIDwvTG9naW5CYXI+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJMb2dpbkJhciIsImgxIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n"));

/***/ })

});