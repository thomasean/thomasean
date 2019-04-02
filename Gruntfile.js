module.exports = function(grunt) {
	grunt.initConfig({
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
	   
	  grunt.registerTask('default', ['sass']);
};