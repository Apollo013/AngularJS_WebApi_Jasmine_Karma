'use strict';

eventsApp.controller('EventsController', ['$scope', 'EventDataService', '$anchorScroll',

    function EventController($scope, EventDataService, $anchorScroll) {

        $scope.myclass = 'blue';
        $scope.sortOrder = 'name';
        $scope.voteOrder = '-upVoteCount'
        $scope.event = {};

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
            if (session.upVoteCount < 0) {
                session.upVoteCount = 0;
            }
        }

        var init = function () {
            EventDataService.get(1).then(
                function (data) {
                    $scope.event = data;
                }
            );
        }

        init();
    }
]);
