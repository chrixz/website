const path = require('path');

const PRODUCTION = JSON.stringify('production');
const DEVELOPMENT = JSON.stringify('development');

module.exports = env => {
  env.NODE_ENV = JSON.stringify(env.NODE_ENV);

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './assets/js'),
      publicPath: '/assets/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': `vue-style-loader!css-loader${env.NODE_ENV === PRODUCTION ? '?-minimize' : ''}!sass-loader`,
              'sass': `vue-style-loader!css-loader${env.NODE_ENV === PRODUCTION ? '?-minimize' : ''}!sass-loader?indentedSyntax`
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    devtool: (() => {
      return env.NODE_ENV === PRODUCTION ? false : 'inline-source-map';
    })()
  }
}