/*
 * @Author: John.Guan
 * @Date: 2018-07-24 15:01:37
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-07-24 15:08:00
 */
import axios from 'axios';
import qs from 'qs';
import { myLocalStorageGet } from '@utils/myStorage';
import { BASEURL } from '@common/js/config';
const DEV = process.env.NODE_ENV !== 'production';
let baseURL;
DEV ? baseURL = BASEURL.dev : BASEURL.pro;

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

  const url = baseURL + options.url || '';

  let data;
  if (method === 'get') {
    data = null;
  } else {
    data = qs.stringify(options.data) || qs.stringify({});
  }

  const params = { ...{ _: time }, ...options.params };

  const headers = options.headers || {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': myLocalStorageGet('token', '')
  };

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      params: params,
      headers: headers
    }).then((res) => {
      resolve(res.data);
    })
      .catch(err => reject(err));
  });
}

export { myAxios };

