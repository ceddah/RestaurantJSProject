/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nhtml {\\n    font-family: 'Lato', sans-serif;\\n}\\n\\nbody {\\n    min-height: 100vh;\\n    background-color: #f6f6f6;\\n}\\n\\n#content {\\n    height: 100vh;\\n}\\n\\n#header {\\n    width: 80%;\\n    height: 80px;\\n    margin: 0 auto;\\n}\\n\\n#header nav {\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n#header nav ul {\\n    list-style-type: none;\\n    display: flex;\\n    align-items: center;\\n\\n}\\n\\n#header nav ul li {\\n    margin: 0 1.5rem;\\n}\\n\\n#header nav ul li a {\\n    text-decoration: none;\\n    font-size: 18px;\\n    color: #212121;\\n    position: relative;\\n    transition: 0.5s ease;\\n}\\n\\n#header nav ul li a::after {\\n    content: '';\\n    width: 0%;\\n    height: 2px;\\n    background-color: brown;\\n    position: absolute;\\n    left: 0;\\n    bottom: -5px;\\n    transition: 0.5s ease;\\n}\\n\\n#header nav ul li a:hover {\\n    color: brown;\\n}\\n\\n#header nav ul li a:hover::after {\\n    width: 100%;\\n}\\n\\n#header nav .logo h2 {\\n    font-size: 28px;\\n    font-weight: 900;\\n    color: brown;\\n}\\n\\n#footer {\\n    width: 80%;\\n    height: 80px;\\n    position: absolute;\\n    bottom: 0;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    background-color: #212121;\\n    padding: 0 1rem;\\n    display: grid;\\n    align-items: center;\\n    grid-template-columns: repeat(3, 1fr);\\n    border-top-left-radius: 20px;\\n    border-top-right-radius: 20px;\\n}\\n\\n#footer .social span{\\n    font-size: 16px;\\n    font-style: italic;\\n    margin-right: 0.5rem;\\n    color: #ccc;\\n}\\n\\n#footer .social {\\n    display: flex;\\n    align-items: center;\\n}\\n#footer .social i {\\n    font-size: 25px;\\n    margin: 0 0.5rem;\\n    cursor: pointer;\\n    transition: 0.5s ease;\\n}\\n\\n#footer .social i:first-of-type {\\n    color: #8a3ab9;\\n}\\n\\n#footer .social i:nth-of-type(2) {\\n    color: #00ACEE;\\n}\\n\\n#footer .social i:nth-of-type(3) {\\n    color: #ff0050;\\n}\\n\\n#footer .social i:last-of-type {\\n    color: #E60023;\\n}\\n\\n#footer .social i:hover {\\n    transform: scale(1.3);\\n}\\n\\n#footer .madeBy {\\n    justify-self: center;\\n    align-self: flex-end;\\n    font-size: 13px;\\n    color: #f6f6f6;\\n}\\n\\n#footer .footer-nav {\\n    justify-self: flex-end;\\n}\\n\\n#footer .footer-nav ul {\\n    display: flex;\\n    align-items: center;\\n    list-style-type: none;\\n}\\n\\n#footer .footer-nav ul li {\\n    margin: 0 0.5rem;\\n}\\n\\n#footer .footer-nav ul li a {\\n    text-decoration: none;\\n    color: #ccc;\\n}\\n\\n#footer .footer-nav ul li a:hover {\\n    color: #f6f6f6;\\n}\\n\\n#main {\\n    width: 90%;\\n    height: 90.1%;\\n    margin: 0 auto;\\n}\\n\\n#main #home {\\n    background: url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center/center;\\n    height: 100%;\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    color: #f6f6f6;\\n}\\n\\n#main #home * {\\n    z-index: 99;\\n}\\n\\n#main #home::after {\\n    content: '';\\n    background: rgba(0, 0, 0, 0.6);\\n    height: 100%;\\n    width: 100%;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n}\\n\\n#main #home .title {\\n    font-size: 40px;\\n    margin-bottom: 2rem;\\n}\\n\\n#main #home .title span {\\n    color: #ed1250;\\n}\\n\\n#main #home button {\\n    padding: 8px 18px;\\n    border: none;\\n    outline: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n#main #home button:active {\\n    transform: scale(0.98);\\n}\\n\\n#main #home p {\\n    width: 500px;\\n    color: #e9e5e5;\\n    line-height: 25px;\\n}\\n\\n#main #home button:hover {\\n    background-color: rgb(231, 229, 229);\\n}\\n\\n#main #home .contact-adv {\\n    margin-top: 2rem;\\n    text-align: center;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    border-radius: 20px;\\n    width: 350px;\\n    padding: 0.5rem 1rem;\\n}\\n\\n#main #home .contact-adv p {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n#main #home .contact-adv p:first-of-type {\\n    text-align: left;\\n}\\n#main #home .contact-adv p:last-of-type {\\n    text-align: right;\\n}\\n\\n#main #home .contact-adv p .fa-map-marker-alt {\\n    color: #ed1250;\\n    margin-left: 0.8rem;\\n    font-size: 20px;\\n}\\n\\n#main #home .contact-adv p .fa-clock {\\n    color: #ed1250;\\n    margin-right: 0.8rem;\\n    font-size: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantjsproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurantjsproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n\n\n\nconst content = document.getElementById('content');\n\nconst RenderPage = () => {\n    console.log('rendering page...')\n    ;(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n}\n\nwindow.addEventListener('load', RenderPage);\n\n\n\n//# sourceURL=webpack://restaurantjsproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeRender)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\n\nfunction homeRender() {\n    //See if we can append this to index.html from here to #content\n    //Or just export content div\n    console.log('rendering home page...')\n    headerRender();\n    footerRender();\n    console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.default);\n}\n\nconst headerRender = () => {\n    const header = document.createElement('header');\n    header.setAttribute('id', 'header');\n\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', 'nav');\n\n    const logoDiv = document.createElement('div');\n    logoDiv.classList.add('logo');\n    const logoTitle = document.createElement('h2');\n    logoTitle.innerHTML = 'Food Place';\n    logoDiv.appendChild(logoTitle);\n    nav.appendChild(logoDiv);\n\n    nav.appendChild(navigationLinks());\n    header.appendChild(nav);\n    console.log(header);\n    return header;\n}\n\n\nconst footerRender = () => {\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', 'footer');\n\n    const socialDiv = document.createElement('div');\n    socialDiv.classList.add('social');\n    const textSpan = document.createElement('span');\n    textSpan.innerHTML = 'You can find us on:';\n    socialDiv.appendChild(textSpan);\n\n    const icons = ['fa-instagram', 'fa-twitter', 'fa-tiktok', 'fa-pinterest'];\n    for(let i = 0; i < icons.length; i++) {\n        const icon = document.createElement('i');\n        icon.classList.add('fab');\n        icon.classList.add(`${icons[i]}`);\n        socialDiv.appendChild(icon);\n    };\n    footer.appendChild(socialDiv);\n    \n    const copyrightMsg = document.createElement('p');\n    copyrightMsg.classList.add('madeBy');\n    copyrightMsg.innerHTML = 'Made by ceddah 2021';\n    footer.appendChild(copyrightMsg);\n\n    const footerNav = document.createElement('div');\n    footerNav.classList.add('footer-nav');\n    footerNav.appendChild(navigationLinks());\n    footer.appendChild(footerNav);\n    console.log(footer)\n    return footer;\n}\n\nconst mainSection = () => {\n    const main = document.createElement('main');\n    main.setAttribute('id', 'main');\n}\n\nconst navigationLinks = () => {\n    const ulList = document.createElement('ul');\n    const navContent = ['Home', 'Menu', 'About Us', 'Contact'];\n    for(let i = 0; i < navContent.length; i++) {\n        const li = document.createElement('li');\n        const aLink = document.createElement('a');\n        aLink.innerHTML = `${navContent[i]}`;\n        li.appendChild(aLink);\n        ulList.appendChild(li);\n    }\n\n    return ulList;\n}\n\n//# sourceURL=webpack://restaurantjsproject/./src/modules/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;