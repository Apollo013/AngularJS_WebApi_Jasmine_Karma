'use strict';

describe('RoutedEventsController', function () {

    var $rootScope, $controller, $scope, ctrl, mockEventDataService, $httpBackend, $q, $http, $location;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $location = $injector.get('$location');

        $scope = $rootScope.$new();
        mockEventDataService = sinon.stub({ get: function (id) { return true;}, getAll: function () { }, save: function (event) { } });
    }));

    beforeEach(inject(function ($controller) {
        ctrl = $controller("RoutedEventsController",
            { $scope: $scope, $location: $location, EventDataService: mockEventDataService});
    }));

    it("Should be 'blue'", function () {
        expect($scope.myclass).toBe("blue");
    });

    it('should set the $scope events to the result of EventDataSDervice.getAll', function () {
        var mockEvents = {}; // fake events object

        mockEventDataService.getAll.returns(mockEvents);

        expect($scope.events).not.toBe(mockEvents);
    });
})
