import path from 'path';
import { defineConfig } from 'vite'; // This line is causing the error.

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
