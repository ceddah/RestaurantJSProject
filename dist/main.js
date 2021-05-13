/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cross-spawn/index.js":
/*!*******************************************!*\
  !*** ./node_modules/cross-spawn/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst cp = __webpack_require__(/*! child_process */ \"child_process\");\nconst parse = __webpack_require__(/*! ./lib/parse */ \"./node_modules/cross-spawn/lib/parse.js\");\nconst enoent = __webpack_require__(/*! ./lib/enoent */ \"./node_modules/cross-spawn/lib/enoent.js\");\n\nfunction spawn(command, args, options) {\n    // Parse the arguments\n    const parsed = parse(command, args, options);\n\n    // Spawn the child process\n    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);\n\n    // Hook into child process \"exit\" event to emit an error if the command\n    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16\n    enoent.hookChildProcess(spawned, parsed);\n\n    return spawned;\n}\n\nfunction spawnSync(command, args, options) {\n    // Parse the arguments\n    const parsed = parse(command, args, options);\n\n    // Spawn the child process\n    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);\n\n    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16\n    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);\n\n    return result;\n}\n\nmodule.exports = spawn;\nmodule.exports.spawn = spawn;\nmodule.exports.sync = spawnSync;\n\nmodule.exports._parse = parse;\nmodule.exports._enoent = enoent;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/cross-spawn/index.js?");

/***/ }),

/***/ "./node_modules/cross-spawn/lib/enoent.js":
/*!************************************************!*\
  !*** ./node_modules/cross-spawn/lib/enoent.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst isWin = process.platform === 'win32';\n\nfunction notFoundError(original, syscall) {\n    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {\n        code: 'ENOENT',\n        errno: 'ENOENT',\n        syscall: `${syscall} ${original.command}`,\n        path: original.command,\n        spawnargs: original.args,\n    });\n}\n\nfunction hookChildProcess(cp, parsed) {\n    if (!isWin) {\n        return;\n    }\n\n    const originalEmit = cp.emit;\n\n    cp.emit = function (name, arg1) {\n        // If emitting \"exit\" event and exit code is 1, we need to check if\n        // the command exists and emit an \"error\" instead\n        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16\n        if (name === 'exit') {\n            const err = verifyENOENT(arg1, parsed, 'spawn');\n\n            if (err) {\n                return originalEmit.call(cp, 'error', err);\n            }\n        }\n\n        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params\n    };\n}\n\nfunction verifyENOENT(status, parsed) {\n    if (isWin && status === 1 && !parsed.file) {\n        return notFoundError(parsed.original, 'spawn');\n    }\n\n    return null;\n}\n\nfunction verifyENOENTSync(status, parsed) {\n    if (isWin && status === 1 && !parsed.file) {\n        return notFoundError(parsed.original, 'spawnSync');\n    }\n\n    return null;\n}\n\nmodule.exports = {\n    hookChildProcess,\n    verifyENOENT,\n    verifyENOENTSync,\n    notFoundError,\n};\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/cross-spawn/lib/enoent.js?");

/***/ }),

