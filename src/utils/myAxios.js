/*
 * @Author: John.Guan
 * @Date: 2018-07-24 15:01:37
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-08-03 14:10:09
 */
import axios from 'axios';
import qs from 'qs';
import { myLocalStorageGet } from '@Utils/myStorage';
import { BASEURL } from '@Common/js/config';

const DEV = process.env.NODE_ENV !== 'production';
console.log(process.env.NODE_ENV);
let baseURL;
if (DEV) {
  baseURL = BASEURL.dev;
} else {
  baseURL = BASEURL.pro;
}

axios.defaults.baseURL = baseURL;

/*
 * 1、token设置--下面这样设置，好像第一次请求，没办法带上token；
 * 解决办法是：在每个axios上面都写一遍，就可以带上，所以在这个地方写，没什么用
 * axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_gsp';
 *
 * 2、跨域的时候，允许服务端设置cookies
 * axios.defaults.withCredentials = true;
 *
 * 3、下面这样写，没什么鸟用，还是得用qs这个库
 * axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 */


/*
* 封装axios
*/
function myAxios(options) {
  const method = options.method || 'get';

  const url = options.url || '';

  const time = Date.now();
  const params = { ...{ _: time }, ...options.params };

  const headers = options.headers || {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    // 'Content-Type': 'application/json;charset=UTF-8',
    Authorization: myLocalStorageGet('token', ''),
  };

  let data;
  if (method === 'get') {
    data = null;
  } else if (method === 'post' && headers['Content-Type'] === 'application/json;charset=UTF-8') {
    data = options.data || {};
  } else if (method === 'post' && headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
    data = qs.stringify(options.data) || qs.stringify({});
  }


  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data,
      params,
      headers,
    }).then((res) => {
      resolve(res.data);
    })
      .catch(err => reject(err));
  });
}

export { myAxios };


/*
 * header的几种设置
 */
// 1、如果header只想带Content-Type，不想带token或者Authorization的话，这么设置
// header={
//   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
// }
// 或者
// header={
//   'Content-Type': 'application/json;charset=UTF-8'
// }



/*
 * 使用示范
 */
// myAxios({
//   url: 'ddw-exchange-show/item-data',
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//     // // 'Content-Type': 'application/json;charset=UTF-8',
//     // Authorization: myLocalStorageGet('token', ''),
//     Token: '1wvd1QFHvSySrfuOvCfTkTmMnCJCsh7QwfBCugZQvC7LnwzTwDeT3t4CosZczCBottjivPePysIVuwritd4AuD4i1tBcodBrmuBymwmTqPB9tA4Png3Zpq==',
//   },
//   data: {
//     sex: 'man',
//     chang: 'guan',
//   },
//   params: {
//     dimension: 'month',
//     name: '总计',
//     month: '2018-07',
//   },
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {

//   })

