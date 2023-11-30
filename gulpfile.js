const { src, dest, watch, series, parallel, task } = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del'); // Плагин надо версии del@6.1.1, новые версии не поддерживают require()

// Плагины
const gulp = require('gulp');
// errors
const plumber = require('gulp-plumber');
// messages
const notify = require('gulp-notify');
// html
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const size = require('gulp-size');
// sass-scss-css
const cssImport = require('gulp-cssimport');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const groupMedia = require('gulp-group-css-media-queries');
// js
const babel = require('gulp-babel');
// images
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const webpHtml = require('gulp-webp-html');
const webpCss = require('gulp-webp-css');
// fonts
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');


// Сервер от CodeQuest
// ===================
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })
    // Наблюдение за всеми файлами и перезагрузка при изменениях
    browserSync.watch('./public/**/**/*').on('change', browserSync.reload)
})


// От CodeRequest
//===============
// HTML 
gulp.task('html', function () {
    return src(['./src/**/*.html', '!./src/html/chunk/*.*', '!./src/html/template/*.*'])
        // Вывод ошибок - plumber
        .pipe(plumber({
            // Вывод сообщений на Рабочем столе - notify
            errorHandler: notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        // Подключение директивы @@include для HTML файлов
        .pipe(fileInclude(
            {
                prefix: '@@',
                basepath: '@file'
              }
        ))
        .pipe(webpHtml())
        // Размер файла до
        .pipe(size({ title: 'До сжатия: ' }))
        // Минимизация HTML файлов
        .pipe(htmlMin({
            // Выбор минимизирую html или нет
            // collapseWhitespace: true
            collapseWhitespace: false
        }))
        // Размер файла после
        .pipe(size({ title: 'После сжатия: ' }))
        .pipe(dest('./public'))
    // При необходимости не забываем добавлять в конце ко всем задачам для отслеживания изменений
    // .pipe(browserSync.stream())
})

// htmlSimple. Простое копирование html файлов в папку 'public/'
gulp.task('htmlSimple', function () {
    return src('./src/html/*.html')
        .pipe(dest('./public/'))
})

// CSS
gulp.task('css', function () {
    return src('./src/css/bootstrap/*.css')
        .pipe(dest('./public/css/bootstrap/'))
})

// От CodeRequest
//===============
// SCSS 
gulp.task('scss', function () {
    // Параметр sourcemaps в Gulp-4 поддерживается из коробки
    return src('./src/scss/*.scss', { sourcemaps: true })
        // Преобразование scss в css
        .pipe(sass({
            errorLogToConsol: true,
            // outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        // Вывод ошибок - plumber
        .pipe(plumber({
            // Вывод сообщений на Рабочем столе - notify
            errorHandler: notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        }))
        // Добавить в css код конструкт для картинок с webp
        .pipe(webpCss())
        // Добавим префиксы - autoprefixer
        .pipe(autoprefixer())
        // Группировка медиа-запросов - gulp-group-css-media-queries
        .pipe(groupMedia())
        // Параметр sourcemaps в Gulp-4 поддерживается из коробки и
        // Сохраним файл без сжатия
        .pipe(dest('./public/css', { sourcemaps: true }))
        // Переименование с добавлением суффикса .min - rename
        .pipe(rename({ suffix: '.min' }))
        // Сжатие файла - csso
        .pipe(csso())
        // Параметр sourcemaps в Gulp-4 поддерживается из коробки
        .pipe(dest('./public/css', { sourcemaps: true }))
    // .pipe(browserSync.stream())
})

// JS. Простое копирование js файлов в папку 'public/js'
// и обработка Babel:
gulp.task('scriptSimple', function () {
    return src('./src/js/**/*.js')
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(dest('./public/js/'))
})


// Clean. Удаление Директорий.
// Плагин надо версии del@6.1.1, новые версии не поддерживают require():
gulp.task('clean', function () {
    return del('./public')
})

// Изображения
gulp.task('img', function () {
    return src('./src/img/*.{png,jpg,jpeg,gif,svg,webp}')
        .pipe(plumber({
            // Вывод сообщений на Рабочем столе - notify
            errorHandler: notify.onError(error => ({
                title: 'Image',
                message: error.message
            }))
        }))
        // Отменить сжатие уже сжатых картинок в ./public
        .pipe(newer('./public/img'))
        // Преобразование картинок в webp
        .pipe(webp())
        .pipe(src('./src/img/*.{png,jpg,jpeg,gif,svg,webp}'))
        .pipe(newer('./public/img'))
        .pipe(dest('./public/img'))
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(dest('./public/img'))
})

// Шрифты
gulp / task('fonts', function () {
    return src('./src/fonts/**/*')
        .pipe(plumber({
            // Вывод сообщений на Рабочем столе - notify
            errorHandler: notify.onError(error => ({
                title: 'Font',
                message: error.message
            }))
        }))
        .pipe(newer('./public/fonts'))
        .pipe(fonter({
            formats: ['ttf', 'woff', 'eot', 'svg']
        }))
        .pipe(dest('./public/fonts'))
        .pipe(ttf2woff2())
        .pipe(dest('./public/fonts'))
})

// Watcher
gulp.task('watcher', async function () {
    watch('./src/**/**/*.html', series('html'))
    watch('./src/css/**/*.css', series('css'))
    watch('./src/scss/**/*.scss', series('scss'))
    watch('./src/js/**/*.js', series('scriptSimple'))
    watch('./src/img/*.{png,jpg,jpeg,gif,svg,webp}', series('img'))
    watch('./src/font/**/*', series('fonts'))
})



// Сборка - Dev
// gulp.task('dev', series('clean',
//     parallel('html', 'css' ,'scss', 'scriptSimple', 'img', 'fonts'),
//     parallel('watcher', 'server')
// ))

// Сборка - Build
gulp.task('build', series(
    'clean',
    parallel('html', 'css', 'scss', 'scriptSimple', 'img', 'fonts')
    // parallel('htmlSimple', 'css', 'scss', 'script','img', 'fonts')
))
// Сборка - Dev
gulp.task('dev', series(
    'build',
    parallel('watcher', 'server')
))


