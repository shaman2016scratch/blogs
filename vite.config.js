import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import { metadata } from './src/lib/metadata.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      }
    })
  ],
  base: metadata.path2,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        about: resolve(__dirname, 'about.html'),
        credits: resolve(__dirname, 'credits.html'),
        login: resolve(__dirname, 'login.html'),
        join: resolve(__dirname, 'join.html'),
        news: resolve(__dirname, 'news.html')
      }
    }
  }
})
