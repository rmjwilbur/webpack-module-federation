const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            one: 'one@http://localhost:8091/remoteEntry.js',
            two: 'two@http://localhost:8092/remoteEntry.js',
          },
          shared: {
            ...dependencies,
            react: {
              singleton: true,
              requiredVersion: dependencies['react'],
            },
            'react-dom': {
              singleton: true,
              requiredVersion: dependencies['react-dom'],
            },
          },
        }),
      ],
    },
  },
};
