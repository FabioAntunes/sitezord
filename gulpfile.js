var elixir = require('laravel-elixir');
require('laravel-elixir-wiredep');
require('laravel-elixir-useref');
require('laravel-elixir-angular');
var inject = require('gulp-inject');
var gulp = require('gulp');

var path = require('path');
var task = elixir.Task;

elixir.extend('inject', function() {

    new task('inject', function() {
        var src = './resources/views/welcome.blade.php';
        var sources = gulp.src(['./public/js/**/*.js', './public/css/**/*.css'], {read: false});

        return gulp.src(src).pipe(inject(sources, {ignorePath : '/public'}))
            .pipe(gulp.dest('./resources/views'));
    })
        .watch(['./public/js/**/*.js', './public/css/**/*.css']);

});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')
    .angular('resources/assets/angular/', 'public/js/', 'app.js')
    .wiredep()
    .inject()
    .copy('resources/assets/html', 'public/views');

    // Build stuff
    if (elixir.config.production) {
        mix.useref({src: 'master.blade.php'}, { searchPath: 'public' });
    }
});
