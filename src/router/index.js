import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MusicPlay from '../views/MusicPlay.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Advice from '../views/Advice.vue'
import Mine from '../views/Mine.vue'
import MyInformation from '../views/MyInformation.vue'
import MessageList from '../views/MessageList.vue'
import WeekSong from '../views/WeekSong.vue'
import Chat from '../views/Chat.vue'
import FriendsList from '../views/FriendsList.vue'
import QuarterTopic from '../views/QuarterTopic.vue'
import HotComments from '../views/HotComments.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/musicPlay',
      name:'musicPlay',
      component: MusicPlay
    },
    {
      path:'/questionnaire',
      name:'questionnaire',
      component: Questionnaire
    },
    {
      path:'/advice',
      name:'advice',
      component: Advice
    },
    {
      path:'/mine',
      name:'mine',
      component: Mine
    },
    {
      path:'/myInformation',
      name:'myInformation',
      component: MyInformation
    },
    {
      path:'/messageList',
      name:'messageList',
      component: MessageList
    },
    {
      path:'/weekSong',
      name:'weekSong',
      component: WeekSong
    },
    {
      path:'/chat',
      name:'chat',
      component: Chat
    },
    {
      path:'/friendsList',
      name:'friendsList',
      component: FriendsList
    },
    {
      path:'/quarterTopic',
      name:'quarterTopic',
      component: QuarterTopic
    },
    {
      path:'/hotComments',
      name:'hotComments',
      component: HotComments
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
