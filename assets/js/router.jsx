/** @jsx React.DOM */

// Router
define(
    [
        '/js/foo-component.js',
        '/js/bar-component.js'
    ], function(
        FooComponent,
        BarComponent
    ) {
    var Router = Backbone.Router.extend({
      routes : {
        "foo" : "foo",
        "bar" : "bar"
      },
      foo : function() {
        React.renderComponent(
          <FooComponent />,
          document.body
        );
      },
      bar : function() {
        React.renderComponent(
          <BarComponent />,
          document.body
        );
      }
    });

    return Router;
});
