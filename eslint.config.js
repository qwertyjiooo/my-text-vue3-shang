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