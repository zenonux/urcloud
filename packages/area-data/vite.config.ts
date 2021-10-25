import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "AreaData",
      fileName: (format) => `index.${format}.js`,
    },
  },
  plugins: [vue(),dts()],
});
