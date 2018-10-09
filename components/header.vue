<template>

  <el-header class="header-container" style="height: 80px">

    <div class="header-left">

      <div class='logo'>
        <img src='../../assets/logo.png'>
      </div>

      <div class="menu-box">

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


    </div>

    <div class="header-right">

      <ul>
        <li class="menu">
          <a href="关于我们"></a>
        </li>

        <li class="menu">
          <a href="联系方式"></a>
        </li>
      </ul>

    </div>

  </el-header>
  <!--<div @click="goKids" class='mainHeader'>-->
  <!--&lt;!&ndash; logo &ndash;&gt;-->
  <!--<div class='logo'>-->
  <!--<img src='../../assets/logo.png'>-->
  <!--</div>-->
  <!-- 分类 -->
  <!--<div class="headerClassify">-->
  <!--<table class="classTable">-->
  <!--<tr>-->
  <!--<td>-->
  <!--<div>童装-->
  <!--<span class="menu-icon-box e-menu-icon-box">-->
  <!--<i class="icon icon-arrow-down">-->
  <!--</i>-->
  <!--</span>-->
  <!--</div>-->
  <!--</td>-->
  <!--<td>-->
  <!--<a href="https://www.adidas.com.cn/kids">牛仔-->
  <!--<span class="menu-icon-box e-menu-icon-box">-->
  <!--<i class="icon icon-arrow-down">-->
  <!--</i>-->
  <!--</span>-->
  <!--</a>-->
  <!--</td>-->
  <!--<td>-->
  <!--<a href="https://www.adidas.com.cn/kids">裙子-->
  <!--<span class="menu-icon-box e-menu-icon-box">-->
  <!--<i class="icon icon-arrow-down">-->
  <!--</i>-->
  <!--</span>-->
  <!--</a>-->
  <!--</td>-->
  <!--</tr>-->
  <!--</table>-->
  <!--</div>-->
  <!-- 关于我们 -->
  <!--<div class="headerAbout">-->
  <!--<table class="aboutTable">-->
  <!--<tr>-->
  <!--<td>-->
  <!--<a href="https://www.adidas.com.cn/kids">关于我们-->
  <!--<span class="menu-icon-box e-menu-icon-box">-->
  <!--<i class="icon icon-arrow-down">-->
  <!--</i>-->
  <!--</span>-->
  <!--</a>-->
  <!--</td>-->
  <!--<td>-->
  <!--<a href="https://www.adidas.com.cn/kids">联系方式-->
  <!--<span class="menu-icon-box e-menu-icon-box">-->
  <!--<i class="icon icon-arrow-down">-->
  <!--</i>-->
  <!--</span>-->
  <!--</a>-->
  <!--</td>-->
  <!--</tr>-->
  <!--</table>-->
  <!--</div>-->
  <!--</div>-->
</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goKids() {

        this.$router.push('/kids');

      }
    }
  }

</script>


<style lang="less" type="text/less">

  .header-container {

    height: 80px;
    width: 100%;
    background-color: black;

    .header-left {

      float: left;
      .logo {

        position: relative;
        left: 20px;
        width: 50px;
        height: 50px;
        margin-top: 15px;
      }

      .menu-box {

        position: relative;
        height: 100%;
        width: 50%;


      }
    }

    .header-right {

      float: right;
    }

  }

  /*.mainHeader {*/
  /*position: fixed;*/
  /*width: 100%;*/
  /*height: 80px;*/
  /*top: 0px;*/
  /*z-index: 1000;*/
  /*background-color: black;*/
  /*}*/

  /*.logo {*/
  /*position: absolute;*/
  /*left: 20px;*/
  /*top: 30%;*/
  /*}*/

  /*.logo img {*/
  /*width: 50px;*/
  /*height: auto;*/
  /*}*/

  /*!*分类*!*/
  /*.headerClassify {*/
  /*position: absolute;*/
  /*left: 100px;*/
  /*top: 20px;*/
  /*}*/

  /*.headerClassify table td:hover {*/
  /*background-color: white;*/
  /*}*/

  /*.headerClassify table td:hover a {*/
  /*color: black;*/
  /*}*/

  /*.headerClassify table {*/
  /*height: 60px;*/
  /*border-collapse: collapse;*/
  /*}*/

  /*.headerClassify table td {*/
  /*width: 68px;*/
  /*height: 100%;*/
  /*text-align: center;*/
  /*}*/

  /*.headerClassify table a {*/
  /*text-decoration: none;*/
  /*font-size: 18px;*/
  /*font-weight: bold;*/
  /*color: white;*/
  /*}*/

  /*!*关于*!*/
  /*.headerAbout {*/
  /*position: relative;*/
  /*float: right;*/
  /*width: 200px;*/
  /*height: 60px;*/
  /*right: 20px;*/
  /*top: 20px;*/
  /*}*/

  /*.headerAbout table td:hover {*/
  /*background-color: white;*/
  /*}*/

  /*.headerAbout table td:hover a {*/
  /*color: black;*/
  /*}*/

  /*.headerAbout table {*/
  /*height: 60px;*/
  /*border-collapse: collapse;*/
  /*}*/

  /*.headerAbout table td {*/
  /*width: 90px;*/
  /*height: 100%;*/
  /*text-align: center;*/
  /*}*/

  /*.headerAbout table a {*/
  /*text-decoration: none;*/
  /*font-size: 18px;*/
  /*font-weight: bold;*/
  /*color: white;*/
  /*}*/
</style>
