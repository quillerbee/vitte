import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import { getAliases } from "vite-aliases";

const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === "production";
	return {
		resolve: {
			alias: aliases,
		},
		plugins: [svelte()],
		build: {
			minify: isProduction,
			brotliSize: false, // To Speed Up Build
			rollupOptions: {
				// Disabled Hashing as Netlify Does Hashing for us using Etag.
				output: {
					entryFileNames: `assets/[name].js`,
					chunkFileNames: `assets/[name].js`,
					assetFileNames: `assets/[name].[ext]`,
				},
			},
		},
	};
});
