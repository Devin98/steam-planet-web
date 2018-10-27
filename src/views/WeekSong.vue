
<template>
  <div>
    <van-nav-bar title="每周歌单"  left-arrow class="header" @click-left="clickLeft()"></van-nav-bar>
    <van-list>
      <van-cell v-for="value in song" v-on:click="clicklist()" class="list"><img class="play" src="../assets/play.png"><p class="font16">{{value.songName}}</p><p class="font10">{{value.author}}</p></van-cell>
    </van-list>

    <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">
  </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';
  import { List } from 'vant';
  import {Cell} from 'vant';

  Vue.use(List);
  Vue.use(Cell);
  Vue.use(NavBar);

    export default {
      name: 'WeekSong',
      methods: {
        clicklist() {
          this.$router.push({path:'/MusicPlay'});//跳转
        },
        clickLeft(){
          this.$router.push({path:'/home'});
        },


        toHome(){
          this.$router.push({path:'/home'})
        },

      },
        components: {},
        data() {
          return {
            song: [
              {songName: '阴天快乐', author: '陈奕迅'},
              {songName: '阴天快乐', author: '陈奕迅'},
              {songName: '阴天快乐', author: '陈奕迅'},
              {songName: '阴天快乐', author: '陈奕迅'},
              {songName: '阴天快乐', author: '陈奕迅'},
              {songName: '阴天快乐', author: '陈奕迅'},
              {songName: '阴天快乐', author: '陈奕迅'}
            ]
          }
        },
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

  .header{
    background-color:#521D99;
    color: white;
  }
  .van-cell{
    vertical-align: middle;
  }
  .font16{
    font-size: 16px;
    margin-top: 10px;
  }
  .font10{
    font-size: 10px;
    margin-bottom: 6px;
    margin-left: 30px;
  }
  .play{
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-top: 3px;
  }

  .van-cell{
    line-height: 3px;
  }

</style>
<style>
  body{
    background-color: #EFEFE9;
  }
  .list{
    background-color: #FAFAFA;
  }
  .van-icon-arrow:before{
    color: white;
  }
</style>
