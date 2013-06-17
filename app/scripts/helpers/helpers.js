(function () {
    'use strict';
    Em.Handlebars.helper('relativeDate', function(value) {
        return moment(value).fromNow();
    });

    Em.Handlebars.helper('prettyDate', function(value) {
        return moment(value).format('MMM Do, YYYY h:mm A');
    });

    Em.Handlebars.helper('message', function(value) {
        if(value) {
            return value;
        } else {
            return 'There is no value to display.';
        }
    });

    Em.Handlebars.helper('percent', function(value) {
        return value + ' %';
    });
}());