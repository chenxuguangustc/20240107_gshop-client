<template>
    <div>
      <TypeNav/>
      <!-- <type-nav></type-nav>  两种写法都可以-->
      <list-container/>
      <today-recommend/>
    </div>
  </template>
  
  <script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
  export default {
  // components: { ListContainer, TodayRecommend },
    name: 'Home',
    data () {
      return {}
    },

    components: {
      ListContainer,
      TodayRecommend
    }
  }
  </script>
  
  <style lang="less" scoped>
  </style>