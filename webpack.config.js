/**
 * Created by topcmm on 12/13/2016.
 * { test: /\.jsx?$/, loaders: ['babel-loader?presets[]=es2015,presets[]=react'] }
 * webpack 需要局部安装
 */
var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }}
        ]
    }
}
