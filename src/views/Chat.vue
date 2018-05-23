<template>
    <div>
      <van-nav-bar title="标题" left-arrow class="header"  @click-left="onClickLeft()"></van-nav-bar>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar } from 'vant';
  import { List } from 'vant';
  import { Cell} from 'vant';
  import VanNode from "vant/packages/utils/node";


  Vue.use(NavBar);
  Vue.use(List);
  Vue.use(Cell);



    export default {
        name: 'Chat',
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
