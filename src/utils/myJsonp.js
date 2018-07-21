// 引入库里面最原始的jsonp的方法
// 原始的jsonp(url, options, fn)
import originJSONP from 'jsonp';

// 导出封装好的jsonp, 同时返回一个promise对象
function myJsonp(url, params, options) {
  // 首先判断一下，原始的url有没有问号
  url += (url.indexOf('?') < 0 ? '?' : '&');
  url += param(params);

  // resolve代表成功，reject代表失败
  return new Promise((resolve, reject) => {
    originJSONP(url, options, (err, data) => {
      // originJSONP里面，!err代表的是成功
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

// 定义一个简单的函数，能将data的参数，拼接到url的参数上面，因为，jsonp都是get请求
function param(data) {
  let url = '';
  // 通常这个data都是一级的，所以只要遍历一层就行了
  for (var key in data) {
    let value = data[key] !== undefined ? data[key] : '';
    // 注意进行编码
    url += `&${key}=${encodeURIComponent(value)}`;
  };
  // 如果data里面有数据, 那么就返回，同时第一个& 就不要了;
  // 如果data里面没数据,就返回一个''
  return url ? url.substr(1) : '';
};

export { myJsonp };
