import { myLocalStorageGet } from '@Utils/myStorage';

export const defaultHeader = {
  'Content-Type': 'application/json;charset=UTF-8'
};

// 1111
export const tokenHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
  Authorization: myLocalStorageGet('token', '')
};
