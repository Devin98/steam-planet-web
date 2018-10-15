import axios from 'axios'
import {hostip} from "../../config";

const state = {
  friends_list :[],
  cur_friend_id:'',

};

const getters = {
  getCurrentFriend(state){
    return state.friends_list.filter(friend =>{
      return friend._id === state.cur_friend_id;
    })[0]
  }
};

const mutations = {
  setCurrentFriend(state,payload){
    state.cur_friend_id = payload.currentFriendId;
  },
  setFriendsList(state,payload){
    state.friends_list = payload.friendsList
  }

};


const actions = {

  getFriendsList({commit},payload){
    return axios
      .get(hostip + '/friendslist')
      .then(res => res.data.returnValue)
      .then(data => {
        commit({
          type:'setFriendsList',
          friendsList:data
        })
      })

  }


};

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions,
}
