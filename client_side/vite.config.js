import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      // Add the directories you want to allow serving files from
      allow: ['C:/Users/KARAN VISHWAKARMA/Desktop/Portfolio/client_side/src', 'C:/Users/KARAN VISHWAKARMA/Desktop/Portfolio/client_side/node_modules', 'C:/Users/KARAN VISHWAKARMA/Desktop/Portfolio/node_modules'],
    },
  },
  plugins: [react()],
})
