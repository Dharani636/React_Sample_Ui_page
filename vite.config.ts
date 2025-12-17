import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: "/dharani636/React_Sample_Ui_page/"
})
