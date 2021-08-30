import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置跨域
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'https://tsgz-beta.istarshine.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
  }
})
