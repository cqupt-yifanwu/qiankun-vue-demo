import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

import { registerMicroApps, start } from 'qiankun'

/**
* 路由监听
* @param {*} routerPrefix 前缀
*/
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  {
    name: 'subA',
    // entry: 'http://1.192.127.107:9006/qiankun-subA',
    entry: '//localhost:7010',
    container: '#micapp',
    activeRule: genActiveRule('/subA')
    // activeRule: '/qiankun-main/subA'
  },
  {
    name: 'subB',
    // entry: 'http://1.192.127.107:9006/qiankun-subA',
    entry: '//localhost:9091',
    container: '#micapp',
    activeRule: genActiveRule('/subB')
    // activeRule: '/qiankun-main/subA'
  }
])

start()

Vue.config.productionTip = false

Vue.use(vueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
