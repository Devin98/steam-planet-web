<template>
  <div>
    <van-nav-bar title="好友列表"
                 left-arrow
                 class="header"
                 @click-left="onClickLeft">
    </van-nav-bar>
    <van-list>
      <van-cell class="list" v-for="(value,index) in Friends" @click="ToChat(index)">
        <div class="Sculpture"><img v-bind:src="value.imgUrl" style="width:100%;border-radius: 50%;overflow:hidden;"></div>
        <span class="FriendsName">{{value.FriendsName}}</span>
        <span class="Signature"><br>{{value.Signature}}</span>
      </van-cell>
    </van-list>
    <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">
  </div>
</template>

<script>
  import Vue from 'vue';
  import {NavBar} from 'vant';
  import {List} from 'vant';
  import {Cell} from 'vant';

  Vue.use(NavBar);
  Vue.use(List);
  Vue.use(Cell);


  export default {
    name: 'FriendsList',
    data() {
      return {
        Friends: [],

      }
    },

    created(){
      this.$store.dispatch({
        type:'friend/getFriendsList'
      }).then(res=>{
        this.Friends = this.$store.state.friend.friends_list
      });

    },

    methods: {
      ToChat(index) {
        console.log(index);

        this.$store
          .commit({
            type:'friend/setCurrentFriend',
            currentFriendId: this.Friends[index]._id,
          });

        this.$router.push({path:'/chat'});

      },

      onClickLeft(){
        this.$router.go(-1);
      },
      toHome(){
        this.$router.push({path:'/home'})
      }
    },

    components: {},

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
  }

  .list {
    height: 64px;
    line-height: 20px;
  }

  .header {
    background-color: #521D99;
    color: white;
  }

  .FriendsName {
    color: #2B2B2C;
    font-size: 16px;
    margin-top: 5px;
  }

  .Signature {
    font-size: 10px;
    color: #8A8A8A;
    margin-top: 0;
  }

  .Sculpture {
    float: left;
    height: 36px;
    width: 36px;
    /*border-style: solid;*/
    /*border-width: 1px;*/
    /*border-radius: 50px;*/
    margin-right: 10px;
  }
</style>
<style>
  .van-icon-arrow:before {
    color: white;
  }

</style>
