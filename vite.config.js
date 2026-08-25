import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/the-addict/', // ← Add this line
  plugins: [react()],
})