<template>
    <div>
      <van-nav-bar :title="Friends.FriendsName"
                   left-arrow
                   class="header-chat"
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
        name: 'Chat',
        components: {},
        data() {
            return {}
        },
        computed:{
          Friends(){
            return this.$store.getters['friend/getCurrentFriend'];
          },
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
  html{
    background: white;
  }
  .header-chat {
    background-color: #521D99;
    color: white;
  }


</style>


<style>
  .van-icon-arrow:before {
    color: white;
  }

</style>
