(() => {
  // webpackBootstrap
  "use strict";
  var __webpack_modules__ = {
    "./src/esm/add.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        // !: 默认导出可以理解为一个名为 default 的局部导出
        default: () => __WEBPACK_DEFAULT_EXPORT__,
        // !: 局部导出是实时的，通过 getter 定义
        partExport: () => /* binding */ partExport,
      });
      function add(a, b) {
        return a + b;
      }

      // !: 默认导出拿到永远是同步导出的内容
      const __WEBPACK_DEFAULT_EXPORT__ = add;
      var partExport = 666;
    },
  };
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    // !: 不像 commonjs 绑定 this 为 module.exports
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    /* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      "./src/esm/add.js"
    );

    console.log(
      "1 + 1 = ".concat((0, _add__WEBPACK_IMPORTED_MODULE_0__.default)(1, 1))
    );
    console.log(_add__WEBPACK_IMPORTED_MODULE_0__.partExport);
  })();
})();
