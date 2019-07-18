import App from './../App.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import axios from 'axios';
import mockData from './../../data/musicnews.json';

jest.mock('axios'); // method calls axios.get
const localVue = createLocalVue(); // don't pollute global vue instance 

describe('-- App.vue --', () => {
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
    const appHtml = cmp.html();

    console.log(appHtml);
  });

  it('When App.vue loads, should contain "Music news" text', () => {
    const div = cmp.find('div');
    console.log(div.text());
    expect(div.text()).toEqual('Music News');
  });
  
  afterEach(() => {
    jest.resetAllMocks();
  });
});