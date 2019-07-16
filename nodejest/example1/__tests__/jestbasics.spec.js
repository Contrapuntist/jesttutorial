const { multiply, add } = require('../jestbasics.js');
describe('jest basics',  () => {
  it('multiply function should return result of two multiplied arguments', () => {
    expect.hasAssertions();

    const multiplied = multiply(2, 3);
    expect(multiplied).toEqual(6);
    expect(multiplied).not.toEqual(5);

    expect(multiplied).toBe(6); 
  });

  it('multiply function returns a number', () => {
    const multiplied = multiply(2, 3);
    expect(typeof multiplied).toBe('number')
    expect(typeof multiplied).not.toBe('boolean');
  });

  it.todo('add'); // also it.skip for broken tests jest v.24+
});