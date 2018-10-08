<template>
  <div id="index">
    <mainHeader></mainHeader>
    <mainBanner></mainBanner>
    <mainFooter></mainFooter>
    <mainFooterB></mainFooterB>
  </div>
</template>


<script type="text/javascript">
  import mainHeader from './mainHeader'
  import mainBanner from './mainBanner'
  import mainFooter from './mainFooter'
  import mainFooterB from './mainFooterB'
  export default{
    name:'index',
    components:{
      mainHeader,
      mainBanner,
      mainFooter,
      mainFooterB,
    }
  }
</script>

<style type="text/css">
  html,body,#index{
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: black;
  }
</style>