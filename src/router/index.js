import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home"
import Signup from "@/views/Signup"
import VideoList from "@/views/VideoList"
Vue.use(VueRouter);

const routes =[
  {
    path:'/',
    component:Home
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/videolist',
    component: VideoList
  }
]

const router = new VueRouter({
  routes
})

export default router