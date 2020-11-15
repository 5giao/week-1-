/*
 * @Author: your name
 * @Date: 2020-11-15 20:39:13
 * @LastEditTime: 2020-11-15 20:50:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week\app\src\store\index.js
 */
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// const state={
//     data:[]
// }

// const mutations={
//     CHANGE_DATA(state,data){
//         state.data=data
//     }
// }

// const getters={

// }

// const actions={
//     change_data(content,data){
// content.commit('CHANGE_DATA',data)
//     }
// }

// const store=new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions
// })

// export default store;

export default new Vuex.Store({
    state: {
        data: []
    },
    getters: {

    },
    mutations: {
        CHANGE_DATA(state, data) {
            state.data = data
        }
    },
    actions: {
        change_data(content, data) {
            content.commit('CHANGE_DATA', data)
        }
    }
})