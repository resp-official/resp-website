
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Kendi domainini bağlayacağın için root '/' kalmalı
  define: {
    // API Key'in hem VITE_ hem de standart process.env olarak okunmasını sağlar
    'process.env.API_KEY': JSON.stringify(process.env.VITE_GEMINI_API_KEY || process.env.API_KEY)
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Üretim versiyonunda logları temizler
        drop_debugger: true
      }
    }
  }
});
