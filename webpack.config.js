var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', 'css'],
  },

  entry: [
    path.join(__dirname, './src/js/index.js')
  ],

  output: {
    path: path.join(__dirname, './dist/js'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, './src/js'),
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
};
