import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
//import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';


const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        //.pipe(app.plugins.replace(/@img\//g, '.../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupMediaQueries())
/*        .pipe(webpCss(
            {
                webpClass: ".webp",
                noWebpClass: ".no-webp"
            }
        ))*/
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserList: ["Last 3 versions"],
            cascade: true
        }))
        //Убери коиментарий если нужен несжатый фаил css
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}
