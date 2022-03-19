const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new HtmlWebpackPlugin({ template:  './public/index.html' }),
        new ModuleFederationPlugin({
          name: 'one',
          filename: 'remoteEntry.js',
          exposes: {
            './RemoteAppOne': './src/bootstrap',
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
