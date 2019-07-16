<script>
import axios from 'axios';
import config from './../apiconfig';
import Header from './components/header.vue';
import NewsSection from './components/newssection.vue';
import tempdata from './../data/musicnews.json';

export default {
  name: 'app',
  components: {
    Header,
    NewsSection
  },
  data() {
    return {
      msg: 'hello jest and vue testing',
      news: [],
    };
  },
  created() {
    this.getNews().then(res => {
      this.news = res;
    });
  },
  methods: {
    getNews: function() {
      const url = `https://content.guardianapis.com/search?section=music&order-by=newest&show-fields=all&q=rock&api-key=${config().guardian}`;
      return axios.get(url).then(response => {
        return this.parseResults(response);
      })
    },
    parseResults: function (res = tempdata) {
      return res.data.response.results.map(article => {
        return {
          headline: article.fields.headline,
          articleText: article.fields.bodyText,
          author: article.fields.byline,
          url: article.webUrl
        };
      });
    }
  }
}
</script>

<template>
  <div>
    <Header />
    <div>{{ msg }}</div>
    <news-section :news="news" />
  </div>
</template>

<style scoped>

</style>

