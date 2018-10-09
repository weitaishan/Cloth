<template>
  <section class="container">

    <!--<mainBanner></mainBanner>-->

  </section>
</template>

<script>
  // import mainBanner from '../components/mainPage/mainBanner';
  import mainHeader from '../components/mainPage/mainHeader';

  export default {
    components: {
      mainHeader,
      // mainBanner
    },
    methods: {

      goKids() {

        this.$router.push('/kids');

      }

    }

  }
</script>

<style>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>
