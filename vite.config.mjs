// import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "articulos/articulos.html"),
      },
    },
  },
  base: "/PapeleriaGatonio/",
});