/***/ "./node_modules/cross-spawn/lib/parse.js":
/*!***********************************************!*\
  !*** ./node_modules/cross-spawn/lib/parse.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! path */ \"path\");\nconst resolveCommand = __webpack_require__(/*! ./util/resolveCommand */ \"./node_modules/cross-spawn/lib/util/resolveCommand.js\");\nconst escape = __webpack_require__(/*! ./util/escape */ \"./node_modules/cross-spawn/lib/util/escape.js\");\nconst readShebang = __webpack_require__(/*! ./util/readShebang */ \"./node_modules/cross-spawn/lib/util/readShebang.js\");\n\nconst isWin = process.platform === 'win32';\nconst isExecutableRegExp = /\\.(?:com|exe)$/i;\nconst isCmdShimRegExp = /node_modules[\\\\/].bin[\\\\/][^\\\\/]+\\.cmd$/i;\n\nfunction detectShebang(parsed) {\n    parsed.file = resolveCommand(parsed);\n\n    const shebang = parsed.file && readShebang(parsed.file);\n\n    if (shebang) {\n        parsed.args.unshift(parsed.file);\n        parsed.command = shebang;\n\n        return resolveCommand(parsed);\n    }\n\n    return parsed.file;\n}\n\nfunction parseNonShell(parsed) {\n    if (!isWin) {\n        return parsed;\n    }\n\n    // Detect & add support for shebangs\n    const commandFile = detectShebang(parsed);\n\n    // We don't need a shell if the command filename is an executable\n    const needsShell = !isExecutableRegExp.test(commandFile);\n\n    // If a shell is required, use cmd.exe and take care of escaping everything correctly\n    // Note that `forceShell` is an hidden option used only in tests\n    if (parsed.options.forceShell || needsShell) {\n        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`\n        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument\n        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,\n        // we need to double escape them\n        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);\n\n        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\\bar)\n        // This is necessary otherwise it will always fail with ENOENT in those cases\n        parsed.command = path.normalize(parsed.command);\n\n        // Escape command & arguments\n        parsed.command = escape.command(parsed.command);\n        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));\n\n        const shellCommand = [parsed.command].concat(parsed.args).join(' ');\n\n        parsed.args = ['/d', '/s', '/c', `\"${shellCommand}\"`];\n        parsed.command = process.env.comspec || 'cmd.exe';\n        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped\n    }\n\n    return parsed;\n}\n\nfunction parse(command, args, options) {\n    // Normalize arguments, similar to nodejs\n    if (args && !Array.isArray(args)) {\n        options = args;\n        args = null;\n    }\n\n    args = args ? args.slice(0) : []; // Clone array to avoid changing the original\n    options = Object.assign({}, options); // Clone object to avoid changing the original\n\n    // Build our parsed object\n    const parsed = {\n        command,\n        args,\n        options,\n        file: undefined,\n        original: {\n            command,\n            args,\n        },\n    };\n\n    // Delegate further parsing to shell or non-shell\n    return options.shell ? parsed : parseNonShell(parsed);\n}\n\nmodule.exports = parse;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/cross-spawn/lib/parse.js?");

/***/ }),

/***/ "./node_modules/cross-spawn/lib/util/escape.js":
/*!*****************************************************!*\
  !*** ./node_modules/cross-spawn/lib/util/escape.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// See http://www.robvanderwoude.com/escapechars.php\nconst metaCharsRegExp = /([()\\][%!^\"`<>&|;, *?])/g;\n\nfunction escapeCommand(arg) {\n    // Escape meta chars\n    arg = arg.replace(metaCharsRegExp, '^$1');\n\n    return arg;\n}\n\nfunction escapeArgument(arg, doubleEscapeMetaChars) {\n    // Convert to string\n    arg = `${arg}`;\n\n    // Algorithm below is based on https://qntm.org/cmd\n\n    // Sequence of backslashes followed by a double quote:\n    // double up all the backslashes and escape the double quote\n    arg = arg.replace(/(\\\\*)\"/g, '$1$1\\\\\"');\n\n    // Sequence of backslashes followed by the end of the string\n    // (which will become a double quote later):\n    // double up all the backslashes\n    arg = arg.replace(/(\\\\*)$/, '$1$1');\n\n    // All other backslashes occur literally\n\n    // Quote the whole thing:\n    arg = `\"${arg}\"`;\n\n    // Escape meta chars\n    arg = arg.replace(metaCharsRegExp, '^$1');\n\n    // Double escape meta chars if necessary\n    if (doubleEscapeMetaChars) {\n        arg = arg.replace(metaCharsRegExp, '^$1');\n    }\n\n    return arg;\n}\n\nmodule.exports.command = escapeCommand;\nmodule.exports.argument = escapeArgument;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/cross-spawn/lib/util/escape.js?");

/***/ }),

