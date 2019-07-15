module.exports = {
  "verbose": true,
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!jest.config.js",
    "!config.js",
    "!webpack.**"
  ],
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "snapshotSerializers": [
    "jest-serializer-vue"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/coverage/",
  ],
  // "coverageThreshold": {
  //   "global": { // With this configuration, jest will fail if there is less than 80% branch, line, and function coverage, or if there are more than 10 uncovered statements:
  //     "branches": 80,
  //     "functions": 80,
  //     "lines": 5,
  //     "statements": -10
  //   }
  // }    
}
