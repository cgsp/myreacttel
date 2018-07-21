// 将数字80s，转变为01:20
import { myPad } from './myPad';

const myTransSecondsToTime = (interval) => {
  interval = interval | 0;
  const minute = interval / 60 | 0;
  const minuteTemp = myPad(minute, 2);
  const second = interval % 60;
  const secondTemp = myPad(second, 2);
  return `${minuteTemp}:${secondTemp}`;
};

export { myTransSecondsToTime };
