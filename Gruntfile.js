/**
 * Gruntfile
 *
 */

module.exports = function(grunt) {
  
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/style.css': 'styles/styles.scss'
        }
      }
    }
  });
  
  
  grunt.loadNpmTasks('grunt-contrib-sass');

  
  try {
    
    grunt.registerTask('build', [
      'sass'
    ]);
    
  } catch( err ) {
    console.error( err )
  }

};
