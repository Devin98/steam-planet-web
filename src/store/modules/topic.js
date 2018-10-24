import axios from 'axios'
import {hostip} from "../../config";

const state = {
  week_topic:'',
  week_topic_id:'',
  quarter_topic_list:[],
  current_topic_id:'',

};


const getters = {
  getCurrentTopic(state){
    return state.quarter_topic_list.filter(topic =>{
      return topic._id === state.current_topic_id;
    })[0]
  },

  getWeekTopicId(state){
    return state.week_topic_id;
  },

  getWeekTopic(state){
    return state.week_topic;
  },

};

const mutations = {
  setCurrentTopic(state,payload){
    state.current_topic_id = payload.currentTopicId;
  },

  setWeekTopicId(state,payload){
    state.week_topic_id = payload.weekTopicId;
  },

  setWeekTopic(state,payload){
    state.week_topic = payload.weekTopic;
  },

  setQuarterTopicList(state,payload){
    state.quarter_topic_list = payload.quarterTopicList;
  }



};

const actions = {

  getQuarterTopicList({commit},payload){
    return axios
      .get(hostip + '/quartertopiclist')
      .then(res=>res.data.returnValue)
      .then(data=>{
        commit({
          type:'setQuarterTopicList',
          quarterTopicList:data,
        })
      })
  },

  getWeekTopic({commit},payload){
    console.log(payload);
    return axios
      .get(hostip + '/weektopic')
      .then(res=>res.data.returnValue)
      .then(data=>{
        commit({
          type:'setWeekTopic',
          weekTopic : data,
        })
      })
  },



};

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions,
}
