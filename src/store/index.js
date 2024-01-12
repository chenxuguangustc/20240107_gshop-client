/* 
Vuex最核心的管理对象store  ==》仓库

1、多个组件共享的状态 2、从后台获取的数据   存在vuex中，因此写一个异步action，发请求的代码放在action中，

vuex的多模块编程
vuex单模块编程的问题：1、需要管理的状态数据比较多，对用的mutations/actions模块就会变得更多，2、如果添加新的数据管理，需要修改现在文件
vuex的多模块编程：对各个功能模块的数据分别进行管理，这样更加具有扩展性，当vuex需要管理的数据比较多的时候使用
*/


import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

// 声明使用vuex插件
Vue.use(Vuex)

// const mutations = {
//   xxx (state) { state是总的状态

//   }
// }

// const actions = {
//   yyy ({commit}) {

//   }
// }

// const getters = { //相当于计算属性的get
//   zzz (state) {

//   }
// }
// 向外暴露store对象
export default new Vuex.Store({
  modules,// 配置store的所有模块
})

// vuex多模块编程的总状态结构：里面的是子模块
// {
//   home:{
//     categoryList: []
//   },

//   uesr: {
//     userInfo: {}
//   }
// }