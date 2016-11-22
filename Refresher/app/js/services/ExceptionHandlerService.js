'use strict';

// N.B. Overriding Anguler's Builtin Exception Handler

eventsApp.factory('$exceptionHandler', [
    function () {
        return function (exception) {
            console.log("Exception: " + exception.message);
            window.alert(exception.message + ' - see console log for more details');
        }
    }
]);