module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'cobertura'],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!react-modal)/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.mock.js',
  },
};
