const pkg = require('./package');

module.exports = {
  name: pkg.name,
  displayName: pkg.name,
  testPathIgnorePatterns: ['/node_modules/', './dist'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@test/packageA$': '<rootDir>/../packageA/src/index.ts',
    '^@test/packageB$': '<rootDir>/../packageB/src/index.ts',
    '^@test/packageC$': '<rootDir>/../packageC/src/index.ts',
    '^@test/packageD$': '<rootDir>/../packageD/src/index.ts',
  },
};
