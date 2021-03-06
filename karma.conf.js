// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: './',

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      // angular source
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angularfire/dist/angularfire.min.js',
      'client/bower_components/firebase/firebase.js',
      'client/bower_components/angular-socket-io/socket.js',
      'client/bower_components/jquery/dist/jquery.min.js',

      // our app code
      'client/scripts/**/*.js',
      'client/features/**/*.js',
      'client/app.js',

      // our client-side spec files - in order
      'specs/client/clientExampleSpec.js',
      // 'specs/client/coveySpec.js', //need to handle io socket testing
      'specs/client/myCoveysSpec.js',
      'specs/client/createCoveySpec.js',
      'specs/client/servicesspec.js',
      'specs/client/friendSpec.js',
      'specs/client/welcomeSpec.js',
    ],

    preprocessors: {
      'client/app.js': ['babel'],
      'client/scripts/**/*.js': ['babel'],
      'client/features/**/*.js': ['babel'],
      'specs/**/*.js': ['babel'],
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
      },
    },

    reporters: ['spec'],

    browsers: ['PhantomJS'],

    autoWatch: false,

    singleRun: true,

  });
};
