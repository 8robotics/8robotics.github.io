import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});