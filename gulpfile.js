const gulp = require('gulp');
const scss = require('gulp-scss');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['watch']);

gulp.task('scss', () => {
   gulp.src(`src/assets/scss/**/*.scss`)
       .pipe(scss({
           style: "compressed"
       }))
       .pipe(autoprefixer())
       .pipe(gulp.dest(`src/assets/css`));
});

gulp.task('watch', ['scss'], () => {
    gulp.watch(`src/assets/scss/**/*.scss`, ['scss'])
});