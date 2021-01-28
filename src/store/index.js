import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carros: [],
    
    carro: {
      fotos:[], 
      fotoPrincipal: []
    },
    id: null, 
    user: {}
  },

  getters: {

    carros(state){
      return state.carros;
    },

    carro(state){
      return state.carro;
    },

    user(state){
      return state.user
    },
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
    },
    addFotos(state, payload){
      state.carro.fotos.push(payload)
    },

    addFotoPrincipal(state, payload) {
      state.carro.fotoPrincipal.push(payload)
    },

    setUser(state, payload){
      state.user = payload
    },
  },
  actions: {
    salvarCarro({commit}, payload){
          commit('salvarCarro', payload)
        }
      },
  modules: {
  }
})
