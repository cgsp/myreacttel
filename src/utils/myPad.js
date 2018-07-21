// 补0操作：如果是1,补充为01
const myPad = (num, n = 2) => {
  let len = num.toString().length;
  while (len < n) {
    num = '0' + num;
    len++;
  }
  return num;
};

export { myPad };
