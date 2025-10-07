const path = require('path');
const html = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
// context parameter - looks for where webpack loks for files, esp. the entry file. Default is
// process.cwd(). Only accepts absolute path
context: path.resolve(__dirname,'src'), 
mode: 'production', //can be 'development' /  'production'
// devtool: 'inline-source-map', // 'source-map' for 'production' mode
optimization:{
    // providedExports: true, // tells webpack to figure out which exports are used for each module - true by default in production mode
    // usedExports: true, // tells webpack to figure out which exports are used for each module - true by default in production mode
    minimize: false, // set to true if bundle file is to be lean. default is production true and development false
    // webpack uses third party plugins to minimize - terser-webpack-plugin for JS and css-minimizer-webpack-plugin for CSS
    // minimizer: ['...'], // to extend existing minimizers (i.e. `terser-webpack-plugin` for JS and `css-minimizer-webpack-plugin` for CSS) uncomment this line
    splitChunks: {
      minSize: 2000, // default is 20000 (20kb) - minimum size for a chunk to be generated (this does NOT apply to the async chunks)
      // maxSize: 0, // default is 0 - maximum size for a chunk to be generated. if it exceeds this size then it will be split into smaller chunks of minSize
      // automaticNameDelimiter: '~', // default is ~ - the delimiter used for generated names of chunks
      // name: true, // default is true - whether to name the chunks
      chunks: 'all', // default is async - can be 'all' / 'async'  / 'initial'
    },
    chunkIds: 'named', // default is 'named' in development and 'deterministic' in production - better long term caching
},
//with one entry and only one file it will show "text from info.js" in the browser
// entry: path.resolve(__dirname, './src/lazy_loading/entry.js'), // we don’t have to default filename which is main.js
//with one entry and two file it will show "text from info.js" & "content from entryTwo.js" in the browser in the browser (since main.js
// bundle file will have code of both entry.js and entry2.js files)
//entry: [path.resolve(__dirname, './src/entry.js'),path.resolve(__dirname, './src/entry2.js')], // 2 entry points but one output file
// with multiple entry points and each with one file - NOT sure how this setup will be  rendered in browser
 entry: { // multiple entry points with multiple output files
     pageOne: {
         import: path.resolve(__dirname, './src/lazy_loading/entry.js'),
         //filename: './StartFeature/[name].js' // putting output files in subdirectory within 'dist' directory
     },
     pageTwo: {
         import: path.resolve(__dirname, './src/lazy_loading/entry2.js'),
     }
 },
output : {
    iife: true,
    clean: true,
    asyncChunks: true,
    filename: '[name].js', // give whatever the name of entry point javascript file in 'dist' directory you want. Useful when you have multiple entry files/multiple page website. This applies to entry/initial chunks
    chunkFilename: '[id].chunk.js', // this name applies to async / non-initial chunks
    path: path.resolve(__dirname, 'dist'), // makes sure it always creates dist directory in project root regardles of where webpack command is run from
},
module:{
    rules:[
        //loaders here
        {
          test: /\.css$/i,
          use: ['style-loader','css-loader'], // order is important - last to first

        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset', // this replaces raw-loader of before  webpack5. asset/resource (separate file), asset/inline (base64 string in bundle), asset/source (raw source code), asset (automatically chooses between resource and inline based on file size - default maxSize is 8kb)}
        },
        {
          test: /\.txt$/i,
          type: 'asset/source', // this replaces raw-loader of before webpack5
        }
      ]
},
plugins: [
  //globally prodiving lodash (not recommended though)
  new webpack.ProvidePlugin({
    _: 'lodash',
    join: ['lodash', 'join'] // only join function of lodash
  }),
	new html({
		filename: 'pageOne.html',
		minify:false, // true under prod mode
		inject: 'body', //default head with script tag
    title: 'htmlwebpackplugin demo - pageOne', // only works if template is not specified
    chunks: ['pageOne'], // include only pageTwo entry point
    template: path.resolve(__dirname,'src/lazy_loading/tpl.html') 
    
	}),
  new html({
		filename: 'pageTwo.html',
		minify:false, // true under prod mode
		inject: 'body', //default head with script tag
    title: 'htmlwebpackplugin demo - pageOne', // only works if template is not specified
    chunks: ['pageTwo'], // include only pageTwo entry point
    template: path.resolve(__dirname,'src/lazy_loading/tpl.html') // to use a custom template
	})
],
watch: false, // -- watch
watchOptions: { // applies both to webpack  and webpack-dev-server
    aggregateTimeout: 2000, // wait so long for more changes
    poll: 1000, // check for changes every second
    // ignored: /node_modules/, // ignore node_modules to avoid high cpu usage
    // ignored: [path.resolve(__dirname,'node_modules')], // array based ignore list
    ignored: ['**/node_modules/**', '**/src/ignore.js'], // glob pattern based ignore list - ignores all node_modules directories on this machine. * matches any character except /
    },
    devServer: {
        port:8080, hot: true,
        static: [{
          directory: path.resolve(__dirname, 'public'), // static files location
          watch: true, // enable to watch static files in this directory
          publicPath: '/', // default is '/' - url path for static directory when accessed from browser
        }, {
          directory: path.resolve(__dirname, 'styles'), // static files location
          watch: true, // enable to watch static files in this directory
          publicPath: '/styles/', // url path for style directory when accessed from browser is 'styles'. ending slash is important
          serveIndex: false, // do not show directory listing to the browser
          staticOptions: {
            index: 'stylesindex.html' // default is index.html - which file to serve when the directory is accessed
          }
        }],
        watchFiles: ['**/src/backend/*'] // we need to be specific at file level (directory is not enough) for backend files. so last asterix is needed
    }
    
};