/***/ "./node_modules/cross-spawn/lib/util/readShebang.js":
/*!**********************************************************!*\
  !*** ./node_modules/cross-spawn/lib/util/readShebang.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst shebangCommand = __webpack_require__(/*! shebang-command */ \"./node_modules/shebang-command/index.js\");\n\nfunction readShebang(command) {\n    // Read the first 150 bytes from the file\n    const size = 150;\n    const buffer = Buffer.alloc(size);\n\n    let fd;\n\n    try {\n        fd = fs.openSync(command, 'r');\n        fs.readSync(fd, buffer, 0, size, 0);\n        fs.closeSync(fd);\n    } catch (e) { /* Empty */ }\n\n    // Attempt to extract shebang (null is returned if not a shebang)\n    return shebangCommand(buffer.toString());\n}\n\nmodule.exports = readShebang;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/cross-spawn/lib/util/readShebang.js?");

/***/ }),

/***/ "./node_modules/cross-spawn/lib/util/resolveCommand.js":
/*!*************************************************************!*\
  !*** ./node_modules/cross-spawn/lib/util/resolveCommand.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst path = __webpack_require__(/*! path */ \"path\");\nconst which = __webpack_require__(/*! which */ \"./node_modules/which/which.js\");\nconst getPathKey = __webpack_require__(/*! path-key */ \"./node_modules/path-key/index.js\");\n\nfunction resolveCommandAttempt(parsed, withoutPathExt) {\n    const env = parsed.options.env || process.env;\n    const cwd = process.cwd();\n    const hasCustomCwd = parsed.options.cwd != null;\n    // Worker threads do not have process.chdir()\n    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;\n\n    // If a custom `cwd` was specified, we need to change the process cwd\n    // because `which` will do stat calls but does not support a custom cwd\n    if (shouldSwitchCwd) {\n        try {\n            process.chdir(parsed.options.cwd);\n        } catch (err) {\n            /* Empty */\n        }\n    }\n\n    let resolved;\n\n    try {\n        resolved = which.sync(parsed.command, {\n            path: env[getPathKey({ env })],\n            pathExt: withoutPathExt ? path.delimiter : undefined,\n        });\n    } catch (e) {\n        /* Empty */\n    } finally {\n        if (shouldSwitchCwd) {\n            process.chdir(cwd);\n        }\n    }\n\n    // If we successfully resolved, ensure that an absolute path is returned\n    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it\n    if (resolved) {\n        resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);\n    }\n\n    return resolved;\n}\n\nfunction resolveCommand(parsed) {\n    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);\n}\n\nmodule.exports = resolveCommand;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/cross-spawn/lib/util/resolveCommand.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nhtml {\\n    font-family: 'Lato', sans-serif;\\n}\\n\\nbody {\\n    min-height: 100vh;\\n    background-color: #f6f6f6;\\n}\\n\\n#content {\\n    height: 100vh;\\n}\\n\\n#header {\\n    width: 80%;\\n    height: 80px;\\n    margin: 0 auto;\\n}\\n\\n#header nav {\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n#header nav ul {\\n    list-style-type: none;\\n    display: flex;\\n    align-items: center;\\n\\n}\\n\\n#header nav ul li {\\n    margin: 0 1.5rem;\\n}\\n\\n#header nav ul li a {\\n    text-decoration: none;\\n    font-size: 18px;\\n    color: #212121;\\n    position: relative;\\n    transition: 0.5s ease;\\n}\\n\\n#header nav ul li a::after {\\n    content: '';\\n    width: 0%;\\n    height: 2px;\\n    background-color: brown;\\n    position: absolute;\\n    left: 0;\\n    bottom: -5px;\\n    transition: 0.5s ease;\\n}\\n\\n#header nav ul li a:hover {\\n    color: brown;\\n}\\n\\n#header nav ul li a:hover::after {\\n    width: 100%;\\n}\\n\\n#header nav .logo h2 {\\n    font-size: 28px;\\n    font-weight: 900;\\n    color: brown;\\n}\\n\\n#footer {\\n    width: 80%;\\n    height: 80px;\\n    position: absolute;\\n    bottom: 0;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    background-color: #212121;\\n    padding: 0 1rem;\\n    display: grid;\\n    align-items: center;\\n    grid-template-columns: repeat(3, 1fr);\\n    border-top-left-radius: 20px;\\n    border-top-right-radius: 20px;\\n}\\n\\n#footer .social span{\\n    font-size: 16px;\\n    font-style: italic;\\n    margin-right: 0.5rem;\\n    color: #ccc;\\n}\\n\\n#footer .social {\\n    display: flex;\\n    align-items: center;\\n}\\n#footer .social i {\\n    font-size: 25px;\\n    margin: 0 0.5rem;\\n    cursor: pointer;\\n    transition: 0.5s ease;\\n}\\n\\n#footer .social i:first-of-type {\\n    color: #8a3ab9;\\n}\\n\\n#footer .social i:nth-of-type(2) {\\n    color: #00ACEE;\\n}\\n\\n#footer .social i:nth-of-type(3) {\\n    color: #ff0050;\\n}\\n\\n#footer .social i:last-of-type {\\n    color: #E60023;\\n}\\n\\n#footer .social i:hover {\\n    transform: scale(1.3);\\n}\\n\\n#footer .madeBy {\\n    justify-self: center;\\n    align-self: flex-end;\\n    font-size: 13px;\\n    color: #f6f6f6;\\n}\\n\\n#footer .footer-nav {\\n    justify-self: flex-end;\\n}\\n\\n#footer .footer-nav ul {\\n    display: flex;\\n    align-items: center;\\n    list-style-type: none;\\n}\\n\\n#footer .footer-nav ul li {\\n    margin: 0 0.5rem;\\n}\\n\\n#footer .footer-nav ul li a {\\n    text-decoration: none;\\n    color: #ccc;\\n}\\n\\n#footer .footer-nav ul li a:hover {\\n    color: #f6f6f6;\\n}\\n\\n#main {\\n    width: 90%;\\n    height: 90.1%;\\n    margin: 0 auto;\\n}\\n\\n#main #home {\\n    background: url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center/center;\\n    height: 100%;\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    color: #f6f6f6;\\n}\\n\\n#main #home * {\\n    z-index: 99;\\n}\\n\\n#main #home::after {\\n    content: '';\\n    background: rgba(0, 0, 0, 0.6);\\n    height: 100%;\\n    width: 100%;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n}\\n\\n#main #home .title {\\n    font-size: 40px;\\n    margin-bottom: 2rem;\\n}\\n\\n#main #home .title span {\\n    color: #ed1250;\\n}\\n\\n#main #home button {\\n    padding: 8px 18px;\\n    border: none;\\n    outline: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n#main #home button:active {\\n    transform: scale(0.98);\\n}\\n\\n#main #home p {\\n    width: 500px;\\n    color: #e9e5e5;\\n    line-height: 25px;\\n}\\n\\n#main #home button:hover {\\n    background-color: rgb(231, 229, 229);\\n}\\n\\n#main #home .contact-adv {\\n    margin-top: 2rem;\\n    text-align: center;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    border-radius: 20px;\\n    width: 350px;\\n    padding: 0.5rem 1rem;\\n}\\n\\n#main #home .contact-adv p {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n#main #home .contact-adv p:first-of-type {\\n    text-align: left;\\n}\\n#main #home .contact-adv p:last-of-type {\\n    text-align: right;\\n}\\n\\n#main #home .contact-adv p .fa-map-marker-alt {\\n    color: #ed1250;\\n    margin-left: 0.8rem;\\n    font-size: 20px;\\n}\\n\\n#main #home .contact-adv p .fa-clock {\\n    color: #ed1250;\\n    margin-right: 0.8rem;\\n    font-size: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantjsproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isexe/index.js":
