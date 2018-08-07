import { myAxios } from '@Utils/myAxios';

// 获取用户信息
export const getUserInfo = () => myAxios({ url: 'user/info' });
// 注册
export const register = (data) => { return myAxios({ url: 'user/register', methods: 'post', data }); };
