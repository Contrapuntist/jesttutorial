// https://stackoverflow.com/questions/47402005/jest-mock-how-to-mock-es6-class-default-import-using-factory-parameter

const { processNews } = require('../processnews');

describe('Processing news', () => {

  // What's the problem with this test? 
  it('processNews function should not return null', () => {
    const processedNews = processNews();
    expect(processedNews).not.toBeNull();
  });

  /** 
   * Ordinarily, testing newsrequest.js should be in its own suite
   */
  it('when processNews is called, should return an array', () => {
    //const spy = spyOn(axios, 'get');
    const processedNews = processNews();
    //expect(spy).toHaveBeenCalled();
    expect(Array.isArray(processedNews)).toBe(true);

  });

  // it('processNews function should return with array of objects with length of 10', () => {
  //   const processedNews = processNews();

  // })

});