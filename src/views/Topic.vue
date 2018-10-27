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
           v-if="isWeekTopic=='0'">
        <p>{{Topic.content}}</p>
      </div>

      <div class="topicContent"
           v-if="isWeekTopic=='1'">
        <p>{{weekTopic.content}}</p>
      </div>

    </div>


    <div class="hotComments">
      <p>热门评论</p>
      <van-list>
        <van-cell class="list" v-for="(value) in Comments">
          <span class="comment">{{value.body}}</span>
          <span class="author"><br>{{value.author}}</span>
          <div>
            <van-icon id="like" name="like" class="like"></van-icon>
            <span class="likeNumber">{{value.likeNumber}}</span>
          </div>
        </van-cell>
      </van-list>

    </div>


    <div class="timeComments">
      <p>实时评论</p>
      <van-list>
        <van-cell class="list" v-for="(value) in currentComments">
          <span class="comment">{{value.body}}</span>
          <span class="author"><br>{{value.author}}</span>
          <div>
            <van-icon id="like" name="like" class="like"></van-icon>
            <span class="likeNumber">{{value.likeNumber}}</span>
          </div>

        </van-cell>
      </van-list>
    </div>
    <div class="publish">
      <van-field placeholder="请输入评论">

      </van-field>
    </div>

    <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">




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
        isWeekTopic:'1',
        Comments:[],
        currentComments:[],
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
      if(this.$route.params.isWeekTopic=='0'){
        this.isWeekTopic = this.$route.params.isWeekTopic;
        console.log("isWeekTopic=0=====>"+ this.isWeekTopic);

      }
      else {
        this.isWeekTopic =1;
        console.log("isWeekTopic=1======>"+ this.isWeekTopic);
      }



      this.$store.dispatch({
        type:'comment/getCommentList'
      }).then(res=>{
        this.Comments = this.$store.state.comment.comment_list;
      });

      this.$store.dispatch({
        type:'comment/getCurrentCommentList'
      }).then(res=>{
        this.currentComments = this.$store.state.comment.cur_comment_list;
      });


    },

    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        this.$router.push({path:'/quarterTopic'})

      },
      toHome(){
        this.$router.push({path:'/home'})
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

  .comment{
    font-size: 15px;
  }

  .author{
    font-size: 8px;
  }

  .like{
    /*position: absolute;*/
    color: red;
    /*left: 83%;*/
    /*!*margin-top: 9px;*!*/
    font-size: 16px;
    margin-left: 80%;
    margin-top: 5px;
  }

  .likeNumber{
    margin-left: 5px;
  }
  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
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
