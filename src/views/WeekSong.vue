
<template>
  <div>
    <van-nav-bar title="每周歌单"
                 left-arrow
                 class="header"
                 @click-left="onClickLeft">
    </van-nav-bar>
    <van-list >
      <van-cell v-for="(value,index) in song"
                class="list"
                @click="ToMusicPlay(index)">
        <img class="play" src="../assets/play.png">
        <p class="font16">{{value.songName}}</p>
        <p class="font10">{{value.author}}</p>
      </van-cell>
    </van-list>

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

        components: {},
        data() {
            return {
              song:[]
            }
        },
        created() {
          this.$store.dispatch({
            type:'music/getMusicList'
          }).then(res=>{
            this.song = this.$store.state.music.music_list;
          });
        },
        methods: {
          ToMusicPlay(index){
            console.log(this.song[index].songName);

            this.$store
              .commit({
                type: 'music/setCurrentMusic',
                currentMusicId: this.song[index]._id,
              });
            this.$router.push({path:'/musicPlay'});
          },

          onClickLeft(){
            this.$router.go(-1);
          },


        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

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

  .list{
    background-color: #FAFAFA;
  }
  .van-icon-arrow:before{
    color: white;
  }
</style>
