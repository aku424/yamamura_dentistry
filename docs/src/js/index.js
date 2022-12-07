/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./dev/js/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_humMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/humMenu */ "./dev/js/modules/humMenu.js");\n/* harmony import */ var _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/faqAccordion */ "./dev/js/modules/faqAccordion.js");\n\n\n\n// ハンバーガーメニュー\nconst hum_menu = new _modules_humMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();\nhum_menu.init ();\n\n// FAQのアコーディオン\nconst faq_accordion = new _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_1__["default"]();\nfaq_accordion.init();\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/index.js?')},"./dev/js/modules/faqAccordion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ faqAccordion)\n/* harmony export */ });\nclass faqAccordion{\n    constructor() {\n        this.item = document.querySelectorAll(\'.js-faqItem\');\n        this.fucks = document.querySelectorAll(\'.js-faqFuck\');\n    }\n\n    init (){\n        this.faqFunc();\n\n        // for (const fuck of this.fucks) {\n        //     fuck.addEventListener("click", this.faqFunc.bind(this));\n        // };\n    }\n\n    faqFunc() {\n        for (const fuck of this.fucks) {\n            fuck.addEventListener("click", () => {\n                const target = fuck.parentNode.parentNode;\n                const targetA = target.getElementsByClassName(\'faq__a\')[0];\n                console.log(targetA);\n                \n                if (target.classList.contains("js-faqOpen")) {\n                    target.classList.remove("js-faqOpen");\n                    target.classList.add("js-faqClose");\n                }else {\n                    target.classList.remove("js-faqClose");\n                    target.classList.add("js-faqOpen");\n                }\n\n                // target.classList.toggle("js-faqOpen");\n            });\n        };\n    }\n};\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/modules/faqAccordion.js?')},"./dev/js/modules/humMenu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ humMenu)\n/* harmony export */ });\nclass humMenu {\n    constructor() {\n        this.btn = document.querySelector('.js-humBtn');\n        this.header = document.querySelector('#header');\n    }\n\n    init (){\n        this.btn.addEventListener(\"click\", this.toggleFunc.bind(this));\n    }\n\n    toggleFunc() {\n        if (this.header.classList.contains('is-open')) {\n            this.header.classList.remove('is-open');\n        }\n        else {\n            this.header.classList.add('is-open');\n        }\n    }\n}\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/modules/humMenu.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,_)=>{for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./dev/js/index.js")})();