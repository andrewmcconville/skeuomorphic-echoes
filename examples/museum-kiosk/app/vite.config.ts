import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/skeuomorphic-echoes/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared'),
      '@research': resolve(__dirname, 'src/research'),
      '@lo-fi-wireframe': resolve(__dirname, 'src/lo-fi-wireframe'),
      '@hi-fi-prototype': resolve(__dirname, 'src/hi-fi-prototype'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        research: resolve(__dirname, 'research.html'),
        lofi: resolve(__dirname, 'lofi.html'),
        prototype: resolve(__dirname, 'prototype.html'),
      },
    },
  },
})
