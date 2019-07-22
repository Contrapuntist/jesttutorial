import App from './../App.vue';
import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import axios from 'axios';
import mockData from './../../data/musicnews.json';
import NewsSection from './../components/newssection.vue';

jest.mock('axios'); // method calls axios.get
const localVue = createLocalVue(); // don't pollute global vue instance 

describe('-- App.vue -->  load cmp with beforeEach', () => {
  let cmp; // my component variable to mount component. Made global since all tests can use same value.
  beforeEach(() => {
    axios.get.mockResolvedValue(mockData);
    cmp = shallowMount(App, { localVue }); // shallow loadding comp; children (newsection, newscard) cmps stubbed;
  });

  it('When App.vue loads, should have news prop with data', () => {
    //console.log(cmp.vm);
    const hasNews = cmp.vm.news;
    //console.log(hasNews);
    expect(cmp.is(App)).toBe(true);
    expect(hasNews.length).toBe(10);
    expect(cmp.contains(NewsSection)).toBe(true);
    const appHtml = cmp.html();

    //console.log(appHtml);
    expect(appHtml).toContain('<div>')
  });

  it('When App.vue loads, should contain "Music news" text', () => {
    const div = cmp.find('div');
    console.log(div.text());
    expect(div.text()).toEqual('Music News');
  });
  
  it('When App.vue loads, it should have NewsSection component and a <div>', () => {
    expect(cmp.contains(NewsSection)).toBe(true);
    const appHtml = cmp.html();

    //console.log(appHtml);
    expect(appHtml).toContain('<div>')
  })

  afterEach(() => {
    jest.resetAllMocks();
  });
});

describe('-- App.vue -->  mount cmp in each test', () => {
  let cmp; // my component variable to mount component. Made global since all tests can use same value.
  beforeEach(() => {
    axios.get.mockResolvedValue(mockData);
  });

  it('does news prop have data', () => {
    const stub = [
      { 
        headline: 'Trailer to Top Gun sequal revealed',
        articleText: '<p>Thirty fours after the original release of Top Gun, Tom Cruise surprised Comic-Con attendees with a new trailer...</p>',
        author: 'Goose\'s ghost',
        url: article.web
      }
    ]; 
    const propsData = { news: stub }
    

    cmp = mount(App, {localVue, })
  });

});
