function add(a, b) {
  return a + b;
}

// 整个模块会被包到一个函数中，this 被指向 module.exports
this.a = 1;
// exports 就是 module.exports 的引用
exports.b = 2;

// 上面的导出都被覆盖
module.exports = add;
