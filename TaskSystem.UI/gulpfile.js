/// <binding AfterBuild='build' Clean='clean' />
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var config = require('./gulp.config')();
var del = require('del');

gulp.task('clean', function () {
    return del(config.distDir + '/**/*');
});

gulp.task('lib', function () {
    return gulp.src(config.angularLibraries)
        .pipe(gulp.dest(config.distDir + '/lib'));
});

gulp.task('compile-ts', function () {
    var sourceTsFiles = [
        config.allTs,
        config.typings
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.distDir + '/app'));
});

gulp.task('index', ['compile-ts', 'lib'], function () {
    return gulp.src(config.indexFile)
        .pipe(gulp.dest(config.distDir));
});

gulp.task('build', ['compile-ts', 'lib', 'index'], function () {
    return;
});