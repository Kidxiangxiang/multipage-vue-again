import Vue from 'vue'
import Test from './Test.vue'
import router from '../index/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#test',
  router,
  components: { Test },
  template: '<Test/>'
})