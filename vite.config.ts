/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    include: ['**/*.test.ts'],
    globals: true,
    coverage: {
      exclude:[
        ...configDefaults.exclude, 
        '**/*.config.js',
        '**/conf.ts',
        'src/main.ts',
      ]
    }
  },
})
