'use strict';

eventsApp.controller('CacheController', ['$scope', 'CacheService',
    function ($scope, CacheService) {

        $scope.addToCache = function (key, value) {
            CacheService.put(key, value);
        };

        $scope.readFromCache = function (key) {
            return CacheService.get(key);
        };

        $scope.getCacheStats = function () {
            return CacheService.info();
        };
    }
]);