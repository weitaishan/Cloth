<template>
  <div id="product">
  	<productClass></productClass>
    <mainTable></mainTable>
  </div>
</template>


<script type="text/javascript">
  import mainTable from './mainTable'
  import productClass from './productClass'
  export default{
    name:'product',
    components:{
      productClass,
      mainTable,
    }
  }
</script>

<style type="text/css">
  html,body,#product{
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: white;
  }
</style>