module.exports = {
  preset: 'react-native',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: ['src/pages/**/*.js', 'src/components/**/**/*.js'],
  coverageDirectory: '__tests__/coverage',
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/__tests__/jest.setup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation||@react-native-community)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/ios',
    '<rootDir>/android',
    '<rootDir>/__tests__/jest.setup.js',
    '<rootDir>/node_modules'
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};
