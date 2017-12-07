var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
    'devtool': 'inline-source-map',
    'entry': SRC_DIR + '/index.js',
    'output': {
        'path': BUILD_DIR,
        'filename': 'bundle.js',
        'publicPath': '/'
    },
    'module': {
        'loaders': [
            {
                'test': /\.(jpe?g|jpg|png|gif|svg)$/i,
                'loaders': [
                    'file-loader?name=assets/[name].[ext]',
                ]
            },
            {
                'test': /\.(woff)$/i,
                'loaders': [
                    'file-loader?name=fonts/[name].[ext]',
                ]
            },
            {
                'test': /\.js?/,
                'include': SRC_DIR,
                'loader': 'babel-loader',
                'query': {
                    'presets': ['react', 'es2015', 'stage-2']
                }
            },
            {
                'test': /\.(scss|css)$/,
                'loader': 'style-loader!css-loader!sass-loader'
            },
        ]
    },
    'devServer': {
        'historyApiFallback': true,
    }
};

module.exports = config;