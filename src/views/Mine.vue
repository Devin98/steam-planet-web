<template>
    <div>

      <van-nav-bar title="我的" left-arrow class="header-mine" @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="mine">
        <img  class="headImg" src="../assets/steam-planet-logo.png">
        <div class="name">{{people.name}}</div>
        <div class="message">{{people.message}}</div>
        <van-icon name="records" v-model="people.name" @click="editMyInformation(people.name)"></van-icon>

      </div>


      <div class="myself">
        <!--<div class="myPlanet" @click="toMyPlanet()">-->
          <!--<van-list>-->
          <!--<van-cell>我的星球</van-cell>-->
        <!--</van-list>-->
        <!--</div>-->
        <div class="mySongList" @click="toMySongList()">
          <van-list>
            <van-cell>我的歌单</van-cell>
          </van-list>
        </div>
        <div class="myMessage" @click="toMyMessage()">
          <van-list>
            <van-cell>我的消息</van-cell>
          </van-list>
        </div>
        <div class="myLike" @click="toMyLike()">
          <van-list>
            <van-cell>我的点赞</van-cell>
          </van-list>
        </div>
        <div class="myTest" @click="toMyTest()">
          <van-list>
            <van-cell>我的问卷</van-cell>
          </van-list>
        </div>
        <div class="Advice" @click="toAdvice()">
          <van-list>
            <van-cell>反馈与建议</van-cell>
          </van-list>
        </div>
      </div>


      <van-button class="button" size="large" @click="quit()">退出</van-button>



      <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">




    </div>
</template>

<script>

  import Vue from 'vue';
  import { Icon } from 'vant';
  import { Button } from 'vant';

  Vue.use(Button);
  Vue.use(Icon);

    export default {
        name: 'Mine',
        components: {},
        data() {
            return {
              people:{
                name:'周圣洁',
                sex:'男',
                address:'浙江杭州sadsd',
                birthday:'2010-10-05',
                message:'gjhgjhgjgjkjhgfdskjhgfdsjhgfdgdfsgdfgsdfgs',
              }
            }
        },
        methods: {
          onClickLeft(){
            this.$router.go(-1);
          },

          editMyInformation(name){
            this.$router.push({
              path:'/myInformation',
              name:'myInformation',
              params:{people:this.people}
            })
            console.log(name)

          },

          quit(){
            this.$router.push({path:'./about'})
            console.log('quit!');
          },

          toMyPlanet(){
            console.log('toMyPlanet')
          },

          toMySongList(){

            this.$router.push({path:'./myMusicList'})
            console.log('toMySongList')
          },

          toMyMessage(){
            this.$router.push({path:'/messageList'});
            console.log('toMyMessage')
          },

          toMyLike(){
            this.$router.push({path:'/myLikes'});
            console.log('toMyLike')
          },

          toMyTest(){
            this.$router.push({path:'/questionnaire'});
            console.log('toMyTest')
          },

          toAdvice(){
            this.$router.push({path:'/advice'});
            console.log('toAdvice')
          },
          toHome(){
            this.$router.push({path:'/home'});
          }









        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-mine{
    background-color: #521D99;
    color:white;
  }

  .mine{
    background-color: white;
    width: 100%;
    height: 113px;

    .headImg{
      float: left;
      width:30%;
      margin-left: 17px;
    }

    .name{
      position: absolute;
      left: 35%;
      top: 10%;
      font-size: 23px;
      margin-left: 10px;
      color: black;
      margin-bottom: 10px;
    }


    .message{
      margin-top: 6px;
      position: absolute;
      left: 35%;
      top: 15%;
      font-size: 8px;
      margin-left: 10px;
      color: #787d7c;
      margin-right:80px;
      word-break: break-all;
      text-align: left;

    }


  }

  .myself {
    margin-top: 10px;

    .myPlanet{

    }

    .mySongList{

    }

    .myMessage{

    }

    .myLike{

    }

    .myTest {

    }

    .Advice{

    }



  }

  .button{
    margin-top: 10px;
  }

  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 50%;
    z-index: 10;
    opacity: 0.6;
  }

</style>


<style>

  .van-icon-arrow:before{
    color: white;
  }



.van-icon {
  font-size: 20px;
  left: 23%;
  top: 30%;
}

</style>

