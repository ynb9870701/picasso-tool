import dayjs from 'dayjs';

// 随机数生成器
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 日期格式化函数
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}
// 数组去重函数
export function uniqueArray(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}
// URL 参数解析函数
export function parseURLParams(url) {
  const params = {};
  new URL(url).searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
// 字符串逆转函数
export function reverseString(str) {
  return str.split('').reverse().join('');
}
// 日期检测 检测当前日期是否在 date 之后
export function isAfter(currentTime, compareTime) {
  // 使用 Day.js 解析时间
  const current = dayjs(currentTime);
  const compare = dayjs(compareTime);
  
  // 判断当前时间是否在比较时间之后
  return current.isAfter(compare);
}
