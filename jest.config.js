module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,ts,hbs}', '!**/node_modules/**']
};