/*!*************************************!*\
  !*** ./node_modules/isexe/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fs = __webpack_require__(/*! fs */ \"fs\")\nvar core\nif (process.platform === 'win32' || global.TESTING_WINDOWS) {\n  core = __webpack_require__(/*! ./windows.js */ \"./node_modules/isexe/windows.js\")\n} else {\n  core = __webpack_require__(/*! ./mode.js */ \"./node_modules/isexe/mode.js\")\n}\n\nmodule.exports = isexe\nisexe.sync = sync\n\nfunction isexe (path, options, cb) {\n  if (typeof options === 'function') {\n    cb = options\n    options = {}\n  }\n\n  if (!cb) {\n    if (typeof Promise !== 'function') {\n      throw new TypeError('callback not provided')\n    }\n\n    return new Promise(function (resolve, reject) {\n      isexe(path, options || {}, function (er, is) {\n        if (er) {\n          reject(er)\n        } else {\n          resolve(is)\n        }\n      })\n    })\n  }\n\n  core(path, options || {}, function (er, is) {\n    // ignore EACCES because that just means we aren't allowed to run it\n    if (er) {\n      if (er.code === 'EACCES' || options && options.ignoreErrors) {\n        er = null\n        is = false\n      }\n    }\n    cb(er, is)\n  })\n}\n\nfunction sync (path, options) {\n  // my kingdom for a filtered catch\n  try {\n    return core.sync(path, options || {})\n  } catch (er) {\n    if (options && options.ignoreErrors || er.code === 'EACCES') {\n      return false\n    } else {\n      throw er\n    }\n  }\n}\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/isexe/index.js?");

