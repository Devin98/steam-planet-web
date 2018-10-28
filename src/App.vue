<template>
  <div id="app">
    <router-view/>
    <Player v-show="false">
    </Player>
  </div>
</template>

<script>

  import Player from './components/playerBar'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {
      Player
    },
    computed: {
      ...mapGetters([
        'songList',
        'showDetail'
      ])
    }
  }


</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
