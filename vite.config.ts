import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:4000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, "")
      // },
      '/novel': { // 匹配请求路径中以 /api 开头的请求
        target: 'https://www.bilinovel.com', // 指定代理目标服务器地址
        changeOrigin: true, // 开启跨域代理
        rewrite: (path) => path.replace(/^\/novel/, ""),
        secure: false,
        headers: {
          Host: 'www.bilinovel.com', // 设置请求头中的 Host 字段
          Referer: 'https://www.bilinovel.com'
        }
      }
    }
  }
})
