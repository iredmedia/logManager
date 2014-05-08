/** @jsx React.DOM */

// Change location
define([], function() {
    var LogLine = Backbone.React.Component.extend({
        render: function () {
            return (
                <span>
                    <div>{this.props.channel}</div>
                    <div>{this.props.id}</div>
                </span>
            );
        }
    });

    return LogLine;
});
