(function () {
    'use strict';
    App.User = Em.Object.extend({
        id: null,
        name: '',
        createdAt: null,
        lastOnlineAt: null
    });

    App.Post = Em.Object.extend({
        id: null,
        title: '',
        body: '',
        createdAt: null,
        lastUpdatedAt: null,
        authorName: '',
        authorId: null
    });
}());