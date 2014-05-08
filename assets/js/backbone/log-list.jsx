/** @jsx React.DOM */

// Change location
define([], function() {
    var LogList = Backbone.React.Component.extend({
        getInitialState: function() {
            return {collection: [], text: ''};
        },
        render: function () {


                function hightlightRow(obj) {
                    return 'active';
                }

            var createItem = function(data) {

                var classString = '';

                if (data.level_name == 'ERROR') {
                    classString = 'danger';
                }

                if (data.level_name == 'INFO') {
                    classString = 'success';
                }


                return (
                    <tr className={classString}>
                        <td>{data.id}</td>
                        <td>{data.created_at}</td>
                        <td>{data.level_name}</td>
                        <td>{data.message}</td>
                        <td>
                            <pre>{JSON.stringify(JSON.parse(data.context), undefined, 2)}</pre>
                        </td>
                        <td>{data.created_at}</td>
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
