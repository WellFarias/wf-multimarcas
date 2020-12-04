import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/axios';
import firebase from 'firebase';

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyBU775GcBpUBupItEIBSK8GA0LgMpw0YP8",
  authDomain: "wf-multimarcas.firebaseapp.com",
  databaseURL: "https://wf-multimarcas-default-rtdb.firebaseio.com",
  projectId: "wf-multimarcas",
  storageBucket: "wf-multimarcas.appspot.com",
  messagingSenderId: "741904275582",
  appId: "1:741904275582:web:73c2cc941fe78da30c602f",
  measurementId: "G-RJKJ1J0JF2"
}

firebase.initializeApp(config)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use({
  install(Vue){
      Vue.prototype.$firebase = firebase
  }
})
