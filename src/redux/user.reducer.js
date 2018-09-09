import { register, login, update } from '@Api';
import { getRedirectPath } from '@Common/js/getRedirectPath';
import { md5Pwd } from '@Utils/myJiaMi';
import MiddleTip from '@VBase/middle-tip';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERR_MSG = 'ERR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const LOG_OUT = 'LOG_OUT';
const initState = {
  // 跳转到哪里
  redirectTo: '',
  msg: '',
  type: '',
  user: ''
};

export function userReducer(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, ...action.payload, msg: '', redirectTo: getRedirectPath(action.payload) };
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case ERR_MSG:
      return { ...state, msg: action.msg };
    case LOG_OUT:
      return { ...initState, redirectTo: '/login' };
    default:
      return state;
  }
}

function errorMsg(msg) {
  return { msg, type: ERR_MSG };
}

function authSuccessMsg(data) {
  return { type: AUTH_SUCCESS, payload: data };
}

// 登录拦截器，刷新页面，重新加载用户信息
export function loadDataSuccess(data) {
  return { type: LOAD_DATA, payload: data };
}

export function handleRegister({ type, user, pwd, repeatpwd }) {
  if (!user || !pwd) {
    MiddleTip('用户名或密码不能为空！');
    return errorMsg('用户名或密码不能为空！');
  }

  if (repeatpwd !== pwd) {
    MiddleTip('密码与确认密码必须相同！');
    return errorMsg('密码与确认密码必须相同！');
  }

  return (dispatch) => {
    // 发送请求
    register({ type, user, pwd: md5Pwd(pwd) })
      .then((res) => {
        if (res.code === '0') {
          dispatch(authSuccessMsg({ type, user, pwd: md5Pwd(pwd) }));
        } else {
          dispatch(errorMsg(res.msg));
          MiddleTip(res.msg);
        }
      });
  };
}

export function handleLogin({ type, user, pwd }) {
  if (!user || !pwd) {
    MiddleTip('用户名或密码不能为空！');
    return errorMsg('用户名或密码不能为空！');
  }

  return (dispatch) => {
    // 发送请求
    login({ type, user, pwd: md5Pwd(pwd) })
      .then((res) => {
        if (res.code === '0') {
          dispatch(authSuccessMsg(res.data));
        } else {
          dispatch(errorMsg(res.msg));
          MiddleTip(res.msg);
        }
      });
  };
}

export function updateInfo(data) {
  delete data.icon;
  return (dispatch) => {
    // 发送请求
    update({ ...data, redirectTo: getRedirectPath(data) })
      .then((res) => {
        if (res.code === '0') {
          dispatch(authSuccessMsg(res.data));
        } else {
          dispatch(errorMsg(res.msg));
          MiddleTip(res.msg);
        }
      });
  };
}

export function logoutSubmit() {
  return { type: LOG_OUT };
}

