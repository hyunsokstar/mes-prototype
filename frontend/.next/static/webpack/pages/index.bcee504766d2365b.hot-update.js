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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n// import React from \"react\";\n\n\n\nvar _s = $RefreshSig$();\nvar LoginBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject());\n_c = LoginBar;\nvar AppLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleClick = function() {\n        try {\n            login({\n                email: email,\n                password: password\n            });\n        } catch (e) {\n            alert(\"Failed to login\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoginBar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            value: email,\n                            onChange: function(param) {\n                                var value = param.target.value;\n                                return setEmail(value);\n                            },\n                            type: \"text\",\n                            placeholder: \"email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            value: password,\n                            onChange: function(param) {\n                                var value = param.target.value;\n                                return setPassword(value);\n                            },\n                            type: \"password\",\n                            placeholder: \"password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sizl/hyun-mes/mes-prototype/frontend/components/AppLayout.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(AppLayout, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c1 = AppLayout;\nAppLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoginBar\");\n$RefreshReg$(_c1, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBREEsNkJBQTZCO0FBQ1c7QUFDTDtBQUNJOztBQUd2QyxJQUFNSSxRQUFRLEdBQUdELDREQUFTLG1CQUV6QjtBQUZLQyxLQUFBQSxRQUFRO0FBS2QsSUFBTUUsU0FBUyxHQUFHLGdCQUFrQjtRQUFmQyxRQUFRLFNBQVJBLFFBQVE7O0lBRXpCLElBQTBCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CTyxLQUFLLEdBQWNQLEdBQVksR0FBMUIsRUFBRVEsUUFBUSxHQUFJUixHQUFZLEdBQWhCO0lBQ3RCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDUyxRQUFRLEdBQWlCVCxJQUFZLEdBQTdCLEVBQUVVLFdBQVcsR0FBSVYsSUFBWSxHQUFoQjtJQUc1QixJQUFNVyxXQUFXLEdBQUcsV0FBTTtRQUN0QixJQUFJO1lBQ0ZDLEtBQUssQ0FBQztnQkFBRUwsS0FBSyxFQUFMQSxLQUFLO2dCQUFFRSxRQUFRLEVBQVJBLFFBQVE7YUFBRSxDQUFDLENBQUM7U0FDNUIsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7WUFDVkMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDekJOLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiRSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7S0FDRjtJQUdILHFCQUNJLDhEQUFDSyxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRzswQkFFQSw0RUFBQ1osUUFBUTs7c0NBQ0wsOERBQUNhLE9BQUs7NEJBQ0ZDLEtBQUssRUFBRVYsS0FBSzs0QkFDWlcsUUFBUSxFQUFFO29DQUFHQyxLQUFlLFNBQWZBLE1BQU0sQ0FBSUYsS0FBSzt1Q0FBU1QsUUFBUSxDQUFDUyxLQUFLLENBQUM7NkJBQUE7NEJBQ3BERyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsV0FBVyxFQUFDLE9BQU87Ozs7O2lDQUNyQjtzQ0FDRiw4REFBQ0wsT0FBSzs0QkFDRkMsS0FBSyxFQUFFUixRQUFROzRCQUNmUyxRQUFRLEVBQUU7b0NBQUdDLEtBQWUsU0FBZkEsTUFBTSxDQUFJRixLQUFLO3VDQUFTUCxXQUFXLENBQUNPLEtBQUssQ0FBQzs2QkFBQTs0QkFDdkRHLElBQUksRUFBQyxVQUFVOzRCQUNmQyxXQUFXLEVBQUMsVUFBVTs7Ozs7aUNBQ3hCO3NDQUVGLDhEQUFDQyxRQUFNOzRCQUFDQyxPQUFPLEVBQUVaLFdBQVc7c0NBQUUsT0FBSzs7Ozs7aUNBQVM7Ozs7Ozt5QkFHckM7Ozs7O3FCQUVUO1lBQ0xMLFFBQVE7Ozs7OzthQUNQLENBQ1I7Q0FDTDtHQTVDS0QsU0FBUztBQUFUQSxNQUFBQSxTQUFTO0FBOENmQSxTQUFTLENBQUNtQixTQUFTLEdBQUc7SUFDbEJsQixRQUFRLEVBQUVMLG1FQUF5QjtDQUN0QyxDQUFDO0FBRUYsK0RBQWVJLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwcExheW91dC5qcz9jZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuY29uc3QgTG9naW5CYXIgPSBzdHlsZWQuaDFgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGxvZ2luXCIpO1xuICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8TG9naW5CYXI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldEVtYWlsKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQYXNzd29yZCh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TG9naW48L2J1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgPC9Mb2dpbkJhcj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiTG9naW5CYXIiLCJoMSIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVDbGljayIsImxvZ2luIiwiZSIsImFsZXJ0IiwiZGl2IiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n"));

/***/ })

});