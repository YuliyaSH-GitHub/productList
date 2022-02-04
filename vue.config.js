module.exports = {
  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons/svg',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg', // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
         https://github.com/swisnl/vue-cli-plugin-svg-sprite
       */
      pluginOptions: {
        plainSprite: true,
      },
    },
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
              @import "@/assets/scss/abstracts/_functions.scss";
              @import "@/assets/scss/abstracts/_variables.scss";
              @import "@/assets/scss/abstracts/_mixins.scss";
            `,
      },
    },
  },

  chainWebpack: (config) => {
    config.module.rule('svg-sprite').use('svgo-loader').loader('svgo-loader');
  },
};
