import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/myPortofolio/',

  // Tambahkan ini:
  publicDir: resolve(__dirname, 'dist_assets'),
})
