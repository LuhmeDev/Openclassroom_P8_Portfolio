// Configuration de Vite, l'outil qui lance le serveur de développement et prépare la version en ligne.
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Le plugin React permet à Vite de comprendre le JSX
  plugins: [react()],

  // Le site est publié sur GitHub Pages à l'adresse https://luhmedev.github.io/Openclassroom_P8_Portfolio/ :
  // il n'est pas à la racine du domaine mais dans un sous-dossier qui porte le nom du dépôt.
  // Vite ajoute ce préfixe tout seul aux fichiers qu'il gère (scripts, CSS, polices, favicon).
  // Dans le code React, les chemins vers public/ et les liens internes l'ajoutent avec import.meta.env.BASE_URL.
  base: '/Openclassroom_P8_Portfolio/',

  build: {
    rollupOptions: {
      // Le site a trois pages HTML :
      // - index.html : le portfolio
      // - mentions-legales/index.html : les mentions légales, à l'adresse /mentions-legales/
      // - 404.html : la page d'erreur, que GitHub Pages affiche pour toute adresse inexistante
      // Des pages HTML simples évitent d'installer un routeur pour deux pages secondaires.
      input: {
        portfolio: resolve(import.meta.dirname, 'index.html'),
        mentionsLegales: resolve(import.meta.dirname, 'mentions-legales/index.html'),
        pageIntrouvable: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
