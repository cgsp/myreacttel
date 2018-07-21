/*
 * @Author: John.Guan
 * @Date: 2018-06-27 15:26:02
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-07-02 21:19:39
 */
import { myJsonp } from '@utils/myJsonp';
import { myLocalStorageGet } from '@utils/myStorage';
import { myAxios } from '@utils/myAxios';
import qs from 'qs';
import { myJqAjaxPromise } from '@utils/myJqAjaxPromise';
// const dev = process.env.NODE_ENV !== 'production';

/*
 *
 * jsonp方式
 */
function getJsonp() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const params = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });

  return myJsonp(url, params, options);
};

/*
 *
 * 采用formDate方式
 */
function getDiscList() {
  const url = '/PersonalCenter/v1/Awardcode/exchangeAwardcode';
  const time = Date.now();
  console.log(time);
  const params = { _: time };

  let data = new FormData();

  data.append('awardCode', '111');
  data.append('arr', [1, 2]);
  data.append('obj', { name: 'gsp' });

  // const params = {};

  // return myAxios.get(url, {
  //   params: params
  // })
  // .then((res) => {
  //   return Promise.resolve(res.data);
  // });

  return new Promise((resolve, reject) => {
    myAxios({
      method: 'post',
      url: url,
      data: data,
      params: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      resolve(res.data);
    })
      .catch(err => reject(err));
  });
};

/*
 *
 * axios采用formdate传参的方式
 */
function exchange(money, rate, amount, kcode) {
  // const url = 'https://accountsym.phicomm.com/ddwexchange/v1/exchange';
  const url = 'https://accountsymtest.phicomm.com/ddwexchange/v1/exchange';
  const time = Date.now();
  const params = { _: time };
  // return myAxios.get(url, {
  //   params: params
  // })
  // .then((res) => {
  //   return Promise.resolve(res.data);
  // });

  return new Promise((resolve, reject) => {
    myAxios({
      method: 'post',
      url: url,
      data: qs.stringify({
        money: money,
        rate: rate,
        amount: amount,
        kcode: kcode
      }),
      params: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': myLocalStorageGet('token', '')
      }
    }).then((res) => {
      resolve(res.data);
    })
      .catch(err => reject(err));
  });
};
/*
 *
 * jqajax + promise方式，不支持ie9
 */
function testJqPromise() {
  const apiBaseUrl = 'http://localhost:9999';
  const url = '/api/paihang';

  return new Promise((resolve, reject) => {
    myJqAjaxPromise(apiBaseUrl, url, {
      type: 'post',
      data: {
        awardCode: 'codeText'
      },
      contentType: 'application/x-www-form-urlencoded'
      // headers: { Authorization: 'gsp-love-changhui' }
    })
      .then((res) => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
};


export { getJsonp, getDiscList, exchange, testJqPromise };
