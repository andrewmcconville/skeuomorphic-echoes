import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared'),
      '@research': resolve(__dirname, 'src/research'),
      '@prototype': resolve(__dirname, 'src/prototype'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        research: resolve(__dirname, 'research.html'),
        prototype: resolve(__dirname, 'prototype.html'),
      },
    },
  },
})
