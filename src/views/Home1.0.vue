<template>
    <div>

      <div class="button topic" @click="ToTopic()">话题</div>
      <div class="button friend" @click="ToFriend()">交友</div>
      <div class="button radio" @click="ToRadio()">电台</div>
      <div class="button song" @click="ToSongList()">歌单</div>
      <div class="button music" @click="ToMusic()">音乐</div>
      <div class="button music" @click="ToMy()">我的</div>

    </div>
</template>

<script>
    export default {
        name: 'Home1.0',
        components: {},
        data() {
            return {}
        },
        methods: {
          ToTopic(){

          },
          ToFriend(){
            this.$router.push({path:'/friendsList'});

          },
          ToRadio(){

          },
          ToSongList(){

          },
          ToMusic(){

          },
          ToMy(){
            this.$router.push({path:'/myInformation'});
          }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  img{

    width:40%;

  }

  .button{
    color: white;
  }


  .topic{
    position: absolute;
    top: 0;
    left: 0;

  }

  .friend{

  }

  .radio{

  }

  .song{

  }

  .music{

  }

</style>

<style>

  body{
    background: url("../assets/starSky.jpg");
    background-repeat: no-repeat;
    background-size:100% 250%;
    -moz-background-size:100% 100%;
  }

</style>
