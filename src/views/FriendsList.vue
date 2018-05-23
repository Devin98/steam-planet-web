<template>
    <div>
      <van-nav-bar title="标题" left-arrow class="header"  @click-left="onClickLeft()"></van-nav-bar>
      <van-list>
        <van-cell class="list" v-for="value in Friends" v-on:click="Chat()">
          <div class="Sculpture" ><img src=""></div>
          <span class="FriendsName">{{value.FriendsName}}</span>
          <span class="Signature"><br>{{value.Signature}}</span>
        </van-cell>
      </van-list>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';
  import { List } from 'vant';
  import { Cell} from 'vant';
  import VanNode from "vant/packages/utils/node";



  Vue.use(NavBar);
  Vue.use(List);
  Vue.use(Cell);


    export default {
      name: 'FriendsList',
      methods: {
        Chat(){
          this.$router.push({path:'/chat'});
        },
        onClickLeft(){
          this.$router.push({path:'/home'});
        },
      },
      components: {VanNode},
      data() {
        return {
          Friends:[
            {FriendsName:'周圣洁',Signature:'我想我孤独了这么多年就是为了遇见和我志趣相投的你'},
            {FriendsName:'周圣洁',Signature:'我想我孤独了这么多年就是为了遇见和我志趣相投的你'},
            {FriendsName:'周圣洁',Signature:'我想我孤独了这么多年就是为了遇见和我志趣相投的你'},
            {FriendsName:'周圣洁',Signature:'我想我孤独了这么多年就是为了遇见和我志趣相投的你'},
            {FriendsName:'周圣洁',Signature:'我想我孤独了这么多年就是为了遇见和我志趣相投的你'},
          ]
        }
      },
    }
</script>

<style lang="less" scoped>

  .list{
    height:64px;
    line-height:20px;
  }
  .header{
    background-color: #521D99;
    color:white;
  }
  .FriendsName{
    color:#2B2B2C;
    font-size: 16px;
    margin-top: 5px;
  }
  .Signature{
    font-size: 10px;
    color:#8A8A8A;
    margin-top: 0;
  }
  .Sculpture{
    float:left;
    height:36px;
    width:36px;
    border-style: solid;
    border-width: 1px;
    border-radius: 50px;
    margin-right: 10px;
  }
</style>
<style>
  .van-icon-arrow:before{
    color:white;
  }
  body{
    background-color: #efefe9;
  }
</style>
