<template>
    <div>
      <van-nav-bar title="歌单详情"
                   left-arrow
                   class="header-SpecificSong"
                   @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="header" v-if="indexFromMusicList=='0'">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title0}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='1'">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title1}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='2'">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title2}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='3'">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title3}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='4'">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title4}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='5'">
        <img src="../assets/cover1.jpg" style="float: left;width: 50%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title5}}</span>
      </div>

      <div class="song">
        <van-list v-if="indexFromMusicList=='0'">
          <van-cell v-for="value in songOfLike" class="list">
            <img src="../assets/play.png" class="play" @click="ToMusicPlay()">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>

        <van-list v-if="indexFromMusicList=='1'">
          <van-cell v-for="value in songOfGF" class="list">
            <img src="../assets/play.png" class="play" @click="ToMusicPlay()">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>

        <van-list v-if="indexFromMusicList=='2'">
          <van-cell v-for="value in songOfXH" class="list">
            <img src="../assets/play.png" class="play" @click="ToMusicPlay()">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>

        <van-list v-if="indexFromMusicList=='3'">
          <van-cell v-for="value in songOfSweet" class="list">
            <img src="../assets/play.png" class="play" @click="ToMusicPlay()">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>

        <van-list v-if="indexFromMusicList=='4'">
          <van-cell v-for="value in songOfDJ" class="list">
            <img src="../assets/play.png" class="play" @click="ToMusicPlay()">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>

        <van-list v-if="indexFromMusicList=='5'">
          <van-cell v-for="value in songOfSoftMusic" class="list">
            <img src="../assets/play.png" class="play" @click="ToMusicPlay()">
            <p class="font16">{{value.songName}}</p>
            <p class="font10">{{value.author}}</p>
          </van-cell>
        </van-list>



      </div>




      <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">

    </div>
</template>

<script>

  import Vue from "vue";


    export default {
        name: 'SpecificSong',
        components: {},
        data() {
            return {
              title0:'我喜欢的',
              title1:'古风',
              title2:'嘻哈',
              title3:'我的小甜甜',
              title4:'DJ',
              title5:'轻音乐',
              indexFromMusicList:'',
              songOfLike:[
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'}
              ],
              songOfGF:[
                {songName:'songOfGF',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'songOfGF',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'}
              ],
              songOfXH:[
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'songOfXH',author:'陈奕迅'},
                {songName:'songOfXH',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'}
              ],
              songOfSweet:[
                {songName:'sweet',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'sweet',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'sweet',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'},
                {songName:'阴天快乐',author:'陈奕迅'}
              ],
              songOfDJ:[
                {songName:'DJ',author:'陈奕迅'},
                {songName:'DJ',author:'陈奕迅'},
                {songName:'DJ',author:'陈奕迅'},
                {songName:'DJ',author:'陈奕迅'},
                {songName:'DJ',author:'陈奕迅'},
                {songName:'DJ',author:'陈奕迅'},
                {songName:'DJ',author:'陈奕迅'}
              ],
              songOfSoftMusic:[
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
      created(){
          console.log("11111");
          console.log(this.$route.params.indexToMusicList)
        if(this.$route.params.indexToMusicList != null){
          console.log(this.$route.params.indexToMusicList);
          this.indexFromMusicList = this.$route.params.indexToMusicList;
          console.log(this.indexFromMusicList);
        }

      },
      methods: {
          onClickLeft(){
            this.$router.go(-1);
          },
        ToMusicPlay(){

        },

        toHome(){
          this.$router.push({path:'/home'})
        }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-SpecificSong{
    background-color: #521D99;
    color: white;
  }

  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
  }



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


  .play{
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-top: 3px;
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
