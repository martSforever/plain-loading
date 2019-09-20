const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    publicPath: './',
    outputDir: resolve('docs'),
    devServer: {
        port: '8886',
    },
    pages: {
        index: {
            entry: 'example/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': resolve('src'),
                'example': resolve('example'),
                'plain-loading': resolve('src/index.js'),
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch-index')
    }
}