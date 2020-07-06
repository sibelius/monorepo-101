const pkg = require('./package');

module.exports = {
  name: pkg.name,
  displayName: pkg.name,
  testPathIgnorePatterns: ['/node_modules/', './dist'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
  },
};
