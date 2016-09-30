module.exports = {
  entry: './src/app.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './bin',
    filename: 'app.bundle.js',
    publicPath: 'js'
  },
  debug: true,
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};
