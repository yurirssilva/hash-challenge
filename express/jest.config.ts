import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  bail: 1,
  coveragePathIgnorePatterns: ["<rootDir>/src/proto/"]
};
export default config;