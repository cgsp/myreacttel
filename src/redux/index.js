// 合并所有的reducer
import { combineReducers } from 'redux';
import { loginReducer } from './login.reducer';
import { yiYingReducer } from './yi-ying.reducer';

// 对外抛出
export default combineReducers({ loginReducer, yiYingReducer });
