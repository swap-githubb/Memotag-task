import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    // point Vite at your PostCSS config
    postcss: './postcss.config.cjs',
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'https://memotag-task-backend.onrender.com',
    },
  },
})
