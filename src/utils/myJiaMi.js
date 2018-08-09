import CryptoJS from 'crypto-js';

// const myJiaMi = function () {
//   // // 时间戳，精确到毫秒
//   // console.log(Date.now());
//   // // 时间戳，精确到秒
//   // console.log(Date.parse(new Date()) / 1000);
//   // const timeStamp = 1530415871;
//   // const randomStr = 918975271;
//   // token = 'PHICOMMCKS2018';
//   // const str = '' + randomStr + timeStamp + token;
//   // const sHA1 = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
//   // const md5 = CryptoJS.MD5(sHA1).toString(CryptoJS.enc.Hex);
//   // console.log(md5.toUpperCase()); // BC70C92255DAEC199E3D0E36431A1363

//   const timeStamp = 1530415871;
//   // const timeStamp = Date.parse(new Date()) / 1000;
//   const randomStr = '918975271';
//   const token = 'PHICOMMCKS2018';

//   const str = '' + randomStr + timeStamp + token;
//   const sHA1 = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
//   const md5 = CryptoJS.MD5(sHA1).toString(CryptoJS.enc.Hex);
//   return md5.toUpperCase(); // BC70C92255DAEC199E3D0E36431A1363
// };

// 比较合格的md5加密
const md5Pwd = (pwd) => {
  const salt = 'imocc_is_good_3957x8yza6!@#IUHJh~~';
  return CryptoJS.MD5(CryptoJS.MD5(pwd + salt).toString(CryptoJS.enc.Hex)).toString(CryptoJS.enc.Hex);
};

export { md5Pwd };
