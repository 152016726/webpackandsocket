
var path = require('path');

// 此配置文件在控制台上使用 webpack 的时候后面如果不加任何参数，则默认会查找 webpack.config.js的配置文件去执行
module.exports={
    // 1.0 配置打包时的入口文件
    entry:'./src/main.js',  //表示打包的时候自动查找当前目录下面的src下面的main.js作为入口文件

    // 2.0 配置打包时的生成文件
    output:{
        // path.join() 将多个路径拼接成一个路径，不管/分隔符有几个均可以
        path:path.join(__dirname,'/dist'),
        filename:'build.js'  
    },
    // 3.0 配置相关的loader
    module:{
        loaders:[
            {
                // 打包的时候碰到.css文件则被这个正则匹配
                test:/\.css$/,
                // 交给'style-loader','css-loader' 去进行打包
                // 编写的顺序一定是：先'style-loader' 然后再是'css-loader'
                // webpack的顺序，先使用css-loader再使用style-loader
                loader:['style-loader','css-loader']
            }
        ]
    }
}