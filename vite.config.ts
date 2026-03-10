import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@apis": "/src/apis",
      "@routes": "/src/routes",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@types": "/src/types",
      "@mocks": "/src/mocks",
      "@assets": "/src/assets",
      "@store": "/src/store",
    },
  },
});
