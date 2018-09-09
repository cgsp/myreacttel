import { userList } from '@Api';
import MiddleTip from '@VBase/middle-tip';

const USER_LIST_LOAD_DATA = 'USER_LIST_LOAD_DATA';
const USER_LIST_ERR_MSG = 'USER_LIST_ERR_MSG';
const USER_LIST_LOG_OUT = 'USER_LIST_LOG_OUT';
const initState = {
  userList: [],
  msg: ''
};

export function userListReducer(state = initState, action) {
  switch (action.type) {
    case USER_LIST_LOAD_DATA:
      return { ...state, ...action.payload };
    case USER_LIST_ERR_MSG:
      return { ...state, msg: action.msg };
    case USER_LIST_LOG_OUT:
      return initState;
    default:
      return state;
  }
}

function errorMsg(msg) {
  return { msg, type: USER_LIST_ERR_MSG };
}

function loadDataSuccess(data) {
  return { type: USER_LIST_LOAD_DATA, payload: data };
}


export function getUserList(type) {
  return (dispatch) => {
    // 发送请求
    userList(type)
      .then((res) => {
        if (res.code === '0') {
          dispatch(loadDataSuccess({ userList: res.data, msg: '' }));
        } else {
          dispatch(errorMsg(res.msg));
          MiddleTip(res.msg);
        }
      });
  };
}

export function user_list_logoutSubmit() {
  return { type: USER_LIST_LOG_OUT };
}



