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

      <img src="../assets/steam-planet-logo.png" class="toHome" @click="toHome()">
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
                {topicContent:'暗恋一个人的时候，会有哪些心理或行为',commentContent:'不自觉的紧张或小心翼翼',author:'Lisa',likeNumber:899},
                {topicContent:'为了梦想，你做过什么拼命的事',commentContent:'连续三天通宵',author:'AmyZ',likeNumber:481},
                {topicContent:'如何温柔含蓄地说我喜欢你',commentContent:'-你今天好奇怪啊 -为什么？ -怪可爱的',author:'Cheese',likeNumber:1211},
                {topicContent:'哪个瞬间你觉得对方情商很高',commentContent:'宿舍无人回答时，他迅速接下话题',author:'Alice',likeNumber:1001},
              ]
            }
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
<style scoped lang="less">

  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
  }

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
