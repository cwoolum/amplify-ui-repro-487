module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "ts-jest",
    "^.+\\.js?$": "ts-jest",
  },
  testRegex: "src(/.*|(\\.|/)test)\\.(snapshot-)?tests.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
  testPathIgnorePatterns: ["/node_modules/"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleDirectories: ["node_modules", "src"],
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "cobertura", "html", "lcov"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 80,
      statements: 0,
    },
  },
  setupFiles: ["<rootDir>/.jest/setup-tests.ts"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  clearMocks: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
};
