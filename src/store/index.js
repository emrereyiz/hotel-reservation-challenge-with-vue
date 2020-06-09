import Vue from 'vue'
import Vuex from 'vuex'
import checkout from './modules/checkout'
import payment from './modules/payment'
import result from './modules/result'
import room from './modules/room'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    checkout,
    payment,
    result,
    room
  }
})
