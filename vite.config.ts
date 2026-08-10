import fs from "fs"
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// Sirve public/nuevo/index.html para /nuevo y /nuevo/ en el dev server:
// por defecto el SPA fallback de Vite devuelve el index.html de la app
// React para cualquier ruta sin archivo exacto, antes de que se resuelva
// el index.html de un subdirectorio estático dentro de public/.
function serveNuevoLanding(): Plugin {
  return {
    name: "serve-nuevo-landing",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/nuevo") {
          res.statusCode = 301;
          res.setHeader("Location", "/nuevo/");
          res.end();
          return;
        }
        if (req.url === "/nuevo/") {
          const html = fs.readFileSync(
            path.resolve(__dirname, "public/nuevo/index.html"),
            "utf-8"
          );
          res.setHeader("Content-Type", "text/html");
          res.end(html);
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react(), serveNuevoLanding()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
