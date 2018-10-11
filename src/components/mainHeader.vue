<template>

  <el-header class="header-container" style="height: 80px">

    <div class="container">
      <div class="header-left">

        <!--<div class='logo'>-->
        <a href="#" class="logo"></a>
        <!--<img src='../assets/logo.png' class="logo">-->
        <!--</div>-->

        <div class="menu-box">

          <ul>
            <li v-for="item in items"
                v-bind:id="item.type"
                class="menu">
              <template v-if="item.type">

                <a
                  href="#"
                  @mouseenter="evtHeaderEnter(item.type)"
                  @mouseleave="evtHeaderLeave()">{{item.name}}</a>

              </template>
              <template v-else>
                <a :href="item.sourceUrl" target="_blank" class="nav-item">{{item.name}}</a>
              </template>
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
    </div>
    <transition name="fade">
      <div class="header-menu"
           @mouseenter="evtHeaderEnter()"
           @mouseleave="evtHeaderLeave()"
           v-show="headerStatus">
        <ul class="menus clearfix">
          <li class="product" v-for="item in currentItem">
            <!--<a :href="item.sourcePath">-->
            <!--<img :src="item.imgUrl" alt="" class="product-img"/>-->
            <!--</a>-->
            <div class="product-name">{{item.name}}</div>
            <div class="product-price">
              <!--{{item.price}}-->
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </el-header>

</template>

<script>

  export default {
    name: "mainHeader",
    data() {

      return {
        hotStatus: true,
        headerStatus: false,
        tids: '',
        currentItem: this.items,

        items: [
          {
            name: '童装',
            type: 'kids'
          },
          {
            name: '牛仔',
            type: 'cowboy'
          },
          {
            name: '裙子',
            type: 'skirt'
          }],
        kids: [{name: '衣服'}],
        cowboy: [{name: '牛仔'}],
        skirt: [{name: '裙子'}],
      }

    },
    methods: {

      evtHeaderEnter(menuType) {
        if (menuType) {
          this.currentItem = this[menuType]
        }
        this.headerStatus = true
        clearTimeout(this.tids)
      },
      evtHeaderLeave() {
        let self = this
        this.tids = setTimeout(function () {
          self.headerStatus = false
        }, 300)
      }

    }
  }

</script>


<style lang="less" type="text/less" scoped>

  .header-container {
    position: fixed;
    top: 0;
    z-index: 1000;
    height: 80px;
    width: 100%;
    background-color: black;

    .logo {
      left: 20px;
      margin-top: 15px;
      /*line-height: 80px;*/
      background: url("../assets/logo.png") no-repeat;
      background-size: 100% 100%;
      width: 50px;
      height: 50px;
      position: absolute;

    }

    .menu-box {

      display: inline-block;
      margin-left: 80px;
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

    .header-menu {
      position: absolute;
      left: 0;
      top: 80px;
      width: 100%;
      height: 230px;
      background: #fff;
      box-shadow: 0 1px 5px #ccc;
      z-index: 11;
      .menus {
        list-style: none;
        margin: 0;
        padding: 30px 0 0 150px;
        min-width: 1500px;
        .product {
          float: left;
          a {
            display: block;
            padding: 0 30px;
            border-right: 1px solid #ccc;
          }
          &:nth-last-child(1) {
            a {
              border-right: 0;
            }
          }
          .product-img {
            width: 100%;
            width: 160px;
            height: 110px;
          }
          .product-name {
            width: 100%;
            height: 16px;
            margin-top: 16px;
            font-size: 12px;
            text-align: center;
          }
          .product-price {
            width: 100%;
            height: 14px;
            margin-top: 10px;
            font-size: 10px;
            text-align: center;
            color: #ff6700;
          }
        }
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

  }

</style>
