import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bod-gh-vite-react/', // Укажи свой подкаталог
  plugins: [react()],
})
