<template>
  <div class="header">

    <div class="header-container">


      <div class="header-left">

        <div class='logo'>
          <img src='../assets/logo.png'>
        </div>

        <ul>
          <li class="menu">
            <a href="童装"></a>
            <div class="sub-menu"></div>
          </li>

          <li class="menu">
            <a href="牛仔"></a>
            <div class="sub-menu"></div>
          </li>

          <li class="menu">
            <a href="裙子"></a>
            <div class="sub-menu"></div>
          </li>
        </ul>

      </div>

      <div class="header-right">

      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style scoped type="text/less">
  .header{

    height: 100px;
    background: #41b883;

  }

</style>
