module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['../jest.setup.ts'],
};
