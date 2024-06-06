import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/endless-canvas/',
    resolve: {
        alias: [
            { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
            { find: 'features', replacement: path.resolve(__dirname, 'src/features') },
            { find: 'widgets', replacement: path.resolve(__dirname, 'src/widgets') },
            { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
        ],
    },
});
