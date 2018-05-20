<template>

  <div>
    <van-nav-bar title="我的信息"  left-arrow class="header" @click-left="onClickLeft()">
    </van-nav-bar>

    <div class="content">

      <img  class="headPortrait"  src="../assets/steam-planet-logo.png" >
      <div style="font-size: 13px; margin-top: -12px; margin-bottom: 50px; color: black;"
           @click="changeHeadPortrait()">点击修改头像
      </div>

      <div style="margin-bottom: 35px" >
        <span style="position: absolute; left: 50px; color: black">昵称</span>
        <input style="background-color: #efefe9; border: none;margin-left: 90px;color: #a7a592"
               v-model="user.name">
      </div>
      <br>

      <div style="margin-bottom: 35px;">
        <span style="position: absolute; left: 50px;  color: black">性别</span>
        <input style="background-color: #efefe9; border: none;margin-left: 90px;color: #a7a592"
               v-model="user.sex">

      </div>
      <br>


      <div style="margin-bottom: 35px;">
        <span style="position: absolute; left: 50px; color: black">地区</span>
        <input style="background-color: #efefe9; border: none;margin-left: 90px;color: #a7a592"
               v-model="user.address">

      </div>
      <br>

      <div style="margin-bottom: 35px;">
        <span style="position: absolute; left: 50px; color: black">生日</span>
        <input style="background-color: #efefe9; border: none;margin-left: 90px;color: #a7a592"
               v-model="user.birthday">

      </div>
      <br>



      <div style="margin-bottom: 35px;">
        <span style="position: absolute; left: 50px;  color: black">个人介绍</span>
        <input style="background-color: #efefe9; border: none;margin-left: 90px; color: #a7a592"
               v-model="user.message">

      </div>
      <br>

      <van-button size="normal"
                  style="background-color:#521D99;color: white;width: 180px;margin-top: 40px;"
                  @click="informationSubmit()">提交
      </van-button>





    </div>



  </div>





</template>

<script>

  import Vue from "vue";

    export default {
        name: 'MyInformation',
        components: {},
        data() {
            return {
              user:{
                name:'李佳文',
                sex:'女',
                address:'浙江杭州',
                birthday:'2018-09-01',
                message:'456345645'
              }


            }
        },
        methods: {
          changeHeadPortrait(){
            console.log('修改头像');
          },
          informationSubmit(){
            console.log('提交');
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


    .header{
      background-color: #521D99;
      color: white;
    }

  .content{
    background-color: #efefe9;
    height: 730px;

    .headPortrait{
      margin-top: 20px;
      width: 100px;
    }


  }



</style>



<style>

  .van-icon-arrow:before{
    color: white;
  }


</style>
