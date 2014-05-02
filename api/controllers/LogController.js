/**
 * DrawController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
// Comment controller with generated actions.


var LogController = {
    test: function(req, res) {

        var lastUpdateId = 0;

        function isUpdatedLog()
        {
            Log.find()
                .sort({ id: 'desc' })
                .limit(1)
                .exec(function(err, logList) {
                    logdata = logList[0];

                    if (lastUpdateId == 0) {
                        lastUpdateId = logdata.id;
                    }

                    if (lastUpdateId != logdata.id) {
                        sails.io.sockets.emit('some_event', { hello: 'world' });
                    }

                    lastUpdateId = logdata.id;
                });
        }

        sails.io.on('connection', function (socket) {
            setInterval(function(){
                isUpdatedLog();
            }, 2000);
        });

        return res.view({
            _layoutFile: '../bootstrap',
            data: 'test data'
        });
    }
}

module.exports = LogController;