/***/ }),

/***/ "./node_modules/isexe/mode.js":
/*!************************************!*\
  !*** ./node_modules/isexe/mode.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = isexe\nisexe.sync = sync\n\nvar fs = __webpack_require__(/*! fs */ \"fs\")\n\nfunction isexe (path, options, cb) {\n  fs.stat(path, function (er, stat) {\n    cb(er, er ? false : checkStat(stat, options))\n  })\n}\n\nfunction sync (path, options) {\n  return checkStat(fs.statSync(path), options)\n}\n\nfunction checkStat (stat, options) {\n  return stat.isFile() && checkMode(stat, options)\n}\n\nfunction checkMode (stat, options) {\n  var mod = stat.mode\n  var uid = stat.uid\n  var gid = stat.gid\n\n  var myUid = options.uid !== undefined ?\n    options.uid : process.getuid && process.getuid()\n  var myGid = options.gid !== undefined ?\n    options.gid : process.getgid && process.getgid()\n\n  var u = parseInt('100', 8)\n  var g = parseInt('010', 8)\n  var o = parseInt('001', 8)\n  var ug = u | g\n\n  var ret = (mod & o) ||\n    (mod & g) && gid === myGid ||\n    (mod & u) && uid === myUid ||\n    (mod & ug) && myUid === 0\n\n  return ret\n}\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/isexe/mode.js?");

/***/ }),

/***/ "./node_modules/isexe/windows.js":
/*!***************************************!*\
  !*** ./node_modules/isexe/windows.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = isexe\nisexe.sync = sync\n\nvar fs = __webpack_require__(/*! fs */ \"fs\")\n\nfunction checkPathExt (path, options) {\n  var pathext = options.pathExt !== undefined ?\n    options.pathExt : process.env.PATHEXT\n\n  if (!pathext) {\n    return true\n  }\n\n  pathext = pathext.split(';')\n  if (pathext.indexOf('') !== -1) {\n    return true\n  }\n  for (var i = 0; i < pathext.length; i++) {\n    var p = pathext[i].toLowerCase()\n    if (p && path.substr(-p.length).toLowerCase() === p) {\n      return true\n    }\n  }\n  return false\n}\n\nfunction checkStat (stat, path, options) {\n  if (!stat.isSymbolicLink() && !stat.isFile()) {\n    return false\n  }\n  return checkPathExt(path, options)\n}\n\nfunction isexe (path, options, cb) {\n  fs.stat(path, function (er, stat) {\n    cb(er, er ? false : checkStat(stat, path, options))\n  })\n}\n\nfunction sync (path, options) {\n  return checkStat(fs.statSync(path), path, options)\n}\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/isexe/windows.js?");

/***/ }),

/***/ "./node_modules/path-key/index.js":
/*!****************************************!*\
  !*** ./node_modules/path-key/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("\n\nconst pathKey = (options = {}) => {\n\tconst environment = options.env || process.env;\n\tconst platform = options.platform || process.platform;\n\n\tif (platform !== 'win32') {\n\t\treturn 'PATH';\n\t}\n\n\treturn Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';\n};\n\nmodule.exports = pathKey;\n// TODO: Remove this for the next major release\nmodule.exports.default = pathKey;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/path-key/index.js?");

/***/ }),

