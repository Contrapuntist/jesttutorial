const { multiply, add, getInitials } = require('../jestbasics.js');

// You do not need to import Jest into a test suite.  

describe('jest basics',  () => {
  it('multiply function should return result of two multiplied arguments', () => {
    expect.hasAssertions();

    const multiplied = multiply(2, 3);
    expect(multiplied).toBe(6); 
    expect(multiplied).toEqual(6);
    expect(multiplied).not.toEqual(5);

  });

  it('multiply function returns a number', () => {
    const multiplied = multiply(2, 3);
    expect(typeof multiplied).toBe('number')
    expect(typeof multiplied).not.toBe('boolean');
  });

  /**
   * Write two expect statements.
   * - One should consider when two arguments are passed. 
   * - Second should either consider results for no arguments or one
   * - If you have time, think of additional test opportunities  
   */
  it.todo('add'); // also it.skip for broken tests jest v.24+


  /**
   * Write three expect statements. 
   * - One test should be a success path 
   * - the second should be a failure path
   * - Add your own third test. Explore matcher options. 
   * 
   * Hints: 
   * - success matcher options: .toBe() .toMatch() 
   * - failure matcher options:  .toBeNull(), .toBeFalsy() 
   */

  it.todo('getInitial returns capitlazed initials or null');

});