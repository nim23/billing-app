process.env['NODE_ENV'] = 'test'

const wallabyWebpack = require('wallaby-webpack')

module.exports = function (wallaby) {
  const webpackPostprocessor = wallabyWebpack({
    module: {
      loaders: [{
        test: /\.json$/,
        loader: 'json-loader'
      }]
    },

    externals: {
      react: 'React',
      jsdom: 'window',
      cheerio: 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/addons': true,
      'react/lib/ReactContext': 'window'
    },
    resolve: {
      extensions: ['', '.js', '.scss']
    }
  })

  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'src/**/*.js*', load: false},
      {pattern: 'src/**/*.scss', load: false},
      {pattern: 'src/**/*Spec.js*', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*Spec.js*', load: false}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    testFramework: 'mocha',

    preprocessors: {
      'src/**/*.scss': file => ''
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests()
    }
  }
}
