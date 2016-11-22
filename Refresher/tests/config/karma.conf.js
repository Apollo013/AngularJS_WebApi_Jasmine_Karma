//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      '../../app/lib/angular/angular.min.js',
      '../../app/lib/angular/angular-route.min.js',
      '../../app/lib/angular/angular-mocks.js',
      '../unit/view*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
