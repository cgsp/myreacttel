// 兼容性处理，兼容低版本浏览器
import 'babel-polyfill';
import 'raf/polyfill';

// 引入fastclick
import fastclick from 'fastclick';

// 引入react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入全局的scss设置
import '@common/scss/index.scss';

// 引入根组件
import App from './App';

// 引入离线缓存文件
import registerServiceWorker from './registerServiceWorker';

// 绑定fastclick
fastclick.attach(document.body);

// 根组件绑定
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
