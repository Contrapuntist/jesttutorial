// https://stackoverflow.com/questions/47402005/jest-mock-how-to-mock-es6-class-default-import-using-factory-parameter

import * as parseNews from '../parseNews';
import axios from 'axios';
import mockData from './../../../data/musicnews.json'; // mocked data from guardian api response

jest.mock('axios');

describe('Processing news', () => {
  it('when processNews is called, should return an array of objects', async () => {
    axios.get.mockResolvedValue(mockData);
    const parsedNews = await parseNews.processNews();
    //console.log(parsedNews);
    expect(axios.get).toHaveBeenCalled(); 
    expect(Array.isArray(parsedNews)).toBe(true);
    expect(typeof parsedNews[0]).toBe('object');
  });

  it('processNews function ', async () => {
    axios.get.mockResolvedValue(mockData);
    const processnewsSpy = jest.spyOn(parseNews, 'processNews');
    const parsedNews = await parseNews.processNews()

    parsedNews.forEach(article => {
      expect(article.hasOwnProperty('headline')).toBe(true);
    });
    expect(processnewsSpy).toHaveBeenCalledTimes(1);
    //console.log(processnewsSpy)
  });

  it('write test for makeNewsArr function', () => {
    const mockedResponse = { ...mockData };
    
    const parsedArr = parseNews.makeNewsArr(mockedResponse.data.response.results);
    expect(Array.isArray(parsedArr)).toBe(true);

    const positionTwo = parsedArr[1];
    expect(typeof positionTwo).toEqual('object');
    
    expect(positionTwo.author).toBe('Tara Joshi');
  });


  afterEach(() => {
    jest.clearAllMocks(); // clean up between each unit test; ensure clean data and mocking within each test
  });

});