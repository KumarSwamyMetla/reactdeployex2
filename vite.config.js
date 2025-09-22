import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/reactdeployex2/', // Repo name matches your GitHub repo name!
    plugins: [react()],
})