/***/ "./node_modules/shebang-command/index.js":
/*!***********************************************!*\
  !*** ./node_modules/shebang-command/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst shebangRegex = __webpack_require__(/*! shebang-regex */ \"./node_modules/shebang-regex/index.js\");\n\nmodule.exports = (string = '') => {\n\tconst match = string.match(shebangRegex);\n\n\tif (!match) {\n\t\treturn null;\n\t}\n\n\tconst [path, argument] = match[0].replace(/#! ?/, '').split(' ');\n\tconst binary = path.split('/').pop();\n\n\tif (binary === 'env') {\n\t\treturn argument;\n\t}\n\n\treturn argument ? `${binary} ${argument}` : binary;\n};\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/shebang-command/index.js?");

/***/ }),

/***/ "./node_modules/shebang-regex/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shebang-regex/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\nmodule.exports = /^#!(.*)/;\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/shebang-regex/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurantjsproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/which/which.js":
/*!*************************************!*\
  !*** ./node_modules/which/which.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const isWindows = process.platform === 'win32' ||\n    process.env.OSTYPE === 'cygwin' ||\n    process.env.OSTYPE === 'msys'\n\nconst path = __webpack_require__(/*! path */ \"path\")\nconst COLON = isWindows ? ';' : ':'\nconst isexe = __webpack_require__(/*! isexe */ \"./node_modules/isexe/index.js\")\n\nconst getNotFoundError = (cmd) =>\n  Object.assign(new Error(`not found: ${cmd}`), { code: 'ENOENT' })\n\nconst getPathInfo = (cmd, opt) => {\n  const colon = opt.colon || COLON\n\n  // If it has a slash, then we don't bother searching the pathenv.\n  // just check the file itself, and that's it.\n  const pathEnv = cmd.match(/\\//) || isWindows && cmd.match(/\\\\/) ? ['']\n    : (\n      [\n        // windows always checks the cwd first\n        ...(isWindows ? [process.cwd()] : []),\n        ...(opt.path || process.env.PATH ||\n          /* istanbul ignore next: very unusual */ '').split(colon),\n      ]\n    )\n  const pathExtExe = isWindows\n    ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'\n    : ''\n  const pathExt = isWindows ? pathExtExe.split(colon) : ['']\n\n  if (isWindows) {\n    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')\n      pathExt.unshift('')\n  }\n\n  return {\n    pathEnv,\n    pathExt,\n    pathExtExe,\n  }\n}\n\nconst which = (cmd, opt, cb) => {\n  if (typeof opt === 'function') {\n    cb = opt\n    opt = {}\n  }\n  if (!opt)\n    opt = {}\n\n  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt)\n  const found = []\n\n  const step = i => new Promise((resolve, reject) => {\n    if (i === pathEnv.length)\n      return opt.all && found.length ? resolve(found)\n        : reject(getNotFoundError(cmd))\n\n    const ppRaw = pathEnv[i]\n    const pathPart = /^\".*\"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw\n\n    const pCmd = path.join(pathPart, cmd)\n    const p = !pathPart && /^\\.[\\\\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd\n      : pCmd\n\n    resolve(subStep(p, i, 0))\n  })\n\n  const subStep = (p, i, ii) => new Promise((resolve, reject) => {\n    if (ii === pathExt.length)\n      return resolve(step(i + 1))\n    const ext = pathExt[ii]\n    isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {\n      if (!er && is) {\n        if (opt.all)\n          found.push(p + ext)\n        else\n          return resolve(p + ext)\n      }\n      return resolve(subStep(p, i, ii + 1))\n    })\n  })\n\n  return cb ? step(0).then(res => cb(null, res), cb) : step(0)\n}\n\nconst whichSync = (cmd, opt) => {\n  opt = opt || {}\n\n  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt)\n  const found = []\n\n  for (let i = 0; i < pathEnv.length; i ++) {\n    const ppRaw = pathEnv[i]\n    const pathPart = /^\".*\"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw\n\n    const pCmd = path.join(pathPart, cmd)\n    const p = !pathPart && /^\\.[\\\\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd\n      : pCmd\n\n    for (let j = 0; j < pathExt.length; j ++) {\n      const cur = p + pathExt[j]\n      try {\n        const is = isexe.sync(cur, { pathExt: pathExtExe })\n        if (is) {\n          if (opt.all)\n            found.push(cur)\n          else\n            return cur\n        }\n      } catch (ex) {}\n    }\n  }\n\n  if (opt.all && found.length)\n    return found\n\n  if (opt.nothrow)\n    return null\n\n  throw getNotFoundError(cmd)\n}\n\nmodule.exports = which\nwhich.sync = whichSync\n\n\n//# sourceURL=webpack://restaurantjsproject/./node_modules/which/which.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n\n\n\nconst RenderPage = () => {\n    console.log('rendering page...')\n}\n\nwindow.addEventListener('load', RenderPage);\n\n//# sourceURL=webpack://restaurantjsproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeRender)\n/* harmony export */ });\n/* harmony import */ var cross_spawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-spawn */ \"./node_modules/cross-spawn/index.js\");\n/* harmony import */ var cross_spawn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_spawn__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction homeRender() {\n    //See if we can append this to index.html from here to #content\n    //Or just export content div\n    console.log('rendering home page...')\n    headerRender();\n    // navigationLinks();\n}\n\nconst headerRender = () => {\n    const header = document.createElement('header');\n    header.setAttribute('id', 'header');\n\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', 'nav');\n\n    const logoDiv = document.createElement('div');\n    logoDiv.classList.add('logo');\n    const logoTitle = document.createElement('h2');\n    logoTitle.innerHTML = 'Food Place';\n    logoDiv.appendChild(logoTitle);\n    nav.appendChild(logoDiv);\n\n    const ulList = document.createElement('ul');\n    const navContent = ['Home', 'Menu', 'About Us', 'Contact'];\n    for(let i = 0; i < navContent.length; i++) {\n        const li = document.createElement('li');\n        const aLink = document.createElement('a');\n        aLink.innerHTML = `${navContent[i]}`;\n        li.appendChild(aLink);\n        ulList.appendChild(li);\n    }\n    nav.appendChild(ulList);\n    header.appendChild(nav);\n    console.log(header);\n    return header;\n}\n\n\nconst footerRender = () => {\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', 'footer');\n\n    const socialDiv = document.createElement('div');\n    socialDiv.classList.add('social');\n    const textSpan = document.createElement('span');\n    textSpan.innerHTML = 'You can find us on:';\n    socialDiv.appendChild(textSpan);\n\n    const icons = ['fa-instagram', 'fa-twitter', 'fa-tiktok', 'fa-pinterest'];\n    for(let i = 0; i < icons.length; i++) {\n        const icon = document.createElement('i');\n        icon.classList.add('fab');\n        icon.classList.add(`${icons[i]}`);\n        socialDiv.appendChild(icon);\n    };\n    footer.appendChild(socialDiv);\n    \n    const copyrightMsg = document.createElement('p');\n    copyrightMsg.classList.add('madeBy');\n    copyrightMsg.innerHTML = 'Made by ceddah 2021';\n    footer.appendChild(copyrightMsg);\n\n    const footerNav = document.createElement('div');\n    footerNav.classList.add('footer-nav');\n}\n\nconst navigationLinks = () => {\n    const ulList = document.createElement('ul');\n    const navContent = ['Home', 'Menu', 'About Us', 'Contact'];\n    for(let i = 0; i < navContent.length; i++) {\n        const li = document.createElement('li');\n        const aLink = document.createElement('a');\n        aLink.innerHTML = `${navContent[i]}`;\n        li.appendChild(aLink);\n        ulList.appendChild(li);\n    }\n    \n    console.log(ulList);\n    return ulList;\n}\n\n//# sourceURL=webpack://restaurantjsproject/./src/modules/home.js?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;