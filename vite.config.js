import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      }
    })
  ],
  base: '/blogs',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        about: resolve(__dirname, 'about.html'),
        theme1css: resolve(__dirname, 'main.css'),
        theme2css: resolve(__dirname, 'main2.css'),
      }
    }
  }
})
