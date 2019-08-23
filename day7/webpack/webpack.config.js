const path = require('path'); //原生模块，处理路径

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//导出模块
module.exports = {
    mode: 'development', //开发模式
    // mode: 'production',//上线模式

    //入口
    entry: './src/index.js',
    //出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //加载器
    module: {
        rules: [{

            // 匹配后缀为css的文件
            test: /\.css$/,
            // 用两个加载器style-loader和css-loader
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            // 除了node_modules和bower_components之外
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            // 匹配后缀为html的文件
            test: /\.html|htm$/,
            use: ['html-loader']
        }, {

            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    // publicPath: '..',

                }
            }
        }]
    }

}