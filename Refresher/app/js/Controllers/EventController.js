﻿'use strict';

eventsApp.controller('EventController', ['$scope', 'EventDataService',

    function EventController($scope, EventDataService) {

        $scope.snippet = '<span style="color:red !important;">Hi There</span>';
        $scope.myStyle = {color:'red'};
        $scope.boolValue = true;
        $scope.myclass = 'blue';
        $scope.btnDisabled = true;
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
