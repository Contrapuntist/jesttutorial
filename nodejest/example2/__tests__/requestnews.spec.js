const { getNews } = require('../newsrequests');
const mockData = require('./../../data/musicnews.json');
const axios = require('axios');
jest.mock('axios');

describe('news requests module -- ', () => {
  it('get news sends request and returns an object', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockData));
    
    const newrequest = await getNews();
    expect(axios.get).toHaveBeenCalled()
    expect(newrequest).toEqual(mockData);

    // expect(getNews).toHaveBeenCalled(); // Each function needs to either be a spy or mock to test. Otherwise, error. 
  }); 

  it('when getting news, an error occurs', () => {
    // mockRejectedValue('error');
    axios.get.mockImplementationOnce(() => Promise.reject('error'));
    const newsrequest = getNews();
    expect(axios.get).toHaveBeenCalled()
    expect(newsrequest).rejects.toBe('error');
  });

  afterEach(() => {
    jest.resetAllMocks(); // clean up between each unit test; ensure clean data and mocking within each test
  });
});