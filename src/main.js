import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/axios';
import firebase from 'firebase';

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAjW6KT-ZZgp4NeklO_lFzegUlCIrrnpSU",
  authDomain: "wf-multimarcas-9b585.firebaseapp.com",
  databaseURL: "https://wf-multimarcas-9b585-default-rtdb.firebaseio.com",
  projectId: "wf-multimarcas-9b585",
  storageBucket: "wf-multimarcas-9b585.appspot.com",
  messagingSenderId: "937749169981",
  appId: "1:937749169981:web:cabb47fbbff430c5192754",
  measurementId: "G-YRN78B7WM4"
}

firebase.initializeApp(config)
firebase.analytics()

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
