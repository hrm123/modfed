import path from 'path'
import {defineConfig} from 'vite'

// const vue = require('@vitejs/plugin-vue')
// const vueJsx = require('@vitejs/plugin-vue-jsx')

export default defineConfig({
    // plugins: [vue(), vueJsx()],
    // no need to set mode since vite dev server uses development mode and bundling uses production mode 
    //root: process.cwd()
    // base: './', // ./ = vite root
    // publicDir: 'public', // static files
    build: {
        // outDir: 'dist', // output directory - where bundle files are emitted to - default is dist
        assetsDir: 'myAssets', // directory for assets - defaults to 'assets'
        // cssCodeSplit: false, // bundle even lazy loaded chunks into a single CSS file
         // assetsInlineLimit:0 , // bans inline assets
        // sourcemap: false, // generate source maps,
    // esbuild accepts targets like 'esnext', 'es2020', or specific browserslist.
    // 'modules' is not a valid esbuild target and causes the CSS post build error.
    target: 'esnext', // modern browsers supporting ES modules and modern syntax
        minify:'esbuild', // much faster than other value which is 'terser'
        emptyOutDir: true, // clean the output directory before each build
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'), // default entry point name is index
            },
            output:{
                entryFileNames: `assets/[name].[hash].[format].ini.js`,
                chunkFileNames: `assets/[name].[hash].[format].chunk.js`,
                assetFileNames: `assets/[name].asset.[ext]`,
            }
        }

    }

})