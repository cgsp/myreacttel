/*
 *
 * jqajax + promise方式，不支持ie9
 */

const myJqAjaxPromise = function (apiBaseUrl, URL, options) {
  apiBaseUrl = apiBaseUrl || '';
  return new Promise((resolve, reject) => {
    $.ajax({
      type: options.type || 'get',
      url: apiBaseUrl + URL,
      timeout: 30000,
      dataType: 'json',
      cache: false,
      data: options.data,
      contentType: options.contentType || 'application/json;charset=utf-8',
      headers: options.headers,
      // headers: options.headers === undefined ? '' : options.headers,
      beforeSend: function (XMLHttpRequest) {
        // 加载动画
      },
      success: function (result) {
        // debugger;
        resolve(result);
      },
      complete: function () {
        // 请求完成时的回调
      },
      error: function (error) {
        reject(error);
      }
    });
  });
};

export { myJqAjaxPromise };


// 网络上的封装示例
// (jquery)封装Promise对象和ajax过程
// var jqGetAjaxPromise = function (param) {
//   return new Promise(function (resolve, reject) {
//     $.ajax({
//       url: param.url,
//       type: 'get',
//       data: param.data || '',
//       success: function (data) {
//         resolve(data);
//       },
//       error: function (error) {
//         reject(error)
//       }
//     });
//   });
// };
// // 调用示例
// var p2 = jqGetAjaxPromise({
//   url: 'cross-domain1.txt'
// });
// p2.then(function (data) {
//   console.log(data);
//   return jqGetAjaxPromise({
//     url: 'cross-domain2.txt'
//   });
// }).then(function (data2) {
//   console.log(data2);
// }).catch(function (err) {
//   console.log(err);
// });



