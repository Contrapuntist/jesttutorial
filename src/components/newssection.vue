<template>
  <div>
    
  </div>
</template>

<script>
import NewsCard from './newscard.vue';

export default {
  name: 'newsection',
  components: {
    NewsCard
  },
  props: {
    news: {
      type: Array,
      default: [],
      required: true
    }
  }
}
</script>

<style>
</style>
