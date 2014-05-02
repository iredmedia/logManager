/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

    grunt.config.set('react', {
            files: {
                expand: true,
                cwd: './assets',
                src: ['*/*.jsx'],
                dest: '.tmp/public',
                ext: '.js'
            }
    });

    grunt.loadNpmTasks('grunt-react');
};
