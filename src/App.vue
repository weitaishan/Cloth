<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
    <main-footer></main-footer>

  </div>
</template>
<script>
  import mainHeader from './components/mainHeader.vue';
  import mainFooter from './components/mainFooter.vue';

  export default {

    components:{
      'main-header':mainHeader,
      'main-footer':mainFooter
    }
  }
</script>
<style lang="less" type="text/less">

  @import './assets/css/base.css';

</style>
