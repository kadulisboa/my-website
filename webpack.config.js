const path = require('path');

module.exports = {
    // arquivo que sera ouvido as alterações
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /.\.(gif|png|jpe?g)$/i,
                exclude: /node_modules/,
                use: { loader: 'file-loader' }
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'svg-url-loader' },
                ],
            },
        ]
    }
}
