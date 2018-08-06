import { myAxios } from '@Utils/myAxios';

// 获取用户信息
export const getUserInfo = () => myAxios({ url: 'user/info' });
