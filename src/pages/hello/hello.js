import Vue from 'vue'
import Hello from './Hello.vue'
import router from '../index/router'

Vue.config.productionTip = false

new Vue({
    el: '#hello',
    router,
    components: { Hello },
    template: '<Hello/>'
  })