/**
 * Created by topcmm on 12/13/2016.
 * { test: /\.jsx?$/, loaders: ['babel-loader?presets[]=es2015,presets[]=react'] }
 * webpack 需要局部安装
 */
var path = require('path');
var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundleEntry.js'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }}
        ]
    },
    plugins: [devFlagPlugin]
}
