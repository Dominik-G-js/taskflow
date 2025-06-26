import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // TOTO JE KLÍČOVÝ ŘÁDEK
  base: '/taskflow/',
  plugins: [react(), tsconfigPaths()],
})