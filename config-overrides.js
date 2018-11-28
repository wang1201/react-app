// 目录创建一个 config-overrides.js 用于修改默认配置
// 使用 babel-plugin-import, babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件（原理 
const { injectBabelPlugin } = require('react-app-rewired');

const PATH = require('path');
function resolve(url){
  return PATH.resolve(__dirname,'src/',url)
}

 module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)
    //  配置别名，利于以后配置路径时引用
    // webpack配置文件别名
    console.log(resolve('pages'));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@':resolve(''),
      '@as':resolve('assets'),
      '@common':resolve('components/common'),
      '@pages':resolve('pages'),
      '@libs':resolve('libs'),
      '@connect':resolve('connect'),
    }
    console.log(config.resolve.alias);
    return config
 };


