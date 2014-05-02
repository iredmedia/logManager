define([
        '/js/log-line.js',
        '/js/log-list.js'
    ], function(
        LogLine,
        LogList
    ) {
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
            el: $('.starter-template'),
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
