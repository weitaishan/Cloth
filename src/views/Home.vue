<template>
  <div class="home">

    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <main-image></main-image>
    <main-banner></main-banner>
    <main-Scene></main-Scene>
  </div>
</template>

<script>
// @ is an alias to /src
import mainImage from '../components/mainImage.vue'
import mainBanner from '../components/mainBanner.vue'
import mainScene from '../components/mainScene.vue'
export default {
  name: 'home',
  components: {
    'main-image':mainImage,
    'main-banner':mainBanner,
    'main-Scene':mainScene,
  }
}
</script>

<style lang="less" type="text/less">

  .home{
    min-width: 1100px;
    background: #f5f5f5;
  }
</style>
