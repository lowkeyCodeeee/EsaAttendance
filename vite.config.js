import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'client', // your client folder as root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      react: path.resolve(__dirname, 'node_modules/react'),       // point to root react
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'), // point to root react-dom
    },
  },
});
