/*
 * @Author: your name
 * @Date: 2020-11-15 17:11:10
 * @LastEditTime: 2020-11-15 19:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week\app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/view/Home"
import Detail from "@/view/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     redirect:'/home'
    },{
      path:'/home',
      name:Home,
      component:Home
    },{
      path:'/detail/:id',
      name:Detail,
      component:Detail
    }
  ]
})
