module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			sass: {
				files: ['sass/*.scss'],
				tasks: ['sass']
			}
		},
		sass: {
		  dist: {
			options: {
				style: 'expanded'
			},
			files: {
				'css/main.css': 'sass/main.scss'
			}
		  }
		}
	  });
	   
	  grunt.loadNpmTasks('grunt-contrib-sass');
	  grunt.loadNpmTasks('grunt-contrib-watch');
	  grunt.registerTask('default', ['sass']);
};