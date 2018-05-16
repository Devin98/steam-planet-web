<template>
<div>

  <van-nav-bar title="反馈与建议"  left-arrow class="header" @click-left="onClickLeft()">
  </van-nav-bar>

  <div>
    <p class="title-p">选择反馈类型</p>
    <br>
    <br>
    <br>
    <van-checkbox :key="" name="" v-model="adviceChecked1" class="check check1">产品建议</van-checkbox>
    <van-checkbox :key="" name="" v-model="adviceChecked2" class="check check2">程序出错</van-checkbox>
    <van-checkbox :key="" name="" v-model="adviceChecked3" class="check check3">音乐问题</van-checkbox>
  </div>
  <br>
  <br>

  <div class="blank"></div>

  <div>
    <span class="body-p">您的反馈是我们成长的动力</span>
  </div>
  <br>
  <br>
  <br>
  <van-uploader :after-read="onRead">
    <img src="../assets/addPhoto.jpg"  @click="upLoaderAdvice()">
  </van-uploader>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div style="width:100%; height: 2px;background-color: #efefe9;"></div>

  <input placeholder="请输入你的联系方式" class="tel" v-model="adviceTel">
  <br>
  <br>
  <div style="width:100%; height:350px;background-color: #efefe9;">
    <br>
    <br>
    <br>
    <br>
    <van-button size="large"
                style="background-color:#521D99; color: white;"
                @click="submitAdvice()">提交
    </van-button>
  </div>


</div>
</template>




<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';
  import { Icon } from 'vant';
  import { Row, Col } from 'vant';
  import { Checkbox, CheckboxGroup } from 'vant';
  import { Uploader } from 'vant';
  import { Button } from 'vant';

  Vue.use(Button);
  Vue.use(Uploader);
  Vue.use(Checkbox).use(CheckboxGroup);
  Vue.use(Row).use(Col);
  Vue.use(Icon);
  Vue.use(NavBar);


    export default {
        name: 'Advice',
        components: {},
        data() {
            return {


              adviceChecked1: false,
              adviceChecked2: false,
              adviceChecked3: false,
              adviceTel:'',

            }
        },
        methods: {
          onRead(file) {
            console.log(file)
          },

          submitAdvice(){
            console.log('提交意见成功');
            this.$router.push({path:'/home'});

          },

          onClickLeft(){
            this.$router.push({path:'/home'});
          },

          upLoaderAdvice(){
            console.log('上传照片成功');
          }
        }
    }
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .header{
    background-color: #521D99;
    color: white;
  }

  .title-p{
    position: absolute;
    top: 43px;
    left: 20px;
    color: #6d7978;

  }
  .check{
    float: left;
    margin-left: 25px;
    color: black;


  }

  .blank{
    width:100%;
    height: 20px;
    background-color: #efefe9;

  }

  .body-p{
    position: absolute;
    left:20px;
    top: 190px;
    color: #6d7978;
  }

  img{
    position: absolute;
    left: -170px;
    top: 0px;
    width: 100px;
  }

  .tel{
    position: absolute;
    left: 20px;
    margin-top: 10px;

  }



</style>

<style>
  .van-icon-arrow:before{
    color: white;
  }
</style>
