<template>
  <div class="article">
    <div class="headline">{{ headline }}</div>
    <div class="byline">{{ byline !== '' ? `Written by ${byline}` : 'Author unknown' }}</div>
    <div v-html="articleText"></div>
    <div class="source">Source: <a :href="url"> {{ url }}</a></div>
  </div>
</template>

<script>
export default {
  name: 'newscard',
  props:{
    headline: { type: String, default: ''},
    byline: { type: String, default: '' },
    articleText: { type: String, default: ''},
    url: { type: String, default: '' },
  }
}
</script>

<style>
  
  .article h2 {
    display: none;
  }

  .headline {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .byline {
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid #687864;
    margin-bottom: 10px;
  }

  .source{
    text-align: end;
  }
</style>
