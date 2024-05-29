import { mergeConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

const proxyConfig = {
  [loadEnv('', process.cwd()).VITE_BASE_API]: {
    target: loadEnv('', process.cwd()).VITE_SERVER_HOST,
    changeOrigin: true,
    logLevel: 'debug',
    rewrite: (path) =>
      path.replace(
        new RegExp(`${loadEnv('', process.cwd()).VITE_BASE_API}`),
        ''
      ),
  },
};
export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
      proxy: {
        ...proxyConfig,
      },
    },
    plugins: [
      eslint({
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
