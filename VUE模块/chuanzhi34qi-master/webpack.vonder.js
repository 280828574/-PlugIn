// new webpack.DllPlugin(options)
'use strict'
const webpack = require('webpack');
const path = require('path');
// 启动指定配置文件  webpack --config ./webpack.vonder.js

//压缩js
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:{
        'vonders':['vue','vue-router','axios','vue-preview','moment']
    },
    module:{
        loaders:[
              //处理vue
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader',
            },
            {
                test:/\.(jpg|png|svg|ttf|jpeg|gif)$/,
                loader:'url-loader',
                options:{
                    limit:4096,
                    name:'assets/[name].[ext]'
                }
            },
        ]
    },
    output:{
        path:path.resolve('./build'),
        filename:'[name]_[chunkhash:6].js', //第三方包的js
        //把这些对象作为全局变量来声明
        library:'[name]_[chunkhash:6]', 
    },
    plugins:[
        new UglifyJSPlugin(),//压缩js
        new webpack.DllPlugin({
            name:'[name]_[chunkhash:6]',  //该名称记录到下面的文件中
            path:path.resolve('./manifest.json')
        })
    ]
}