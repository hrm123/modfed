const path = require('path');

module.exports = {
// context parameter - looks for where webpack loks for files, esp. the entry file. Default is
// process.cwd(). Only accepts absolute path
context: path.resolve(__dirname,'src'), 
mode: 'development', //can be 'development' /  'production'
devtool: 'inline-source-map', // 'source-map' for 'production' mode
optimization:{
    // providedExports: true, // tells webpack to figure out which exports are used for each module - true by default in production mode
    usedExports: true, // tells webpack to figure out which exports are used for each module - true by default in production mode
    minimize: true, // set to true if bundle file is to be lean. default is production true and development false
    // webpack uses third party plugins to minimize - terser-webpack-plugin for JS and css-minimizer-webpack-plugin for CSS
    // minimizer: ['...'], // to extend existing minimizers (i.e. `terser-webpack-plugin` for JS and `css-minimizer-webpack-plugin` for CSS) uncomment this line
},
//with one entry and only one file it will show "text from info.js" in the browser
entry: path.resolve(__dirname, './src/entry.js'), // we don’t have to default filename which is main.js
//with one entry and two file it will show "text from info.js" & "content from entryTwo.js" in the browser in the browser (since main.js
// bundle file will have code of both entry.js and entry2.js files)
//entry: [path.resolve(__dirname, './src/entry.js'),path.resolve(__dirname, './src/entry2.js')], // 2 entry points but one output file
// with multiple entry points and each with one file - NOT sure how this setup will be  rendered in browser
// entry: { // multiple entry points with multiple output files
//     start: {
//         import: path.resolve(__dirname, './src/entry.js'),
//         dependOn: 'shared',
//         //filename: './StartFeature/[name].js' // putting output files in subdirectory within 'dist' directory
//     },
//     another: {
//         import: path.resolve(__dirname, './src/entry2.js'),
//         dependOn: 'shared'
//     },
//     shared:  path.resolve(__dirname, './src/shared.js'),
// },
output : {
    iife: true,
    clean: true,
    filename: '[name].js', // give whatever the name of entry point javascript file in 'dist' directory you want. Useful when you have multiple entry files/multiple page website
    path: path.resolve(__dirname, 'dist'), // makes sure it always creates dist directory in project root regardles of where webpack command is run from
},
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

