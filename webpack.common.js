/*
    This Webpack config file is responsible for general configs regardless of environment.
*/


// Plugin used to generate build/index.html with hashed main.js file linked dynamically
const HTMLWebpackPlugin = require('html-webpack-plugin')

// **

module.exports = {
    entry: './src/index.js',
    plugins: [new HTMLWebpackPlugin({
        template: "./src/template.html" // HTML template that will be used to generate build/index.html
    })],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    },
                  },
                ],
            },
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
