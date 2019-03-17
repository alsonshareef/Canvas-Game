const path = require('path');
const common = require('./webpack.common') // Importing webpack.common to run before running webpack.dev using merge.
const merge = require('webpack-merge')

// **

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    }
});
