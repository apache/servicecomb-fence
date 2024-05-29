import { mergeConfig } from 'vite';
import baseConig from './vite.config.preview.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configArcoResolverPlugin from './plugin/arcoResolver';

export default mergeConfig(
  {
    mode: 'pages',
    mock: true,
    base: `${process.env.static_url_prefix}/tiny-pro-vue/${process.env.staticReleaseVersion}/vue-pro/pages`,
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      configArcoResolverPlugin(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  },
  baseConig
);
