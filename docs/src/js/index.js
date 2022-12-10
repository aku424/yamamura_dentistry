/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./dev/js/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_humMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/humMenu */ "./dev/js/modules/humMenu.js");\n/* harmony import */ var _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/faqAccordion */ "./dev/js/modules/faqAccordion.js");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ "./dev/js/modules/smoothScroll.js");\n\n\n\n\n// ハンバーガーメニュー\nconst hum_menu = new _modules_humMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();\nhum_menu.init ();\n\n// FAQのアコーディオン\nconst faq_accordion = new _modules_faqAccordion__WEBPACK_IMPORTED_MODULE_1__["default"]();\nfaq_accordion.init();\n\n// スムーススクロール\nconst smooth_scroll = new _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__["default"]();\nsmooth_scroll.init();\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/index.js?')},"./dev/js/modules/faqAccordion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ faqAccordion)\n/* harmony export */ });\nclass faqAccordion{\n    constructor() {\n        this.item = document.querySelectorAll(\'.js-faqItem\');\n        this.fucks = document.querySelectorAll(\'.js-faqFuck\');\n    }\n\n    init (){\n        this.faqFunc();\n    }\n\n    faqFunc() {\n        for (const fuck of this.fucks) {\n            fuck.addEventListener("click", () => {\n                const target = fuck.parentNode.parentNode;\n                const targetA = target.getElementsByClassName(\'faq__a\')[0];\n                console.log(targetA);\n                \n                if (target.classList.contains("js-faqOpen")) {\n                    target.classList.remove("js-faqOpen");\n                    target.classList.add("js-faqClose");\n                }else {\n                    target.classList.remove("js-faqClose");\n                    target.classList.add("js-faqOpen");\n                }\n            });\n        };\n    }\n};\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/modules/faqAccordion.js?')},"./dev/js/modules/humMenu.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ humMenu)\n/* harmony export */ });\nclass humMenu {\n    constructor() {\n        this.btn = document.querySelector('.js-humBtn');\n        this.header = document.querySelector('#header');\n        this.header_items = document.querySelectorAll('.js-header-item');\n    }\n\n    init (){\n        this.btn.addEventListener(\"click\", this.toggleFunc.bind(this));\n    }\n\n    toggleFunc() {\n        if (this.header.classList.contains('is-open')) {\n            this.addClass();\n        }\n        else {\n            this.header.classList.add('is-open');\n            this.closeFunc();\n        }\n    }\n\n    addClass() {\n        this.header.classList.remove('is-open');\n    }\n\n    removeClass() {\n        this.header.classList.remove('is-open');\n    }\n\n    closeFunc() {\n        for (const header_item of this.header_items) {\n            header_item.addEventListener('click',this.removeClass.bind(this))\n        }\n    }\n}\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/modules/humMenu.js?")},"./dev/js/modules/smoothScroll.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\n// const smoothScrollTrigger = document.querySelectorAll('a[href^=\"#\"]');\n//   for (let i = 0; i < smoothScrollTrigger.length; i++){\n//     smoothScrollTrigger[i].addEventListener('click', (e) => {\n//       e.preventDefault();\n//       let href = smoothScrollTrigger[i].getAttribute('href');\n//        let targetElement = document.getElementById(href.replace('#', ''));\n//       const rect = targetElement.getBoundingClientRect().top;\n//       const offset = window.pageYOffset;\n//       const gap = 60;\n//       const target = rect + offset - gap;\n//       window.scrollTo({\n//         top: target,\n//         behavior: 'smooth',\n//       });\n//     });\n//   }\n\n\nclass smoothScroll{\n    constructor() {\n        this.smoothScrollTriggers = document.querySelectorAll('a[href^=\"#\"]');\n        this.href\n        this.targetElement\n    }\n\n    init (){\n        this.scrollFunc();\n    }\n\n    scrollFunc() {\n        for (const smoothScrollTrigger of this.smoothScrollTriggers) {\n            console.log(smoothScrollTrigger);\n            \n            smoothScrollTrigger.addEventListener('click', function (e) {\n                e.preventDefault();\n                \n                this.href = smoothScrollTrigger.getAttribute('href');\n                this.targetElement = document.getElementById(this.href.replace(this.href.substring(0, this.href.indexOf('#') + 1), ''));\n                const rect = this.targetElement.getBoundingClientRect().top;\n                const offset = window.pageYOffset;\n                const gap = 150;\n                const target = rect + offset - gap;\n    \n                window.scrollTo({\n                    top: target,\n                    behavior: 'smooth',\n                });\n            })\n\n        };\n    }\n};\n\n\n//# sourceURL=webpack://webpack-base/./dev/js/modules/smoothScroll.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,n)=>{for(var _ in n)__webpack_require__.o(n,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:n[_]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./dev/js/index.js")})();