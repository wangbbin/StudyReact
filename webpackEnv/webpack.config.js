var path = require('path');

module.exports = {
  entry: './main',
  output: {
    path: path.resolve(__dirname/*, './webpackEnv'*/),
    filename: 'bundle.js',
  },
  module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets:['react', 'es2015']
            }
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
	}
};