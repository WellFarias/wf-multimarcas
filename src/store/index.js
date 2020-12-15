import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carros: [
      {
        titulo: "Celta 2014 cinza - Unico dono",
        nome: "Celta",
        preco: "R$ 16.500,00",
        marca:"Chevrolet",
        cambio: "Manual",
        ano: "2014",
        portas: "2",
        potencia: "1.0",
        km: "60.000",
        combustivel: "Flex",
        cor: "cinza",
        foto: "https://img.olx.com.br/images/00/004008014877484.jpg"

      },
      {
        titulo: "Evoque, Land Rover - Unico dono",
        nome: "Evoque",
        preco: "R$ 108.500,00",
        marca:"Land Rover",
        cambio: "Automatico",
        ano: "2018",
        portas: "4",
        potencia: "2.4",
        km: "20.000",
        combustivel: "Flex",
        cor: "Branco",
        foto: "https://s2.glbimg.com/pJgZg7JwEYxQLb6YpLsWQkP0vZA=/0x0:1700x1100/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/d/p/aqGzZkSCeoODDNrx2DOA/range-rover-evoque.jpg"

      },
      {
        titulo: "Ford Ka em otimo estado",
        nome: "KA",
        preco: "R$ 34.600,00",
        marca:"FORD",
        cambio: "Manual",
        ano: "2016",
        portas: "4",
        potencia: "1.0",
        km: "64.000",
        combustivel: "Flex",
        cor: "Preto",
        foto: "https://localizeisitestorage.blob.core.windows.net/anuncio/375074_GGK-9070_03.jpg"

      }
    ],
    carro: {},
    user: {}
  },
  getters: {
    carros(state){
      return state.carros;
    },

    carro(state){
      return state.carro;
    },

    exibirCarros(state) {
      this.$http('carros.json').then(res => {
        return state.carros = res.data
      })
    },

    user(state){
      return state.user
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
    },

    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    salvarCarro({commit}, payload){
          commit('salvarCarro', payload)
        }
      },
  modules: {
  }
})
