const { multiply } = require('./jestbasics.js');
describe('jest basics',  () => {
  it('multiply function should result of two multiplied arguments', () => {
    const multiplied = multiply(2, 3);
    expect(multiplied).toEqual(6);
  });
})