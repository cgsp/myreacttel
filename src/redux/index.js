// 合并所有的reducer
import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { userListReducer } from './userList.reducer';

// 对外抛出
export default combineReducers({ userReducer, userListReducer });
