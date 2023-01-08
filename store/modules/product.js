import axios from 'axios'

export const state ={
    
  product :'',
    
  user:''
}

export const mutations = {  
    setProduct:(state,product) => (state.product = product)
}

export const getters = {
    products:state =>state.product
}

export const actions = {
 
    async getProduct({commit}){
        const response = await axios.get("http://localhost:8000/api/product");
        commit('setProduct',response);
    }
}