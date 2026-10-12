import { defineConfig } from 'vite'

export default defineConfig({
   server: {
      // Las peticiones que empiecen con /api se redirigen a tu Express
      proxy: {
         '/api': 'http://localhost:3000'
      },
      // No recargar la página cuando cambian los JSON de datos
      watch: {
         ignored: ['**/src/data/**']
      }
   }
})