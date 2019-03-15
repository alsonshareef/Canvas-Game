const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: "none", // This makes main.js more readable, by eliminating some of the confusing looking methods.
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};