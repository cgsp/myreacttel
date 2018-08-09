import { register, login } from '@Api';
import { getRedirectPath } from '@Common/js/getRedirectPath';
import { md5Pwd } from '@Utils/myJiaMi';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERR_MSG = 'ERR_MSG';
const initState = {
  // 跳转到哪里
  redirectTo: '',
  isAuth: false,
  msg: '',
  type: '',
  user: '',
  pwd: ''
};

export function userReducer(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, ...action.payload, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload) };
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload) };
    case ERR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}

function errorMsg(msg) {
  return { msg, type: ERR_MSG };
}

function registerSuccessMsg(data) {
  return { type: REGISTER_SUCCESS, payload: data };
}

function loginSuccessMsg(data) {
  return { type: LOGIN_SUCCESS, payload: data };
}

export function handleRegister({ type, user, pwd, repeatpwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名或密码不能为空！');
  }

  if (repeatpwd !== pwd) {
    return errorMsg('密码与确认密码必须相同！');
  }

  return (dispatch) => {
    // 发送请求
    register({ type, user, pwd: md5Pwd(pwd) })
      .then((res) => {
        if (res.code === '0') {
          dispatch(registerSuccessMsg({ type, user, pwd: md5Pwd(pwd) }));
        } else {
          errorMsg(res.msg);
        }
      });
  };
}

export function handleLogin({ type, user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名或密码不能为空！');
  }

  return (dispatch) => {
    // 发送请求
    login({ type, user, pwd: md5Pwd(pwd) })
      .then((res) => {
        if (res.code === '0') {
          dispatch(loginSuccessMsg(res.data));
        } else {
          errorMsg(res.msg);
        }
      });
  };
}
