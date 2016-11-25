'use strict';

eventsApp.controller('RoutedEventsController', ['$scope','$location', 'EventDataService','$http', '$q',

    function EventController($scope, $location, EventDataService, $http, $q) {

        $scope.myclass = 'blue';
        $scope.sortOrder = 'name';
        $scope.voteOrder = '-upVoteCount'
        $scope.event = {};

        $scope.events = EventDataService.getAll();
        //EventDataService.getAll().then(function (data) {
        //    $scope.events = data;
        //});

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
            if (session.upVoteCount < 0) {
                session.upVoteCount = 0;
            }
        }

        $scope.navigateToDetail = function(eventid){
            $location.url('/event/' + eventid);
        }


        $scope.init = function (eventid) {
            $scope.event = EventDataService.get(1);
            /*
            EventDataService.get(1).then(
                function (data) {
                    $scope.event = data;
                }
            );
            */
        };

        //var init = function () {

        //}

        $scope.init();
    }
]);
