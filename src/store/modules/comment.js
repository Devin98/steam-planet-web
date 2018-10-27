import axios from 'axios'
import {hostip} from "../../config";

const state = {
  comment_list :[],
  cur_comment_list:[],
  cur_comment_id:'',
}

const getters = {
  getCurrentComment(state){
    return state.comment_list.filter(comment =>{
      return comment._id === state.cur_comment_id;
    })[0]
  }
};

const mutations = {
  setCurrentComment(state,payload){
    state.cur_comment_id = payload.currentCommentId;
  },
  setCommentList(state,payload){
    state.comment_list = payload.commentList
  },
  setCurrentCommentList(state,payload){
    state.cur_comment_list = payload.currentCommentList
  }

};


const actions = {

  getCommentList({commit},payload){
    return axios
      .get(hostip + '/comments')
      .then(res => res.data.returnValue)
      .then(data => {
        commit({
          type:'setCommentList',
          commentList:data
        })
      })
  },
  getCurrentCommentList({commit},payload){
    return axios
      .get(hostip + '/currentComments')
      .then(res => res.data.returnValue)
      .then(data => {
        commit({
          type:'setCurrentCommentList',
          currentCommentList:data
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
