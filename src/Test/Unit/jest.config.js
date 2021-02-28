const { resolve } = require('path');

const root = resolve(__dirname, '..', '..', '..');

const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'unit-tests',
    testMatch: ['<rootDir>/src/Test/Unit/**/*.spec.ts'],
  },
};
