// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/sumsumbank-website/'
      : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end()//包含icons目录
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
        .use('svgo-loader').loader('svgo-loader')
        .tap(option =>({...option,plugin:[{removeAttrs:{attrs:'fill'}}]}))
    config.plugin('svg-sprite')
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        .use(require('svg-sprite-loader/plugin') , [{plainSprite: true}])

    config.module.rule('svg').exclude.add(dir)
  }
}
