const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = (env) => merge(common(env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    compress: true,
    historyApiFallback: true,
    stats: 'minimal',
  },
});
