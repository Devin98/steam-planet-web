<template>
    <div>
      <van-nav-bar title="歌单详情"
                   left-arrow
                   class="header-SpecificSong"
                   @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="header" v-if="indexFromMusicList=='0'">
        <img src="../assets/MusicList1.jpg" style="float: left;width:33%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title0}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='1'">
        <img src="../assets/MusicList2.jpg" style="float: left;width: 33%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title1}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='2'">
        <img src="../assets/MusicList3.jpg" style="float: left;width: 33%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title2}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='3'">
        <img src="../assets/MusicList4.jpg" style="float: left;width: 33%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title3}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='4'">
        <img src="../assets/MusicList5.jpg" style="float: left;width: 33%;margin-left:20px;margin-top:16px;">
        <span class="title">{{title4}}</span>
      </div>
      <div class="header" v-if="indexFromMusicList=='5'">
        <img src="../assets/MusicList6.jpg" style="float: left;width: 33%;margin-left:20px;margin-top:16px;">
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
                {songName:'年少有为',author:'李荣浩'},
                {songName:'彩虹',author:'周杰伦'},
                {songName:'当你',author:'林俊杰'},
                {songName:'慢慢喜欢你',author:'莫文蔚'},
                {songName:'我梦见你梦见我',author:'林宥嘉'},
                {songName:'勿忘你',author:'林宥嘉'}
              ],
              songOfGF:[
                {songName:'离人愁',author:'李袁杰'},
                {songName:'风筝误',author:'刘珂矣'},
                {songName:'牵丝戏',author:'银临'},
                {songName:'繁花',author:'董真'},
                {songName:'长生诀',author:'西瓜JUN'},
                {songName:'思慕',author:'郁可唯'},
                {songName:'大鱼',author:'双笙'}
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
      top: 22%;
      right: 30%;
      font-size: 20px;

    }
  }

</style>


<style>

  .van-icon-arrow:before{
    color:white;
  }

</style>
