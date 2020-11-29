/*
 * @Author: Yokee
 * @Date: 2020-11-29 10:40:36
 * @LastEditTime: 2020-11-29 11:22:31
 * @FilePath: \blog\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
     user:{
      state: {
        user: JSON.parse(localStorage.getItem("user") || "{}")
      },
      mutations: {
        UPDATE_USER(state, data) {
          state.user = data;
        }
      },
      actions: {
        updateUser(store, data) {
          store.commit("UPDATE_USER", data);
          localStorage.setItem("user", JSON.stringify(data));
        }
      }
    }
  }
})
