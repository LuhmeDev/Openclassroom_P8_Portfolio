// Configuration de Vite, l'outil qui lance le serveur de développement et prépare la version en ligne.
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Le plugin React permet à Vite de comprendre le JSX
  plugins: [react()],

  build: {
    rollupOptions: {
      // Le site a deux pages HTML :
      // - index.html : le portfolio
      // - mentions-legales/index.html : les mentions légales, à l'adresse /mentions-legales/
      // Deux pages HTML simples évitent d'installer un routeur pour une seule page secondaire.
      input: {
        portfolio: resolve(import.meta.dirname, 'index.html'),
        mentionsLegales: resolve(import.meta.dirname, 'mentions-legales/index.html'),
      },
    },
  },
})
