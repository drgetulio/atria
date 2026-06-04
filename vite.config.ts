import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// PWA offline-first: todo o conteúdo clínico essencial fica disponível sem rede (PRD RF-6.3).
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Alagille",
        short_name: "Alagille",
        description:
          "Apoio ao reconhecimento da Síndrome de Alagille e à indicação de IBATs. Ferramenta educacional para profissionais de saúde.",
        theme_color: "#0d5c63",
        background_color: "#ffffff",
        display: "standalone",
        lang: "pt-BR",
        start_url: "/",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,json,woff2}"],
      },
    }),
  ],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
