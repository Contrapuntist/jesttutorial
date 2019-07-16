<script>
import axios from 'axios';
import config from './../config';
export default {
  data() {
    return {
      msg: 'hello jest and vue testing'
    };
  },
  methods: {
    getNews: function() {
      const url = `https://content.guardianapis.com/search?section=music&order-by=newest&show-fields=all&q=rock&api-key=${config().guardian}`;
      return axios.get(url).then(response => {
        return this.parseResults(response);
      })
    },
    parseResults: function (res) {
      
    }
  }
}
</script>

<template>
  <div>{{ msg }}</div>  
</template>

<style scoped>

</style>

