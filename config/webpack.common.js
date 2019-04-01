/*
    This Webpack config file is responsible for general configs regardless of environment.
*/

// **

module.exports = {
    entry: './src/index.js',
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
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }
        ],
    },
};
