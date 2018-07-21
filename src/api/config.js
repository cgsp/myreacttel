// 定义一些公用的常量
const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
};

// 定义原始jsonp所用的options(通常只用写一个callback即可), 也就是callback(不同的接口的callback是不一致的,前后端约定好即可)
const options = {
  param: 'jsonpCallback',
  prefix: 'jp'
};

// 定义数据成功的ERR_OK,一般大公司都喜欢用0
const ERR_OK = 0;

export { commonParams, options, ERR_OK };
