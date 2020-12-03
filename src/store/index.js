import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carros: [],
    carro: {}
  },
  getters: {
    carros(state){
      return state.carros;
    },

    carro(state){
      return state.carro;
    }
  },

  mutations: {

    setCarros(state, payload){
      state.carros = payload
    },

    setCarro(state, payload){
      state.carro = payload
    },

    addCarros(state, payload){
      state.carros.push(payload)
    }
  },
  actions: {
    salvarCarro({commit}, payload){
      commit('addCarros', payload)
    }
  },
  modules: {
  }
})
