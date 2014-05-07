/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callack method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

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
                    console.log('event sent');
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

  cb();
};
