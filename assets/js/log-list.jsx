/** @jsx React.DOM */

// Change location
define([], function() {
    var LogList = Backbone.React.Component.extend({
        getInitialState: function() {
            return {collection: [], text: ''};
        },
        render: function () {

            var createItem = function(data) {
                return (
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.channel}</td>
                    </tr>
                );
            };

            return (
                <table className="table table-bordered">
                    <tbody>
                        {this.props.collection.map(createItem)}
                    </tbody>
                </table>
            )
        }
    });

    return LogList;
});
