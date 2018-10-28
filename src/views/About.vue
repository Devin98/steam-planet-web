<template >
  <div class="home">


    <img src="../assets/steam-planet-logo.png" style="width: 53%; margin-top: 70px">


    <div class="login-header" @click="showLogin()">
      登录
    </div>

    <div class="register-header" @click="showRegister()">
      注册
    </div>

    <div class="login-header-underline" v-show="loginUnderline"></div>
    <div class="register-header-underline" v-show="registerUnderline"></div>


    <div v-show="isShowLogin" class="login">

      <input placeholder="手机号" class="input tel"
             v-model="tel"
             type="text"
             name="tel">

      <br>

      <input placeholder="密码" class="input pwd"
             v-model="pwd"
             type="password"
             name="pwd">

      <br>


      <button class="button" @click="login()">登录</button>
    </div>

    <div v-show="isShowRegister" class="register">

      <input placeholder="昵称" class="input name"
             v-model="name"
             type="text"
             name="name">

      <br>

      <input placeholder="手机号" class="input tel"
             v-model="tel"
             type="text"
             name="tel">

      <br>

      <input placeholder="密码（不小于6位）" class="input pwd"
             v-model="pwd"
             type="password"
             name="pwd">


      <br>

      <button class="button" @click="register()">注册</button>


    </div>





  </div>
</template>

<script>

  import Vue from 'vue';
  import { Tab, Tabs } from 'vant';
  import { Button } from 'vant';


  Vue.use(Button);
  Vue.use(Tab).use(Tabs);

    export default {
        name: 'About',
        components: {},
        data() {
            return {
              isShowLogin:true,
              isShowRegister:false,
              loginUnderline:true,
              registerUnderline:false,
              tel:'',
              pwd:'',
              name:'',

            }
        },
        methods: {

          showLogin(){
            this.isShowLogin = true;
            this.loginUnderline = true;
            this.isShowRegister = false;
            this.registerUnderline = false;

          },

          showRegister(){
            this.isShowLogin = false;
            this.loginUnderline = false;
            this.isShowRegister = true;
            this.registerUnderline = true;
          },

          login(){
            console.log('login');
            this.$router.push({path:'/home'})
          },

          register(){
            console.log('register');
            this.$router.push({path:'/home'})

          },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home{
    width: 100vw;
    height: 100vh;
    color: #fff;
    background-image: url("../assets/starSky.jpg");
    background-size:100% 100% ;

    .login-header{
      position: absolute;
      left: 30%;
      top: 250px;
      float: left;
      color: white;
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 30px;
    }


    .register-header{
      position: absolute;
      left: 60%;
      top: 250px;
      color: white;
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 30px;

    }


    .login-header-underline{
      width: 50px;
      height: 5px;
      background-color: white;
      position: absolute;
      margin-top: 15px;
      left: 30%;
    }

    .register-header-underline{
      width: 50px;
      height: 5px;
      background-color: white;
      position: absolute;
      margin-top: 15px;
      left: 60%;
    }

    .login{
      margin-top: 60px;

      .input{
        border-radius: 100px;
        background-color: white;
        width: 260px;
        border: none;
        height: 44px;
        text-indent: 1em;

      }

      ::-webkit-input-placeholder {
        font-size:14px;
        text-indent: 1em;
        color: rgba(120, 125, 124, 0.9);
      }

      .tel{
        margin-bottom: 10px;
      }

      .button{
        margin-top: 40px;
        background-color: #521D99;
        border-radius: 100px;
        height: 44px;
        width: 140px;
        border-color: white;
        border-width: 3px;
        color: white;
      }

    }

    .register {

      margin-top:60px;

      .input {
        border-radius: 100px;
        background-color: white;
        width: 260px;
        border: none;
        height: 44px;

      }

      ::-webkit-input-placeholder {
        font-size: 14px;
        text-indent: 1em;
        color: rgba(120, 125, 124, 0.9);
      }

      .tel {
        margin-bottom: 10px;
      }

      .button {
        margin-top: 40px;
        background-color: #521D99;
        border-radius: 100px;
        height: 44px;
        width: 140px;
        border-color: white;
        border-width: 3px;
        color: white;
      }

      .name {
        margin-bottom: 10px;

      }
    }

    }

</style>

<style>
  html{


  }

</style>
