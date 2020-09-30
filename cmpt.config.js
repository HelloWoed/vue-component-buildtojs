const path = require('path');
const fs = require('fs');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const renderView = require('./src/example/renderView');

function resolve(dir) {//- 获取绝对路径
    return path.join(__dirname, '..', dir)
}
const allCmpts = fs.readdirSync(path.join(__dirname, './src/components/'));
let entryObj = {};
let renderViewPath = [];
/**
 * 获取components目录下的所有组件文件夹
 */
allCmpts.forEach(cmpt => {
  const stat = fs.lstatSync(path.join(__dirname, `./src/components/${cmpt}/`));
  if(stat.isDirectory()){
    entryObj[`${cmpt}`] = `./src/components/${cmpt}/index.vue`;
    renderViewPath.push({
      name: cmpt,
      path: `zx.${cmpt}.umd.min.js`
    });
  }
})
renderView(renderViewPath);
module.exports = {
    entry: entryObj,
    mode: 'production',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      libraryExport: 'default', // 对外暴露default属性，就可以直接调用default里的属性
      library: 'zx-cmpt', // // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
      libraryTarget: 'umd', // 定义打包方式
      umdNamedDefine: true,
      filename: 'zx.[name].umd.min.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
      }
    },
    module: {
      rules: [
         {
            test: /\.vue$/,
            loader: 'vue-loader'
         },
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },
         {
             test: /\.css|\.scss$/,
             loader:['style-loader','css-loader','sass-loader']
          }
      ] 
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
}
