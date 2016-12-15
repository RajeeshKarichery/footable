var gulp = require('gulp');
var sass = require('gulp-sass');


var bs = require('browser-sync').create(); // create a browser sync instance.



gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
       // proxy: "localhost:80",
        //ws: true 
    });
});



gulp.task('hello', function() {
  console.log('Hello rejeesh');
});



gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(bs.reload({stream: true}));  


});


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
    gulp.watch("json/*.json").on('change',bs.reload);
});


