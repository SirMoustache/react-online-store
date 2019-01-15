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
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  verbose: true,
  moduleDirectories: ['node_modules', 'app'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFiles: ['<rootDir>/enzyme-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
