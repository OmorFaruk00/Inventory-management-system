const state = {
    products:[],
    lists:[
        {
            id:1,
            title:"product1",
            price:"300"
        },
        {
            id:2,
            title:"product2",
            price:"400"
        }
    ]
}   
    

const getters = {
    allProduct:state=>state.lists
};
const actions = {
    async getProduct({commit}){
        const response = await this.$axios.$get("/product");
        commit("getProduct",response)       
    }

};
const mutations = {
    getProduct:(state,product)=>(state.products = product)
};
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

