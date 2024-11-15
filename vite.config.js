import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 确保指向 src 目录
    },
  },
  plugins: [
    vue(),
    // 自动导入 Element Plus 组件和相关 API
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    // 按需导入 Element Plus 组件
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~element-plus/packages/theme-chalk/src/base.scss";`, // 全局样式
      },
    },
  },
})