module.exports = {
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    '!pages/_*.{js,jsx}',
    '!pages/index.{js,jsx}',
    '!**/*.test.{js,jsx}',
    '!.next/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  verbose: true,
  moduleDirectories: ['node_modules', 'app'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFiles: ['<rootDir>/enzyme-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
