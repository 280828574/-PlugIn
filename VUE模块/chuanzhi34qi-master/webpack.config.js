'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//给html加入引入资源
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
//提取css
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//获取版本号
const version = require('./package.json').version;
//压缩js
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dist = path.join(__dirname,'dist');

module.exports = {
    // 入口
    entry:{
        'main':'./src/main.js'
    },
    output:{
        //产出路径
        path:dist,
        // filename:'build.js?v='+ version, //产出的js文件名
        // filename:'[name]_[chunkhash:6].js', //加入了hash
        // 以上项目再下方做了判断
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                // loader:'style-loader!css-loader'
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader?minimize=true"
                })
            },
            //处理less
            {
                test:/\.less$/,
                // loader:'style-loader!css-loader!less-loader'
                 use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader?minimize=true!less-loader"
                })
            },
            //处理图片
            {
                test:/\.(jpg|png|svg|ttf|jpeg|gif)$/,
                loader:'url-loader',
                options:{
                    limit:4096,
                    // name:'assets/[name].[ext]?v='+ version
                    name:'assets/[name][hash:6].[ext]',
                }
            },
            //处理js
            {
                test:/\.js$/,
                exclude:/node_modules/,//判处包含node_modules的路径
                loader:'babel-loader',
                // options:{
                //     presets:['env'],//es6/7/8
                //     plugins:['transform-runtime'], //处理函数
                // }

            },
            //处理vue
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins:[
       
        new webpack.DllReferencePlugin({
            //告知manifest.json里面./是哪个路径
            context:__dirname,
            // 参照那个.json来关联对应的关系，获取其对象
            manifest:require('./manifest.json')
        }),
        // //压缩js
        // new UglifyJSPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true, //去除换行和空格
                minifyCSS:true,//压缩html内的css
                minifyJS:true,//压缩html内的js
                removeComments:true, //删除html注释
            }
        }),
        //在html之后加入引入资源
        new AddAssetHtmlPlugin([{
                    //加载的相对换绝对
                    filepath: require.resolve(`./build/${require('./manifest.json').name}.js`),
                    //产出目录,基本目录是output.path
                    outputPath:'js',
                    publicPath:'js',   //代表生成的script的请求路径前缀url
                    includeSourcemap:false, //如果true，则查找文件vonders.js.map
                },
        ]),
         // 排除掉已经生成dllplugin的文件
        new ExtractTextPlugin("assets/css/style_[contenthash:6].css"),


    ]
}

// node webpack-dev-server --hot --open --inline --port 9999
if(process.argv.length === 7){
    module.exports.output.filename = 'js/[name].js';
}else{
    //生产环境，需要压缩混淆代码
      module.exports.output.filename = 'js/[name]_[chunkhash:6].js';
      module.exports.plugins.push(new UglifyJSPlugin());
      //关闭提示
      const notify = new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        });
      module.exports.plugins.push(notify);
}

