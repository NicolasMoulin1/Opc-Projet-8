import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // Ouvre automatiquement le navigateur
    port: 5173,  // Le port sur lequel le serveur Vite sera accessible
  }
})




