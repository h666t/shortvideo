import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home"
import Signup from "@/views/Signup"
Vue.use(VueRouter);

const routes =[
  {
    path:'/',
    component:Home
  },
  {
    path: '/signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router