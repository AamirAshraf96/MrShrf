import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    // Bind IPv4 as well as IPv6; otherwise `localhost` → 127.0.0.1 may not connect on Windows.
    host: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
