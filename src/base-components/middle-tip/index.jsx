import { Toast } from 'antd-mobile';

// 这样的只能叫做方法，不能叫做无状态组件

const MiddleTip = (msg) => {
  let timer;
  Toast.info(msg, 0, null, true);
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    Toast.hide();
  }, 1000);
};

export default MiddleTip;
