const path = require("path");

// console.log(path.join(__dirname, "public"));
module.exports = {
	entry: "./src/app.js",
	// entry: "./src/playground/app.js",
	output: {
		path: path.join(__dirname, "public"), //absolute path
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
	devtool: "eval-cheap-module-source-map",
	mode: "development",
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
	},
};
