// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    // 原有
    browser: true
  },
  extends: [
    'react-app'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数名与括号之间，不加空格
    'space-before-function-paren': 0,
    // 强制加分号
    'semi': ['error', 'always'],
    // 'semi': 0,
    // 忽略缩进,因为很多编辑器会自带缩进
    'indent': 0,
    // 允许多行空格
    'no-multiple-empty-lines': 0,
    // 允许多余的括号
    'no-extra-parens': 0,
    // 不允许多余的空格
    'no-multi-spaces': 1,
    // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
    'react/jsx-space-before-closing': 1,
    'jsx-quotes': 1,
    // 遵循JSX语法缩进/格式
    'react/jsx-closing-bracket-location': 1,
    // 如果属性值为 true, 可以直接省略
    'react/jsx-boolean-value': 1,
    // 总是在Refs里使用回调函数
    'react/no-string-refs': 1,
    // 对于没有子元素的标签来说总是自己关闭标签
    'react/self-closing-comp': 1,
    // 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
    'react/jsx-no-bind': 1,
    // 按照具体规范的React.createClass 的生命周期函数书写代码
    'react/sort-comp': 1,
    // React模块名使用帕斯卡命名，实例使用骆驼式命名
    'react/jsx-pascal-case': 1
  }
}

/* eslint-disable no-unused-vars*/
/* eslint-disable no-new*/
