// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     // point Vite at your PostCSS config
//     postcss: './postcss.config.cjs',
//   },
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': 'https://memotag-task-backend.onrender.com',
//     },
//   },
// })


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Proxy `/api` to local backend only in development.
 * In production, the proxy is disabled so your frontend calls your real backend URL.
 */
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: mode === 'development'
    ? {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      }
    : undefined,
}))
