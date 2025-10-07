import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
         entry: path.resolve(__dirname, 'lib/entry.js'),
            name: 'ViteLib',
            fileName: 'vitelib',
            formats: ['es', 'umd', 'iife','cjs'] // 4 bundle files will be generated. umd supports braod range of clients including commonjs, AMD and browser globals. iife is for browsers only
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['jQuery'],
            output: {
                // Provide global variables to use in the UMD build for externalized deps
                globals: {
                    jQuery: '$'
                }
            }
        }
    }
})