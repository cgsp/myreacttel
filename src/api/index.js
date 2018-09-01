import { myAxios } from '@Utils/myAxios';
import { defaultHeader } from './config';

// 获取用户信息
export const getUserInfo = () => myAxios({ url: 'user/info', headers: defaultHeader });

// 注册
export const register = (data) => { return myAxios({ url: 'user/register', method: 'post', data, headers: defaultHeader }); };

// 登录
export const login = (data) => { return myAxios({ url: 'user/login', method: 'post', data, headers: defaultHeader }); };

// 更新用户信息
export const update = (data) => { return myAxios({ url: 'user/update', method: 'post', data, headers: defaultHeader }); };

// 获取用户列表数据
export const userList = (type) => { return myAxios({ url: 'user/list', method: 'get', params: { type }, headers: defaultHeader }); };

// 测试
export const apiTestId = () => { return myAxios({ url: 'test/id', method: 'get', params: {}, headers: defaultHeader }); };

// 测试
export const apiTestInfo = (id) => { return myAxios({ url: 'test/info', method: 'post', params: {}, data: { id }, headers: defaultHeader }); };
