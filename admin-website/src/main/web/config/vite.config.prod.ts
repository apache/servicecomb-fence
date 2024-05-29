import { mergeConfig } from 'vite';
import baseConig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';

export default mergeConfig(
  {
    mode: 'production',
    mock: true,
    plugins: [configCompressPlugin('gzip'), configVisualizerPlugin()],
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
