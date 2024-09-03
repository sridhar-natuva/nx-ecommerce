const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
    output: {
        path: join(__dirname, '../../dist/apps/api'),
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new NxAppWebpackPlugin({
            main: './src/main.ts',
            tsConfig: './tsconfig.app.json',
            index: './src/index.html',
            styles: ['./src/styles.css'],
            outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
            optimization: process.env['NODE_ENV'] === 'production',
        }),
    ],
};