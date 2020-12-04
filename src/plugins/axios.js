import Vue from "vue"
import axios from "axios"
import firebase from "firebase"

axios.defaults.baseURL = firebase.databaseURL

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})