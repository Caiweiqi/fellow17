const path = require('path');
const devServer = require('webpack-dev-server');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
var  CopyWebpackPlugin = require('copy-webpack-plugin');
/* const entry = require('./webpack_config/entry_webpack') */
module.exports = {
    entry:
        {index:'./src/index.js',
          jquery:'jquery',
          vue:'vue'
        },
    
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
               // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{imporLoaders:1}
                    },'postcss-loader']
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
              //  use:[
               //     {
                 //       loader:'style-loader'
               //     },
                //    {
                //        loader:'css-loader'
                //    },
                //    {
                //        loader:'sass-loader'
                 //   }
               // ]
               use:ExtractTextPlugin.extract({
                     use:[{
                         loader:'css-loader'
                     },{
                         loader:'sass-loader'
                     }],
                     fallback:'style-loader'
                 })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'es2015','react','env'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
        
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        //new UglifyJsPlugin(),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('今晚打老虎'),
       // new webpack.ProvidePlugin({
         //   $:'jquery'
       // }),
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue','index'],
            filename:'js/[name].js',
           // name:'jquery',
            //filename:'js/jquery.js',
            minChunks:2
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src',
            to:'./public'
        }])
        
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
}