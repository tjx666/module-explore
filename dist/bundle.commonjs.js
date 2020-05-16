module.exports = (() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    "./src/commonjs/add.js": function (module, exports) {
      function add(a, b) {
        return a + b;
      }

      // 整个模块会被包到一个函数中，this 被指向 module.exports
      this.a = 1;
      // exports 就是 module.exports 的引用
      exports.b = 2;

      // 上面的导出都被覆盖
      module.exports = add;
    },

    "./src/commonjs/index.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      const { add } = __webpack_require__(/*! ./add */ "./src/commonjs/add.js");

      console.log(`1 + 1 = ${add(1, 1)}`);
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
    __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Return the exports of the module
    return module.exports;
  }

  // module exports must be returned from runtime so entry inlining is disabled
  // startup
  // Load entry module and return exports
  return __webpack_require__("./src/commonjs/index.js");
})();
