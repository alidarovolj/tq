import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            // Make sure to add any additional plugins needed for your project
        },
    },
    assetsInclude: ['**/*.mov'],
});
