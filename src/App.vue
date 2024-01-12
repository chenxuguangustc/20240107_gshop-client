<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import {reqBaseCategoryList} from '@/api'

export default {
  name: 'App',

  mounted() {
    // 异步获取三级分类列表
    // reqBaseCategoryList().then(result => {
    //   console.log('333333333333333')
    //   console.log(result)
    // })

    // 分发请求获取分类列表的异步action
    this.$store.dispatch('getBaseCategoryList')
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>