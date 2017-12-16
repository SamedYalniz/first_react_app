module.exports = {
	entry: 
	 ['react-hot-loader/patch',
	"./app/js/app.js"],
	output: {
		path: __dirname + '/public',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["react-hot-loader/webpack", "babel-loader?presets=react,presets[]=es2015"] ,
			}
		]

		
	}

}