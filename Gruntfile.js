/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		"pkg": grunt.file.readJSON("package.json"),
		// Task configuration.
		"sass": {
			docs : {
				options : {
					style: "expanded"
				},
				files: {
					"docs/style.css": "src/style.scss"
				}
			}
		},
		"compile-handlebars": {
			allStatic: {
				files: [{
					expand: true,
					cwd: "src",
					src: "index.hbs",
					dest: "docs",
					ext: ".html",
				}],
				globals: ["src/resume.json"]
			}
		},
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-compile-handlebars");

	// Default task.
	grunt.registerTask("default", ["compile-handlebars", "sass"]);

};
