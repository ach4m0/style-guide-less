/**************************************
*
*   REQUIRE
*
***************************************/
gulp = require('gulp');

// Utilities
concat = require('gulp-concat');

// HTML
jade = require('gulp-jade');

// CSS
less = require('gulp-less');

// Optimization
//imagemin = require('gulp-imagemin');
//minify = require('gulp-minify');
//uglify = require('gulp-uglify');

// Webserver
webserver = require('gulp-webserver');


/**************************************
*
*   PATHS
*
***************************************/
paths = {
    jademain:  'jade/*.jade',
    jade:      'jade/**/*.jade',
    dist:      'public/',
    lessmain:  'less/*.less',
    less:      'less/**/*.less',
    css:       'public/static/styles/',
    jssrc:     'js/*.js',
    js:        'public/static/js/',
    jquery:    'bower_components/jquery/dist/jquery.min.js'
}


/**************************************
*
*   TASKS
*
***************************************/

// Jade task
gulp.task('jade',function(){
    return gulp.src(paths.jademain)
        .pipe(jade({
            pretty: true
            }
        ))
        .pipe(gulp.dest(paths.dist));
});

// Less task
gulp.task('less',function(){
    return gulp.src(paths.lessmain)
        .pipe(less())
        .pipe(gulp.dest(paths.css))
});

// JS task
gulp.task('scripts',function(){
    return gulp.src(paths.jssrc)
        .pipe(concat('styleguide.js',{newline:';'}))
        .pipe(gulp.dest(paths.js))
});

// Watch task
gulp.task('watch',function(){
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.jssrc, ['scripts']);
});

// Copy bower dependencies
gulp.task('bowercopy',function(){
    gulp.src(paths.jquery)
        .pipe(gulp.dest(paths.js));
});

// Webserver with livereload
gulp.task('webserver',function(){
    return gulp.src(paths.dist)
        .pipe(webserver({
            port: 9000,
            livereload: true
        }));
});

// Default task
gulp.task('default',[
    'jade',
    'less',
    'scripts',
    'bowercopy',
    'webserver',
    'watch'
]);
