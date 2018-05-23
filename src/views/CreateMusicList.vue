<template>
    <div style="background-color: #efefe9">
      <van-nav-bar title="新建歌单"  left-arrow class="header-createMusicList" @click-left="onClickLeft()">
      </van-nav-bar>

      <div class="content">

        <input class="input"
               placeholder="歌单标题"
               v-model="song.title">


        <div class="checked">
          <van-checkbox v-model="checked">设置为隐私歌单</van-checkbox>
        </div>



      </div>

      <van-button size="small"
                  class="button"
                  @click="FinishCreateMusicList()">完成</van-button>

    </div>
</template>

<script>

  import Vue from "vue";
  import { RadioGroup, Radio } from 'vant';
  import { Button } from 'vant';
  import { Checkbox, CheckboxGroup } from 'vant';

  Vue.use(Checkbox).use(CheckboxGroup);
  Vue.use(Button);
  Vue.use(RadioGroup);
  Vue.use(Radio);


    export default {
        name: 'CreateMusicList',
        components: {},

        data() {
            return {
              song:{
                title:'',

              },
              checked:false,

            }
        },

        methods: {
          FinishCreateMusicList(){
            console.log('完成')
          }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .header-createMusicList{
    background-color: #521D99;
    color: white;
  }

  .input{
    margin-top: 10px;
    width:100%;
    height: 30px;
    text-indent: 1em;

  }

  ::-webkit-input-placeholder {
    font-size:14px;
    text-indent: 1em;
    color: rgba(208, 216, 215, 0.9);
  }

  .checked{
    margin-top: 15px;
    position: absolute;
    left: 10px;
  }

  .button{
    position: absolute;
    left: 300px;
    top: 120px;
  }



</style>

<style>


  .van-icon-arrow:before{
    color: white;
  }



  .van-radio .van-icon-check  {
    color: #9fa7a6;
    font-size: 16px;
  }

  .van-checkbox__label {
    line-height: 20px;
    margin-left: 10px;
    font-size: 15px;
    color: #9fa7a6;
  }


</style>
