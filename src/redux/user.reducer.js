import { register } from '@Api';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERR_MSG = 'ERR_MSG';
const initState = {
  isAuth: false,
  msg: '',
  type: '',
  user: '',
  pwd: ''
};

export function userReducer(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, ...action.data, isAuth: true, msg: '' };
    case ERR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}

function errorMsg(msg) {
  return { msg, type: ERR_MSG };
}

function successMsg(data) {
  return { type: REGISTER_SUCCESS, data };
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
    register({ type, user, pwd, repeatpwd })
      .then((res) => {
        if (res.code === '0') {
          dispatch(successMsg({ type, user, pwd, repeatpwd }));
        } else {
          errorMsg(res.msg);
        }
      });
  };
}
