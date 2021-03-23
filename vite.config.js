import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    plugins: [svelte()],
    build: {
      minify: isProduction,
      rollupOptions: {
        // Disabled Hashing as Netlify Does Hashing for us using Etag.
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
        }
      }
    }
  };
});
