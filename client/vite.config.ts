// client/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // <-- 1. Importujte

export default defineConfig({
  plugins: [react(), tsconfigPaths()], // <-- 2. Přidejte ho sem
})