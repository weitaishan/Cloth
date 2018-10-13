<template>
  <div class="home">

    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <main-image></main-image>
    <main-banner></main-banner>
    <main-Scene></main-Scene>
    <goods-item></goods-item>
  </div>
</template>

<script>
// @ is an alias to /src
import mainImage from '../components/mainImage.vue'
import mainBanner from '../components/mainBanner.vue'
import mainScene from '../components/mainScene.vue'
import GoodsItem from '../components/GoodsItem.vue'

export default {
  name: 'home',
  components: {
    'main-image':mainImage,
    'main-banner':mainBanner,
    'main-Scene':mainScene,
    'goods-item':GoodsItem
  }
}
</script>

<style lang="less" type="text/less">

  .home{

    background: #f5f5f5;
  }
</style>
