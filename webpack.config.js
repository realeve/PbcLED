var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 要加两个插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageInfo = require('./package.json');

const outputPath = __dirname + '/gh-pages/';

const minifiyConfig = {
	removeComments: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	collapseBooleanAttributes: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	minifyJS: true,
	minifyCSS: true,
	minifyURLs: true
};

var webpackConfig = {
	entry: {
		province: "./province.js",
		index: "./index.js",
		dot: "./dot.js"
	},
	output: {
		path: outputPath, // 输出到版本号目录
		filename: PROD ? '[name]-[hash].min.js' : '[name]-[hash].js'
	},
	//watch:true,
	module: {
		loaders: [{
			test: /\.(png|jpg|jpeg|gif|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
			loader: 'file'
		}, {
			test: /\.css$/,
			//loader: "style!css?modules!postcss"
			loader: ExtractTextPlugin.extract('style', 'css')
		}, {
			test: /\.json$/,
			loader: "json-loader"
		}]
	},
	postcss: [
		require('autoprefixer')
	],
	plugins: [
		new ExtractTextPlugin(PROD ? '[name]-[hash].min.css' : '[name]-[hash].css'),
		new webpack.BannerPlugin('This file is created by realeve'),
		//将公共代码抽离出来合并为一个文件
		new webpack.optimize.OccurenceOrderPlugin()
	],	
	externals: {
		echarts: 'echarts'
	}	
};

for (var key in webpackConfig.entry) {
	const tplPath = './tpl/';
	var plugin = new HtmlWebpackPlugin({
		title: packageInfo.description,
		minify: minifiyConfig,
		template: tplPath+key + '.html',
		filename: key + '.html',
		chunks: [key],
		hash: false
	});
	webpackConfig.plugins.push(plugin);
}

module.exports = webpackConfig;