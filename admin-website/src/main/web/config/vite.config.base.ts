import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { viteMockServe } from 'vite-plugin-mock';

const useMock = !! process.env.VITE_USE_MOCK

const config = {
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({ svgoConfig: {} }),
    viteMockServe({
      mockPath: '../src/mock', // mock文件地址
      localEnabled:useMock, // 开发打包开关
      prodEnabled:true, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: ` import { setupProdMockServer } from '../src/mockProdServer'; setupProdMockServer(); `,
      logger: true, // 是否在控制台显示请求日志
      supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
      watchFiles:true,
      injectFile: resolve('../src/main.ts'),
    })
  ],
  build: {
    outDir: resolve(__dirname, '../dist'),
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.esm-bundler.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'],
  },
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
}
export default defineConfig(config);
