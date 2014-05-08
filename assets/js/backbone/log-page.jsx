define([
        '/js/backbone/log-line.js',
        '/js/backbone/log-list.js',
        '/js/backbone/router.js'
    ], function(
        LogLine,
        LogList,
        Router
    ) {
        new Router();

        Backbone.history.start();

        var Log = Backbone.Model.extend({
            urlRoot: '/log'
        })

        var lastClass = new Log({id: '9000', data: $.param({ page: 1})});

        var LogCollection = Backbone.Collection.extend({
            url: '/log',
            model: Log
        });

        var logCollection = new LogCollection();

        logCollection.fetch({
            data: $.param({
                limit: 100,
                sort: 'id DESC'
            })
        });

        var logList = new LogList({
            el: $('#content'),
            collection: logCollection
        })

        socket.on('some_event', function(data) {
            logCollection.fetch({
                data: $.param({
                    limit: 100,
                    sort: 'id DESC'
                })
            });
        });

        logList.mount();
    }
)
