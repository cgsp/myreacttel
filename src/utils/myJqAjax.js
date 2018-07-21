const myJqAjax = function (apiBaseUrl, URL, options) {
  var ajaxConf = {
    type: options.type || 'get',
    url: apiBaseUrl + URL,
    timeout: 30000,
    dataType: 'json',
    cache: false,
    data: options.data,
    contentType: options.contentType || 'application/json;charset=utf-8',
    headers: options.headers === undefined ? '' : options.headers,
    beforeSend: function (XMLHttpRequest) {
      //显示加载动画
    },
    success: function (result) {//数据请求成功时回调
      options.success && options.success(result);
    },
    complete: function () {//请求完成时的回调
      //隐藏加载动画
      options.complete && options.complete();
    },
    error: function (err) {
      //请求出错处理
      options.error && options.error();
    }
  };
  // console.log(ajaxConf);
  $.ajax(ajaxConf);
};

// 使用方法
// myJqAjax('/api', 'PersonalCenter/v1/Awardcode/exchangeAwardcode', {
//   type: 'POST',
//   data: {
//     awardCode: codeText
//   },
//   contentType: 'application/x-www-form-urlencoded',
//   headers: { Authorization: window.localStorage.getItem('access_token') },
//   success: function success(data) {
//     console.log(data);
//     if (data && data.error == "0000" && data.data) {
//       // 处理数据
//     } else {
//       alert(data.error, data.msg);
//     }
//     // 关闭loading
//   },
//   error: function error() {
//     alert('网络错误,请检查网络并重试!');
//     // 关闭loading
//   },
//   complete: function complete() {
//     // 关闭loading
//   }
// });
