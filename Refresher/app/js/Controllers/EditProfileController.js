'use strict';

eventsApp.controller('EditProfileController', ['$scope','GravatarUrlBuilder',
    function ($scope, GravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function (email) {
            return GravatarUrlBuilder.buildGravatarUrl(email);
        }
    }
]);