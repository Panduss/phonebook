module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testRegex: '(/__spec__/.*|(\\.|/)(spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['lib/', 'node_modules/'],
  testEnvironment: 'node'
};