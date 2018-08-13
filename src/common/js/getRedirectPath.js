export function getRedirectPath({ type, avatar }) {
  // 根据用户的信息，获取需要跳转的地址
  let url = (type === 'boss') ? '/app/boss' : '/app/genius';
  // 如果用户信息不完善，就去完善用户信息
  if (!avatar) {
    url = `/userInfo/${type}`;
  }

  return url;
}
