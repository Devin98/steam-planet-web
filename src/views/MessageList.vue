<template>
    <div>
      <van-nav-bar title="消息列表" left-arrow class="header-messageList" @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="messageList">
        <van-list>
          <van-cell class="list" v-for="(value,index) in message" @click="toChat(index)">
            <div class="headPortrait" >
              <img style="width: 10%;float: left;margin-top: 10px;margin-right: 15px;"
                   class="img"
                   src="../assets/logo.png">
            </div>
            <span class="name"><b>{{value.name}}</b></span>
            <br>
            <span class="message">{{value.message}}</span>
          </van-cell>
        </van-list>

      </div>

      <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">

    </div>
</template>

<script>
    export default {
        name: 'MessageList',
        components: {},
        data() {
            return {
              message:[
                {name:'Steam Planet',message:'今日份推送请查收'},
                {name:'Steam Planet',message:'您收到一份小心心'},
                {name:'Steam Planet',message:'系统将于本月10号进行维护，带来不便，敬请谅解'},
                {name:'Steam Planet',message:'欢迎来到一笼星球，很高兴遇见你'},
              ]
            }
        },
        methods: {
          toChat(index){
            console.log(this.message[index].name);

          },
          onClickLeft(){
            this.$router.go(-1)
          },

          toHome(){
            this.$router.push({path:'/home'})
          },


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
  }
    .header-messageList{
      background-color: #521D99;
      color:white;

    .messageList{

      .list{

        .headPortrait{
        }

        .name{
          color: #000;
        }

        .message{
          color: #d0d8d7;
        }

      }

    }

  }


</style>


<style>

  .van-icon-arrow:before{
    color: white;
  }


</style>
