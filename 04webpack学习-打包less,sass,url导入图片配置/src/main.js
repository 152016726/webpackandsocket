
// 导入
var addFun = require('./calc.js');

// 导入 site.css文件
require('../statics/css/site.css');


// 导入 site.less
require('../statics/css/site.less');


// 导入 site.scss
require('../statics/css/site.scss');

// 获取到html中的所有元素

window.onload=function(){

  
    var btnok = document.getElementById('btnok');
    var res = document.getElementById('res');

    btnok.onclick = function(){

        var v1 = document.getElementById('v1').value;
        var v2 = document.getElementById('v2').value;
        console.log(v1,v2);

        res.value =  addFun(v1,v2);
    }
}