<template>
    <div>
      <van-nav-bar title="我的问卷" left-arrow class="header-questionnaire" @click-left="onClickLeft()">
      </van-nav-bar>


      <h1>我的问卷！！！</h1>
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-questionnaire{
    background-color: #521D99;
    color:white;
  }

</style>
