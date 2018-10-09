<template>

  <el-header class="header-container" style="height: 80px">

    <div class="header-left">

      <div class='logo'>
        <img src='../../assets/logo.png'>
      </div>

      <div class="menu-box">

        <ul>
          <li class="menu">
            <a href="#">童装</a>
            <div class="sub-menu"></div>
          </li>

          <li class="menu">
            <a href="#">牛仔</a>
            <div class="sub-menu"></div>
          </li>

          <li class="menu">
            <a href="#">裙子</a>
            <div class="sub-menu"></div>
          </li>
        </ul>

      </div>


    </div>

    <div class="header-right">

      <div class="menu-box">

        <ul>
          <li class="menu">
            <a href="#">关于我们</a>
          </li>

          <li class="menu">
            <a href="#">联系方式</a>
          </li>
        </ul>

      </div>

    </div>

  </el-header>

</template>

<script>

  export default {

    methods: {

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

    .logo {

      left: 20px;
      margin-top: 15px;
      line-height: 80px;
      display: inline-block;
      width: 50px;
      height: 50px;

    }

    .menu-box {

      display: inline-block;
      margin-left: 30px;
      margin-bottom: 15px;
      height: 60px;

      ul {

        height: 60px;
        list-style: none;

        li:hover {

          background: white;
          a {

            color: black;

          }
        }
      }

    }

    .header-left {
      float: left;
      height: 100%;

    }

    .header-right {

      float: right;

    }

    .menu-box {

      li {

        margin-top: 20px;
        text-align: center;
        height: 60px;
        width: 80px;
        display: inline-block;
        line-height: 60px;

      }
    }

    .menu {

      a {
        color: white;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

</style>
