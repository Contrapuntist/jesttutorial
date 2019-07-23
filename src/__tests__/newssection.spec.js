import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import stubData from './../../data/parsednews.json';
import NewsSection from './../components/newssection.vue';
import NewsCard from './../components/newscard.vue';

const localVue = createLocalVue()

describe('== News Section component ==', () => {
  let cmp;

  // Need to load stub data when I mount component because props required
  let propsData = { articles: stubData.data }; 

  it('does not include news card component when articles empty', () => {
    cmp = mount(NewsSection, { localVue, propsData: { articles: [] } });
    //cmp.setProps({ articles: [] });
    expect(cmp.contains(NewsCard)).toBe(false); // article is empty
  });

  it('has a new articles props with array of objects', () => {
    cmp = shallowMount(NewsSection, { localVue, propsData });
    const hasArticles = cmp.vm.articles;
    expect(Array.isArray(hasArticles)).toBe(true);
  })

  it('has a newssection css class', () => {
    cmp = shallowMount(NewsSection, { localVue, propsData });
    expect(cmp.classes()).toContain('newsection');
  })

  it('has a section element', () => {
    cmp = shallowMount(NewsSection, { localVue, propsData });
    expect(cmp.contains('section')).toBe(true);
  });

});
