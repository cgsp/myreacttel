import { myAxios } from '@Utils/myAxios';
import { defaultHeader } from './config';

// 获取用户信息
export const getUserInfo = () => myAxios({ url: 'user/info', headers: defaultHeader });
// 注册
export const register = (data) => { return myAxios({ url: 'user/register', method: 'post', data, headers: defaultHeader }); };
