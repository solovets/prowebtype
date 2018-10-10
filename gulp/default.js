const gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('default', (callback) => {
    runSequence(
        'html',
        'browser',
        'watch'
    );
});
