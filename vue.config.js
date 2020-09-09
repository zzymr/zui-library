let path = require('path');
// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/zzui/'
    : '/',
    // baseUrl: process.env.NODE_ENV === 'production' ? '/zzui/' : '/',
    outputDir: 'dist',
    // 修改 src 目录 为 examples 目录
    pages: {
      index: {
          entry: 'examples/main.js', // 入口
          template: 'public/index.html', // 模板
          filename: 'index.html' // 输出文件
      }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
      // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
      config.module
          .rule('js')
          .include.add(/packages/).end()
          .include.add(/examples/).end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              // 修改它的选项...
              return options
          })
      //markdown
      config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}