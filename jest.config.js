module.exports = {
  projects: [
    '<rootDir>/packages/packageA/jest.config.js',
    '<rootDir>/packages/packageB/jest.config.js',
    '<rootDir>/packages/packageC/jest.config.js',
    '<rootDir>/packages/packageD/jest.config.js',
  ],
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest'
  },
};
