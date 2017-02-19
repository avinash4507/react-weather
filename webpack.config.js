var path = require('path');
module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
          Main: path.resolve(__dirname, "app/components/Main.jsx"), 
          Navigation: path.resolve(__dirname, "app/components/Navigation.jsx"), 
          Weather: path.resolve(__dirname, "app/components/Weather.jsx"),
          About: path.resolve(__dirname, "app/components/About.jsx")  
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};