import { createLocalVue, mount } from '@vue/test-utils';
import NewsCard from './../components/newscard.vue';
import { findNodeModule } from 'jest-resolve';

const localVue = createLocalVue();
describe('== news card component ==', () => {
  let cmp; 
  let stub = { 
    headline: 'My news headline it is',
    byline: 'Yoda',
    articleText: '<p>Luke Skywalker final jedi student he was...</p>',
    url: 'https://stuburl.com/yoda' 
  };
  it('news card should have byline props not equal to Author unknown', () => {
    cmp = mount(NewsCard, { localVue });
    cmp.setProps(stub);

    const text = cmp.text();
    expect(text.includes('Written by Yoda')).toBe(true);
    expect(text.includes('Author unknown')).toBe(false);
  });

  it('news card should display "Author unkown" when no byline prop provided', () => {
    cmp = mount(NewsCard, { localVue });

    const text = cmp.text();
    expect(text.includes('Written by Yoda')).toBe(false);
    expect(text.includes('Author unknown')).toBe(true);
  })
})