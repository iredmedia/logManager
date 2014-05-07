/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css',
  'libs/bootstrap/dist/css/bootstrap.min.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
//  'libs/angular/angular.js',
//  'libs/angular-route/angular-route.js',
//  'libs/angular-socket-io/socket.js',
//  'js/app.js',
//  'js/controllers.js',
//  'js/services.js',
  // Below, as a demonstration, you'll see the built-in dependencies
  // linked in the proper order order
//  'libs/react/react.js',
//  'libs/jquery/dist/jquery.min.js',
//  'libs/underscore/underscore.js',
//  'libs/backbone/backbone.js',
//  'libs/backbone-react-component/lib/component.js',
  //'libs/bootstrap/dist/js/bootstrap.min.js',
  // Bring in the socket.io client
  'js/socket.io.js',

  // then beef it up with some convenience logic for talking to Sails.js
  'js/sails.io.js',

  // finally, include a simple boilerplate script that connects a socket
  // to the Sails backend with some example code
  'js/connection.example.js',
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
