//import './css/main.css';
import Vue from 'vue';
import App from './App.vue';
//import store from './store';

export default new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
  //store,
});