<template>
  <div>
    {{products}}
    {{lists}}


  </div>
</template>

<script>
 
  import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
  export default {
    
    computed:{
      // ...mapGetters(["allProduct"]),
      ...mapState(["products","lists","product"]),
    },
    created(){
      // this.getProduct();

    },
    methods:{
      ...mapActions(["getProduct"])
    }


    
  }
</script>

<style lang="scss" scoped>

</style>