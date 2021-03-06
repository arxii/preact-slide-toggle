var webpack = require("webpack");
var path = require("path");
// const MinifyPlugin = require("babel-minify-webpack-plugin");
var cfg = {
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.coffee$/, use: "coffee-loader"},
			{ test: /\.glsl$/, use: "raw-loader" },
			{ test: /\.(xml|html|txt|md)$/, loader: "raw-loader" },
			{ test: /\.(less)$/, use: ['style-loader','css-loader','less-loader'] },
			{ test: /\.(css)$/, use: ['style-loader','css-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|svg)$/,loader: 'url-loader?limit=65000' }
		]
	},
	entry: {
		site: path.join(__dirname,'..','/source/site.coffee')
	},
	resolve: {
		// "modules": [__dirname+"/node_modules"],
	},
	output: {
		path: path.join(__dirname,'..','/dist/site/'),
		publicPath: '/dist/site/',
		filename: "[name].js"
	},
	devServer: {
		port: 3088
	}
}
module.exports = cfg;