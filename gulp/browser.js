const gulp        = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('browser', () => {
    browserSync.init({
        server: {
            baseDir: './docs'
        },
        files: [
            './docs/**/*.html',
            './docs/css/**/*.css'
        ]
    });
});
