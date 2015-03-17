module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          cacheLocation: 'sass/.sass-cache'
        },
        files: {
          'css/src/common.css': 'sass/common.scss',
          'css/src/component.css': 'sass/component.scss'
        },
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 versions', 'ie 9']
      },
      target: {
        src: 'css/src/*.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/src',
          src: ['*.css', '!*.min.css'],
          dest: 'css/dist',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: 'sass/**/*.scss',
        tasks: ['sass', 'autoprefixer', 'cssmin']
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks.
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'watch']);
  grunt.registerTask('watcher', ['watch']);

};