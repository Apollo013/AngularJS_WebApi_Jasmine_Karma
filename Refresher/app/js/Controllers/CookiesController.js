'use strict';

eventsApp.controller('CookiesController', ['$scope', '$cookies',
    function ($scope, $cookies) {

        $scope.event = { id: 1, name: 'New Event' };

        $scope.saveCookie = function (event) {
            $cookies.putObject("event", event, { secure: false, path:"/" });
        }

        $scope.getCookie = function () {
            console.log('getting');
            var ev = $cookies.getObject("event", { path: "/" });
            console.log(ev.name);
        }

        $scope.removeCookie = function () {
            console.log('removing');
            $cookies.remove("event", { path: "/" });
        }
    }
])