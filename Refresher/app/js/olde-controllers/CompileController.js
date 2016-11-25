'use strict';

eventsApp.controller('CompileController', ['$scope', '$compile', '$parse',
    function ($scope, $compile, $parse) {

        // Compile
        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }

        // Parse
        var getter = $parse('event.name');
        var event1 = { event: { name: 'Event 1' } };
        var event2 = { event: { name: 'Event 2' } };

        console.log(getter(event1));
        console.log(getter(event2));

        // ---

        var setter = getter.assign;
        setter(event1, 'Value Changed');
        console.log(getter(event1));
    }
]);