import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        account: resolve(__dirname, 'src/account/index.html'),
        login: resolve(__dirname, 'src/account/login.html'),
        register: resolve(__dirname, 'src/account/register.html'),
      },
    },
  },
});
