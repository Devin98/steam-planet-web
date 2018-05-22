<template>
  <div>
    <van-nav-bar title="热门评论" left-arrow class="header-hotComments">
    </van-nav-bar>

    <div class="topicContent" v-model="topicContent">
      <div class="content">
        <span>{{topicContent}}</span>
      </div>
    </div>

    <div style="margin-left: 20px;text-align: left;margin-top: 6px;margin-bottom: 6px"><b>热门评论</b></div>

    <div>
      <van-list>
        <van-cell class="list" v-for="(value,index) in hotComments">
          <div class="headPortrait">
            <img style="width: 10%;float: left;margin-top: 10px;margin-right: 15px;"
                 src="../assets/logo.png">
          </div>
          <div>
            <span class="name"><b>{{value.name}}</b></span>
            <span class="time">{{value.time}}</span>
            <br>
            <span class="content">{{value.content}}</span>
            <br>
            <div @click="likeThisComments(index)">
              <van-icon :class="{'red':value.isLike}" id="like" name="like" class="like"></van-icon>
              <span class="likeNumber">{{value.likeNumber}}</span>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>


  </div>
</template>

<script>

  import Vue from 'vue';
  import {Icon} from 'vant';

  Vue.use(Icon);
  export default {
    name: 'HotComments',
    components: {},
    data() {
      return {
        topicContent: 'jdvagkdvbabvdalbfafbabvhsdfhjjgfsdfdghggfdfghgfcsdvfbgnfwfghjmxcghjkdfghnjmxsdfhjjgfsdfdghggfdfghgffghj',
        hotComments: [
          {
            name: '李佳文',
            content: '还记得 v 是 v 绥芬河市的讲话深刻的饭局上即可得分 v 可是对方 v 水淀粉 ',
            time: '2:00PM',
            likeNumber: 1999,
            isLike: false
          },
          {name: '李佳文3', content: '还记得 v 是 v 绥芬河市 v 水淀粉 ', time: '2:05PM', likeNumber: 1900, isLike: false},
          {name: '李佳文2', content: '还记得的讲话深刻的饭局上即可得分 v 可是对方 v 水淀粉 ', time: '2:05PM', likeNumber: 1900, isLike: false},
          {name: '李佳文5', content: '还记得 v 是 v 绥芬河上即可得分 v 可是对方 v 水淀粉 ', time: '2:30PM', likeNumber: 1776, isLike: false},
          {name: '李佳文5', content: '还记得 v 是 v 绥芬河市的讲话深 v 可是', time: '7:00PM', likeNumber: 19, isLike: false},
        ]
      }
    },
    methods: {
      likeThisComments(index) {
//            var icon = document.getElementById('like');
//            console.log(icon);
//            console.log(this.hotComments[index].name);
        if (this.hotComments[index].isLike === false) {
          this.hotComments[index].likeNumber = this.hotComments[index].likeNumber + 1;
          this.hotComments[index].isLike = true;
//              icon.style.color='red';

        }
        else {
          this.hotComments[index].isLike = false;
          this.hotComments[index].likeNumber = this.hotComments[index].likeNumber - 1;
//              icon.style.color='black';

        }

      },


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header-hotComments {
    background-color: #521D99;
    color: white;
  }

  .topicContent {
    width: 100%;
    height: 130px;
    background-color: white;
    box-shadow: 0 0 30px #866b99;

    .content {
      text-indent: 1em;
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      word-break: break-all;
      text-align: left;
      color: black;

    }

  }

  .list {

    .name {

    }
    .time {
      float: right;
      color: #787d7c;
    }

    .content {
      color: #787d7c;
      white-space: normal;
      word-break: break-all;
      display: inline-block;
    }

    .like {
      position: absolute;
      right: 15%;
      padding-top: 5px;
    }
    .likeNumber {
      float: right;
    }
  }

  .red {
    color: red;
  }
</style>


<style>
  .van-icon-arrow:before {
    color: white;
  }

  body {
    background-color: #efefe9;
  }

</style>
