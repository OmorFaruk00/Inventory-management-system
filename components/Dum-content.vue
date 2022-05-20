<template>
<div>
  <div class="d-flex" id="wrapper">
    

    <!-- Sidebar -->
    <div class=" " id="sidebar-wrapper">
      <!-- <div class="sidebar-heading">Therichpost </div> -->
      <div class="list-group sidebar">
        <nuxt-link class="sidebar-item" to="/dum-ac">Dashboard</nuxt-link>
        <nuxt-link class="sidebar-item" to="/dum-ac/slider">Slider</nuxt-link>
        <nuxt-link class="sidebar-item" to="/dum-ac/notice">Notice</nuxt-link>
        <nuxt-link class="sidebar-item" to="/dum-ac/notice">Event</nuxt-link>
        <nuxt-link class="sidebar-item" to="/dum-ac/notice">Program</nuxt-link>

      </div>
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->
    <div id="page-content-wrapper">
      
      <div class="container-fluid">
        <router-view />
        
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
</div>
  <!-- /#wrapper -->
</template>

<script>
export default {

  mounted() {    
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },

}
</script>
<style scoped>
.sidebar{
  text-align: center;
  line-height: 50px; 
  
}
.sidebar-item{
  font-size: 18px;
  color: #000;  
}

.user{
  height: 30px;
  padding-right: 30px;
}
.cms-title{
  padding-left: 50px;
  color: #337ab7;
  font-weight: bolder;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  padding-top: 58px;
  background: #f2f2f2;
}


#menu-toggle {
  background: #337ab7;
  border: none;

}

#menu-toggle:hover {
  background: #21537f; 

}

#menu-toggle img {
  height: 20px;
  

}

/* .nuxt-link-exact-active {
  background: #337ab7 !important;
  color: #fff;
  
} */

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.bg-light {  
   background-color: rgb(10, 94, 118);  
  
}

#page-content-wrapper {
  background-color: #fff;
  
}
</style>

