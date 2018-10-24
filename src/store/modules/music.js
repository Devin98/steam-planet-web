import axios from 'axios'
import {hostip} from '@/config.js'

const state = {
  music_list: [],
  cur_music_id: '',
};


const getters = {
  getCurrentMusic(state) {
    return state.music_list.filter(music => {
      return music._id === state.cur_music_id;
    })[0]
  }
};


const mutations = {
  setCurrentMusic(state,payload){
    state.cur_music_id = payload.currentMusicId;
  },
  setMusicList(state,payload){
    state.music_list = payload.musicList;
  }
}


const actions = {
  getMusicList({ commit }, payload) {
    console.log(payload)
    return axios
      .get(hostip + '/musiclist')
      .then(d=>{console.log(d);return d;})
      .then(res => res.data.returnValue)
      .then(data => {
        console.log(data)
        commit({
          type: 'setMusicList',
          musicList: data
        })
      })
  },
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

}
