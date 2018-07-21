import axios from 'axios';
// const DEV = process.env.NODE_ENV !== 'production';
const API = process.env.API_HOST;
// 配置代理
// 第一种写法
// 生产环境，需要服务端（https://cgsp608.com:3000）设置一下允许跨域
// DEV ? axios.defaults.baseURL = '/api' : axios.defaults.baseURL = 'https://cgsp608.com:3000';
// 第二种写法
axios.defaults.baseURL = API;

// token设置--这样设置，好像第一次请求，没办法带上token；
// 解决办法是：在每个axios上面都写一遍，就可以带上，所以在这个地方写，没什么用
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_gsp';
// 跨域的时候，允许服务端设置cookies
axios.defaults.withCredentials = true;
// 这样写，没什么鸟用，还是得用qs这个库
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const myAxios = axios;

export { myAxios };

