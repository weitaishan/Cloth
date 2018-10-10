<template>
  <div class="home">

    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <main-banner></main-banner>
    <goods-item></goods-item>
  </div>
</template>

<script>
// @ is an alias to /src
import mainBanner from '../components/mainBanner.vue'
import GoodsItem from '../components/GoodsItem.vue'

export default {
  name: 'home',
  components: {
    'main-banner':mainBanner,
    'goods-item':GoodsItem
  }
}
</script>

<style lang="less" type="text/less">

  .home{

    background: #f5f5f5;
  }
</style>
