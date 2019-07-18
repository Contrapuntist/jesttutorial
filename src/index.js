import './css/reset.css';
import './css/app.css';
import Vue from 'vue';
import App from './App.vue';

export default new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
});