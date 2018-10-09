<template>
  <div>
    <mainHeader></mainHeader>
    <nuxt/>
  </div>
</template>

<script>

  import mainHeader from "../components/mainPage/mainHeader.vue";

  export default {

    components:{
      mainHeader
    }

  }
</script>

<style>

  *{margin: 0;padding: 0;}

  a {

    text-decoration: none;
  }
</style>
