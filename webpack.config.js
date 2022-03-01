const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: './assets/js/app.js',
	output: {
		path: path.resolve(__dirname, './public/'),
    filename: 'assets/js/bundle.js'
	},
  devtool: 'inline-source-map',
  module: {
		rules: [
      {
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
				test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
				use: [ {
          loader: 'file-loader',
          options: { 
            outputPath: './assets/images/',
            publicPath: './assets/images/',
            name: '[name].[ext]',
          }
        }]
			},
    ],
	},
	resolve: {
		extensions: ['', '.js', '.es6']
	},
  plugins: [
    new MiniCssExtractPlugin({
			filename: "./assets/css/app.min.css",
			chunkFilename: "./assets/css/app.min.css",
		}),
  ],
  devServer: {
    liveReload: true,
    port: 8080,
  },
  mode: 'development'
}