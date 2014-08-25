module.exports = function(grunt) {

	grunt.initConfig({
		copy : {
			projeto : {
				expand : true,
				cwd : 'floripabus',
				src : ['index.html', './js/**/*', './views/**/*', './fonts/**/*'],
				dest : 'dist'
			}
		},

		clean : ['dist'],

		cssmin: {
			combine: {
			    files: {
			      'floripabus/css/app.css': ['floripabus/css/reset.css', 'floripabus/css/ratchet.css', 'floripabus/css/main.css']
			    }
			},
			minify: {
		    	expand: true,
		    	cwd: 'floripabus/css/',
		    	src: ['app.css'],
		    	dest: 'dist/css/',
		    	ext: '.min.css'
		  	}
		}

	});

	//defining tasks
	grunt.registerTask("minifyCss", ["cssmin"]);
	grunt.registerTask("default", ["clean", "copy:projeto", "minifyCss"]);

	//loading tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin'); //minifica css
}