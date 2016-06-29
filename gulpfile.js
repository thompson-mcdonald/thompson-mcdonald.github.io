'use strict'

var gulp = require('gulp'),
		connect = require('gulp-connect'),
		postcss = require('gulp-postcss'),
		browserify = require('browserify'),
		source = require('vinyl-source-stream');

var postcssPlugins = [
	require('postcss-import'),
	require('lost'),
	require('postcss-each'),
	require('postcss-nested')
];

gulp.task('styles', function(){
	return gulp.src('src/styles/style.css')
	.pipe(postcss(postcssPlugins))
	.pipe(gulp.dest('dest/styles'))
});

gulp.task('js', function(){
	return browserify('./src/scripts/main.js')
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('dest/scripts'));
});

gulp.task('watch', function(){
	gulp.watch('src/styles/**/*.css', ['styles']);
	gulp.watch('src/scripts/**/*.js', ['js']);
});

gulp.task('connect', function(){
	connect.server({
		root: './'
	});
});

gulp.task('default', ['connect', 'watch', 'styles', 'js'])
