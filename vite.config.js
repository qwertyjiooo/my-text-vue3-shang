import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

const pathSrc = resolve(__dirname, "./src");

export default defineConfig({
  resolve: {
    // resolve.alias 用来为文件路径设置别名，目的是简化模块的导入路径。这里将 @ 指向 src
    alias: {
      "@": pathSrc,
    },
  },
  /*
    vue()：启用了 Vue 3 支持，允许 Vite 处理 .vue 文件。
    AutoImport：该插件自动导入常用 API 或库函数。
    设置 ElementPlusResolver()，意味着它会自动导入
    Element Plus 的相关 API（如 ElButton, ElInput 等），
    减少每个文件中手动导入组件的麻烦。
    Components：该插件会自动导入 Vue 组件，
    配置 ElementPlusResolver() 使得在项目中直接使用
    Element Plus 的组件（例如 ElButton）而不需要显式导入它们。
  */
  plugins: [
    vue(),
    // 自动导入 Element Plus 组件和相关 API，作用是减少手动导入的代码量
    AutoImport({
      // imports 的作用是配置需要自动导入的 API，这里配置了 Vue、Vue Router、Pinia 和 @vueuse/core
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      resolvers: [ElementPlusResolver()],
    }),
    // 按需导入 Element Plus 组件
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components", "src/**/components"],
      // 在 vue 模板中启用自动导入
      vueTemplate: true,
    }),
  ],
  // 配置 CSS 预处理器，作用是解决样式冲突问题
  css: {
    // preprocessorOptions 配置用于为 scss 文件提供额外的样式数据，
    // 这里通过 additionalData 引入了 Element Plus 的默认样式。
    // 这样可以在全局范围内使用 Element Plus 样式，而不必在每个组件中都引入。
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        // 引入全局样式,这里引入了 element-plus 的样式
        additionalData: `@import 'element-plus/packages/theme-chalk/src/base.scss';`, // 全局样式
      },
    },
  },
  // 作用是解决开发环境跨域问题
  // 配置开发服务器,设置代理,解决跨域问题,这里设置的是代理到本地 8080 端口
  server: {
    proxy: {
      // // /api 开头的请求代理到 http://localhost:8080
      // "/api": {
      //   target: "http://localhost:8080",
      //   // 是否改变请求源,这里设置为 true
      //   changeOrigin: true,
      //   // 重写请求路径,将 /api 替换为空字符串
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
  },
  // optimizeDeps 用于配置 Vite 在构建时需要优化的依赖库，确保这些库会被提前处理，从而提高开发构建和启动的速度。
  optimizeDeps: {
    include: ["vue", "vue-router", "pinia", "axios", "@vueuse/core"],
  },
});
