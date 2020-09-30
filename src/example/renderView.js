const path = require('path');
const fs = require('fs');
const template = require('art-template');
const regestFilter = require('./viewTpl/filter')
regestFilter(template);// 注册过滤器

const reenderCmptjs = (viewPath) => {
    let importDatas = '';
    let exportDatas = '';
    let exportDatasArr = [];
    viewPath.forEach(item => {
        importDatas += `import ${item.name} from '../../dist/${item.path}';\n`;
        exportDatas += ` ${item.name},`;
        exportDatasArr.push(item.name);
    });
    exportDatas = `{${exportDatas.slice(0,-1)}}`
    const viewCmptJsStr = template(
        path.join(__dirname,'./viewTpl/listJs.art'),
        { importDatas, exportDatas}
    );
    fs.writeFileSync(path.join(__dirname,'./cpptDatas.js'),viewCmptJsStr,{encoding: 'utf8'});
    reenderCmptVue(exportDatasArr)
}
const reenderCmptVue = (datas) => {
    const viewCmptVueStr = template(
        path.join(__dirname,'./viewTpl/listVue.art'),
        {datas}
    );
    fs.writeFileSync(path.join(__dirname,'./index.vue'),viewCmptVueStr,{encoding: 'utf8'});
}
const reenderView = (viewPath) => {
    reenderCmptjs(viewPath);
}
module.exports = reenderView;