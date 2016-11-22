'use strict';

eventsApp.factory('CacheService', ['$cacheFactory',
    function ($cacheFactory) {
        return $cacheFactory('someCache', { capacity: 3 });
    }
]);