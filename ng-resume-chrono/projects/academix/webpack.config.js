const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'academix',

  exposes: {
    './Component': './projects/academix/src/app/app.component.ts',
    './Module': './projects/academix/src/app/academix/academix.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
