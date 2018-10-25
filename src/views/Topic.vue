<template>

  <div style="background-color: #EFEFE9">
    <div class="nav">
      <van-nav-bar
        class="nav"
        title="话题"
        right-text="往期"
        left-arrow
        :fixed="true"
        @click-left="onClickLeft()"
        @click-right="onClickRight()"
      >
      </van-nav-bar>
    </div>

    <div class="topic">
      <p>话题内容</p>


      <div class="topicContent"
           v-if="!isWeekTopic">
        <p>{{Topic.content}}</p>
      </div>

      <div class="topicContent"
           v-if="isWeekTopic">
        <p>{{weekTopic.content}}</p>
        <!--<p>hghjgjh</p>-->
      </div>

    </div>


    <div class="hotComments">
      <p>热门评论</p>
      <div class="comments">

      </div>
    </div>


    <div class="timeComments">
      <p>实时评论</p>
      <div class="comments">

      </div>
    </div>
    <div class="publish">
      <van-field placeholder="请输入评论">

      </van-field>
    </div>

  </div>
</template>

<script>
  import {Field} from 'vant';
  import Vue from 'vue';
  import {NavBar} from 'vant';
  import {Icon} from 'vant';

  Vue.use(Icon);
  Vue.use(Field);
  Vue.use(NavBar);
  export default {
    name: "Topic",
    data(){
      return{
        isWeekTopic:'',
//        Topic:'123',
//        weekTopic:'',
      }
    },

    computed:{
      Topic(){
        console.log(this.$store.getters['topic/getCurrentTopic'])
        return this.$store.getters['topic/getCurrentTopic'];
      },

      weekTopic(){
        console.log(this.$store.getters['topic/getWeekTopic'])
        return this.$store.getters['topic/getWeekTopic'];
      },

    },

    created(){
      if(this.$route.params.isWeekTopic)
        this.isWeekTopic = this.$route.params.isWeekTopic;
      else this.isWeekTopic =true;
    },

    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        this.$router.push({path:'/quarterTopic'})

      }
    },

  }

</script>

<style lang="less" scoped type="text/less">
  .nav {
    background-color: #521d99;
  }

  .topic {
    margin-top: 46px;
    background-color: white;
    text-align: left;
    box-shadow: 5px 5px 3px #cccccc;
    height: 92px;
    p {
      margin-top: 0px;
      font-size: 14px;
      padding-left: 15px;
      padding-top: 5px;
    }
  }

  .topicContent p {
    font-size: 20px;
    margin: 0;
    padding-top: 5px;
    padding-left: 30px;
  }

  .hotComments, .timeComments {
    text-align: left;
    box-shadow: 5px 5px 3px #cccccc;
    p {
      margin: 0;
      font-size: 14px;
      padding-left: 15px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }

  .comments {
    background-color: white;
    text-align: left;
    height: 300px;
  }

  .publish {
    border-top: 2px #EFEFE9 solid;
    position: fixed;
    bottom: 0;
    /*background-color: red;*/
    text-align: left;
    height: 40px;
    width: 100%;
  }
</style>
<style>

  .van-nav-bar__title {
    color: white;
  }

  .van-nav-bar__text {
    color: white;
  }

  .van-icon-arrow:before {
    color: white;
  }

  .van-field {
    display: inline-block;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;

  }
  .van-field__control{
    height: 35px;
  }

</style>
