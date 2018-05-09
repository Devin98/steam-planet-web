<template>

  <div>
    <van-nav-bar
      class="nav"
      title="话题"
      right-text="往期"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="topic">
      <p>话题内容</p>
      <div class="topicContent">
        <p>说说你和他（她）的故事</p>
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
      <van-field
        placeholder="请输入评论"
      >
      </van-field>
      <van-icon name="chat"/>
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
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      }
    }
  }

</script>

<style lang="less" scoped>
  .nav {
    background-color: #521d99;
  }

  .topic {
    background-color: white;
    text-align: left;
    box-shadow: 5px 5px 3px #cccccc;;
    height: 92px;

  }

  .topic p {
    margin-top: 0px;
    font-size: 14px;
    padding-left: 15px;
    padding-top: 5px;
  }

  .topicContent p {
    font-size: 20px;
    margin: 0;
    padding-top: 5px;
    padding-left: 30px;
  }

  .hotComments, .timeComments {
    text-align: left;
  }

  .hotComments p {
    margin: 0;
    font-size: 14px;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .timeComments p {
    margin: 0;
    font-size: 14px;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .comments {
    background-color: white;
    text-align: left;
    box-shadow: 5px 5px 3px #cccccc;;
    height: 210px;
  }
  .publish{
    background-color: white;
    text-align: left;
    height: 51px;
  }
</style>
<style>
  body {
    background-color: #efefe9;
  }

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
    width: 90%;
    padding-top: 0;
    padding-bottom: 0;

  }
  .van-icon{
    display: inline-block;
  }
  [class*=van-hairline]::after{
    border-bottom: 0 !important;
  }
</style>
