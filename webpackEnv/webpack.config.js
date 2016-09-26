var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './main'),
  output: {
    path: path.resolve(__dirname/*, './webpackEnv'*/),
    filename: 'bundle.js',
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },//定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
  module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query:{
                presets:['react']
            }
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
	}
};