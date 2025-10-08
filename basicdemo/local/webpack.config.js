const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

/*
remote website has one dev address and another deployment address. We choose based on dev/prod.
Sicne we are not maintaining 2 files one for dev and other for prod.. instead of exporting object,m we export a function that gets dev/prod mode as argumenbt
*/
module.exports =  (env, argv) => {
    return{
        context: path.resolve(__dirname, 'src'),
        entry: './entry.js',
        mode: 'development',
        output: {
            clean: true,
            path: path.resolve(__dirname, 'dist'),
        },
        devServer:{
            port: 3333,
        }, 
        plugins:[
        new ModuleFederationPlugin({
            name: 'local_container',
            remotes:{
                remote_path: argv.mode === 'production' ? 
                'remote_container@http://localhost:8888/remote/remoteEntry.js':
                 'remote_container@http://localhost:4444/remoteEntry.js'
            }
        })
    ]
    }
}