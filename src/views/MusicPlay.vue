<template>
    <div>

      <van-nav-bar :title="song.songName"
                   left-arrow
                   class="header-MusicPlay"
                   @click-left="onClickLeft">
      </van-nav-bar>


    </div>
</template>

<script>

  import Vue from 'vue';
  import { NavBar } from 'vant';
  import {Icon} from 'vant';

  Vue.use(NavBar);
  Vue.use(Icon);

    export default {
        name: 'MusicPlay',
        components: {},
        data() {
            return {
            }
        },
        computed:{
            song(){
              return this.$store.getters['music/getCurrentMusic'];
            }
        },
        created(){
          console.log(this.$store)
        },
        methods: {
          onClickLeft(){
            this.$router.go(-1);
          },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-MusicPlay {
    background-color: #521D99;
    color: white
  }


</style>

<style>

  .van-icon-arrow:before {
    color: white
  }


</style>
