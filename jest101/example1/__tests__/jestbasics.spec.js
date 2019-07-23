const { multiply, add, getInitials } = require('../jestbasics.js');

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
  it('addition function returns two added arguments when included', () => {
    const addWithArgs = add(10, 25);
    expect(addWithArgs).toBe(35);

    const addWithOneArg = add(10);
    expect(addWithOneArg).toBe(10);

    const addwithNoArgs = add();
    expect(typeof addwithNoArgs).toBe('string');
    expect(addwithNoArgs).toEqual('Unable to add with missing arguments');
  });


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

  it('getInitial returns capitlazed initials or null', () => {
    const success = getInitials('miguel', 'cano');
    expect(success).toBe('MC');

    const fail = getInitials('miguel', '');
    expect(fail).toBeNull();
  });

});