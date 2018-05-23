<template>
    <div>

      <van-nav-bar title="我的点赞"  left-arrow class="header-MyLikes" @click-left="onClickLeft()">
      </van-nav-bar>


      <div>
        <van-list>
          <van-cell class="list" v-for="(value,index) in myLikes" @click="toTopic(index+1)">
            <span class="topicContent" >{{value.topicContent}}</span>
            <br>
            <span class="commentContent">{{value.commentContent}}</span>
            <br>
            <span class="author">{{value.author}}</span>
            <van-icon id="like" name="like" class="like"></van-icon>
            <span class="likeNumber">{{value.likeNumber}}</span>
            <br>
          </van-cell>
        </van-list>
      </div>

    </div>
</template>

<script>

  import Vue from 'vue';
  import { List } from 'vant';
  import { Cell, CellGroup } from 'vant';

  Vue.use(Cell).use(CellGroup);
  Vue.use(List);


  export default {
        name: 'MyLikes',
        components: {},
        data() {
            return {
              myLikes:[
                {topicContent:'是擦干的 v 会觉得 v',commentContent:'ascfahgchagf',author:'俞淑敏',likeNumber:1234},
                {topicContent:'是擦干的 v 会觉得 v',commentContent:'aschagf',author:'俞淑敏',likeNumber:1200},
                {topicContent:'是擦干的 v 会觉得 v',commentContent:'asohgfcxzaadhagf',author:'俞淑敏2',likeNumber:1211},
                {topicContent:'是擦干的 v 会觉得 v',commentContent:'ascf544545hagf',author:'俞淑敏3',likeNumber:1000},
              ]
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-MyLikes{
    background-color: #521D99;
    color: white;
  }

  .list{

    .topicContent{
      color: black;
      font-weight: bold;
      font-size: 18px;

    }

    .commentContent{
      color: #666;
      font-size: 16px;

    }

    .author{
      color: #aaa;
      font-size: 8px;

    }
    .like{
      color: red;
      margin-left: 72%;
    }

    .likeNumber{
      margin-left: 5px;
      position: absolute;
      top: 62%;


    }

  }

</style>



<style>


  .van-icon-arrow:before{
    color:white;
  }


</style>
