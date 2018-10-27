<template>
    <div>

      <van-nav-bar title="季度话题"
                   left-arrow
                   class="header-QuarterTopic"
                   @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="topic">
        <van-list>
          <van-cell class="list"
                    v-for="(value,index) in Topic"
                    @click="toTopic(index+1)">
            <span class="date" >{{value.date}}:</span>
            <span class="content">{{value.content}}</span>
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
        name: 'QuarterTopic',
        components: {},
        data() {
            return {
              Topic:[],
              isWeekTopic:'',
            }
        },
        created(){
          this.$store.dispatch({
            type:'topic/getQuarterTopicList'
          }).then(res=>{
            this.Topic = this.$store.state.topic.quarter_topic_list;
          });




        },
        methods: {

          toTopic(index){
            console.log("季度话题index"+index);
            console.log("季度话题"+this.Topic[index-1].content);
            this.isWeekTopic = 0;

            this.$store
              .commit({
                type:'topic/setCurrentTopic',
                currentTopicId:this.Topic[index-1]._id,
              });

            this.$router.push({
              path:'/topic',
              name:'topic',
              params:{isWeekTopic:this.isWeekTopic}
            });

          },

          onClickLeft(){
            this.$router.go(-1);
          },

          toHome(){
            this.$router.push({path:'/home'})
          }


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-QuarterTopic{
    background-color: #521D99;
    color: white;
  }

  .toHome{
    width: 50px;
    position: absolute;
    left: 80%;
    top: 55%;
    z-index: 10;
    opacity: 0.6;
  }

  .topic{

    .list{
      .date{


      }

      .content{
        margin-left: 10px;


      }
    }


  }

</style>

<style>
  .van-icon-arrow:before{
    color:white;
  }

</style>

