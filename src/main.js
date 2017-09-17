import Vue from 'vue'
import Disqus from 'vue-disqus/VueDisqus.vue'

new Vue({
  el: '#app',
  delimiters: ['{[', ']}'],
  data () {
    return {
      message: 'Welcome to vue.js framework'
    }
  },
  components: {
    Disqus
  }
})
