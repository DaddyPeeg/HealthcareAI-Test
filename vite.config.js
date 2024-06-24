import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@svgs':  path.resolve(__dirname, 'src/assets/svgs'),
      '@img':  path.resolve(__dirname, 'src/assets/img'),
      '@state': path.resolve(__dirname, 'src/state'),
      '@types': path.resolve(__dirname, 'src/types'),
    }
  }
})
