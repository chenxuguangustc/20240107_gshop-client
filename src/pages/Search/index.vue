<template>
    <div>
      <h2>search组件</h2>
      <h3>{{ $route.params.keyword }}</h3>
      <h3>{{ $route.query.keyword2 }}</h3>
    </div>

  </template>
  
  <script>
  export default {
    name: 'Search',
    data () {
      return {}
    },
  }
  </script>
  
  <style lang="less" scoped>
  
  </style>