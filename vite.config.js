import { defineConfig } from "vite";

export default defineConfig({
  base: '/suzuki-hiroaki-static/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sandbox: 'sandbox.html',
      }
    }
  }
});
