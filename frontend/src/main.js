import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// components
import ResultComponent from './components/ResultComponent'
import HistoryComponent from './components/HistoryComponent'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { name: 'search', path: '/search/:query', component: ResultComponent },
  { name: 'history', path: '/history', component: HistoryComponent }
]
const router = new VueRouter({ routes })

window.app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
