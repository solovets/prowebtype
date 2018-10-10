const gulp = require('gulp'),
    fs = require('fs'),
    path = require('path'),
    cheerio = require('gulp-cheerio'),
    inject = require('gulp-inject'),
    htmlmin = require('gulp-html-minifier'),
    rename = require('gulp-rename'),
    templatesMap = require('./html-config.json'),
    ext = '.html';

let tasks = [];

Object.keys(templatesMap).forEach(template => {

    let templatePath = path.join('./html/templates', template),
        templateName = path.parse(templatePath).name;

    templatesMap[template].forEach(page => {

        let taskName = 'prepare-' + page.replace(/\.html/, '');

        tasks.push(taskName);

        gulp.task(taskName, () => {

            const sources = gulp.src([
                    './docs/css/**/*.css'
                ], {read: false}),
                //header = fs.readFileSync(path.join(config.pathes.html.content, '_header.html'), 'utf8'),
                footer = fs.readFileSync('./html/templates/_footer.html', 'utf8');

            return gulp.src(templatePath)
                .pipe(inject(sources, {
                    ignorePath: 'docs'
                }))
                .pipe(cheerio({
                    run: ($, file) => {

                        let content = fs.readFileSync(path.join('./html/content', page), 'utf8');
                        $('.main-wrap').html(content);
                        $('.footer-wrap').html(footer);
                        //$('.header').html(header);
                    },
                    parserOptions: {
                        decodeEntities: false
                    }
                }))
                .pipe(htmlmin({collapseWhitespace: false}))
                .pipe(rename(page))
                .pipe(gulp.dest('./docs'));
        });
    });
});

gulp.task('html', tasks);
