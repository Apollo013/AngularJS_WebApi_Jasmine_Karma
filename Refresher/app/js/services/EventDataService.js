'use strict';

eventsApp.factory('EventDataService', ['$http', '$log', '$timeout',
    function ($http, $log, $timeout) {

        var baseUrl = 'http://localhost:55015/events';

        return {

            get: function(id){
                var config = {
                    method: 'GET',
                    url: baseUrl + '/' + id
                }

                return $http(config).then(
                    function (response) {
                        $log.info(response);
                        return response.data;
                    },
                    function (errorText, status, headers, config) {
                        $log.warn(errorText);
                        return errorText;
                    }
                );
            },

            save: function (event) {
                var config = {
                    method: 'PUT',
                    url: baseUrl + '/' + event.id,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    data: event
                }

                return $http(config).then(
                    function (response) {
                        $log.info(response);
                        return response;
                    },
                    function (errorText, status, headers, config) {
                        $log.warn(errorText);
                        return errorText;
                    }
                );
            }
        }
    }
]);