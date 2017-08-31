module.exports = function(grunt) {
  
    grunt.initConfig({
      
      
      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'index.html': 'index.max.html',     // 'destination': 'source'
          }
        }
      },
  
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'build/',
            ext: '.min.css'
          }]
        }
      },
  
      uglify: {
        my_target: {
          files: {
            'build/main.min.js': ['js/helper.js', 'js/resumeBuilder.js']
          }
        }
      },
  
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [{
              width: 800,
              suffix: '',
              quality: 50
            }]
          },
          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'img/',
            dest: 'build/img'
          }]
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default',['htmlmin', 'cssmin', 'uglify', 'responsive_images']);
  
  };