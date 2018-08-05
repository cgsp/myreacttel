import { myAxios } from '@Utils/myAxios';

const LOGIN = '登录';
const LOGIN_OUT = '退出';
const USER_DATA = '用户数据';

const initState = {
  auth: false,
  user: '',
  age: 0
};

// reducer
export function loginReducer(state = initState, action) {
  console.log(state, action);
  switch (action.type) {
    case LOGIN:
      return { ...state, auth: true };
    case LOGIN_OUT:
      return { ...state, auth: false };
    case USER_DATA:
      return { ...state, ...action.payLoad };
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

export function userData(data) {
  return { type: USER_DATA, payLoad: data };
}

// 创建异步的action
// export function addGunAsync() {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(addGun());
//     }, 2000);
//   };
// }

export function getUserData() {
  // dispatch用来通知数据修改
  return (dispatch) => {
    myAxios({
      url: 'data'
    })
      .then((res) => {
        dispatch(userData(res[1]));
      });
  };
}
