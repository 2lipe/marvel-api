/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
import { resolve } from 'path';

const root = resolve(__dirname);

export default {
  clearMocks: true,
  coverageProvider: 'v8',
  rootDir: root,
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/Test/jest.setup.ts'],
  testMatch: ['**/*.spec.ts'],
};
