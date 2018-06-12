const arithmetic = require ('./../lib/arithmetic');

describe('testing a number value', () => {
  test('parameter should be a number', () => {
    expect(arithmetic.any(1,2)).toEqual(1,2);
  });
});

describe('tests adding two numbers together', () => {
  test('1 + 2 to equal 3', () => {
    expect(arithmetic.add(1,2)).toEqual(3);
  });
});

describe('tests subtracting two numbers together', () => {
  test('2 - 1 to equal 1', () => {
    expect(arithmetic.sub(2,1)).toEqual(1);
  });
});