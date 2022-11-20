import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'
import './assets/font/iconfont.css'
import { IndexBar, IndexAnchor, Cell, CellGroup } from 'vant'
import { Tab, Tabs } from 'vant';
import { TreeSelect } from 'vant';
import { List } from 'vant';

Vue.config.productionTip = false
//Vue.prototype.axios = axios
Vue.use(IndexBar).use(IndexAnchor).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(TreeSelect).use(List);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
