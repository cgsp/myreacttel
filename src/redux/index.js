// 创建一个reducer,根据state和action生成新的state
const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10;
  }
};

// 创建action creator
export function addGun() {
  return { type: ADD_GUN };
}

export function removeGun() {
  return { type: REMOVE_GUN };
}

// 创建异步的action
export function addGunAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addGun());
    }, 2000);
  };
}
