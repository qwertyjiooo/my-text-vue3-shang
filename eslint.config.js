//eslint.config.js
import eslint from '@eslint/js'

export default [
    {
        ignores: [
            'node_modules',
            'dist',
            'public',
        ]
    },
    {
        env: {
            browser: true,
            node: true,
            es2021: true,
        }
    },

    eslint.configs.recommended,

    /**
   * javascript 规则
   */
    {
        rules: {
            'no-console': 'error',
        }
    },
]