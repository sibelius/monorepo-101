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
  moduleNameMapper: {
    '^@test/packageA$': '<rootDir>/packages/packageA/src/index.ts',
    '^@test/packageB$': '<rootDir>/packages/packageB/src/index.ts',
    '^@test/packageC$': '<rootDir>/packages/packageC/src/index.ts',
    '^@test/packageD$': '<rootDir>/packages/packageD/src/index.ts',
  },
};
