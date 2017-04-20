
'use strict';

// Folder variables
var srcSite = 'src/main/resources';
var buildSite = 'build/resources/main';
var buildSiteJSX = 'build/resources/main/**/*.jsx';
var buildSiteES6 = 'build/resources/main/**/*.es6';
var buildSiteAppJsx = 'build/resources/main/assets/app';
var buildSiteAppScss = 'build/resources/main/assets/scss';
var buildAssets = buildSite + '/assets/dist';


var srcAssetsApp = srcSite + '/assets/**/*';
var srcES6 = srcSite + '/**/*.es6';

var gulp = require('gulp');
var babel = require('gulp-babel');
var gulpWebpack = require('webpack-stream');
var prettyError = require('gulp-prettyerror');
var del = require('del');

gulp.task('default',['babel', 'webpack','buildDoneWebpackClean']);

gulp.task('webpack',['webpack-prod','buildDoneES6Clean','buildDoneWebpackClean']);
gulp.task('webpack-prod', function() {
    return gulp
        .src( srcAssetsApp )
        .pipe(prettyError())
        .pipe(gulpWebpack(require('./webpack.config.js')))
        .pipe(gulp.dest(buildAssets));
});

// Do it like this so we can add more tasks easy without breaking stuff
gulp.task('webpack-dev',['webpack-dev-jsxsccss']);
gulp.task('webpack-dev-jsxsccss', function() {
    return gulp
        .src( srcAssetsApp )
        .pipe(prettyError())
        .pipe(gulpWebpack(require('./webpack-dev.config.js')))
        .pipe(gulp.dest(buildAssets));
});

// Do it like this so we can add more tasks easy without breaking stuff
gulp.task('babel',['babelES6']);
gulp.task('babelES6', () => {
    return gulp.src( srcES6 )
        .pipe(prettyError())
        .pipe(babel({
            presets: [
                ['es2015', {'modules': false}]
            ]
        }))
        .pipe(gulp.dest( buildSite ));
});

// Do it like this so we can add more tasks easy without breaking stuff
gulp.task('buildDoneClean',['buildDoneES6Clean','buildDoneWebpackClean']);
gulp.task('buildDoneES6Clean', function () {
    return del([
        buildSiteES6
    ]);
});

gulp.task('buildDoneWebpackClean', function () {
    return del([
        buildSiteAppJsx,
        buildSiteAppScss
    ]);
});

gulp.task('watch', function() {
    gulp.watch( srcES6 , ['babel']);
    gulp.watch( srcAssetsApp , ['webpack-dev']);
});


