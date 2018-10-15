import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import topic from './modules/topic'
import music from './modules/music'
import comment from './modules/comment'
import likes from './modules/likes'
import friend from './modules/friend'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    topic,
    music,
    comment,
    likes,
    friend

  }
})
