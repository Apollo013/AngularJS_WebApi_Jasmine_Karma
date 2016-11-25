/// <reference path="../../node_modules/jasmine-core/lib/jasmine-core/jasmine.js" />
/// <reference path="../../node_modules/jasmine-core/lib/jasmine-core.js" />
/// <reference path="../../app/lib/angular/angular-resource.min.js" />

module.exports = function(config) {
  config.set({

    basePath: '../../app',

    files: [
        "lib/jquery-3.1.1.min.js" ,
        "lib/angular/angular.min.js",
        "lib/angular/angular-route.min.js",
        "lib/angular/angular-resource.min.js",
        "lib/angular/angular-cookies.min.js",
        "lib/angular/angular-sanitize.min.js",
        "lib/angular/angular-sanitize.min.js",
        "lib/angular/angular-locale_es-es.js",
        "lib/angular/angular-mocks.js",
        /*
        "lib/angular/angular-cookies.min.js",
        "lib/angular/angular-loader.min.js",
        "lib/angular/angular-resource.min.js",
        "lib/angular/angular-sanitize.min.js",
        "lib/angular/angular-locale_es-es.js",
        */
        "lib/sinon-1.17.6.js",
        "js/app.js",
        "js/filters.js",
        "js/services/*.js",
        "js/controllers/*.js",
        "../tests/unit/**/*.js"
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      //'karma-chrome-launcher',
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
