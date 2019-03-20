/*
    This Webpack config file is responsible for configs only when in the production environment.
*/

// Provides utilities for working with file and directory paths.
const path = require('path');

// Allows multiple config files to be run by passing other config files as params in merge method.
const merge = require('webpack-merge')

// Importing webpack.common to run before running webpack.prod using merge.
const common = require('./webpack.common')

// 'build' dir will only hold relevant files and removes any previously compiled and unused files to keep the dir clean.
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Plugin used to generate index.html with dependencies linked dynamically.
const HTMLWebpackPlugin = require('html-webpack-plugin')

// Improves performance by extracting CSS into seperate files and linking in <head>, instead of storing in main.js and loading unstyled HTML first.
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 

// Optimizes/Minifies CSS assets.
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Optimizes/Minifies JS files. (Minimizer property is set to this by default, and is only added manually if overrided by another minimizer; in this case optimize-css-assets.)
const TerserWebpackPlugin = require('terser-webpack-plugin')

// **

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 2. Extracts CSS and stores into seperate files.
                    "css-loader" // 1. Turns CSS into CommonJS.
                ], 
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin(),
            new HTMLWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin()
    ]
});
