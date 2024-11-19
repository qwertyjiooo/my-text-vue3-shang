//eslint.config.js
import eslint from "@eslint/js";

export default [
  {
    ignores: ["node_modules", "dist", "public"],
  },

  /**
   * javascript 规则
   */
  {
    rules: {
      "no-console": "error",
    },
  },
  {
    languageOptions: {
      globals: {
        localStorage: "readonly", // 浏览器环境下的全局变量
        __dirname: "readonly", // Node.js 环境下的全局变量
      },
    },
  },
  eslint.configs.recommended,
];
