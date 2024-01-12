import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'

Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router, //注册路由器 ==> 所有组件都可以直接访问两个对象：$router和$route
  store,  //注册vuex ==>所有组件都可以直接访问1个对象：$store
}).$mount('#app')

// store对象的功能，组件跟vuex交互就是靠这个对象
// 读数据：store.state.xxx  2、store.getters.yyy
// 更新数据：1、要触发action调用 store.dispatch(action, data) 2、触发mutations的调用 Store.commit(mutation名称，data)   