import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.sass`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.sass`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,ico}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
