import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', (value) => value.toLowerCase())


new Vue({
  el: '#app',
  render: h => h(App)
})
