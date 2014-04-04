module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        cafemocha: {
            test: {
                options: {
                    reporter: 'spec', // Nyan
                    growl: true,
                    ui: 'tdd'
                },
                src: 'test/*.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cafe-mocha');
    // Default task(s).
    // grunt.registerTask('default', ['cafemocha', 'uglify']);
    grunt.registerTask('default', ['cafemocha']);

};