// 兼容性处理，兼容低版本浏览器
import 'babel-polyfill';
import 'raf/polyfill';

// 引入fastclick
import fastclick from 'fastclick';

// 引入redux
import { createStore, applyMiddleware, compose } from 'redux';

// 引入redux-thunk
import thunk from 'redux-thunk';

// 引入react-redux
import { Provider } from 'react-redux';

// 引入reducers
import reducers from '@Redux';

// 引入react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入全局的scss设置
import '@Common/scss/index.scss';

// 引入根路由
import RootRoutes from '@Router';

// 引入离线缓存文件
import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

// 绑定fastclick
fastclick.attach(document.body);

// redux的调试工具,不存在的话，就是一个空函数
// 有装插件的话，这个函数就存在
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// 创建store
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

// 查看初始的store的数据
console.log(store.getState());

// 根组件绑定
ReactDOM.render(
  (
    <Provider store={store}>
      <RootRoutes />
    </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
// unregister();
