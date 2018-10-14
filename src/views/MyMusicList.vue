<template>
  <div>
    <van-nav-bar title="我的歌单"  left-arrow class="header-myMusicList" @click-left="onClickLeft()">
    </van-nav-bar>
    <div>aaaaaaaaa</div>
    <div>bbbbbbbbb</div>
    <div>ccccccccc</div>
  </div>

</template>

<script>
    export default {
        name: 'MyMusicList',
        components: {},
        data() {
            return {}
        },
        methods: {
          onClickLeft(){
            this.$router.go(-1)
          },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-myMusicList{
    background-color: #521D99;
    color:white;
  }

</style>


<style>


</style>
