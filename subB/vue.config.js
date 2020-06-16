const name = 'subA'
module.exports = {
    // ...
    publicPath: './',
    devServer: {
        hot: true,
        port: 9090,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        overlay: {
            warnings: false,
            errors: true,
        },
        disableHostCheck: true
    },
      // 自定义webpack配置
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    }
    // ...
};
