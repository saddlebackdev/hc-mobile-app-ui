const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');

// Paths
const paths = {
  build: './dist',
  source: './source',
};

// Clean Destination
function taskCleanDestination() {
  return del([`${paths.build}/**/*`]);
}

// Transpile Typescript
function taskTranspileTypescript() {
  const tsProject = ts.createProject('tsconfig.json');

  const result = tsProject.src().pipe(tsProject());

  return result.js.pipe(gulp.dest('dist'));
}

// Copy Declarations
function taskCopyDeclarations() {
  return gulp
    .src(`${paths.source}/declarations/**/*`)
    .pipe(gulp.dest(`${paths.build}/declarations`));
}

// Copy Images
function taskCopyImages() {
  return gulp
    .src(`${paths.source}/images/**/*`)
    .pipe(gulp.dest(`${paths.build}/images`));
}

// Build Library
const taskBuildLibrary = gulp.series([
  taskCleanDestination,
  taskTranspileTypescript,
  taskCopyDeclarations,
  taskCopyImages,
]);

// Exports
exports.clean = taskCleanDestination;
exports.transpile = taskTranspileTypescript;
exports.copyDeclarations = taskCopyDeclarations;
exports.copyImages = taskCopyImages;
exports.build = taskBuildLibrary;
