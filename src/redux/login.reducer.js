const LOGIN = '登录';
const LOGIN_OUT = '退出';

// reducer
export function loginReducer(state = { auth: false, userName: '李云龙' }, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: true };
    case LOGIN_OUT:
      return { ...state, auth: false };
    default:
      return state;
  }
}

// action creator
export function login() {
  return { type: LOGIN };
}

export function loginOut() {
  return { type: LOGIN_OUT };
}
