<template>
    <div>
      <van-nav-bar title="消息列表" left-arrow class="header-messageList">
      </van-nav-bar>

      <div class="messageList">
        <van-list>
          <van-cell class="list" v-for="(value,index) in message" @click="toChat(index)">
            <div class="headPortrait" >
              <img style="width: 10%;float: left;margin-top: 10px;margin-right: 15px;"
                   class="img"
                   src="../assets/logo.png">
            </div>
            <span class="name"><b>{{value.name}}</b></span>
            <br>
            <span class="message">{{value.message}}</span>
          </van-cell>
        </van-list>

      </div>


    </div>
</template>

<script>
    export default {
        name: 'MessageList',
        components: {},
        data() {
            return {
              message:[
                {name:'ghsgdja',message:'hgsjagdhjhag'},
                {name:'dfgh',message:'dnnvb '},
                {name:'jbv',message:'dfg'},
                {name:'bff',message:'1ed'},
                {name:'oj',message:'jnb'},
              ]
            }
        },
        methods: {
          toChat(index){
            console.log(this.message[index].name);

          },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-messageList{
    background-color: #521D99;
    color:white;

    .messageList{

      .list{

        .headPortrait{


        }

        .name{
          color: #000;


        }

        .message{
          color: #d0d8d7;

        }

      }

    }

  }


</style>


<style>

  .van-icon-arrow:before{
    color: white;
  }

  body{
    background-color: #efefe9;
  }
</style>
