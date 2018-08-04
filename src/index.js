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

// 引入reducer
import { reducer } from '@Redux';

// 引入react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入全局的scss设置
import '@Common/scss/index.scss';

// 引入路由
import { HashRouter, Link } from 'react-router-dom';
import ProjectRoutes from '@Router';

// 引入离线缓存文件
import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

// 绑定fastclick
fastclick.attach(document.body);

// redux的调试工具,不存在的话，就是一个空函数
// 有装插件的话，这个函数就存在
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// 创建store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

// 根组件绑定
ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/yiying">一营</Link>
            </li>
            <li>
              <Link to="/erying">二营</Link>
            </li>
            <li>
              <Link to={{ pathname: '/sanying', state: { type: 'sex' } }}>三营</Link>
            </li>
          </ul>
          <ProjectRoutes />
        </div>
      </HashRouter>
    </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
// unregister();
