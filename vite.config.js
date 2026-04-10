import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuration Vite pour Webotix
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
