<template>
    <div>
      <van-nav-bar title="我喜欢的"  left-arrow class="header-SpecificSong" @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="header">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title}}</span>

      </div>

      <div class="song">
        <van-list>
          <van-cell v-for="value in song" class="list">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>

      </div>





    </div>
</template>

<script>

  import Vue from "vue";


    export default {
        name: 'SpecificSong',
        components: {},
        data() {
            return {
              title:'我喜欢的',
              song:[
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'}
              ],


            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-SpecificSong{
    background-color: #521D99;
    color: white;
  }


  .song{

      .list{
        vertical-align: middle;
        line-height: 3px;

        .font16{
          font-size: 16px;
          margin-top: 10px;
          margin-left: 10px;
          color: black;
        }
        .font10{
          font-size: 10px;
          margin-bottom: 6px;
          margin-left: 10px;
          color: #787d7c;
        }

      }

  }

  .header{
    width:100%;
    height: 160px;
    background-color: white;


    .title{
      color: black;
      position: absolute;
      top: 25%;
      right: 20%;

    }
  }

</style>


<style>

  .van-icon-arrow:before{
    color:white;
  }

</style>
