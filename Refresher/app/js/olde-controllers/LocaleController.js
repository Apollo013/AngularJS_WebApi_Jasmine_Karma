'use strict';

eventsApp.controller('LocaleController', ['$scope', '$locale', '$interval',
    function ($scope, $locale, $interval) {
        $scope.myLongDate = Date.now();
        $scope.myLongDateFormat = $locale.DATETIME_FORMATS.fullDate;

        $scope.myShortDate = Date.now();
        $scope.myShortDateFormat = $locale.DATETIME_FORMATS.shortDate;


        var tick = function () {
            $scope.theTime = Date.now();
        };

        var promise = $interval(tick, 1000);

        $scope.cancelTicker = function () {
            console.log('sdfsdf');
            $interval.cancel(promise);
        }
    }
]);