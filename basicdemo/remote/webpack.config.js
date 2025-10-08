const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './entry.js',
    mode: 'development',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },
    devServer:{
        port: 4444,
    },
    //WAMP server : localhost:8888/remote
    plugins:[
        new ModuleFederationPlugin({
            name: 'remote_container',
            filename: 'remoteEntry.js',
            exposes: { // which source file of remote package is exposed to host (each exposed file gets one bundle)
                './info': './info.js',
                './createElem': './createElem.js',
                './entry': './entry.js'
            },
            shared: ['shared'] // shared libraries (avoid duplication in host and remote)
        })
    ]
}
        