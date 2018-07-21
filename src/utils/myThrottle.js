export function myThrottle(func, delay) {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// 没加节流的使用方法
// this.$watch('query', (newQuery, oldQuery) => {
//   console.log(newQuery);
//   this.$emit('queryChange', newQuery);
// });


// 加节流的使用方法
// this.$watch('query', myThrottle((newQuery, oldQuery) => {
//     this.$emit('queryChange', newQuery);
//   }, 300)
// );
