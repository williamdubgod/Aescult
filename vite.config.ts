import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Aescult/', // Certifique-se de que está assim
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});