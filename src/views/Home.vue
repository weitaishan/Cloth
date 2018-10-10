<template>
  <div class="home">

    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <mainBanner></mainBanner>
  </div>
</template>

<script>
// @ is an alias to /src
import mainBanner from '../components/mainBanner.vue'

export default {
  name: 'home',
  components: {
    mainBanner
  }
}
</script>
