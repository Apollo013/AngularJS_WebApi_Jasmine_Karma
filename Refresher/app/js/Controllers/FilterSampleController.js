'use strict';

eventsApp.controller('FilterSampleController', ['$scope', '$filter', 'durationsFilter',
    function ($scope, $filter, durationsFilter) {
        $scope.data = {};

        var durations = $filter('durations');

        $scope.data.duration1 = durations(1);
        $scope.data.duration2 = durations(2);
        $scope.data.duration3 = durations(3);
        $scope.data.duration4 = durations(4);

        $scope.data.duration5 = durationsFilter(1);
        $scope.data.duration6 = durationsFilter(2);
        $scope.data.duration7 = durationsFilter(3);
        $scope.data.duration8 = durationsFilter(4);

    }
])