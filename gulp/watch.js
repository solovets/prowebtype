const gulp = require('gulp');

gulp.task('watch', () => {
    gulp.watch(
        './html/**/*html',
        ['html']
    );
});
