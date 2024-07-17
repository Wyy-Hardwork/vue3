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
      '/npic': {
        target: 'https://img3.readpai.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/npic/, ""),
        headers: {
          Host: 'www.bilinovel.com', // 设置请求头中的 Host 字段
          Referer: 'https://www.bilinovel.com/',
          'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
          'authority':'img3.readpai.com'
        }
      },
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
