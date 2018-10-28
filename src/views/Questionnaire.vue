<template>
    <div>
      <van-nav-bar title="我的问卷" left-arrow class="header-questionnaire" @click-left="onClickLeft()">
      </van-nav-bar>
      <iframe  name="myiframe" scrolling="no" class="wj"  width="100%" src="http://a3.rabbitpre.com/m2/aUe1ZjE1Rs">
      </iframe>

      <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">

    </div>
</template>

<script>
    export default {
        name: 'Questionnaire',
        components: {},
        data() {
            return {}
        },
        methods: {
          onClickLeft(){
            this.$router.go(-1);
          },
          toHome(){
            this.$router.push({path:'/home'})
          },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-questionnaire{
    background-color: #521D99;
    color:white;
  }

  .toHome{
    width: 60px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 400;
    opacity: 0.6;
  }

  .wj{
    height: -webkit-fill-available;
  }
</style>
