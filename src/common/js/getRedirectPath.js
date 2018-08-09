export function getRedirectPath({ type, avatar }) {
  // 根据用户的信息，获取需要跳转的地址
  // user.type /boss /genius
  // user.avatar /bossinfo /geniusinfo
  let url = (type === 'boss') ? '/boss' : '/genius';
  if (!avatar) {
    url += 'info';
  }

  return url;
}
