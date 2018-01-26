const path = require('path');
const devServer = require('webpack-dev-server');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
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
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
}