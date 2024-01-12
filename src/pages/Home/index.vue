<template>
  <div>
    <TypeNav />
    <!-- <type-nav></type-nav>  两种写法都可以-->
    <list-container />
    <today-recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>
  
  <script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Brand from "./Brand/Brand.vue";
import Floor from "./Floor/Floor.vue";
import Like from "./Like/Like.vue";
import Rank from "./Rank/Rank.vue";

export default {
  // components: { ListContainer, TodayRecommend },
  name: "Home",
  data() {
    return {};
  },

  components: {
    ListContainer,
    TodayRecommend,
    Brand,
    Floor,
    Like,
    Rank,
  },
};
</script>
  
  <style lang="less" scoped>
</style>