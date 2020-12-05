import Vue from "vue"
import axios from "axios"

axios.defaults.baseURL = "https://wf-multimarcas-9b585-default-rtdb.firebaseio.com"

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})
