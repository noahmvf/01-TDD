const greet = require('./../lib/greet');

describe('testing a string value', () => {
  test('parameter should be a string', () => {
    expect (greet('Noah').toBe('hello Noah'))
  });
});

describe('testing #greet', () => {
  //Write a test that expects the greet module to return null when you supply non-string values
  describe('testing for greet used with non-string values', () => {
    test('greet as not a string should return null', () => {
      expect(greet(2)).toBe(null);
      expect(greet([])).toBe(null);
      expect(greet({})).toBe(null);
    });
  });

  //Write a test that expects the greet module to return 'hello world'
  describe('testing #greet.world', () => {
    test('greet.world should return Hello World', () => {
      expect(greet.world()).toEqual('Hello World');
    });
  });
});