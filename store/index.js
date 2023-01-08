import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as product from './modules/product'
Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
  
    }),
    mutations: {},
    actions: {},
    modules: {
        product,auth
    }
  })


// export const state = {
  
//   authenticated: false,
//   products :'',
    
//   user:''
// }

// export const mutations = {
//     SET_AUTHENTICATED (state, value) {
//         state.authenticated = value
//       },
//     setProduct:(state,products) => (state.products = products)
// }

// export const getters = {
//     products:state =>state.products
// }

// export const actions = {
 
//     async getProduct({commit}){
//         const response = await axios.get("http://localhost:8000/api/product");
//         commit('setProduct',response);
//     }
// }