'use strict';

eventsApp.controller('RoutedEventDetailController', ['$scope', 'EventDataService', '$routeParams', '$route',
    function ($scope, EventDataService, $routeParams, $route, event) {

        $scope.event = {};

        $scope.save = function (e, newEventForm) {
            if (newEventForm.$valid) {
                EventDataService.save($scope.event).then(
                    function (response) {
                        window.location = "/events";
                    }
                );

            } else {
                window.alert('not valid');
            }
        };

        $scope.cancelEvent = function () {
            window.location = "/events";
        };

        var init = function () {
            var id = $routeParams.eventid;
            EventDataService.get(id).then(
                function (data) {
                    $scope.event = data;
                },
                function (errorText, status, headers, config) {
                    $log.warn(errorText);
                }
            );
        };

        var initResolved = function () {
            $scope.event = $route.current.locals.event;
        };
        initResolved();

        //init();
    }
]);
