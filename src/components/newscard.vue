<template>
  <div >
    <div>{{Headline}}</div>
    <div>{{ byline !== '' ? `Written by ${byline}` : 'Author unknown' }}</div>
    <div>{{ articleText }}</div>
    <div>Source: {{ url }}</div>
  </div>
</template>

<script>
export default {
  props:{
    headline: { type: String, default: ''},
    byline: { type: String, default: '' },
    articleText: { type: String, default: ''},
    url: { type: String, default: '' },
  }
}
</script>

<style>

</style>
