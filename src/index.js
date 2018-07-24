// 引入兼容性
import 'babel-polyfill';
import 'raf/polyfill';

// 引入react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入全局的scss设置
import '@common/scss/index.scss';

// 引入根组件
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 根组件绑定
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
