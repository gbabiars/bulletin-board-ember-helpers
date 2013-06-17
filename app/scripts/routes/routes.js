(function () {
    'use strict';

    var posts = [
        {
            id: 1,
            title: 'First Post',
            body: 'This is my first post ever.  What am I supposed to do?',
            createdAt: moment().add('hours', -6).toDate(),
            lastUpdatedAt: moment().add('hours', -4).toDate(),
            authorId: 'jdoe',
            authorName: 'John Doe'
        },
        {
            id: 2,
            title: 'Second Post',
            body: 'This is yet another post.',
            createdAt: moment().add('days', -2).toDate(),
            lastUpdatedAt: moment().add('days', -1).toDate(),
            authorId: 'tthompson',
            authorName: 'Tom Thompson'
        }
    ];

    var users = [
        {
            id: 'jdoe',
            name: 'John Doe',
            createdAt: moment().add('months', -1).toDate(),
            lastOnlineAt: moment().add('hours', -2).toDate()
        },
        {
            id: 'tthompson',
            name: 'Tom Thompson',
            createdAt: moment().add('days', -7).toDate(),
            lastOnlineAt: moment().add('minutes', -5).toDate()
        }
    ];

    App.Posts = posts.map(function(p) { return App.Post.create(p); });
    App.Users = users.map(function(u) { return App.User.create(u); });


    App.Router.map(function() {
        this.resource('posts');
        this.resource('post', { path: '/posts/:post_id' });
        this.resource('user', { path: '/users/:user_id' });
    });

    App.IndexRoute = Em.Route.extend({
        redirect: function() {
            this.transitionTo('posts');
        }
    });

    App.PostsRoute = Em.Route.extend({
        model: function() {
            return App.Posts;
        }
    });

    App.PostRoute = Em.Route.extend({
        model: function(params) {
            return App.Posts.findProperty('id', parseInt(params.post_id, 10));
        }
    });

    App.UserRoute = Em.Route.extend({
        model: function(params) {
            return App.Users.findProperty('id', params.user_id);
        },
        serialize: function(params) {
            return { user_id: params };
        },
        setupController: function(controller, model) {
            if(typeof model === 'string') {
                controller.set('model', this.model({ user_id: model }));
            }
        }
    });
}());