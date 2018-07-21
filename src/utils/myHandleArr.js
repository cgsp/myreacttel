// 返回0与100之间，的任意的整数，同时可以包括0或者100
const myGetRandomInt = (min, max) => {
  const temp = Math.random() * (max - min + 1) + min;
  return Math.floor(temp);
};

// 洗牌函数--即使是对象型的数组，也能改变
const myShuffle = (arr) => {
  // 为了避免对原来的数组产生副作用
  let _arr = arr.slice();

  for (let i = 0; i < _arr.length; i++) {
    let j = myGetRandomInt(0, i);
    let temp = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = temp;
  }
  return _arr;
};

// 数组的插入，存储的时候，每新插入一条，把之前数组的最后一条删除，插入的新的数据，放在数组的最前面
const insertArray = (arr, val, compare, maxLen) => {
  const index = arr.findIndex(compare);
  // 如果原来的数组中有这个数据，并且还是第1条
  if (index === 0) {
    return;
  }

  // 如果原来的数组中有这个数据，但不是第1条，那么需要删除，再重新插入，放在第1条
  if (index > 0) {
    arr.splice(index, 1);
  }
  arr.unshift(val);

  // 每次插入，都要判断，数组的长度，是否超出了限制，如果有限制，且，超出了限制，那么把最后一条删除
  if (maxLen && arr.length > maxLen) {
    arr.pop();
  }
};

// insertArray的使用方法
// insertArray(arr, val, (item) => {
//   return item === 'aaaa';
// }, 15)

export { myGetRandomInt, myShuffle, insertArray };
