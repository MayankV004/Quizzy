import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.jsonserve.com',  // API endpoint
        changeOrigin: true,  // This helps with CORS issues
        rewrite: (path) => path.replace(/^\/api/, '')  // Optionally rewrite the path
      }
    }
  }
})
