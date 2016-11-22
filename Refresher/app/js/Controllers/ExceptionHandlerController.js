'use strict';

eventsApp.controller('ExceptionHandlerController', ['$scope' , '$exceptionHandler',
    function ($scope, $exceptionHandler) {
        $scope.throwException = function () {
            throw { message: 'error message' };

        }
    }
])