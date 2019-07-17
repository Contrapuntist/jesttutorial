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
      sectionTitle: 'Music News',
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
        const articles = res.data.response.results;
        console.log(articles);
        return this.parseResults(articles);
      }).catch(err => {
        return this.parseResults(tempdata.data.response.results);
      })
    },
    parseResults: function (res) {
      return res.map(article => {
        return {
          headline: article.fields.headline,
          articleText: article.fields.body,
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
    <div class="cntr">
      <h2 class="sectionTitle">{{ sectionTitle }}</h2>
      <news-section :articles="news" />
    </div>
  </div>
</template>

<style>
  .cntr {
    width: 90%;
    max-width: 1200px;
    margin: 30px auto;
  }

  .sectionTitle {
    margin-bottom: 25px;
  }

</style>

