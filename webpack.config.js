const path = require('path');

// Plugin used to generate build/index.html with hashed main.js file linked dynamically
const HTMLWebpackPlugin = require('html-webpack-plugin')

// **

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [new HTMLWebpackPlugin({
        template: "./src/template.html" // HTML template that will be used to generate build/index.html
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // 2. Injects styles into DOM through main.js.
                    "css-loader" // 1. Turns CSS into CommonJS.
                ], 
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ],
    },
};
