/*
    This Webpack config file is responsible for configs only when in the development environment.
*/

// Provides utilities for working with file and directory paths.
const path = require('path');

// Allows multiple config files to be run by passing other config files as params in merge method.
const merge = require('webpack-merge')

// Importing webpack.common to run before running webpack.dev using merge.
const common = require('./webpack.common')

// Plugin used to generate index.html with dependencies linked dynamically
const HTMLWebpackPlugin = require('html-webpack-plugin')

// **

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [new HTMLWebpackPlugin({ // No minifying property for development. Only for production.
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // 2. Injects styles into DOM through main.js.
                    "css-loader" // 1. Turns CSS into CommonJS.
                ], 
            }
        ]
    }
});
