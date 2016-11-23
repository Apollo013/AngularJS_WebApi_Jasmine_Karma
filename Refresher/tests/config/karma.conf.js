module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
        JASMINE,
        JASMINE_ADAPTER,
        "/lib/jquery-3.1.1.min.js" ,
        "/lib/angular/angular.min.js",
        "/lib/angular/angular-*.min.js",
        "/lib/angular/angular-mocks.js",
        "/lib/angular/sinon-1.17.6.js" 
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
