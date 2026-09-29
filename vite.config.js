import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base: works on GitHub Pages project sites
  // (username.github.io/repo/), user sites, Vercel and custom domains.
  base: './',
  plugins: [react()],
})
