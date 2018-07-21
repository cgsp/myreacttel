import CryptoJS from 'crypto-js';

const myJiaMi = function () {
  // // 时间戳，精确到毫秒
  // console.log(Date.now());
  // // 时间戳，精确到秒
  // console.log(Date.parse(new Date()) / 1000);
  // const timeStamp = 1530415871;
  // const randomStr = 918975271;
  // token = 'PHICOMMCKS2018';
  // const str = '' + randomStr + timeStamp + token;
  // const sHA1 = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
  // const md5 = CryptoJS.MD5(sHA1).toString(CryptoJS.enc.Hex);
  // console.log(md5.toUpperCase()); // BC70C92255DAEC199E3D0E36431A1363

  const timeStamp = 1530415871;
  // const timeStamp = Date.parse(new Date()) / 1000;
  const randomStr = '918975271';
  const token = 'PHICOMMCKS2018';

  const str = '' + randomStr + timeStamp + token;
  const sHA1 = CryptoJS.SHA1(str).toString(CryptoJS.enc.Hex);
  const md5 = CryptoJS.MD5(sHA1).toString(CryptoJS.enc.Hex);
  return md5.toUpperCase(); // BC70C92255DAEC199E3D0E36431A1363
};

export { myJiaMi };
