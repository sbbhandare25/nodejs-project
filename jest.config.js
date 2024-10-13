const fs = require("fs");
const tsJest = require("ts-jest");

const { compilerOptions } = JSON.parse(
  fs.readFileSync("tsconfig.json", "utf-8"),
);

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: tsJest.pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  clearMocks: true,
};
