module.exports = {
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    '!pages/*.{js,jsx}',
    '!pages/index.{js,jsx}',
    '!**/*.test.{js,jsx}',
    '!.next/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30,
    },
  },
  verbose: true,
  moduleDirectories: ['node_modules', 'app'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFiles: [],
  snapshotSerializers: [],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
