<template>
    <div>
        <input type="text" id="huey1" name="drone" value="omor"
         checked v-model="name"> 
         
         <button @click="submit">click</button>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:''

            }
        },
        methods:{
            submit(){
               let name = this.$refs.name.value;
                alert(name);
                console.log(name);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>