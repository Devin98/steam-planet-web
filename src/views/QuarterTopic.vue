<template>
    <div>

      <van-nav-bar title="季度话题"  left-arrow class="header-QuarterTopic" @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="topic">
        <van-list>
          <van-cell class="list" v-for="(value,index) in Topic" @click="toTopic(index+1)">
            <span class="date" >{{value.date}}:</span>
            <span class="content">{{value.content}}</span>
          </van-cell>
        </van-list>
      </div>



    </div>
</template>

<script>
    export default {
        name: 'QuarterTopic',
        components: {},
        data() {
            return {
              Topic:[
                {date:'1.11',content:'jkasgakfgaksfga'},
                {date:'1.11',content:'sasf'},
                {date:'1.11',content:'v'},
                {date:'1.0',content:'zxv'},
                {date:'1.5',content:'xcfg'},
                {date:'1.3',content:'jkaszxgakfgaksfga'},
                {date:'1.11',content:'vfd'},
                {date:'1.4',content:'fghj'},
                {date:'1.11',content:'rfc'},
                {date:'1.11',content:'oihgc'},
                {date:'1.11',content:'oihgc'},
                {date:'1.11',content:'oihgc'},
                 ]
            }
        },
        methods: {

          toTopic(index){
            console.log(index);
            console.log(this.Topic[index-1].content);

            let data={
              TopicContent:this.Topic[index-1].content
            }

            console.log(data);

            this.$router.push({path:'/topic'});

          },


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-QuarterTopic{
    background-color: #521D99;
    color: white;
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
  body{
    background-color: #efefe9;
  }
</style>

