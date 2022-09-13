import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  resolve: {
    alias: {
      '@': resolve('src'),  // 源码根目录
      '@img': resolve('src/assets/img'),  // 图片
      '@less': resolve('src/assets/less'),  // 预处理器
      '@libs': resolve('src/libs'),  // 本地库
      '@plugins': resolve('src/plugins'),  // 本地插件
      '@cp': resolve('src/components'),  // 公共组件
      '@vw': resolve('src/views'),  // 路由组件
    },
  },
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    rollupOptions: {
        input:
            resolve(__dirname, "index.html"),
            // resolve(__dirname, "src/rmx-monaco.ts"),

        output: {
            // entryFileNames: "[name].js",
            // Prevent vendor.js being created
            manualChunks: undefined,
            // chunkFileNames: "zzz-[name].js",
            // this got rid of the hash on style.css
            assetFileNames: "assets/[name].[ext]",
        },
    },
    // Prevent vendor.css being created
    cssCodeSplit: false,
    // prevent some warnings
    chunkSizeWarningLimit: 60000,
  },
  
})
