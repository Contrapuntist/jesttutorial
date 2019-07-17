<template>
  <section class="newsection">
    <news-card 
      v-for="(article, index) in articles" 
      :key="index"
      :headline="article.headline" 
      :articleText="article.articleText" 
      :byline="article.author" 
      :url="article.url" 
      class="cards"/>
  </section>
</template>

<script>
import NewsCard from './newscard.vue';

export default {
  name: 'newsection',
  components: {
    NewsCard
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style>
  .newssection {
    width: 1200px;
  }

  .cards {
    margin-bottom: 15px;
  }
</style>
