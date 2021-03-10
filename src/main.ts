import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

window.tagList = tagListModel.fetch()
window.removeTag =(id: string, type: string)=>{
  return tagListModel.remove(id,type)
}
window.createTag=(name: string,icon: string,type: string)=>{
  return tagListModel.create(name,icon,type)
}

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
