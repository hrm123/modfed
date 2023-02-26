const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'profesnl',

  exposes: {
    './Component': './projects/profesnl/src/app/app.component.ts',
    './Module': './projects/profesnl/src/app/profesnl/profesnl.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
