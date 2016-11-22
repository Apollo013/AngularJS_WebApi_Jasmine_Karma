'use strict';

eventsApp.controller('EventDetailController', ['$scope', 'EventDataService',
    function ($scope, EventDataService) {

        $scope.event = {};

        $scope.save = function (e, newEventForm) {
            if (newEventForm.$valid) {
                EventDataService.save($scope.event).then(
                    function (response) {
                        window.location = "/EventDetailsView.html";
                    }
                );

            } else {
                window.alert('not valid');
            }
        }

        $scope.cancelEvent = function () {
            window.location = "/EventDetailsView.html";
        }

        var init = function () {
            EventDataService.get(1).then(
                function (data) {
                    $scope.event = data;
                },
                function (errorText, status, headers, config) {
                    $log.warn(errorText);
                }
            );
        }

        init();
    }
]);
