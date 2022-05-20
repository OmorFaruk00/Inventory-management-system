<template>
    <div>
        <!-- <topnav /> -->
        <div class="head-title">
            <h2>Central Management System</h2>
        </div>
        <div class="main-content d-flex "> 
            <nuxt-link class="app-link" to="/dum-ac">
                <div class="app-icon">
                 <img src="images/dum.png" alt="">
                 <p>Dum.ac</p>                 
             </div>
            </nuxt-link>
            <nuxt-link class="app-link" to="/dum/dashboard">
                <div class="app-icon">
                 <img src="images/student.png" alt="">
                 <p>Student Management</p>                 
             </div>
            </nuxt-link>
            <nuxt-link class="app-link" to="/dum/dashboard">
                <div class="app-icon">
                 <img src="images/employee.png" alt="">
                 <p>Employee Management</p>                 
             </div>
            </nuxt-link>
                       
            

        </div>
       
    </div>
</template>
<script>
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
    
    
}
</script>
<style scoped>
.head-title{
    background: #337ab7;
    
}
.head-title h2{
    color: #fff;
    font-size: 20px;
    padding: 15px;
    margin-left: 50px;  
    
}
.main-content{
    padding: 50px;
    flex-wrap: wrap;
    flex-shrink: 1;
}
.app-icon{
    /* border: 1px solid #000; */
    padding: 20px 40px;
    margin-right: 20px;
    display: grid;
	place-items: center
}
.app-icon:hover{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}
.app-icon img{
    height: 80px;
    width: auto;
   
    
}
.app-icon p{
    /* text-align: center; */
    padding-top: 15px;
    font-size: 18px;
}
.app-link{    
    color: #000;
}
</style>