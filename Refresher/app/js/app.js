'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngCookies', 'ngRoute'])

.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {

        $routeProvider.when('/events', {
            templateUrl: 'partials/events.html',
            controller: 'EventsController'
        })

        .when('/event/:eventid', {
            templateUrl: 'partials/event-detail.html',
            controller: 'EventDetailController'
        })

        .otherwise({ redirectTo: '/events' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
]);