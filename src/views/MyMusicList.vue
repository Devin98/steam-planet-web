<template>
  <div>
    <van-nav-bar title="我的歌单"
                 left-arrow
                 right-text="创建"
                 class="header-myMusicList"
                 @click-left="onClickLeft()"
                 @click-right="onClickRight()">
    </van-nav-bar>
    <div class="song">
      <van-list>
        <van-cell v-for="(value,index) in songList"   @click="ToSpecificSong(index)"  class="list">
          <img v-bind:src="value.songUrl" style="width: 40px;position: absolute;margin-top: 10px;">
          <p style=" margin-left: 50px;" class="font16">{{value.songListName}}</p>
        </van-cell>

      </van-list>

    </div>
    <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">
  </div>

</template>

<script>
    export default {
        name: 'MyMusicList',
        components: {},
        data() {
            return {
              songList:[
                {songListName:'我喜欢的',songUrl:'/img/MusicList1.f7dbb747.jpg'},
                {songListName:'古风',songUrl:'/img/MusicList2.1782648f.jpg'},
                {songListName:'嘻哈',songUrl:'/img/MusicList3.067abf20.jpg'},
                {songListName:'我的小甜甜',songUrl:'/img/MusicList4.12e781db.jpg'},
                {songListName:'DJ',songUrl:'/img/MusicList5.ee29fe4d.jpg'},
                {songListName:'轻音乐',songUrl:'/img/MusicList6.4a80790e.jpg'}

              ],
              indexToMusicList:'',
            }
        },
        methods: {
          onClickLeft(){
            this.$router.go(-1)
          },
          onClickRight(){
            this.$router.push({path:'/createMusicList'})
          },
          ToSpecificSong(a){
            console.log(a);
            this.indexToMusicList = a;
            this.$router.push({
              path:'/specificSong',
              name:'specificSong',
              params:{indexToMusicList:this.indexToMusicList}
            });
          },

          toHome(){
            this.$router.push({path:'/home'})
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-myMusicList{
    background-color: #521D99;
    color:white;
  }
  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
  }

</style>


<style>


</style>
