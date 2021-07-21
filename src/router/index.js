/*
 * @Author: Yokee
 * @Date: 2020-11-29 10:40:36
 * @LastEditTime: 2020-12-15 22:44:09
 * @FilePath: \Ablog\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login'
import Error404 from '../views/Error'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      
    ]
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/404',
    component:Error404
  },
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  routes
})
const whitelist = ["/login"];
router.beforeEach((to, from, next) => {
  let user = store.state.user.user;
  if (whitelist.indexOf(to.path) > -1) {
    next();
    return
  }
  if (user.isLogin) {
      next();

    } else {
      next("/login");
    }
});


export default router
