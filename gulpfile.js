/**************************************
*
*   REQUIRE
*
***************************************/
gulp = require('gulp');

// Utilities


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
    index:     '*.html',
    lessmain:  'less/*.less',
    less:      'less/**/*.less',
    css:       'public/static/styles/'
}


/**************************************
*
*   TASKS
*
***************************************/

// Jade task
gulp.task('jade',function(){
    gulp.src(paths.jademain)
        .pipe(jade({
            pretty: true
            }
        ))
        .pipe(gulp.dest(paths.dist));
});


// Less task
gulp.task('less',function(){
    gulp.src(paths.lessmain)
        .pipe(less())
        .pipe(gulp.dest(paths.css))
});

// Watch task
gulp.task('watch',function(){
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.less, ['less']);
});

gulp.task('webserver',function(){
    gulp.src(paths.dist)
        .pipe(webserver({
            port: 9000,
            livereload: true
        }));
});

// Default task
gulp.task('default',[
    'jade',
    'less',
    'webserver',
    'watch'
]);
