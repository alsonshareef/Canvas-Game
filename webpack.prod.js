const path = require('path');
const common = require('./webpack.common') // Importing webpack.common to run before running webpack.prod using merge.
const merge = require('webpack-merge')

// **

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'build')
    }
});
