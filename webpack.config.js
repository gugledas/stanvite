/** @format */

const path = require("path")
const minCssExtractPlugin = require("mini-css-extract-plugin")

/* variable d'environnement */
const dev = process.env.NODE_ENV === "dev"

const config = {
	mode: dev ? "development" : "production",
	entry: {
		main: "./src/js/index.js"
	},
	output: {
		path: path.resolve("./dist"),
		filename: "js/[name].js",
		assetModuleFilename: "images/[name][ext]"
	},
	devtool: dev ? "source-map" : false,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(c|sa|sc)ss$/,
				exclude: /node_modules/,
				use: [
					minCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { importLoaders: 1 }
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [["autoprefixer", {}]]
							}
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
						}
					}
				]
			},
			{
				test: /\.(jpg|jpeg|gif|png)$/,
				type: "asset/resource"
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				exclude: /node_modules/,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]"
				}
			}
		]
	},
	devServer: {
		static: {
			directory: path.resolve("public")
		},
		compress: true,
		port: 9000
	},
	plugins: [
		new minCssExtractPlugin({
			filename: "css/[name].css"
		})
	]
}

module.exports = config
