import { defineConfig } from "vite";

export default defineConfig({
  root: 'src',
  base: '/suzuki-hiroaki-static/',
  publicDir: 'public',
  build: {
    outDir: '../dist',
  },
});
